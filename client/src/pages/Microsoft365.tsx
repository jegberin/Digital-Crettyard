import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Cloud, ShieldCheck, Mail, Users, FileLock } from "lucide-react";

export default function Microsoft365() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-secondary py-16 md:py-24 border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
            Microsoft 365 Setup & Support for Irish Small Businesses
          </h1>
          <p className="text-xl text-foreground mb-8 leading-relaxed">
            Get email that works properly, secure file sharing, and smoother collaboration. I provide practical, non-technical Microsoft 365 support to help your business operate securely and efficiently from anywhere.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-accent text-white hover:bg-[#0fa079] rounded-sm font-semibold h-14 px-8 text-base">
              Book a Discovery Call
            </Button>
          </Link>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl mb-6">Migration without unnecessary stress</h2>
              <p className="text-foreground mb-4">
                Moving away from old POP/IMAP emails, a legacy Exchange server, or consumer Gmail? I handle the entire Exchange Online migration process safely, ensuring zero data loss and minimal downtime for your team.
              </p>
              <p className="text-foreground">
                I provide clear, reassuring guidance every step of the way, getting your business onto a reliable, enterprise-grade cloud platform with small-business simplicity.
              </p>
            </div>
            <div className="bg-secondary p-8 rounded-sm border border-gray-100 flex flex-col justify-center">
              <h3 className="text-xl mb-4 font-bold">What's included:</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3"><span className="w-2 h-2 bg-accent rounded-sm"></span> Setup and licensing advice</li>
                <li className="flex items-center gap-3"><span className="w-2 h-2 bg-accent rounded-sm"></span> Exchange Online migration</li>
                <li className="flex items-center gap-3"><span className="w-2 h-2 bg-accent rounded-sm"></span> Teams, OneDrive & SharePoint setup</li>
                <li className="flex items-center gap-3"><span className="w-2 h-2 bg-accent rounded-sm"></span> Security and compliance hardening</li>
                <li className="flex items-center gap-3"><span className="w-2 h-2 bg-accent rounded-sm"></span> Ongoing support and training</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl text-center mb-12">Core Microsoft 365 Capabilities</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-gray-200 p-8 rounded-sm flex gap-6 hover:border-accent transition-colors">
              <Mail className="text-accent shrink-0" size={40} />
              <div>
                <h3 className="text-xl font-bold mb-2">Professional Email</h3>
                <p className="text-foreground">Reliable email hosting with 50GB+ mailboxes, custom domain names, and shared calendars using Exchange Online.</p>
              </div>
            </div>

            <div className="border border-gray-200 p-8 rounded-sm flex gap-6 hover:border-accent transition-colors">
              <Users className="text-accent shrink-0" size={40} />
              <div>
                <h3 className="text-xl font-bold mb-2">Smoother Collaboration</h3>
                <p className="text-foreground">Microsoft Teams setup for chat, video meetings, and centralized workspace management for your team.</p>
              </div>
            </div>

            <div className="border border-gray-200 p-8 rounded-sm flex gap-6 hover:border-accent transition-colors">
              <FileLock className="text-accent shrink-0" size={40} />
              <div>
                <h3 className="text-xl font-bold mb-2">Secure File Sharing</h3>
                <p className="text-foreground">OneDrive and SharePoint configuration to replace clunky local file servers with accessible, version-controlled cloud storage.</p>
              </div>
            </div>

            <div className="border border-gray-200 p-8 rounded-sm flex gap-6 hover:border-accent transition-colors">
              <ShieldCheck className="text-accent shrink-0" size={40} />
              <div>
                <h3 className="text-xl font-bold mb-2">Secure Identity & MFA</h3>
                <p className="text-foreground">Implementation of Multi-Factor Authentication (MFA) and tenant hardening to protect your business against phishing and ransomware.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary border-t border-gray-200 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl mb-6">Ready to upgrade your IT setup?</h2>
          <Link href="/contact">
            <Button size="lg" className="bg-primary text-white hover:bg-primary/90 rounded-sm font-semibold h-14 px-8 text-base">
              Get Started with Microsoft 365
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
