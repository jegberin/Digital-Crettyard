import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import logoImg from "@assets/Gemini_Generated_Image_ceomikceomikceom_(1)_(1)_1772791156018.png";

export function Navbar() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Web Design", path: "/web-design" },
    { label: "Microsoft 365", path: "/microsoft-365" },
    { label: "Network & Wi-Fi", path: "/network-wifi-security" },
    { label: "Portfolio", path: "/portfolio" },
    { label: "About", path: "/about" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-gray-100/80">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <img src={logoImg} alt="Crettyard Digital" className="h-9" />
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          <div className="flex gap-6">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path} className={`text-[13px] font-medium transition-all duration-200 hover:text-accent ${location === item.path ? "text-accent" : "text-primary/80"}`}>
                {item.label}
              </Link>
            ))}
          </div>
          <Link href="/contact">
            <Button className="bg-accent text-white hover:bg-[#0fa079] rounded-[4px] font-medium px-6 h-9 text-[13px] transition-all duration-200 shadow-sm hover:shadow-md" data-testid="button-nav-contact">
              Book a Free Consultation
            </Button>
          </Link>
        </div>

        <button
          className="lg:hidden text-primary"
          data-mobile-toggle=""
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          data-testid="button-mobile-menu"
        >
          <Menu size={24} style={{ display: isMobileMenuOpen ? 'none' : 'block' }} />
          <X size={24} style={{ display: isMobileMenuOpen ? 'block' : 'none' }} />
        </button>
      </div>

      <div
        data-mobile-menu=""
        className="lg:hidden absolute top-16 left-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 p-4 shadow-lg flex-col gap-3"
        style={{ display: isMobileMenuOpen ? 'flex' : 'none' }}
      >
        {navItems.map((item) => (
          <Link key={item.path} href={item.path} className="block text-primary font-medium p-2 hover:bg-secondary rounded text-sm" onClick={() => setIsMobileMenuOpen(false)}>
            {item.label}
          </Link>
        ))}
        <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
          <Button className="w-full bg-accent text-white hover:bg-[#0fa079] rounded-[4px] font-medium mt-2 transition-all duration-200" data-testid="button-mobile-contact">
            Book a Free Consultation
          </Button>
        </Link>
      </div>
    </nav>
  );
}
