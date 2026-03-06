import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Cloud, ShieldCheck, Mail, Users, FileLock } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/FadeIn";

export default function Microsoft365() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="section-gradient py-24 md:py-32 border-b border-gray-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn>
            <span className="eyebrow mb-4 inline-block">Microsoft 365</span>
            <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.1] mb-6">
              Microsoft 365 Setup & Support for Irish Small Businesses
            </h1>
            <p className="text-xl text-foreground/70 mb-8 leading-relaxed">
              Get email that works properly, secure file sharing, and smoother collaboration. I provide practical, non-technical Microsoft 365 support to help your business operate securely and efficiently from anywhere.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-accent text-white hover:bg-[#0fa079] rounded-[4px] font-semibold h-12 px-8 text-sm transition-all duration-200 shadow-sm hover:shadow-lg">
                Book a Discovery Call
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          
          <div className="grid md:grid-cols-2 gap-14 items-center mb-24">
            <FadeIn>
              <h2 className="text-3xl mb-6">Migration without unnecessary stress</h2>
              <p className="text-foreground/70 mb-4 leading-relaxed">
                Moving away from old POP/IMAP emails, a legacy Exchange server, or consumer Gmail? I handle the entire Exchange Online migration process safely, ensuring zero data loss and minimal downtime for your team.
              </p>
              <p className="text-foreground/70 leading-relaxed">
                I provide clear, reassuring guidance every step of the way, getting your business onto a reliable, enterprise-grade cloud platform with small-business simplicity.
              </p>
            </FadeIn>
            <FadeIn delay={0.15} className="bg-secondary p-8 rounded-[4px] border border-gray-100 flex flex-col justify-center">
              <h3 className="text-lg mb-4 font-bold">What's included:</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-[15px]"><span className="w-1.5 h-1.5 bg-accent rounded-sm shrink-0"></span> Setup and licensing advice</li>
                <li className="flex items-center gap-3 text-[15px]"><span className="w-1.5 h-1.5 bg-accent rounded-sm shrink-0"></span> Exchange Online migration</li>
                <li className="flex items-center gap-3 text-[15px]"><span className="w-1.5 h-1.5 bg-accent rounded-sm shrink-0"></span> Teams, OneDrive & SharePoint setup</li>
                <li className="flex items-center gap-3 text-[15px]"><span className="w-1.5 h-1.5 bg-accent rounded-sm shrink-0"></span> Security and compliance hardening</li>
                <li className="flex items-center gap-3 text-[15px]"><span className="w-1.5 h-1.5 bg-accent rounded-sm shrink-0"></span> Ongoing support and training</li>
              </ul>
            </FadeIn>
          </div>

          <FadeIn className="text-center mb-14">
            <span className="eyebrow mb-4 inline-block">Capabilities</span>
            <h2 className="text-3xl">Core Microsoft 365 Capabilities</h2>
          </FadeIn>
          
          <StaggerContainer className="grid md:grid-cols-2 gap-8">
            <StaggerItem>
              <div className="border border-gray-200/80 p-8 rounded-[4px] flex gap-6 card-hover">
                <Mail className="text-accent shrink-0" size={36} />
                <div>
                  <h3 className="text-lg font-bold mb-2">Professional Email</h3>
                  <p className="text-foreground/70 text-[15px] leading-relaxed">Reliable email hosting with 50GB+ mailboxes, custom domain names, and shared calendars using Exchange Online.</p>
                </div>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="border border-gray-200/80 p-8 rounded-[4px] flex gap-6 card-hover">
                <Users className="text-accent shrink-0" size={36} />
                <div>
                  <h3 className="text-lg font-bold mb-2">Smoother Collaboration</h3>
                  <p className="text-foreground/70 text-[15px] leading-relaxed">Microsoft Teams setup for chat, video meetings, and centralized workspace management for your team.</p>
                </div>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="border border-gray-200/80 p-8 rounded-[4px] flex gap-6 card-hover">
                <FileLock className="text-accent shrink-0" size={36} />
                <div>
                  <h3 className="text-lg font-bold mb-2">Secure File Sharing</h3>
                  <p className="text-foreground/70 text-[15px] leading-relaxed">OneDrive and SharePoint configuration to replace clunky local file servers with accessible, version-controlled cloud storage.</p>
                </div>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="border border-gray-200/80 p-8 rounded-[4px] flex gap-6 card-hover">
                <ShieldCheck className="text-accent shrink-0" size={36} />
                <div>
                  <h3 className="text-lg font-bold mb-2">Secure Identity & MFA</h3>
                  <p className="text-foreground/70 text-[15px] leading-relaxed">Implementation of Multi-Factor Authentication (MFA) and tenant hardening to protect your business against phishing and ransomware.</p>
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 section-gradient border-t border-gray-100 text-center">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl mb-6">Ready to upgrade your IT setup?</h2>
            <Link href="/contact">
              <Button size="lg" className="bg-primary text-white hover:bg-primary/90 rounded-[4px] font-semibold h-12 px-8 text-sm transition-all duration-200">
                Get Started with Microsoft 365
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
