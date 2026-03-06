import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import logoImg from "@assets/1772785099972_1772789280391.png";

export function Navbar() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/#services" },
    { label: "Portfolio", path: "/portfolio" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-3">
            <img src={logoImg} alt="Crettyard Digital" className="h-10" />
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-6">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <a className={`text-sm font-medium transition-colors hover:text-accent ${location === item.path ? "text-primary" : "text-primary"}`}>
                  {item.label}
                </a>
              </Link>
            ))}
          </div>
          <Link href="/contact">
            <Button className="bg-accent text-white hover:bg-[#0fa079] rounded-sm font-medium px-6">
              Get Started
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 p-4 shadow-lg flex flex-col gap-4">
          {navItems.map((item) => (
            <Link key={item.path} href={item.path}>
              <a 
                className="block text-primary font-medium p-2 hover:bg-secondary rounded"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            </Link>
          ))}
          <Link href="/contact">
            <Button className="w-full bg-accent text-white hover:bg-[#0fa079] rounded-sm font-medium mt-2" onClick={() => setIsMobileMenuOpen(false)}>
              Get Started
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
}
