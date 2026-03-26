import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { MonitorSmartphone, Cloud, Wifi, CheckCircle2, XCircle, ArrowRight, Shield, Clock, TrendingUp, MessageCircle } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/FadeIn";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { TrustBadges } from "@/components/TrustBadges";
import heroImg from "@assets/hero-digital-services.png";
import project1 from "@assets/portfolio-bm-custom-furniture.png";
import project2 from "@assets/portfolio-go-green-steam-clean.png";
import project3 from "@assets/portfolio-nurney-plant-civil.png";
import project4 from "@assets/portfolio-more-than-points.png";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#f3f4f5] py-24 md:py-32 overflow-hidden dot-matrix-bg">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <FadeIn direction="up" className="max-w-xl">
              <span className="eyebrow mb-5 inline-block" data-testid="text-eyebrow">Crettyard Digital</span>
              <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.1] mb-6" data-testid="text-hero-heading">
                Help Your Business Get Found, Look Professional, and Win More Customers
              </h1>
              <p className="text-lg text-foreground/70 mb-10 leading-relaxed font-sans font-normal" data-testid="text-hero-subheading">
                Websites, Microsoft 365 and network solutions built for small businesses across Laois, Carlow, Kilkenny and the surrounding counties. No jargon, no hassle — just technology that works for your business.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Link href="/contact#send-message">
                  <Button size="lg" className="px-10" data-testid="button-book-consultation">
                    Book a Free Consultation
                  </Button>
                </Link>
                <Link href="/portfolio" className="text-accent font-headline font-bold hover:text-primary transition-all duration-200 flex items-center gap-1 text-sm" data-testid="link-view-portfolio">
                  View Our Work <ArrowRight size={14} />
                </Link>
              </div>
              <div className="mt-8" data-testid="section-trust-badges">
                <TrustBadges />
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={0.2} className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-primary/10">
                <img
                  src={heroImg}
                  alt="Digital services professional helping small businesses in Laois, Carlow and Kilkenny"
                  className="object-cover w-full h-full"
                  width="800"
                  height="600"
                  fetchPriority="high"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 bg-white py-4 px-5 rounded-xl shadow-lg hidden md:flex items-center gap-3">
                <div className="w-10 h-10 bg-accent/10 flex items-center justify-center rounded-full text-accent">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <p className="font-headline font-bold text-primary text-sm" data-testid="text-trust-badge">Trusted Local Partner</p>
                  <p className="text-sm text-foreground/70 font-sans">Laois, Carlow &amp; Kilkenny</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Why Your Online Presence Matters */}
      <section className="bg-white py-28">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeIn className="text-center">
            <span className="eyebrow mb-5 inline-block">Why It Matters</span>
            <h2 className="text-3xl md:text-4xl mb-6" data-testid="text-presence-heading">Why Your Online Presence Matters</h2>
            <p className="text-lg text-foreground/70 mb-10 leading-relaxed font-sans font-normal">
              You might think "I already have Facebook" or "I'm too small for a website." But your customers are searching Google right now for the services you offer. If they can't find you — or if your site looks outdated — they'll go to a competitor who looks more professional.
            </p>
          </FadeIn>
          <StaggerContainer className="grid sm:grid-cols-2 gap-6 text-left">
            {[
              "Most consumers search online before contacting a local business",
              "A professional website builds instant trust and credibility",
              "Facebook alone won't help you rank on Google for local searches",
              "Your website works 24/7, even when you're on a job",
              "A proper online presence turns enquiries into paying customers"
            ].map((point, i) => (
              <StaggerItem key={i} className="flex items-start gap-3">
                <CheckCircle2 className="text-accent shrink-0 mt-1" size={18} />
                <span className="text-foreground/80 font-medium text-[15px] font-sans">{point}</span>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Without vs With Comparison */}
      <section className="py-28 bg-[#f3f4f5]">
        <div className="container mx-auto px-4 max-w-5xl">
          <FadeIn className="text-center mb-16">
            <span className="eyebrow mb-5 inline-block">The Difference</span>
            <h2 className="text-3xl md:text-4xl mb-4" data-testid="text-comparison-heading">Without a Proper Site vs With a Proper Site</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto font-sans font-normal">A professional online presence changes everything for a local business.</p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            <FadeIn delay={0.1}>
              <div className="rounded-2xl p-8 bg-red-50/60 h-full">
                <h3 className="text-xl mb-6 text-red-800 flex items-center gap-2">
                  <XCircle size={22} className="text-red-500" />
                  Without a Proper Site
                </h3>
                <ul className="space-y-4">
                  {[
                    "Customers searching Google find your competitors, not you",
                    "Potential clients see a Gmail address and question your professionalism",
                    "No way to show off your best work or explain what makes you different",
                    "Every new customer comes from word-of-mouth — which eventually dries up",
                    "Spending money on jobs while missing enquiries that could fill your calendar",
                    "No professional email — stuck using a personal Gmail or Yahoo address"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-foreground/70 text-[15px] font-sans">
                      <XCircle className="text-red-400 shrink-0 mt-0.5" size={16} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="rounded-2xl p-8 bg-green-50/60 h-full">
                <h3 className="text-xl mb-6 text-green-800 flex items-center gap-2">
                  <CheckCircle2 size={22} className="text-green-600" />
                  With a Proper Site
                </h3>
                <ul className="space-y-4">
                  {[
                    "You appear in local Google searches for 'plumber Laois' or 'cleaner Carlow'",
                    "A professional site and @yourbusiness.ie email builds instant trust",
                    "Your best work and services on display 24/7 — even while you sleep",
                    "New enquiries arrive while you're out on the job",
                    "You compete — and win — against bigger, better-known businesses",
                    "Professional @yourbusiness.ie email address at no extra hassle"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-foreground/70 text-[15px] font-sans">
                      <CheckCircle2 className="text-green-500 shrink-0 mt-0.5" size={16} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Why Investing Properly Now Saves Money Later */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <FadeIn className="text-center mb-16">
            <span className="eyebrow mb-5 inline-block">Smart Investment</span>
            <h2 className="text-3xl md:text-4xl mb-4" data-testid="text-investment-heading">Why Investing Properly Now Saves Money Later</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto font-sans font-normal">
              Going cheap upfront is tempting, but it nearly always costs more in the long run — in wasted money, missed customers, and the cost of starting over.
            </p>
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Clock size={24} />,
                title: "Avoid Costly Rebuilds",
                desc: "A cheap website often needs rebuilding within 12 months. Getting it right from the start means a site that lasts and grows with your business."
              },
              {
                icon: <TrendingUp size={24} />,
                title: "Stop Missing Leads",
                desc: "Every month without a proper online presence is another month of lost enquiries going to a competitor who bothered to invest."
              },
              {
                icon: <Shield size={24} />,
                title: "Avoid Security Headaches",
                desc: "Cheap, poorly configured setups often leave security gaps. Fixing a breach or recovering lost data costs far more than doing it right first time."
              },
              {
                icon: <MessageCircle size={24} />,
                title: "No More Patchwork Fixes",
                desc: "Stop paying different people to bodge the same problems. One properly built solution replaces years of expensive firefighting."
              }
            ].map((item, i) => (
              <StaggerItem key={i}>
                <div className="text-center">
                  <div className="w-14 h-14 bg-accent/10 text-accent flex items-center justify-center rounded-full mb-5 mx-auto">
                    {item.icon}
                  </div>
                  <h3 className="text-lg mb-2">{item.title}</h3>
                  <p className="text-foreground/70 text-[15px] leading-relaxed font-sans font-normal">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-28 bg-[#f3f4f5]">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center mb-16">
            <span className="eyebrow mb-5 inline-block">What I Do</span>
            <h2 className="text-3xl md:text-4xl mb-4" data-testid="text-services-heading">Services That Help Your Business Grow</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto font-sans font-normal">Practical technology solutions that deliver real results — not just features on a spec sheet.</p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            <StaggerItem>
              <div className="rounded-2xl p-8 bg-white shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full glass-card reveal-on-scroll" data-testid="card-service-webdesign">
                <div className="w-14 h-14 bg-accent/10 text-accent flex items-center justify-center rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MonitorSmartphone size={24} />
                </div>
                <h3 className="text-xl mb-3">Web Design</h3>
                <p className="text-foreground/70 mb-8 flex-grow text-[15px] leading-relaxed font-sans font-normal">
                  Get a professional website that makes you easy to find on Google, builds trust with visitors, and turns them into paying customers.
                </p>
                <Link href="/web-design" className="text-accent font-headline font-bold inline-flex items-center mt-auto hover:text-primary transition-colors text-sm" data-testid="link-webdesign">
                  See what's included in a web design project <ArrowRight size={14} className="ml-1" />
                </Link>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="rounded-2xl p-8 bg-white shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full glass-card reveal-on-scroll" data-testid="card-service-microsoft365">
                <div className="w-14 h-14 bg-accent/10 text-accent flex items-center justify-center rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Cloud size={24} />
                </div>
                <h3 className="text-xl mb-3">Microsoft 365</h3>
                <p className="text-foreground/70 mb-8 flex-grow text-[15px] leading-relaxed font-sans font-normal">
                  Professional email, file sharing, and collaboration tools — set up properly so your team can work from anywhere without headaches.
                </p>
                <Link href="/microsoft-365" className="text-accent font-headline font-bold inline-flex items-center mt-auto hover:text-primary transition-colors text-sm" data-testid="link-microsoft365">
                  Learn how Microsoft 365 setup works <ArrowRight size={14} className="ml-1" />
                </Link>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="rounded-2xl p-8 bg-white shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full glass-card reveal-on-scroll" data-testid="card-service-network">
                <div className="w-14 h-14 bg-accent/10 text-accent flex items-center justify-center rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Wifi size={24} />
                </div>
                <h3 className="text-xl mb-3">Network &amp; Wi&#8209;Fi</h3>
                <p className="text-foreground/70 mb-8 flex-grow text-[15px] leading-relaxed font-sans font-normal">
                  Reliable, secure connectivity for your office or workshop — so you're never left without internet when you need it most.
                </p>
                <Link href="/network-wifi-security" className="text-accent font-headline font-bold inline-flex items-center mt-auto hover:text-primary transition-colors text-sm" data-testid="link-network">
                  Explore network and Wi-Fi solutions <ArrowRight size={14} className="ml-1" />
                </Link>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center mb-16">
            <span className="eyebrow mb-5 inline-block">How It Works</span>
            <h2 className="text-3xl md:text-4xl" data-testid="text-process-heading">Four simple steps to get started</h2>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8" staggerDelay={0.08}>
            {[
              { num: "01", title: "Discover", desc: "We have a free, no-obligation chat about your business and what you need." },
              { num: "02", title: "Build", desc: "I create your solution — website, email, or network — with your input along the way." },
              { num: "03", title: "Launch", desc: "Everything goes live. I train you so you're confident using it from day one." },
              { num: "04", title: "Support", desc: "Ongoing help whenever you need it. I'm always just a call or message away." }
            ].map((step, i) => (
              <StaggerItem key={i} className="text-center">
                <div className="text-5xl font-headline font-extrabold text-primary/10 mb-4 tracking-tight">{step.num}</div>
                <h4 className="text-base mb-2">{step.title}</h4>
                <p className="text-foreground/70 text-sm leading-relaxed font-sans">{step.desc}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-28 bg-[#f3f4f5]">
        <div className="container mx-auto px-4">
          <FadeIn className="flex justify-between items-end mb-14">
            <div>
              <span className="eyebrow mb-5 inline-block">Featured Projects</span>
              <h2 className="text-3xl md:text-4xl mb-3" data-testid="text-projects-heading">Recent websites built for local businesses</h2>
            </div>
            <Link href="/portfolio" className="hidden md:inline-flex text-accent font-headline font-bold items-center hover:text-primary transition-colors text-sm" data-testid="link-view-all-projects">
              View all projects <ArrowRight size={14} className="ml-1" />
            </Link>
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <StaggerItem>
              <a href="https://bmcustomfurniture.ie" target="_blank" rel="noopener noreferrer" className="group cursor-pointer block" data-testid="card-project-bm">
                <div className="aspect-[4/3] bg-white mb-5 overflow-hidden rounded-xl shadow-sm">
                  <img src={project1} alt="BM Custom Furniture bespoke fitted furniture website designed by Crettyard Digital" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" width="400" height="300" loading="lazy" />
                </div>
                <h3 className="text-lg mb-1 group-hover:text-accent transition-colors">BM Custom Furniture</h3>
                <p className="text-xs font-medium text-muted-foreground mb-2">bmcustomfurniture.ie</p>
                <p className="text-sm text-foreground/70 mb-3 font-sans">Bespoke fitted furniture showcase</p>
                <span className="text-accent font-headline font-bold inline-flex items-center text-sm">View project <ArrowRight size={14} className="ml-1" /></span>
              </a>
            </StaggerItem>
            <StaggerItem>
              <a href="https://gogreensteamclean.ie" target="_blank" rel="noopener noreferrer" className="group cursor-pointer block" data-testid="card-project-gogreen">
                <div className="aspect-[4/3] bg-white mb-5 overflow-hidden rounded-xl shadow-sm">
                  <img src={project2} alt="Go Green Steam Clean eco-friendly steam cleaning business website designed by Crettyard Digital" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" width="400" height="300" loading="lazy" />
                </div>
                <h3 className="text-lg mb-1 group-hover:text-accent transition-colors">Go Green Steam Clean</h3>
                <p className="text-xs font-medium text-muted-foreground mb-2">gogreensteamclean.ie</p>
                <p className="text-sm text-foreground/70 mb-3 font-sans">Service-led eco-friendly cleaning</p>
                <span className="text-accent font-headline font-bold inline-flex items-center text-sm">View project <ArrowRight size={14} className="ml-1" /></span>
              </a>
            </StaggerItem>
            <StaggerItem>
              <a href="https://nurneyplantandcivil.ie" target="_blank" rel="noopener noreferrer" className="group cursor-pointer block" data-testid="card-project-nurney">
                <div className="aspect-[4/3] bg-white mb-5 overflow-hidden rounded-xl shadow-sm">
                  <img src={project3} alt="Nurney Plant and Civil plant hire and civil engineering website designed by Crettyard Digital" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" width="400" height="300" loading="lazy" />
                </div>
                <h3 className="text-lg mb-1 group-hover:text-accent transition-colors">Nurney Plant and Civil</h3>
                <p className="text-xs font-medium text-muted-foreground mb-2">nurneyplantandcivil.ie</p>
                <p className="text-sm text-foreground/70 mb-3 font-sans">Professional plant hire services</p>
                <span className="text-accent font-headline font-bold inline-flex items-center text-sm">View project <ArrowRight size={14} className="ml-1" /></span>
              </a>
            </StaggerItem>
            <StaggerItem>
              <a href="https://morethanpoints.ie" target="_blank" rel="noopener noreferrer" className="group cursor-pointer block" data-testid="card-project-morethanpoints">
                <div className="aspect-[4/3] bg-white mb-5 overflow-hidden rounded-xl shadow-sm">
                  <img src={project4} alt="More Than Points teen and parent coaching website designed by Crettyard Digital" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" width="400" height="300" loading="lazy" />
                </div>
                <h3 className="text-lg mb-1 group-hover:text-accent transition-colors">More Than Points</h3>
                <p className="text-xs font-medium text-muted-foreground mb-2">morethanpoints.ie</p>
                <p className="text-sm text-foreground/70 mb-3 font-sans">Teen &amp; parent coaching for Irish families</p>
                <span className="text-accent font-headline font-bold inline-flex items-center text-sm">View project <ArrowRight size={14} className="ml-1" /></span>
              </a>
            </StaggerItem>
          </StaggerContainer>
          <div className="mt-8 text-center md:hidden">
            <Link href="/portfolio" className="text-accent font-headline font-bold items-center hover:text-primary transition-colors text-sm" data-testid="link-view-all-projects-mobile">
              View all projects <ArrowRight size={14} className="inline ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeIn className="text-center mb-14">
            <span className="eyebrow mb-5 inline-block">Common Questions</span>
            <h2 className="text-3xl md:text-4xl mb-4" data-testid="text-faq-heading">Frequently Asked Questions</h2>
            <p className="text-foreground/70 font-sans font-normal">Answers to the questions I hear most from small business owners.</p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <Accordion type="single" collapsible className="w-full" data-testid="accordion-faq">
              <AccordionItem value="faq-1">
                <AccordionTrigger className="text-left text-base font-headline font-bold" data-testid="faq-trigger-1">
                  I already have a Facebook page — do I really need a website?
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70 leading-relaxed font-sans" data-testid="faq-content-1">
                  Facebook is great for social engagement, but it won't help you rank on Google when someone searches "plumber near me" or "furniture maker Carlow." A website gives you a professional presence you own and control, and it works around the clock to bring you new customers.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-2">
                <AccordionTrigger className="text-left text-base font-headline font-bold" data-testid="faq-trigger-2">
                  I'm not very technical — will this be complicated?
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70 leading-relaxed font-sans" data-testid="faq-content-2">
                  Not at all. That's exactly why I exist. I handle all the technical work and explain everything in plain English. You don't need to know anything about hosting, DNS, or code — I take care of it all.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-3">
                <AccordionTrigger className="text-left text-base font-headline font-bold" data-testid="faq-trigger-3">
                  How much does a website cost?
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70 leading-relaxed font-sans" data-testid="faq-content-3">
                  It depends on what you need, but most small business websites start from around €800. I always provide a clear, fixed quote upfront — no hidden fees, no surprises. Book a free consultation and I'll give you honest advice on what makes sense for your budget.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-4">
                <AccordionTrigger className="text-left text-base font-headline font-bold" data-testid="faq-trigger-4">
                  How long does it take?
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70 leading-relaxed font-sans" data-testid="faq-content-4">
                  A typical small business website takes 2–4 weeks from start to launch. I'll give you a clear timeline before we start — no open-ended waits.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-5">
                <AccordionTrigger className="text-left text-base font-headline font-bold" data-testid="faq-trigger-5">
                  Can you help with just email or networking — without a website?
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70 leading-relaxed font-sans" data-testid="faq-content-5">
                  Absolutely. Many of my clients come to me for Microsoft 365 setup, business email, or network and Wi-Fi solutions without needing a new website. Each service works independently — just tell me what you need.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-6">
                <AccordionTrigger className="text-left text-base font-headline font-bold" data-testid="faq-trigger-6">
                  What happens after my website goes live?
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70 leading-relaxed font-sans" data-testid="faq-content-6">
                  I don't disappear after launch. I offer optional ongoing support plans so your site stays updated, secure, and performing well — and you always have someone to call when something comes up.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary dot-matrix-bg text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <FadeIn>
            <h2 className="text-3xl text-white mb-4" data-testid="text-cta-heading">Ready to grow your business online?</h2>
            <p className="text-white/70 mb-8 font-sans font-normal max-w-xl mx-auto leading-relaxed">Book a free, no-obligation consultation. I'll give you honest advice — whether you're just starting out or want to improve what you already have.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact#send-message">
                <Button size="lg" className="px-10 bg-accent text-white hover:bg-[#18a07e]" data-testid="button-cta-consultation">
                  Book a Free Consultation
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button size="lg" variant="outline" className="px-10 border-white/30 text-white hover:bg-white/10" data-testid="button-cta-portfolio">
                  See Our Work
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
