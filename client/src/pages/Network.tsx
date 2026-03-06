import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Wifi, ShieldAlert, Server, Network } from "lucide-react";

export default function NetworkWifi() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-secondary py-16 md:py-24 border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
            Network Architecture, Wi‑Fi & Security for Homes and Small Businesses
          </h1>
          <p className="text-xl text-foreground mb-8 leading-relaxed">
            Say goodbye to dead spots, dropped calls, and unreliable connections. I design, deploy, and secure robust networks for offices, workshops, and home setups to keep your operations running smoothly.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-accent text-white hover:bg-[#0fa079] rounded-sm font-semibold h-14 px-8 text-base">
              Request a Network Review
            </Button>
          </Link>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          
          <div className="mb-16">
            <h2 className="text-3xl mb-6 text-center">Solving Real-World Connectivity Issues</h2>
            <p className="text-center text-foreground max-w-2xl mx-auto mb-10">
              I provide competence-led network solutions to eliminate the common IT frustrations that disrupt your daily business activities.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
              {[
                "Dead spots",
                "Dropped calls",
                "Poor workshop coverage",
                "Weak office Wi‑Fi",
                "Card terminals dropping off",
                "Unreliable remote access"
              ].map((painPoint, i) => (
                <div key={i} className="bg-secondary px-4 py-3 rounded-sm border border-gray-100 text-center font-medium text-primary">
                  {painPoint}
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-gray-200 p-8 rounded-sm bg-white hover:shadow-md transition-shadow">
              <Network className="text-accent mb-6" size={36} />
              <h3 className="text-2xl font-bold mb-4">Office & Home-Office Design</h3>
              <p className="text-foreground">
                Structured network design from the modem down to access points and switches. Proper segmentation, VLAN setup, and capacity planning to handle multiple users and devices without bottlenecks.
              </p>
            </div>

            <div className="border border-gray-200 p-8 rounded-sm bg-white hover:shadow-md transition-shadow">
              <Wifi className="text-accent mb-6" size={36} />
              <h3 className="text-2xl font-bold mb-4">Wi‑Fi Setup & Optimisation</h3>
              <p className="text-foreground">
                Professional mesh Wi-Fi planning and access point placement to ensure seamless, high-speed coverage across large offices, multi-story buildings, or complex workshop environments.
              </p>
            </div>

            <div className="border border-gray-200 p-8 rounded-sm bg-white hover:shadow-md transition-shadow">
              <ShieldAlert className="text-accent mb-6" size={36} />
              <h3 className="text-2xl font-bold mb-4">Security & Firewalls</h3>
              <p className="text-foreground">
                Business-grade router and firewall configuration to protect your data. Implementation of guest Wi-Fi networks to isolate visitors from your core business systems.
              </p>
            </div>

            <div className="border border-gray-200 p-8 rounded-sm bg-white hover:shadow-md transition-shadow">
              <Server className="text-accent mb-6" size={36} />
              <h3 className="text-2xl font-bold mb-4">Health Checks & Remote Access</h3>
              <p className="text-foreground">
                Comprehensive network health checks and troubleshooting. Setup of highly secure VPNs and remote access solutions so you can work safely from anywhere.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary border-t border-gray-200 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl mb-6">Struggling with poor connectivity?</h2>
          <Link href="/contact">
            <Button size="lg" className="bg-primary text-white hover:bg-primary/90 rounded-sm font-semibold h-14 px-8 text-base">
              Contact Crettyard Digital
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
