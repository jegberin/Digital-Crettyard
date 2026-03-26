import { Link, useLocation } from "wouter";
import { Menu, X, LogIn } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import logoImg from "@assets/crettyard-digital-logo.png";

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
    <nav className="sticky top-0 z-50 w-full bg-white/85 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <img src={logoImg} alt="Crettyard Digital logo" className="h-9" />
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          <div className="flex gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`font-headline text-[13px] font-bold transition-all duration-200 hover:text-accent pb-0.5 ${
                  location === item.path
                    ? "text-accent border-b-2 border-accent"
                    : "text-primary/80"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <a
            href="https://clients.digital.crettyard.ie"
            target="_blank"
            rel="noopener noreferrer"
            className="font-headline text-[13px] font-bold transition-all duration-200 hover:text-accent text-primary/80 flex items-center gap-1"
            data-testid="link-nav-client-login"
          >
            <LogIn size={14} />
            Client Login
          </a>
          <Link href="/contact#send-message">
            <Button size="sm" className="px-5 h-9 text-[13px]" data-testid="button-nav-contact">
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
        className="lg:hidden absolute top-16 left-0 w-full bg-white/95 backdrop-blur-md p-4 shadow-xl flex-col gap-3"
        style={{ display: isMobileMenuOpen ? 'flex' : 'none' }}
      >
        {navItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`block font-headline font-bold p-2 hover:bg-secondary rounded-xl text-sm ${
              location === item.path ? "text-accent" : "text-primary"
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {item.label}
          </Link>
        ))}
        <a
          href="https://clients.digital.crettyard.ie"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-primary font-headline font-bold p-2 hover:bg-secondary rounded-xl text-sm flex items-center gap-2"
          onClick={() => setIsMobileMenuOpen(false)}
          data-testid="link-mobile-client-login"
        >
          <LogIn size={14} />
          Client Login
        </a>
        <Link href="/contact#send-message" onClick={() => setIsMobileMenuOpen(false)}>
          <Button className="w-full mt-2" data-testid="button-mobile-contact">
            Book a Free Consultation
          </Button>
        </Link>
      </div>
    </nav>
  );
}
