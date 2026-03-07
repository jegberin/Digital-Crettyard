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
const docsDir = path.join(rootDir, 'docs');

const routes = [
  { path: '/', file: 'index.html' },
  { path: '/web-design', file: 'web-design.html' },
  { path: '/microsoft-365', file: 'microsoft-365.html' },
  { path: '/network-wifi-security', file: 'network-wifi-security.html' },
  { path: '/portfolio', file: 'portfolio.html' },
  { path: '/about', file: 'about.html' },
  { path: '/contact', file: 'contact.html' }
];

function rewriteLinks(html) {
  html = html.replace(/href="\/(web-design|microsoft-365|network-wifi-security|portfolio|about|contact)"/g, 'href="/$1.html"');
  html = html.replace(/href="\/"/g, 'href="/index.html"');
  html = html.replace(/href="\/#services"/g, 'href="/index.html#services"');
  return html;
}

function stripReactBundle(html) {
  html = html.replace(/<script type="module" crossorigin="" src="\/assets\/index-[^"]+\.js"><\/script>/g, '');
  html = html.replace(/<link rel="modulepreload"[^>]*href="\/assets\/[^"]+\.js"[^>]*>/g, '');
  return html;
}

function fixOgImages(html) {
  html = html.replace(/content="https?:\/\/[^"]*?\/opengraph\.jpg"/g, 'content="https://digital.crettyard.com/opengraph.jpg"');
  return html;
}

function fixFramerMotionStyles(html) {
  html = html.replace(/style="opacity: 0;[^"]*"/g, 'style="opacity: 1; transform: none;"');
  return html;
}

const mobileMenuScript = `
<script>
(function(){
  var btn = document.querySelector('[data-mobile-toggle]');
  var menu = document.querySelector('[data-mobile-menu]');
  if(btn && menu){
    menu.style.display = 'none';
    btn.addEventListener('click', function(){
      var open = menu.style.display !== 'none';
      menu.style.display = open ? 'none' : 'flex';
      var icons = btn.querySelectorAll('svg');
      if(icons.length === 2){
        icons[0].style.display = open ? 'block' : 'none';
        icons[1].style.display = open ? 'none' : 'block';
      }
    });
    menu.querySelectorAll('a, button').forEach(function(el){
      el.addEventListener('click', function(){
        menu.style.display = 'none';
        var icons = btn.querySelectorAll('svg');
        if(icons.length === 2){
          icons[0].style.display = 'block';
          icons[1].style.display = 'none';
        }
      });
    });
  }
})();
</script>
`;

function addMobileMenuSupport(html) {
  html = html.replace('</body>', mobileMenuScript + '</body>');
  return html;
}

async function exportStatic() {
  console.log('Building Vite app...');
  execSync('npm run build', { stdio: 'inherit' });

  console.log('Starting static server...');
  const app = express();
  app.use(express.static(distDir));
  
  app.use((req, res) => {
    res.sendFile(path.join(distDir, 'index.html'));
  });

  const server = app.listen(0, async () => {
    const port = server.address().port;
    const baseUrl = `http://localhost:${port}`;
    console.log(`Server running at ${baseUrl}`);

    try {
      await fs.rm(docsDir, { recursive: true, force: true });
      await fs.mkdir(docsDir, { recursive: true });
      
      await fs.cp(path.join(distDir, 'assets'), path.join(docsDir, 'assets'), { recursive: true });
      
      const files = await fs.readdir(distDir);
      for (const file of files) {
        if (file !== 'assets' && file !== 'index.html') {
          const stat = await fs.stat(path.join(distDir, file));
          if (stat.isFile()) {
            await fs.copyFile(path.join(distDir, file), path.join(docsDir, file));
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
        
        await page.waitForSelector('#root > div', { timeout: 5000 }).catch(() => {});
        
        await new Promise(r => setTimeout(r, 1500));
        
        let html = await page.content();
        
        html = rewriteLinks(html);
        html = stripReactBundle(html);
        html = fixOgImages(html);
        html = fixFramerMotionStyles(html);
        html = addMobileMenuSupport(html);
        
        await fs.writeFile(path.join(docsDir, route.file), html);
      }

      await browser.close();

      await fs.writeFile(path.join(docsDir, '.nojekyll'), '');

      console.log('Export complete! Files are in the /docs directory.');
    } catch (err) {
      console.error('Export failed:', err);
    } finally {
      server.close();
      process.exit(0);
    }
  });
}

exportStatic();
