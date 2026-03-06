import { Link } from "wouter";
import logoImg from "@assets/Gemini_Generated_Image_ceomikceomikceom_(1)_(1)_1772791156018.png";

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <img src={logoImg} alt="Crettyard Digital" className="h-10 mb-6 bg-white p-2 rounded" />
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Crettyard Digital builds fast, modern websites and provides cloud & network setups for small businesses across Laois, Carlow and the surrounding counties.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/"><a className="text-gray-300 hover:text-accent transition-colors text-sm">Home</a></Link></li>
              <li><Link href="/portfolio"><a className="text-gray-300 hover:text-accent transition-colors text-sm">Portfolio</a></Link></li>
              <li><Link href="/about"><a className="text-gray-300 hover:text-accent transition-colors text-sm">About</a></Link></li>
              <li><Link href="/contact"><a className="text-gray-300 hover:text-accent transition-colors text-sm">Contact</a></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              <li><Link href="/web-design"><a className="text-gray-300 hover:text-accent transition-colors text-sm">Web Design</a></Link></li>
              <li><Link href="/microsoft-365"><a className="text-gray-300 hover:text-accent transition-colors text-sm">Microsoft 365</a></Link></li>
              <li><Link href="/network-wifi-security"><a className="text-gray-300 hover:text-accent transition-colors text-sm">Network & Wi-Fi</a></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>Serving Laois, Carlow, Kilkenny, Kildare & beyond.</li>
              <li>Remote support across Ireland.</li>
              <li className="pt-4">
                <Link href="/contact">
                  <a className="inline-flex items-center text-accent hover:text-white font-bold transition-colors">
                    Get in touch &gt;
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Crettyard Digital. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
