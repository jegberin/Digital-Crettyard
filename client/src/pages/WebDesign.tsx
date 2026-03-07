import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { MonitorSmartphone, Search, Wrench, Smartphone, Rocket, FormInput, Users, CheckCircle, PiggyBank, HelpCircle, ChevronDown } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/FadeIn";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function WebDesign() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="section-gradient py-24 md:py-32 border-b border-gray-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn>
            <span className="eyebrow mb-4 inline-block">Web Design</span>
            <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.1] mb-6" data-testid="text-page-title">
              Professional Website Design for Small Businesses in Laois & Carlow
            </h1>
            <p className="text-xl text-foreground/70 mb-8 leading-relaxed" data-testid="text-intro">
              Your website should be your hardest-working employee — bringing in enquiries, building trust, and making your business look as professional as the work you do. I design and build fast, mobile-friendly websites for tradespeople, contractors, and local service businesses across Laois, Carlow, and the surrounding counties.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact#send-message">
                <Button data-testid="button-hero-cta" size="lg" className="bg-accent text-white hover:bg-[#0fa079] rounded-[4px] font-semibold h-12 px-8 text-sm transition-all duration-200 shadow-sm hover:shadow-lg">
                  Book a Free Website Consultation
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button data-testid="button-hero-portfolio" variant="outline" size="lg" className="rounded-[4px] font-semibold h-12 px-8 text-sm transition-all duration-200">
                  View My Work →
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-28 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn className="text-center mb-14">
            <span className="eyebrow mb-4 inline-block">Who It's For</span>
            <h2 className="text-3xl" data-testid="text-who-heading">Who This Is For</h2>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 gap-8 mb-24">
            <StaggerItem>
              <div className="border border-gray-200/80 p-7 rounded-[4px] card-hover" data-testid="card-who-trades">
                <Users className="text-accent mb-5" size={28} />
                <h3 className="text-lg font-bold mb-3">Tradespeople & Contractors</h3>
                <p className="text-foreground/70 text-[15px] leading-relaxed">Plumbers, electricians, carpenters, builders — if you rely on word-of-mouth but want a professional online presence that brings in new work.</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="border border-gray-200/80 p-7 rounded-[4px] card-hover" data-testid="card-who-service">
                <Rocket className="text-accent mb-5" size={28} />
                <h3 className="text-lg font-bold mb-3">Service Businesses</h3>
                <p className="text-foreground/70 text-[15px] leading-relaxed">Cleaners, landscapers, tutors, therapists — anyone providing local services who needs to be found by customers searching online.</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="border border-gray-200/80 p-7 rounded-[4px] card-hover" data-testid="card-who-retail">
                <MonitorSmartphone className="text-accent mb-5" size={28} />
                <h3 className="text-lg font-bold mb-3">Retailers & Hospitality</h3>
                <p className="text-foreground/70 text-[15px] leading-relaxed">Shops, cafés, and B&Bs who need a website that shows opening hours, menus, or products — and looks great on every device.</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="border border-gray-200/80 p-7 rounded-[4px] card-hover" data-testid="card-who-professional">
                <Search className="text-accent mb-5" size={28} />
                <h3 className="text-lg font-bold mb-3">Professional Services</h3>
                <p className="text-foreground/70 text-[15px] leading-relaxed">Accountants, solicitors, consultants — businesses that need a polished, credible web presence to attract and reassure clients.</p>
              </div>
            </StaggerItem>
          </StaggerContainer>

          <FadeIn className="text-center mb-14">
            <span className="eyebrow mb-4 inline-block">What You Get</span>
            <h2 className="text-3xl" data-testid="text-included-heading">What's Included</h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-14 mb-24">
            <FadeIn>
              <div className="bg-secondary p-8 rounded-[4px] border border-gray-100" data-testid="list-included-design">
                <h3 className="text-lg mb-4 font-bold">Design & Build</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-[15px]"><CheckCircle className="text-accent shrink-0 mt-0.5" size={18} /> Custom design tailored to your brand — no templates</li>
                  <li className="flex items-start gap-3 text-[15px]"><CheckCircle className="text-accent shrink-0 mt-0.5" size={18} /> Mobile-first build that works on phones, tablets, and desktops</li>
                  <li className="flex items-start gap-3 text-[15px]"><CheckCircle className="text-accent shrink-0 mt-0.5" size={18} /> Fast loading speeds — no bloated page builders</li>
                  <li className="flex items-start gap-3 text-[15px]"><CheckCircle className="text-accent shrink-0 mt-0.5" size={18} /> Contact and quote request forms</li>
                  <li className="flex items-start gap-3 text-[15px]"><CheckCircle className="text-accent shrink-0 mt-0.5" size={18} /> Google Maps integration</li>
                </ul>
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="bg-secondary p-8 rounded-[4px] border border-gray-100" data-testid="list-included-seo">
                <h3 className="text-lg mb-4 font-bold">SEO & Visibility</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-[15px]"><CheckCircle className="text-accent shrink-0 mt-0.5" size={18} /> On-page SEO for local search terms (e.g. "plumber Carlow")</li>
                  <li className="flex items-start gap-3 text-[15px]"><CheckCircle className="text-accent shrink-0 mt-0.5" size={18} /> Proper heading structure and semantic HTML</li>
                  <li className="flex items-start gap-3 text-[15px]"><CheckCircle className="text-accent shrink-0 mt-0.5" size={18} /> Meta titles and descriptions for every page</li>
                  <li className="flex items-start gap-3 text-[15px]"><CheckCircle className="text-accent shrink-0 mt-0.5" size={18} /> Google Business Profile guidance</li>
                  <li className="flex items-start gap-3 text-[15px]"><CheckCircle className="text-accent shrink-0 mt-0.5" size={18} /> SSL certificate and secure hosting setup</li>
                </ul>
              </div>
            </FadeIn>
            <FadeIn>
              <div className="bg-secondary p-8 rounded-[4px] border border-gray-100" data-testid="list-included-support">
                <h3 className="text-lg mb-4 font-bold">Ongoing Support</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-[15px]"><CheckCircle className="text-accent shrink-0 mt-0.5" size={18} /> Hosting and domain management</li>
                  <li className="flex items-start gap-3 text-[15px]"><CheckCircle className="text-accent shrink-0 mt-0.5" size={18} /> Content updates when you need them</li>
                  <li className="flex items-start gap-3 text-[15px]"><CheckCircle className="text-accent shrink-0 mt-0.5" size={18} /> Security monitoring and backups</li>
                  <li className="flex items-start gap-3 text-[15px]"><CheckCircle className="text-accent shrink-0 mt-0.5" size={18} /> Direct access to me — no ticket queues</li>
                </ul>
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="bg-secondary p-8 rounded-[4px] border border-gray-100" data-testid="list-included-copywriting">
                <h3 className="text-lg mb-4 font-bold">Content & Copywriting</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-[15px]"><CheckCircle className="text-accent shrink-0 mt-0.5" size={18} /> Conversion-focused page copy</li>
                  <li className="flex items-start gap-3 text-[15px]"><CheckCircle className="text-accent shrink-0 mt-0.5" size={18} /> Clear calls-to-action on every page</li>
                  <li className="flex items-start gap-3 text-[15px]"><CheckCircle className="text-accent shrink-0 mt-0.5" size={18} /> Image sourcing and optimisation</li>
                  <li className="flex items-start gap-3 text-[15px]"><CheckCircle className="text-accent shrink-0 mt-0.5" size={18} /> Help writing your "About" and service descriptions</li>
                </ul>
              </div>
            </FadeIn>
          </div>

          <FadeIn className="text-center mb-14">
            <span className="eyebrow mb-4 inline-block">Business Outcomes</span>
            <h2 className="text-3xl" data-testid="text-benefits-heading">How a Professional Website Helps Your Business</h2>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-8 mb-24">
            <StaggerItem>
              <div className="border border-gray-200/80 p-7 rounded-[4px] card-hover" data-testid="card-benefit-found">
                <Search className="text-accent mb-5" size={28} />
                <h3 className="text-lg font-bold mb-3">Get Found by Local Customers</h3>
                <p className="text-foreground/70 text-[15px] leading-relaxed">When someone searches "electrician near me" or "carpet cleaning Laois", a properly built website puts you in front of them — not your competitor.</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="border border-gray-200/80 p-7 rounded-[4px] card-hover" data-testid="card-benefit-trust">
                <MonitorSmartphone className="text-accent mb-5" size={28} />
                <h3 className="text-lg font-bold mb-3">Build Instant Credibility</h3>
                <p className="text-foreground/70 text-[15px] leading-relaxed">A clean, professional website tells potential customers you're established, reliable, and worth calling — before they've even spoken to you.</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="border border-gray-200/80 p-7 rounded-[4px] card-hover" data-testid="card-benefit-leads">
                <FormInput className="text-accent mb-5" size={28} />
                <h3 className="text-lg font-bold mb-3">Turn Visitors into Enquiries</h3>
                <p className="text-foreground/70 text-[15px] leading-relaxed">Clear calls-to-action, quote request forms, and visible contact details mean more phone calls and emails from people ready to hire.</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="border border-gray-200/80 p-7 rounded-[4px] card-hover" data-testid="card-benefit-mobile">
                <Smartphone className="text-accent mb-5" size={28} />
                <h3 className="text-lg font-bold mb-3">Work on Every Device</h3>
                <p className="text-foreground/70 text-[15px] leading-relaxed">Over 60% of local searches happen on mobile. Your website will look great and load fast whether your customer is on a phone, tablet, or laptop.</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="border border-gray-200/80 p-7 rounded-[4px] card-hover" data-testid="card-benefit-time">
                <Rocket className="text-accent mb-5" size={28} />
                <h3 className="text-lg font-bold mb-3">Save You Time</h3>
                <p className="text-foreground/70 text-[15px] leading-relaxed">A good website answers common questions, shows your services, and pre-qualifies leads — so you spend less time explaining and more time doing the work.</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="border border-gray-200/80 p-7 rounded-[4px] card-hover" data-testid="card-benefit-maintenance">
                <Wrench className="text-accent mb-5" size={28} />
                <h3 className="text-lg font-bold mb-3">Stay Up-to-Date Effortlessly</h3>
                <p className="text-foreground/70 text-[15px] leading-relaxed">With ongoing maintenance plans, your site stays secure, fast, and current — without you lifting a finger.</p>
              </div>
            </StaggerItem>
          </StaggerContainer>

          <FadeIn className="mb-24" data-testid="section-saves-money">
            <div className="bg-secondary p-10 md:p-14 rounded-[4px] border border-gray-100">
              <div className="flex items-start gap-4 mb-6">
                <PiggyBank className="text-accent shrink-0 mt-1" size={32} />
                <h2 className="text-3xl" data-testid="text-saves-heading">Why This Saves You Money</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-lg font-bold mb-3">Avoid Costly Rebuilds</h3>
                  <p className="text-foreground/70 text-[15px] leading-relaxed">A cheap website often needs replacing within a year. Investing properly from the start means you get a site that lasts and grows with your business.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-3">Stop Missing Leads</h3>
                  <p className="text-foreground/70 text-[15px] leading-relaxed">Every day without a proper website is a day your competitors are getting enquiries you're missing. A professional site starts paying for itself quickly.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-3">No Patchwork Fixes</h3>
                  <p className="text-foreground/70 text-[15px] leading-relaxed">DIY site builders and cheap fixes add up. One well-built website replaces years of patchwork — saving you money and headaches long-term.</p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn className="text-center mb-14">
            <span className="eyebrow mb-4 inline-block">Pricing</span>
            <h2 className="text-3xl" data-testid="text-pricing-heading">What Affects the Price</h2>
            <p className="text-foreground/70 mt-4 max-w-2xl mx-auto leading-relaxed">Every business is different, so I quote each project individually. Here's a rough guide to help you budget.</p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8 mb-10">
            <FadeIn>
              <div className="border border-gray-200/80 p-7 rounded-[4px] text-center card-hover" data-testid="card-pricing-starter">
                <h3 className="text-lg font-bold mb-2">Starter Site</h3>
                <p className="text-2xl font-bold text-accent mb-3">From €500</p>
                <p className="text-foreground/70 text-[15px] leading-relaxed">A clean 1–3 page site for tradespeople or new businesses who need a professional online presence quickly.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="border-2 border-accent p-7 rounded-[4px] text-center card-hover relative" data-testid="card-pricing-business">
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">Most Popular</span>
                <h3 className="text-lg font-bold mb-2">Business Site</h3>
                <p className="text-2xl font-bold text-accent mb-3">From €900</p>
                <p className="text-foreground/70 text-[15px] leading-relaxed">A 4–8 page website with multiple service pages, contact forms, SEO, and Google Maps — ideal for established businesses.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="border border-gray-200/80 p-7 rounded-[4px] text-center card-hover" data-testid="card-pricing-custom">
                <h3 className="text-lg font-bold mb-2">Custom / Redesign</h3>
                <p className="text-2xl font-bold text-accent mb-3">Let's Talk</p>
                <p className="text-foreground/70 text-[15px] leading-relaxed">Larger sites, e-commerce, booking systems, or a complete redesign of an existing site — priced based on scope.</p>
              </div>
            </FadeIn>
          </div>

          <FadeIn className="text-center mb-24">
            <p className="text-foreground/70 text-[15px]">All prices are indicative. I'll give you a clear, fixed quote after a free consultation — no hidden fees, no surprises.</p>
          </FadeIn>

          <FadeIn className="text-center mb-14">
            <span className="eyebrow mb-4 inline-block">Common Questions</span>
            <h2 className="text-3xl" data-testid="text-faq-heading">Frequently Asked Questions</h2>
          </FadeIn>

          <FadeIn className="max-w-3xl mx-auto mb-24">
            <Accordion type="single" collapsible className="w-full" data-testid="faq-list">
              <AccordionItem value="wd-faq-1">
                <AccordionTrigger className="text-left text-base font-semibold" data-testid="faq-trigger-wd-1">
                  How long does it take to build a website?
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70 leading-relaxed" data-testid="faq-content-wd-1">
                  Most projects take 2–4 weeks from start to launch. A simple brochure site can be ready faster, while larger sites with custom features may take a little longer. I'll give you a clear timeline before we start.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="wd-faq-2">
                <AccordionTrigger className="text-left text-base font-semibold" data-testid="faq-trigger-wd-2">
                  What do I need to provide?
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70 leading-relaxed" data-testid="faq-content-wd-2">
                  Just your logo (if you have one), a rough idea of what pages you want, and some photos of your work. Don't worry if you're not sure — I'll guide you through the whole process and can help with content, copywriting, and image sourcing.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="wd-faq-3">
                <AccordionTrigger className="text-left text-base font-semibold" data-testid="faq-trigger-wd-3">
                  Do you help with SEO and Google rankings?
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70 leading-relaxed" data-testid="faq-content-wd-3">
                  Yes. Every website I build includes on-page SEO — proper headings, meta descriptions, fast loading times, and mobile-friendly design. I also offer guidance on Google Business Profile setup to help you rank in local map results.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="wd-faq-4">
                <AccordionTrigger className="text-left text-base font-semibold" data-testid="faq-trigger-wd-4">
                  Will I be able to update the site myself?
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70 leading-relaxed" data-testid="faq-content-wd-4">
                  That depends on the type of site. Some projects include a content management system so you can make simple updates. For most small business sites, I handle updates for you as part of an affordable maintenance plan — so you can focus on running your business.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="wd-faq-5">
                <AccordionTrigger className="text-left text-base font-semibold" data-testid="faq-trigger-wd-5">
                  Do you offer hosting and ongoing support?
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70 leading-relaxed" data-testid="faq-content-wd-5">
                  Yes. I offer hosting and maintenance care plans that include security updates, backups, and content changes. You deal directly with me — no call centres or ticket systems.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="wd-faq-6">
                <AccordionTrigger className="text-left text-base font-semibold" data-testid="faq-trigger-wd-6">
                  I already have a website but it's outdated — can you help?
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70 leading-relaxed" data-testid="faq-content-wd-6">
                  Absolutely. I regularly redesign and rebuild existing websites. Whether your current site is slow, not mobile-friendly, or just not bringing in enquiries, I can give it a fresh start with modern design and proper SEO.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </FadeIn>

          <FadeIn className="text-center mb-14">
            <span className="eyebrow mb-4 inline-block">Related Services</span>
            <h2 className="text-3xl">More Ways I Can Help Your Business</h2>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            <StaggerItem>
              <Link href="/microsoft-365">
                <div className="border border-gray-200/80 p-7 rounded-[4px] card-hover cursor-pointer" data-testid="link-service-m365">
                  <h3 className="text-lg font-bold mb-3">Microsoft 365 Setup</h3>
                  <p className="text-foreground/70 text-[15px] leading-relaxed">Professional email, cloud storage, and productivity tools — set up properly so your business runs smoothly.</p>
                  <span className="text-accent text-sm font-semibold mt-3 inline-block">Learn more →</span>
                </div>
              </Link>
            </StaggerItem>
            <StaggerItem>
              <Link href="/network-wifi-security">
                <div className="border border-gray-200/80 p-7 rounded-[4px] card-hover cursor-pointer" data-testid="link-service-network">
                  <h3 className="text-lg font-bold mb-3">Network & Wi-Fi</h3>
                  <p className="text-foreground/70 text-[15px] leading-relaxed">Reliable internet and secure networking for offices, workshops, and retail spaces across the midlands.</p>
                  <span className="text-accent text-sm font-semibold mt-3 inline-block">Learn more →</span>
                </div>
              </Link>
            </StaggerItem>
            <StaggerItem>
              <Link href="/portfolio">
                <div className="border border-gray-200/80 p-7 rounded-[4px] card-hover cursor-pointer" data-testid="link-service-portfolio">
                  <h3 className="text-lg font-bold mb-3">See My Work</h3>
                  <p className="text-foreground/70 text-[15px] leading-relaxed">Browse real examples of websites I've built for local businesses — and see the results they're getting.</p>
                  <span className="text-accent text-sm font-semibold mt-3 inline-block">View portfolio →</span>
                </div>
              </Link>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      <section className="py-24 section-gradient border-t border-gray-100 text-center">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl mb-4" data-testid="text-bottom-cta-heading">Ready to Get a Website That Works for Your Business?</h2>
            <p className="text-foreground/70 mb-8 max-w-xl mx-auto leading-relaxed">Book a free, no-obligation consultation and I'll show you exactly how a professional website can help you win more customers.</p>
            <Link href="/contact#send-message">
              <Button data-testid="button-bottom-cta" size="lg" className="bg-primary text-white hover:bg-primary/90 rounded-[4px] font-semibold h-12 px-8 text-sm transition-all duration-200">
                Book a Free Website Consultation
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
