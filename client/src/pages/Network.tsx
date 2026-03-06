import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Wifi, ShieldAlert, Server, Network } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/FadeIn";

export default function NetworkWifi() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="section-gradient py-24 md:py-32 border-b border-gray-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn>
            <span className="eyebrow mb-4 inline-block">Network & Security</span>
            <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.1] mb-6">
              Network Architecture, Wi&#8209;Fi & Security for Homes and Small Businesses
            </h1>
            <p className="text-xl text-foreground/70 mb-8 leading-relaxed">
              Say goodbye to dead spots, dropped calls, and unreliable connections. I design, deploy, and secure robust networks for offices, workshops, and home setups to keep your operations running smoothly.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-accent text-white hover:bg-[#0fa079] rounded-[4px] font-semibold h-12 px-8 text-sm transition-all duration-200 shadow-sm hover:shadow-lg">
                Request a Network Review
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          
          <FadeIn className="mb-16 text-center">
            <span className="eyebrow mb-4 inline-block">Common Issues</span>
            <h2 className="text-3xl mb-6">Solving Real-World Connectivity Issues</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto mb-10 leading-relaxed">
              I provide competence-led network solutions to eliminate the common IT frustrations that disrupt your daily business activities.
            </p>
            
            <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-3xl mx-auto">
              {[
                "Dead spots",
                "Dropped calls",
                "Poor workshop coverage",
                "Weak office Wi\u2011Fi",
                "Card terminals dropping off",
                "Unreliable remote access"
              ].map((painPoint, i) => (
                <StaggerItem key={i}>
                  <div className="bg-secondary px-4 py-3 rounded-[4px] border border-gray-100 text-center font-medium text-primary text-sm">
                    {painPoint}
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 gap-8">
            <StaggerItem>
              <div className="border border-gray-200/80 p-8 rounded-[4px] bg-white card-hover">
                <Network className="text-accent mb-6" size={32} />
                <h3 className="text-xl font-bold mb-4">Office & Home-Office Design</h3>
                <p className="text-foreground/70 text-[15px] leading-relaxed">
                  Structured network design from the modem down to access points and switches. Proper segmentation, VLAN setup, and capacity planning to handle multiple users and devices without bottlenecks.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="border border-gray-200/80 p-8 rounded-[4px] bg-white card-hover">
                <Wifi className="text-accent mb-6" size={32} />
                <h3 className="text-xl font-bold mb-4">Wi&#8209;Fi Setup & Optimisation</h3>
                <p className="text-foreground/70 text-[15px] leading-relaxed">
                  Professional mesh Wi-Fi planning and access point placement to ensure seamless, high-speed coverage across large offices, multi-story buildings, or complex workshop environments.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="border border-gray-200/80 p-8 rounded-[4px] bg-white card-hover">
                <ShieldAlert className="text-accent mb-6" size={32} />
                <h3 className="text-xl font-bold mb-4">Security & Firewalls</h3>
                <p className="text-foreground/70 text-[15px] leading-relaxed">
                  Business-grade router and firewall configuration to protect your data. Implementation of guest Wi-Fi networks to isolate visitors from your core business systems.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="border border-gray-200/80 p-8 rounded-[4px] bg-white card-hover">
                <Server className="text-accent mb-6" size={32} />
                <h3 className="text-xl font-bold mb-4">Health Checks & Remote Access</h3>
                <p className="text-foreground/70 text-[15px] leading-relaxed">
                  Comprehensive network health checks and troubleshooting. Setup of highly secure VPNs and remote access solutions so you can work safely from anywhere.
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 section-gradient border-t border-gray-100 text-center">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl mb-6">Struggling with poor connectivity?</h2>
            <Link href="/contact">
              <Button size="lg" className="bg-primary text-white hover:bg-primary/90 rounded-[4px] font-semibold h-12 px-8 text-sm transition-all duration-200">
                Contact Crettyard Digital
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
