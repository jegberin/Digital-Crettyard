import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Wifi, ShieldAlert, Server, Network, CheckCircle, Users, Building2, Wrench, HelpCircle, ArrowRight, PiggyBank } from "lucide-react";
import serviceImg from "@assets/service-network-wifi.png";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/FadeIn";
import { FAQSchema } from "@/components/SEO";

const faqItems = [
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
];

export default function NetworkWifi() {
  return (
    <div className="flex flex-col min-h-screen">
      <FAQSchema items={faqItems.map(f => ({ question: f.q, answer: f.a }))} />

      {/* Hero Section */}
      <section className="bg-[#f3f4f5] py-20 md:py-28 dot-matrix-bg">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <span className="eyebrow mb-5 inline-block">Network &amp; Security</span>
              <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.1] mb-6" data-testid="text-page-title">
                Business Network &amp; Wi&#8209;Fi Solutions for Offices and Workshops
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
                <Link href="/microsoft-365">
                  <Button variant="outline" size="lg" className="px-8" data-testid="link-microsoft365">
                    Microsoft 365 Setup <ArrowRight className="ml-2" size={16} />
                  </Button>
                </Link>
              </div>
            </FadeIn>
            <FadeIn className="hidden md:block">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={serviceImg}
                  alt="Neatly organised network rack with ethernet cables in a professional office environment"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                  loading="eager"
                />
              </div>
            </FadeIn>
          </div>
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
              { icon: Building2, title: "Offices &amp; Co-Working Spaces", desc: "Multiple users, video calls, cloud apps — your network needs to handle it all without slowing down." },
              { icon: Wrench, title: "Workshops &amp; Warehouses", desc: "Card machines, security cameras, and devices that need coverage across large or awkward spaces." },
              { icon: Users, title: "Retail &amp; Hospitality", desc: "Customer Wi‑Fi, point-of-sale systems, and staff devices all running smoothly on separate, secure networks." },
              { icon: Server, title: "Home Offices &amp; Remote Workers", desc: "A professional-grade setup so your home office runs as reliably as any corporate network." },
            ].map((item, i) => (
              <StaggerItem key={i}>
                <div className="bg-white p-8 rounded-2xl card-hover shadow-sm hover:shadow-lg transition-all duration-300" data-testid={`card-who-for-${i}`}>
                  <item.icon className="text-accent mb-4" size={28} />
                  <h3 className="text-lg mb-2" dangerouslySetInnerHTML={{ __html: item.title }} />
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
                <h3 className="text-xl mb-4">Network Design &amp; Planning</h3>
                <p className="text-foreground/70 text-[15px] leading-relaxed mb-4 font-sans font-normal">
                  I survey your premises and design a network that fits your space — proper cabling, switch placement, and access point positioning for full coverage.
                </p>
                <ul className="space-y-2">
                  {["Site survey &amp; coverage mapping", "Structured cabling plans", "VLAN segmentation", "Capacity planning for growth"].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-[15px] text-foreground/70 font-sans">
                      <CheckCircle className="text-accent mt-0.5 flex-shrink-0" size={16} />
                      <span dangerouslySetInnerHTML={{ __html: item }} />
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-[#f3f4f5] p-8 rounded-2xl card-hover">
                <Wifi className="text-accent mb-6" size={32} />
                <h3 className="text-xl mb-4">Wi&#8209;Fi Setup &amp; Optimisation</h3>
                <p className="text-foreground/70 text-[15px] leading-relaxed mb-4 font-sans font-normal">
                  Professional mesh Wi&#8209;Fi and access point placement to eliminate dead spots across offices, multi-story buildings, or tricky workshop layouts.
                </p>
                <ul className="space-y-2">
                  {["Mesh Wi‑Fi &amp; access point deployment", "Channel optimisation", "Guest network separation", "Seamless roaming between zones"].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-[15px] text-foreground/70 font-sans">
                      <CheckCircle className="text-accent mt-0.5 flex-shrink-0" size={16} />
                      <span dangerouslySetInnerHTML={{ __html: item }} />
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-[#f3f4f5] p-8 rounded-2xl card-hover">
                <ShieldAlert className="text-accent mb-6" size={32} />
                <h3 className="text-xl mb-4">Security &amp; Firewalls</h3>
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
                <h3 className="text-xl mb-4">Health Checks &amp; Remote Access</h3>
                <p className="text-foreground/70 text-[15px] leading-relaxed mb-4 font-sans font-normal">
                  Ongoing network health checks plus secure VPN and remote access — so your team can work from anywhere without compromising security.
                </p>
                <ul className="space-y-2">
                  {["Network health audit &amp; reporting", "VPN setup for remote access", "Performance troubleshooting", "Ongoing monitoring &amp; support"].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-[15px] text-foreground/70 font-sans">
                      <CheckCircle className="text-accent mt-0.5 flex-shrink-0" size={16} />
                      <span dangerouslySetInnerHTML={{ __html: item }} />
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
                    { label: "Wi‑Fi health check &amp; optimisation", range: "From €150" },
                    { label: "Small office network setup", range: "From €400" },
                    { label: "Full network design &amp; install", range: "From €800" },
                    { label: "Firewall &amp; security configuration", range: "From €300" },
                  ].map((item, i) => (
                    <li key={i} className="flex items-center justify-between text-sm border-b border-white pb-3 last:border-0 last:pb-0" data-testid={`text-pricing-${i}`}>
                      <span className="text-foreground/70 font-sans" dangerouslySetInnerHTML={{ __html: item.label }} />
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

      {/* FAQ Section — native details/summary for no-JS compatibility */}
      <section className="py-28 bg-[#f3f4f5]">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn className="mb-16 text-center">
            <HelpCircle className="text-accent mx-auto mb-4" size={32} />
            <span className="eyebrow mb-5 inline-block">FAQ</span>
            <h2 className="text-3xl mb-6">Frequently Asked Questions</h2>
          </FadeIn>

          <FadeIn>
            <div className="max-w-3xl mx-auto space-y-3" data-testid="faq-list">
              {faqItems.map((faq, i) => (
                <details
                  key={i}
                  className="group bg-white rounded-xl border border-gray-100 overflow-hidden"
                  data-testid={`faq-item-${i}`}
                >
                  <summary className="flex items-center justify-between gap-4 cursor-pointer px-6 py-5 text-[15px] font-headline font-bold text-primary list-none select-none">
                    <span>{faq.q}</span>
                    <svg
                      className="w-4 h-4 text-accent flex-shrink-0 transition-transform duration-200 group-open:rotate-180"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-5 text-[15px] text-foreground/70 leading-relaxed font-sans">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
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
                  <span className="text-accent text-sm font-headline font-bold mt-3 inline-flex items-center gap-1">Learn about web design <ArrowRight size={13} /></span>
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
                  <span className="text-accent text-sm font-headline font-bold mt-3 inline-flex items-center gap-1">Learn about Microsoft 365 <ArrowRight size={13} /></span>
                </div>
              </Link>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary dot-matrix-bg">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <FadeIn>
              <div className="text-center md:text-left">
                <h2 className="text-3xl text-white mb-4">Ready to Fix Your Network for Good?</h2>
                <p className="text-white/70 mb-8 leading-relaxed font-sans font-normal">Book a free, no-obligation network review. I'll assess your setup, identify the problems, and give you a clear plan to sort it out.</p>
                <Link href="/contact#send-message">
                  <Button size="lg" className="px-10 bg-accent text-white hover:bg-[#18a07e]" data-testid="button-cta-bottom">
                    Book a Free Network Review
                  </Button>
                </Link>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="text-center md:text-left md:border-l md:border-white/10 md:pl-16">
                <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">Stay Connected</p>
                <h2 className="text-2xl md:text-3xl text-white mb-3">Follow Us for Tips, Offers &amp; Updates</h2>
                <p className="text-white/60 font-sans font-normal mb-8 leading-relaxed">Get helpful digital tips for small businesses, behind-the-scenes updates, and exclusive offers — straight to your feed.</p>
                <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                  <a href="https://www.facebook.com/profile.php?id=61579447734496" target="_blank" rel="noopener noreferrer" data-testid="button-follow-facebook" className="inline-flex items-center justify-center gap-2.5 px-7 py-3 rounded-full bg-[#1877F2] text-white font-semibold text-sm hover:bg-[#1565d8] transition-colors shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/></svg>
                    Follow on Facebook
                  </a>
                  <a href="https://www.instagram.com/crettyarddigital" target="_blank" rel="noopener noreferrer" data-testid="button-follow-instagram" className="inline-flex items-center justify-center gap-2.5 px-7 py-3 rounded-full text-white font-semibold text-sm transition-colors shadow-sm" style={{ background: "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                    Follow on Instagram
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
