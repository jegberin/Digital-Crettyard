import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Wifi, ShieldAlert, Server, Network, CheckCircle, Users, Building2, Wrench, HelpCircle, ArrowRight, PiggyBank } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/FadeIn";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function NetworkWifi() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#f3f4f5] py-24 md:py-32 dot-matrix-bg">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn>
            <span className="eyebrow mb-5 inline-block">Network & Security</span>
            <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.1] mb-6" data-testid="text-page-title">
              Business Network & Wi&#8209;Fi Solutions for Offices and Workshops
            </h1>
            <p className="text-xl text-foreground/70 mb-8 leading-relaxed font-sans font-normal">
              Dropped connections, dead spots, and unreliable Wi&#8209;Fi cost your business time and money every day. I design, install, and secure networks that actually work — so your team can focus on the job, not the internet.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact#send-message">
                <Button size="lg" className="px-10" data-testid="button-hero-cta">
                  Book a Free Network Review
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button variant="outline" size="lg" className="px-8" data-testid="link-portfolio">
                  View Our Work <ArrowRight className="ml-2" size={16} />
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Common Issues */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn className="mb-16 text-center">
            <span className="eyebrow mb-5 inline-block">Common Issues</span>
            <h2 className="text-3xl mb-6">Solving Real-World Connectivity Problems</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto mb-10 leading-relaxed font-sans font-normal">
              These are the everyday frustrations I help businesses eliminate — for good.
            </p>

            <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-3xl mx-auto">
              {[
                "Dead spots in the office",
                "Dropped video calls",
                "Poor workshop coverage",
                "Weak warehouse Wi‑Fi",
                "Card terminals dropping off",
                "Unreliable remote access"
              ].map((painPoint, i) => (
                <StaggerItem key={i}>
                  <div className="bg-[#f3f4f5] px-4 py-3 rounded-xl text-center font-headline font-bold text-primary text-sm" data-testid={`text-pain-point-${i}`}>
                    {painPoint}
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </FadeIn>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-28 bg-[#f3f4f5]">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn className="mb-16 text-center">
            <span className="eyebrow mb-5 inline-block">Who This Is For</span>
            <h2 className="text-3xl mb-6">Built for Businesses That Rely on Connectivity</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto leading-relaxed font-sans font-normal">
              If your business depends on a reliable internet connection — and whose doesn't — this service is for you.
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Building2, title: "Offices & Co-Working Spaces", desc: "Multiple users, video calls, cloud apps — your network needs to handle it all without slowing down." },
              { icon: Wrench, title: "Workshops & Warehouses", desc: "Card machines, security cameras, and devices that need coverage across large or awkward spaces." },
              { icon: Users, title: "Retail & Hospitality", desc: "Customer Wi‑Fi, point-of-sale systems, and staff devices all running smoothly on separate, secure networks." },
              { icon: Server, title: "Home Offices & Remote Workers", desc: "A professional-grade setup so your home office runs as reliably as any corporate network." },
            ].map((item, i) => (
              <StaggerItem key={i}>
                <div className="bg-white p-8 rounded-2xl card-hover shadow-sm hover:shadow-lg transition-all duration-300" data-testid={`card-who-for-${i}`}>
                  <item.icon className="text-accent mb-4" size={28} />
                  <h3 className="text-lg mb-2">{item.title}</h3>
                  <p className="text-foreground/70 text-[15px] leading-relaxed font-sans font-normal">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn className="mb-16 text-center">
            <span className="eyebrow mb-5 inline-block">What's Included</span>
            <h2 className="text-3xl mb-6">Everything You Need for a Rock-Solid Network</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto leading-relaxed font-sans font-normal">
              From initial survey to ongoing support, I handle every part of the process so you don't have to.
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 gap-8">
            <StaggerItem>
              <div className="bg-[#f3f4f5] p-8 rounded-2xl card-hover">
                <Network className="text-accent mb-6" size={32} />
                <h3 className="text-xl mb-4">Network Design & Planning</h3>
                <p className="text-foreground/70 text-[15px] leading-relaxed mb-4 font-sans font-normal">
                  I survey your premises and design a network that fits your space — proper cabling, switch placement, and access point positioning for full coverage.
                </p>
                <ul className="space-y-2">
                  {["Site survey & coverage mapping", "Structured cabling plans", "VLAN segmentation", "Capacity planning for growth"].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-[15px] text-foreground/70 font-sans">
                      <CheckCircle className="text-accent mt-0.5 flex-shrink-0" size={16} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-[#f3f4f5] p-8 rounded-2xl card-hover">
                <Wifi className="text-accent mb-6" size={32} />
                <h3 className="text-xl mb-4">Wi&#8209;Fi Setup & Optimisation</h3>
                <p className="text-foreground/70 text-[15px] leading-relaxed mb-4 font-sans font-normal">
                  Professional mesh Wi&#8209;Fi and access point placement to eliminate dead spots across offices, multi-story buildings, or tricky workshop layouts.
                </p>
                <ul className="space-y-2">
                  {["Mesh Wi‑Fi & access point deployment", "Channel optimisation", "Guest network separation", "Seamless roaming between zones"].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-[15px] text-foreground/70 font-sans">
                      <CheckCircle className="text-accent mt-0.5 flex-shrink-0" size={16} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-[#f3f4f5] p-8 rounded-2xl card-hover">
                <ShieldAlert className="text-accent mb-6" size={32} />
                <h3 className="text-xl mb-4">Security & Firewalls</h3>
                <p className="text-foreground/70 text-[15px] leading-relaxed mb-4 font-sans font-normal">
                  Business-grade security to protect your data and keep your customers' information safe — without making things complicated for your team.
                </p>
                <ul className="space-y-2">
                  {["Business-grade firewall setup", "Intrusion detection", "Guest Wi‑Fi isolation", "Security policy configuration"].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-[15px] text-foreground/70 font-sans">
                      <CheckCircle className="text-accent mt-0.5 flex-shrink-0" size={16} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-[#f3f4f5] p-8 rounded-2xl card-hover">
                <Server className="text-accent mb-6" size={32} />
                <h3 className="text-xl mb-4">Health Checks & Remote Access</h3>
                <p className="text-foreground/70 text-[15px] leading-relaxed mb-4 font-sans font-normal">
                  Ongoing network health checks plus secure VPN and remote access — so your team can work from anywhere without compromising security.
                </p>
                <ul className="space-y-2">
                  {["Network health audit & reporting", "VPN setup for remote access", "Performance troubleshooting", "Ongoing monitoring & support"].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-[15px] text-foreground/70 font-sans">
                      <CheckCircle className="text-accent mt-0.5 flex-shrink-0" size={16} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Why This Saves You Money */}
      <section className="py-28 bg-[#f3f4f5]">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn className="mb-16 text-center">
            <span className="eyebrow mb-5 inline-block">Why It Pays Off</span>
            <h2 className="text-3xl mb-6">Why Getting Your Network Right Saves You Money</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto leading-relaxed font-sans font-normal">
              A poorly set up network doesn't just cause frustration — it costs you real money in lost productivity, missed sales, and emergency call-outs.
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Fewer Emergency Call-Outs", desc: "A properly designed network rarely fails. You stop paying for reactive fixes and start enjoying reliable, predictable connectivity." },
              { title: "Less Downtime, More Revenue", desc: "Every hour your team spends waiting for pages to load or reconnecting to calls is money lost. A solid network keeps everyone productive." },
              { title: "Built to Grow With You", desc: "Adding new staff, devices, or locations is simple when your network is designed with growth in mind — no expensive rip-and-replace later." },
            ].map((item, i) => (
              <StaggerItem key={i}>
                <div className="bg-white p-8 rounded-2xl card-hover shadow-sm hover:shadow-lg transition-all duration-300" data-testid={`card-savings-${i}`}>
                  <h3 className="text-lg mb-3">{item.title}</h3>
                  <p className="text-foreground/70 text-[15px] leading-relaxed font-sans font-normal">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Pricing Guidance */}
      <section className="py-28 bg-white" id="pricing">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn className="mb-16 text-center">
            <PiggyBank className="text-accent mx-auto mb-4" size={32} />
            <span className="eyebrow mb-5 inline-block">Pricing Guidance</span>
            <h2 className="text-3xl mb-6">What Affects the Price</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto leading-relaxed font-sans font-normal">
              Every premises is different, so I quote after a proper survey. Here's what typically influences the cost:
            </p>
          </FadeIn>

          <FadeIn>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-[#f3f4f5] p-8 rounded-2xl">
                <h3 className="text-lg mb-4">Factors That Affect Cost</h3>
                <ul className="space-y-3">
                  {[
                    "Size and layout of the premises",
                    "Number of users and devices",
                    "Cabling requirements (new runs vs existing)",
                    "Equipment grade (home vs business-grade)",
                    "Security requirements (firewall, VPN, guest isolation)",
                    "Whether remote access or VPN is needed",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-[15px] text-foreground/70 font-sans">
                      <CheckCircle className="text-accent mt-0.5 flex-shrink-0" size={16} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#f3f4f5] p-8 rounded-2xl">
                <h3 className="text-lg mb-4">Typical Starting Points</h3>
                <ul className="space-y-4">
                  {[
                    { label: "Wi‑Fi health check & optimisation", range: "From €150" },
                    { label: "Small office network setup", range: "From €400" },
                    { label: "Full network design & install", range: "From €800" },
                    { label: "Firewall & security configuration", range: "From €300" },
                  ].map((item, i) => (
                    <li key={i} className="flex items-center justify-between text-sm border-b border-white pb-3 last:border-0 last:pb-0" data-testid={`text-pricing-${i}`}>
                      <span className="text-foreground/70 font-sans">{item.label}</span>
                      <span className="font-headline font-bold text-primary">{item.range}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-foreground/60 mt-4 font-sans">
                  All prices are indicative. I'll provide a clear, fixed quote after an initial chat.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-28 bg-[#f3f4f5]">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn className="mb-16 text-center">
            <HelpCircle className="text-accent mx-auto mb-4" size={32} />
            <span className="eyebrow mb-5 inline-block">FAQ</span>
            <h2 className="text-3xl mb-6">Frequently Asked Questions</h2>
          </FadeIn>

          <FadeIn>
            <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
              {[
                {
                  q: "How do I know if I need a new network or just a fix?",
                  a: "I'll start with a free review — looking at your current setup, your pain points, and what you need. Sometimes a tweak is all it takes; other times a proper redesign is the smarter long-term move. I'll give you an honest recommendation either way."
                },
                {
                  q: "Can you work around our business hours?",
                  a: "Absolutely. I regularly schedule installations and upgrades for evenings or weekends to minimise disruption. Your team shouldn't lose a day's work because of an IT upgrade."
                },
                {
                  q: "Do you supply the hardware?",
                  a: "Yes. I source and supply business-grade equipment from trusted brands like Ubiquiti, MikroTik, and TP-Link. I'll recommend the best options for your space and budget — no unnecessary upselling."
                },
                {
                  q: "How long does a typical installation take?",
                  a: "A small office setup can often be done in a day. Larger premises with cabling requirements may take 2–3 days. I'll give you a clear timeline before any work begins."
                },
                {
                  q: "What about ongoing support?",
                  a: "I offer optional support packages for monitoring, maintenance, and troubleshooting. But even without a package, I'm always just a call or message away if something goes wrong."
                },
                {
                  q: "Do you cover areas outside Laois and Carlow?",
                  a: "I'm based in the Laois/Carlow area but regularly work across the Midlands and South-East. Get in touch and we'll figure it out."
                },
              ].map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} data-testid={`faq-item-${i}`}>
                  <AccordionTrigger className="text-left text-[15px] font-headline font-bold">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/70 text-[15px] leading-relaxed font-sans">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeIn>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn className="text-center mb-12">
            <h2 className="text-2xl mb-4">Other Services You Might Need</h2>
            <p className="text-foreground/70 leading-relaxed font-sans font-normal">
              Most businesses need more than just a network. Here's how else I can help.
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 gap-6">
            <StaggerItem>
              <Link href="/web-design">
                <div className="bg-[#f3f4f5] p-6 rounded-2xl card-hover cursor-pointer group" data-testid="link-web-design">
                  <h3 className="text-lg mb-2 group-hover:text-accent transition-colors">Website Design</h3>
                  <p className="text-foreground/70 text-[15px] leading-relaxed font-sans">
                    Professional websites that help your business get found online and win more customers.
                  </p>
                </div>
              </Link>
            </StaggerItem>
            <StaggerItem>
              <Link href="/microsoft-365">
                <div className="bg-[#f3f4f5] p-6 rounded-2xl card-hover cursor-pointer group" data-testid="link-microsoft-365">
                  <h3 className="text-lg mb-2 group-hover:text-accent transition-colors">Microsoft 365 Setup</h3>
                  <p className="text-foreground/70 text-[15px] leading-relaxed font-sans">
                    Professional email, Teams, and cloud storage — set up properly so your team can collaborate from day one.
                  </p>
                </div>
              </Link>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary dot-matrix-bg text-center">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl text-white mb-4">Ready to Fix Your Network for Good?</h2>
            <p className="text-white/70 mb-8 max-w-xl mx-auto leading-relaxed font-sans font-normal">
              Book a free, no-obligation network review. I'll assess your setup, identify the problems, and give you a clear plan to sort it out.
            </p>
            <Link href="/contact#send-message">
              <Button size="lg" className="px-10 bg-accent text-white hover:bg-[#18a07e]" data-testid="button-cta-bottom">
                Book a Free Network Review
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
