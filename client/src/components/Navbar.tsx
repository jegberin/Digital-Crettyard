import { Link, useLocation } from "wouter";
import { Menu, X, LogIn } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import logoImg from "@assets/crettyard-digital-logo.png";

export function Navbar() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Web Design", path: "/web-design" },
    { label: "Microsoft 365", path: "/microsoft-365" },
    { label: "Network & Wi-Fi", path: "/network-wifi-security" },
    { label: "Parental Controls", path: "/parental-controls" },
    { label: "Portfolio", path: "/portfolio" },
    { label: "About", path: "/about" },
  ];

  const isGetAQuote = location === "/get-a-quote";

  return (
    <header
      className={`sticky top-0 z-50 w-full backdrop-blur-md transition-colors duration-300 ${
        isScrolled ? "bg-white/97 shadow-sm" : "bg-white/85"
      }`}
    >
      <nav aria-label="Main navigation">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3" aria-label="Crettyard Digital — home">
            <img src={logoImg} alt="Crettyard Digital logo" className="h-9" />
          </Link>

          <ul className="hidden lg:flex items-center gap-8 list-none m-0 p-0">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  href={item.path}
                  aria-current={location === item.path ? "page" : undefined}
                  className={`font-headline text-[13px] font-bold transition-all duration-200 hover:text-accent pb-0.5 ${
                    location === item.path
                      ? "text-accent border-b-2 border-accent"
                      : "text-primary/80"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
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
            </li>
            <li>
              <Link href="/get-a-quote">
                <Button
                  size="sm"
                  variant={isGetAQuote ? "default" : "outline"}
                  className="px-5 h-9 text-[13px]"
                  data-testid="button-nav-get-quote"
                >
                  Get a Quote
                </Button>
              </Link>
            </li>
            <li>
              <Link href="/contact#send-message">
                <Button size="sm" className="px-5 h-9 text-[13px]" data-testid="button-nav-contact">
                  Book a Free Consultation
                </Button>
              </Link>
            </li>
          </ul>

          <button
            className="lg:hidden text-primary"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            data-mobile-toggle=""
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            <Menu size={24} style={{ display: isMobileMenuOpen ? 'none' : 'block' }} />
            <X size={24} style={{ display: isMobileMenuOpen ? 'block' : 'none' }} />
          </button>
        </div>

        <div
          id="mobile-menu"
          data-mobile-menu=""
          className="lg:hidden absolute top-16 left-0 w-full bg-white/95 backdrop-blur-md p-4 shadow-xl flex-col gap-3"
          style={{ display: isMobileMenuOpen ? 'flex' : 'none' }}
          aria-hidden={!isMobileMenuOpen}
        >
          <ul className="flex flex-col gap-1 list-none m-0 p-0">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  href={item.path}
                  aria-current={location === item.path ? "page" : undefined}
                  className={`block font-headline font-bold p-2 hover:bg-secondary rounded-xl text-sm ${
                    location === item.path ? "text-accent" : "text-primary"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
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
            </li>
          </ul>
          <div className="flex flex-col gap-2 mt-2">
            <Link href="/get-a-quote" onClick={() => setIsMobileMenuOpen(false)}>
              <Button variant="outline" className="w-full" data-testid="button-mobile-get-quote">
                Get a Quote
              </Button>
            </Link>
            <Link href="/contact#send-message" onClick={() => setIsMobileMenuOpen(false)}>
              <Button className="w-full" data-testid="button-mobile-contact">
                Book a Free Consultation
              </Button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
