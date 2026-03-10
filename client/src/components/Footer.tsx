import { Link } from "wouter";
import logoImg from "@assets/crettyard-digital-logo.png";

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <img src={logoImg} alt="Crettyard Digital logo" className="h-10 mb-6 bg-white p-2 rounded" />
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Professional web design, Microsoft 365 setup, and network solutions for small businesses across Laois, Carlow, Kilkenny, and surrounding counties.
            </p>
            <p className="text-gray-400 text-sm">
              <a href="mailto:info@crettyard.com" className="hover:text-accent transition-colors" data-testid="link-footer-email">info@crettyard.com</a>
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Services</h4>
            <ul className="space-y-3">
              <li><Link href="/web-design" className="text-gray-300 hover:text-accent transition-colors text-sm">Web Design</Link></li>
              <li><Link href="/microsoft-365" className="text-gray-300 hover:text-accent transition-colors text-sm">Microsoft 365</Link></li>
              <li><Link href="/network-wifi-security" className="text-gray-300 hover:text-accent transition-colors text-sm">Network & Wi-Fi</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-300 hover:text-accent transition-colors text-sm">Home</Link></li>
              <li><Link href="/portfolio" className="text-gray-300 hover:text-accent transition-colors text-sm">Portfolio</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-accent transition-colors text-sm">About</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-accent transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Get in Touch</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>Serving Laois, Carlow, Kilkenny, Kildare, and beyond.</li>
              <li>Remote support available across Ireland.</li>
              <li className="pt-2">
                <a href="mailto:info@crettyard.com" className="text-gray-300 hover:text-accent transition-colors">info@crettyard.com</a>
              </li>
              <li className="pt-2">
                <Link href="/contact" className="inline-flex items-center text-accent hover:text-white font-bold transition-colors">
                  Book a free consultation &gt;
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Crettyard Digital. All rights reserved.
          </p>
          <p className="text-xs text-gray-500">
            Web design, Microsoft 365 & network solutions for small businesses in Ireland
          </p>
        </div>
      </div>
    </footer>
  );
}
