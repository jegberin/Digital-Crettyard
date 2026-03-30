import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { MonitorSmartphone, Search, Wrench, Smartphone, Rocket, FormInput, Users, CheckCircle, PiggyBank, ArrowRight } from "lucide-react";
import serviceImg from "@assets/service-web-design.png";
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
      <section className="bg-[#f3f4f5] py-20 md:py-28 dot-matrix-bg">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <span className="eyebrow mb-5 inline-block">Web Design</span>
              <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.1] mb-6" data-testid="text-page-title">
                Professional Website Design for Small Businesses in Laois & Carlow
              </h1>
              <p className="text-xl text-foreground/70 mb-8 leading-relaxed font-sans font-normal" data-testid="text-intro">
                Your website should be your hardest-working employee — bringing in enquiries, building trust, and making your business look as professional as the work you do. I design and build fast, mobile-friendly websites for tradespeople, contractors, and local service businesses across Laois, Carlow, and the surrounding counties.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/get-a-quote">
                  <Button data-testid="button-hero-get-quote" size="lg" className="px-10">
                    Get a Website Quote →
                  </Button>
                </Link>
                <Link href="/contact#send-message">
                  <Button data-testid="button-hero-cta" variant="outline" size="lg" className="px-8">
                    Book a Free Consultation
                  </Button>
                </Link>
              </div>
            </FadeIn>
            <FadeIn className="hidden md:block">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={serviceImg}
                  alt="A laptop displaying a professionally designed small business website"
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

      <section className="py-28 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn className="text-center mb-14">
            <span className="eyebrow mb-5 inline-block">Who It's For</span>
            <h2 className="text-3xl" data-testid="text-who-heading">Who This Is For</h2>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 gap-8 mb-24">
            <StaggerItem>
              <div className="p-7 rounded-2xl bg-[#f3f4f5] card-hover" data-testid="card-who-trades">
                <Users className="text-accent mb-5" size={28} />
                <h3 className="text-lg mb-3">Tradespeople & Contractors</h3>
                <p className="text-foreground/70 text-[15px] leading-relaxed font-sans font-normal">Plumbers, electricians, carpenters, builders — if you rely on word-of-mouth but want a professional online presence that brings in new work.</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="p-7 rounded-2xl bg-[#f3f4f5] card-hover" data-testid="card-who-service">
                <Rocket className="text-accent mb-5" size={28} />
                <h3 className="text-lg mb-3">Service Businesses</h3>
                <p className="text-foreground/70 text-[15px] leading-relaxed font-sans font-normal">Cleaners, landscapers, tutors, therapists — anyone providing local services who needs to be found by customers searching online.</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="p-7 rounded-2xl bg-[#f3f4f5] card-hover" data-testid="card-who-retail">
                <MonitorSmartphone className="text-accent mb-5" size={28} />
                <h3 className="text-lg mb-3">Retailers & Hospitality</h3>
                <p className="text-foreground/70 text-[15px] leading-relaxed font-sans font-normal">Shops, cafés, and B&Bs who need a website that shows opening hours, menus, or products — and looks great on every device.</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="p-7 rounded-2xl bg-[#f3f4f5] card-hover" data-testid="card-who-professional">
                <Search className="text-accent mb-5" size={28} />
                <h3 className="text-lg mb-3">Professional Services</h3>
                <p className="text-foreground/70 text-[15px] leading-relaxed font-sans font-normal">Accountants, solicitors, consultants — businesses that need a polished, credible web presence to attract and reassure clients.</p>
              </div>
            </StaggerItem>
          </StaggerContainer>

          <FadeIn className="text-center mb-14">
            <span className="eyebrow mb-5 inline-block">What You Get</span>
            <h2 className="text-3xl" data-testid="text-included-heading">What's Included</h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 mb-24">
            <FadeIn>
              <div className="bg-[#f3f4f5] p-8 rounded-2xl" data-testid="list-included-design">
                <h3 className="text-lg mb-4">Design & Build</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-[15px] font-sans"><CheckCircle className="text-accent shrink-0 mt-0.5" size={18} /> Custom design tailored to your brand — no templates</li>
                  <li className="flex items-start gap-3 text-[15px] font-sans"><CheckCircle className="text-accent shrink-0 mt-0.5" size={18} /> Mobile-first build that works on phones, tablets, and desktops</li>
                  <li className="flex items-start gap-3 text-[15px] font-sans"><CheckCircle className="text-accent shrink-0 mt-0.5" size={18} /> Fast loading speeds — no bloated page builders</li>
                  <li className="flex items-start gap-3 text-[15px] font-sans"><CheckCircle className="text-accent shrink-0 mt-0.5" size={18} /> Contact and quote request forms</li>
                  <li className="flex items-start gap-3 text-[15px] font-sans"><CheckCircle className="text-accent shrink-0 mt-0.5" size={18} /> Google Maps integration</li>
                </ul>
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="bg-[#f3f4f5] p-8 rounded-2xl" data-testid="list-included-seo">
                <h3 className="text-lg mb-4">SEO & Visibility</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-[15px] font-sans"><CheckCircle className="text-accent shrink-0 mt-0.5" size={18} /> On-page SEO for local search terms (e.g. "plumber Carlow")</li>
                  <li className="flex items-start gap-3 text-[15px] font-sans"><CheckCircle className="text-accent shrink-0 mt-0.5" size={18} /> Proper heading structure and semantic HTML</li>
                  <li className="flex items-start gap-3 text-[15px] font-sans"><CheckCircle className="text-accent shrink-0 mt-0.5" size={18} /> Meta titles and descriptions for every page</li>
                  <li className="flex items-start gap-3 text-[15px] font-sans"><CheckCircle className="text-accent shrink-0 mt-0.5" size={18} /> Google Business Profile guidance</li>
                  <li className="flex items-start gap-3 text-[15px] font-sans"><CheckCircle className="text-accent shrink-0 mt-0.5" size={18} /> SSL certificate and secure hosting setup</li>
                </ul>
              </div>
            </FadeIn>
            <FadeIn>
              <div className="bg-[#f3f4f5] p-8 rounded-2xl" data-testid="list-included-support">
                <h3 className="text-lg mb-4">Ongoing Support</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-[15px] font-sans"><CheckCircle className="text-accent shrink-0 mt-0.5" size={18} /> Hosting and domain management</li>
                  <li className="flex items-start gap-3 text-[15px] font-sans"><CheckCircle className="text-accent shrink-0 mt-0.5" size={18} /> Content updates when you need them</li>
                  <li className="flex items-start gap-3 text-[15px] font-sans"><CheckCircle className="text-accent shrink-0 mt-0.5" size={18} /> Security monitoring and backups</li>
                  <li className="flex items-start gap-3 text-[15px] font-sans"><CheckCircle className="text-accent shrink-0 mt-0.5" size={18} /> Direct access to me — no ticket queues</li>
                </ul>
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="bg-[#f3f4f5] p-8 rounded-2xl" data-testid="list-included-copywriting">
                <h3 className="text-lg mb-4">Content & Copywriting</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-[15px] font-sans"><CheckCircle className="text-accent shrink-0 mt-0.5" size={18} /> Conversion-focused page copy</li>
                  <li className="flex items-start gap-3 text-[15px] font-sans"><CheckCircle className="text-accent shrink-0 mt-0.5" size={18} /> Clear calls-to-action on every page</li>
                  <li className="flex items-start gap-3 text-[15px] font-sans"><CheckCircle className="text-accent shrink-0 mt-0.5" size={18} /> Image sourcing and optimisation</li>
                  <li className="flex items-start gap-3 text-[15px] font-sans"><CheckCircle className="text-accent shrink-0 mt-0.5" size={18} /> Help writing your "About" and service descriptions</li>
                </ul>
              </div>
            </FadeIn>
          </div>

          <FadeIn className="text-center mb-14">
            <span className="eyebrow mb-5 inline-block">Business Outcomes</span>
            <h2 className="text-3xl" data-testid="text-benefits-heading">How a Professional Website Helps Your Business</h2>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-8 mb-24">
            <StaggerItem>
              <div className="bg-[#f3f4f5] p-7 rounded-2xl card-hover" data-testid="card-benefit-found">
                <Search className="text-accent mb-5" size={28} />
                <h3 className="text-lg mb-3">Get Found by Local Customers</h3>
                <p className="text-foreground/70 text-[15px] leading-relaxed font-sans font-normal">When someone searches "electrician near me" or "carpet cleaning Laois", a properly built website puts you in front of them — not your competitor.</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-[#f3f4f5] p-7 rounded-2xl card-hover" data-testid="card-benefit-trust">
                <MonitorSmartphone className="text-accent mb-5" size={28} />
                <h3 className="text-lg mb-3">Build Instant Credibility</h3>
                <p className="text-foreground/70 text-[15px] leading-relaxed font-sans font-normal">A clean, professional website tells potential customers you're established, reliable, and worth calling — before they've even spoken to you.</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-[#f3f4f5] p-7 rounded-2xl card-hover" data-testid="card-benefit-leads">
                <FormInput className="text-accent mb-5" size={28} />
                <h3 className="text-lg mb-3">Turn Visitors into Enquiries</h3>
                <p className="text-foreground/70 text-[15px] leading-relaxed font-sans font-normal">Clear calls-to-action, quote request forms, and visible contact details mean more phone calls and emails from people ready to hire.</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-[#f3f4f5] p-7 rounded-2xl card-hover" data-testid="card-benefit-mobile">
                <Smartphone className="text-accent mb-5" size={28} />
                <h3 className="text-lg mb-3">Work on Every Device</h3>
                <p className="text-foreground/70 text-[15px] leading-relaxed font-sans font-normal">Over 60% of local searches happen on mobile. Your website will look great and load fast whether your customer is on a phone, tablet, or laptop.</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-[#f3f4f5] p-7 rounded-2xl card-hover" data-testid="card-benefit-time">
                <Rocket className="text-accent mb-5" size={28} />
                <h3 className="text-lg mb-3">Save You Time</h3>
                <p className="text-foreground/70 text-[15px] leading-relaxed font-sans font-normal">A good website answers common questions, shows your services, and pre-qualifies leads — so you spend less time explaining and more time doing the work.</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-[#f3f4f5] p-7 rounded-2xl card-hover" data-testid="card-benefit-maintenance">
                <Wrench className="text-accent mb-5" size={28} />
                <h3 className="text-lg mb-3">Stay Up-to-Date Effortlessly</h3>
                <p className="text-foreground/70 text-[15px] leading-relaxed font-sans font-normal">With ongoing maintenance plans, your site stays secure, fast, and current — without you lifting a finger.</p>
              </div>
            </StaggerItem>
          </StaggerContainer>

          <FadeIn className="mb-24" data-testid="section-saves-money">
            <div className="bg-primary p-10 md:p-14 rounded-2xl text-white">
              <div className="flex items-start gap-4 mb-6">
                <PiggyBank className="text-accent shrink-0 mt-1" size={32} />
                <h2 className="text-3xl text-white" data-testid="text-saves-heading">Why This Saves You Money</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-lg mb-3 text-white">Avoid Costly Rebuilds</h3>
                  <p className="text-white/70 text-[15px] leading-relaxed font-sans font-normal">A cheap website often needs replacing within a year. Investing properly from the start means you get a site that lasts and grows with your business.</p>
                </div>
                <div>
                  <h3 className="text-lg mb-3 text-white">Stop Missing Leads</h3>
                  <p className="text-white/70 text-[15px] leading-relaxed font-sans font-normal">Every day without a proper website is a day your competitors are getting enquiries you're missing. A professional site starts paying for itself quickly.</p>
                </div>
                <div>
                  <h3 className="text-lg mb-3 text-white">No Patchwork Fixes</h3>
                  <p className="text-white/70 text-[15px] leading-relaxed font-sans font-normal">DIY site builders and cheap fixes add up. One well-built website replaces years of patchwork — saving you money and headaches long-term.</p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn className="text-center mb-14">
            <span className="eyebrow mb-5 inline-block">Pricing</span>
            <h2 className="text-3xl" data-testid="text-pricing-heading">What Affects the Price</h2>
            <p className="text-foreground/70 mt-4 max-w-2xl mx-auto leading-relaxed font-sans font-normal">Every business is different, so I quote each project individually. Here's a rough guide to help you budget.</p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8 mb-10">
            <FadeIn>
              <div className="bg-[#f3f4f5] p-7 rounded-2xl text-center card-hover" data-testid="card-pricing-starter">
                <h3 className="text-lg mb-2">Starter Site</h3>
                <p className="text-2xl font-headline font-extrabold text-accent mb-3">From €500</p>
                <p className="text-foreground/70 text-[15px] leading-relaxed font-sans font-normal">A clean 1–3 page site for tradespeople or new businesses who need a professional online presence quickly.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="bg-accent/10 border-2 border-accent p-7 rounded-2xl text-center card-hover relative" data-testid="card-pricing-business">
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-headline font-bold px-4 py-1 rounded-full">Most Popular</span>
                <h3 className="text-lg mb-2">Business Site</h3>
                <p className="text-2xl font-headline font-extrabold text-accent mb-3">From €900</p>
                <p className="text-foreground/70 text-[15px] leading-relaxed font-sans font-normal">A 4–8 page website with multiple service pages, contact forms, SEO, and Google Maps — ideal for established businesses.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="bg-[#f3f4f5] p-7 rounded-2xl text-center card-hover" data-testid="card-pricing-custom">
                <h3 className="text-lg mb-2">Custom / Redesign</h3>
                <p className="text-2xl font-headline font-extrabold text-accent mb-3">Let's Talk</p>
                <p className="text-foreground/70 text-[15px] leading-relaxed font-sans font-normal">Larger sites, e-commerce, booking systems, or a complete redesign of an existing site — priced based on scope.</p>
              </div>
            </FadeIn>
          </div>

          <FadeIn className="text-center mb-24">
            <p className="text-foreground/70 text-[15px] font-sans mb-5">All prices are indicative. I'll give you a clear, fixed quote after a free consultation — no hidden fees, no surprises.</p>
            <Link href="/get-a-quote">
              <Button size="lg" className="px-10" data-testid="button-pricing-get-quote">
                Get Your Free Guide Quote →
              </Button>
            </Link>
          </FadeIn>

          <FadeIn className="text-center mb-14">
            <span className="eyebrow mb-5 inline-block">Common Questions</span>
            <h2 className="text-3xl" data-testid="text-faq-heading">Frequently Asked Questions</h2>
          </FadeIn>

          <FadeIn className="max-w-3xl mx-auto mb-24">
            <Accordion type="single" collapsible className="w-full" data-testid="faq-list">
              {[
                { id: "wd-faq-1", q: "How long does it take to build a website?", a: "Most projects take 2–4 weeks from start to launch. A simple brochure site can be ready faster, while larger sites with custom features may take a little longer. I'll give you a clear timeline before we start." },
                { id: "wd-faq-2", q: "What do I need to provide?", a: "Just your logo (if you have one), a rough idea of what pages you want, and some photos of your work. Don't worry if you're not sure — I'll guide you through the whole process and can help with content, copywriting, and image sourcing." },
                { id: "wd-faq-3", q: "Do you help with SEO and Google rankings?", a: "Yes. Every website I build includes on-page SEO — proper headings, meta descriptions, fast loading times, and mobile-friendly design. I also offer guidance on Google Business Profile setup to help you rank in local map results." },
                { id: "wd-faq-4", q: "Will I be able to update the site myself?", a: "That depends on the type of site. Some projects include a content management system so you can make simple updates. For most small business sites, I handle updates for you as part of an affordable maintenance plan — so you can focus on running your business." },
                { id: "wd-faq-5", q: "Do you offer hosting and ongoing support?", a: "Yes. I offer hosting and maintenance care plans that include security updates, backups, and content changes. You deal directly with me — no call centres or ticket systems." },
                { id: "wd-faq-6", q: "I already have a website but it's outdated — can you help?", a: "Absolutely. I regularly redesign and rebuild existing websites. Whether your current site is slow, not mobile-friendly, or just not bringing in enquiries, I can give it a fresh start with modern design and proper SEO." },
              ].map((faq) => (
                <AccordionItem key={faq.id} value={faq.id}>
                  <AccordionTrigger className="text-left text-base font-headline font-bold">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-foreground/70 leading-relaxed font-sans">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeIn>

          <FadeIn className="text-center mb-14">
            <span className="eyebrow mb-5 inline-block">Related Services</span>
            <h2 className="text-3xl">More Ways I Can Help Your Business</h2>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {[
              { href: "/microsoft-365", title: "Microsoft 365 Setup", desc: "Professional email, cloud storage, and productivity tools — set up properly so your business runs smoothly.", label: "Learn more →", testId: "link-service-m365" },
              { href: "/network-wifi-security", title: "Network & Wi-Fi", desc: "Reliable internet and secure networking for offices, workshops, and retail spaces across the midlands.", label: "Learn more →", testId: "link-service-network" },
              { href: "/portfolio", title: "See My Work", desc: "Browse real examples of websites I've built for local businesses — and see the results they're getting.", label: "View portfolio →", testId: "link-service-portfolio" },
            ].map((item) => (
              <StaggerItem key={item.href}>
                <Link href={item.href}>
                  <div className="bg-[#f3f4f5] p-7 rounded-2xl card-hover cursor-pointer" data-testid={item.testId}>
                    <h3 className="text-lg mb-3">{item.title}</h3>
                    <p className="text-foreground/70 text-[15px] leading-relaxed font-sans font-normal">{item.desc}</p>
                    <span className="text-accent text-sm font-headline font-bold mt-3 inline-block">{item.label}</span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-24 bg-primary dot-matrix-bg">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <FadeIn>
              <div className="text-center md:text-left">
                <h2 className="text-3xl text-white mb-4" data-testid="text-bottom-cta-heading">Ready to Get a Website That Works for Your Business?</h2>
                <p className="text-white/70 mb-8 font-sans font-normal leading-relaxed">Book a free, no-obligation consultation and I'll show you exactly how a professional website can help you win more customers.</p>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <Link href="/get-a-quote">
                    <Button size="lg" className="px-10 bg-accent text-white hover:bg-[#18a07e]" data-testid="button-cta-get-quote">
                      Get a Quote →
                    </Button>
                  </Link>
                  <Link href="/contact#send-message">
                    <Button size="lg" variant="outline" className="px-8 border-white/30 text-white hover:bg-white/10" data-testid="button-cta-consultation">
                      Book a Free Consultation
                    </Button>
                  </Link>
                </div>
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
