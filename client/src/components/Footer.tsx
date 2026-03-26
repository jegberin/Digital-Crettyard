import { Link } from "wouter";
import logoImg from "@assets/crettyard-digital-logo.png";

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <section aria-label="Crettyard Digital info" className="col-span-1 md:col-span-1">
            <img src={logoImg} alt="Crettyard Digital logo" className="h-10 mb-6 bg-white p-2 rounded-xl" />
            <address className="not-italic">
              <p className="text-white/60 text-sm leading-relaxed mb-4">
                Crettyard Digital<br />
                Crettyard, Co. Laois, Ireland
              </p>
              <p className="text-white/60 text-sm">
                <a href="mailto:info@crettyard.ie" className="hover:text-accent transition-colors" data-testid="link-footer-email">info@crettyard.ie</a>
              </p>
            </address>
          </section>

          <section aria-label="Services navigation">
            <h4 className="font-headline font-bold text-base mb-6 text-accent">Services</h4>
            <nav aria-label="Services links">
              <ul className="space-y-3 list-none m-0 p-0">
                <li><Link href="/web-design" className="text-white/60 hover:text-white transition-colors text-sm">Web Design</Link></li>
                <li><Link href="/microsoft-365" className="text-white/60 hover:text-white transition-colors text-sm">Microsoft 365</Link></li>
                <li><Link href="/network-wifi-security" className="text-white/60 hover:text-white transition-colors text-sm">Network &amp; Wi-Fi</Link></li>
                <li><Link href="/parental-controls" className="text-white/60 hover:text-white transition-colors text-sm">Parental Controls</Link></li>
              </ul>
            </nav>
          </section>

          <section aria-label="Company navigation">
            <h4 className="font-headline font-bold text-base mb-6 text-accent">Company</h4>
            <nav aria-label="Company links">
              <ul className="space-y-3 list-none m-0 p-0">
                <li><Link href="/" className="text-white/60 hover:text-white transition-colors text-sm">Home</Link></li>
                <li><Link href="/portfolio" className="text-white/60 hover:text-white transition-colors text-sm">Portfolio</Link></li>
                <li><Link href="/about" className="text-white/60 hover:text-white transition-colors text-sm">About</Link></li>
                <li><Link href="/contact" className="text-white/60 hover:text-white transition-colors text-sm">Contact</Link></li>
                <li><a href="https://clients.digital.crettyard.ie" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors text-sm" data-testid="link-footer-client-login">Client Login</a></li>
              </ul>
            </nav>
          </section>

          <section aria-label="Get in touch">
            <h4 className="font-headline font-bold text-base mb-6 text-accent">Get in Touch</h4>
            <ul className="space-y-3 text-sm text-white/60 list-none m-0 p-0">
              <li>Serving Laois, Carlow, Kilkenny, Kildare, and beyond.</li>
              <li>Remote support available across Ireland.</li>
              <li className="pt-2">
                <a href="mailto:info@crettyard.ie" className="text-white/60 hover:text-white transition-colors">info@crettyard.ie</a>
              </li>
              <li className="pt-2">
                <Link href="/contact" className="inline-flex items-center text-accent hover:text-white font-bold transition-colors">
                  Book a free consultation &gt;
                </Link>
              </li>
            </ul>
          </section>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/40">
            &copy; {new Date().getFullYear()} Crettyard Digital. All rights reserved.
          </p>
          <nav aria-label="Legal links">
            <ul className="flex gap-4 text-xs text-white/40 list-none m-0 p-0">
              <li><Link href="/privacy-policy" className="hover:text-accent transition-colors" data-testid="link-footer-privacy">Privacy Policy</Link></li>
              <li><Link href="/terms-and-conditions" className="hover:text-accent transition-colors" data-testid="link-footer-terms">Terms &amp; Conditions</Link></li>
              <li><Link href="/cookie-policy" className="hover:text-accent transition-colors" data-testid="link-footer-cookies">Cookie Policy</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
