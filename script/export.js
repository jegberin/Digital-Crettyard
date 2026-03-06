import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';
import puppeteer from 'puppeteer';
import express from 'express';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist', 'public');
const pageDir = path.join(rootDir, 'page');

const routes = [
  { path: '/', file: 'index.html' },
  { path: '/web-design', file: 'web-design.html' },
  { path: '/microsoft-365', file: 'microsoft-365.html' },
  { path: '/network-wifi-security', file: 'network-wifi-security.html' },
  { path: '/portfolio', file: 'portfolio.html' },
  { path: '/about', file: 'about.html' },
  { path: '/contact', file: 'contact.html' }
];

async function exportStatic() {
  console.log('Building Vite app...');
  execSync('npm run build', { stdio: 'inherit' });

  console.log('Starting static server...');
  const app = express();
  app.use(express.static(distDir));
  
  // Fallback to index.html for SPA routing
  app.use((req, res) => {
    res.sendFile(path.join(distDir, 'index.html'));
  });

  const server = app.listen(0, async () => {
    const port = server.address().port;
    const baseUrl = `http://localhost:${port}`;
    console.log(`Server running at ${baseUrl}`);

    try {
      await fs.rm(pageDir, { recursive: true, force: true });
      await fs.mkdir(pageDir, { recursive: true });
      
      // Copy assets
      await fs.cp(path.join(distDir, 'assets'), path.join(pageDir, 'assets'), { recursive: true });
      
      // Copy other static files if any (like favicon)
      const files = await fs.readdir(distDir);
      for (const file of files) {
        if (file !== 'assets' && file !== 'index.html') {
          const stat = await fs.stat(path.join(distDir, file));
          if (stat.isFile()) {
            await fs.copyFile(path.join(distDir, file), path.join(pageDir, file));
          }
        }
      }

      console.log('Launching Puppeteer...');
      const chromePath = execSync('which chromium').toString().trim();
      const browser = await puppeteer.launch({
        executablePath: chromePath,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
      });
      const page = await browser.newPage();

      for (const route of routes) {
        console.log(`Exporting ${route.path} to ${route.file}...`);
        await page.goto(`${baseUrl}${route.path}`, { waitUntil: 'networkidle0' });
        
        // Wait for React to render
        await page.waitForSelector('#root > div', { timeout: 5000 }).catch(() => {});
        
        // Let animations/initial renders settle
        await new Promise(r => setTimeout(r, 1000));
        
        let html = await page.content();
        
        await fs.writeFile(path.join(pageDir, route.file), html);
      }

      await browser.close();
      console.log('Export complete! Files are in the /page directory.');
    } catch (err) {
      console.error('Export failed:', err);
    } finally {
      server.close();
      process.exit(0);
    }
  });
}

exportStatic();
