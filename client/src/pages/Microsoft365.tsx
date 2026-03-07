import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Cloud, ShieldCheck, Mail, Users, FileLock, CheckCircle, XCircle, HelpCircle, ArrowRight, Monitor, Wrench } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/FadeIn";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Microsoft365() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="section-gradient py-24 md:py-32 border-b border-gray-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn>
            <span className="eyebrow mb-4 inline-block">Microsoft 365</span>
            <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.1] mb-6" data-testid="text-page-title">
              Microsoft 365 Setup & Business Email for Small Businesses in Ireland
            </h1>
            <p className="text-xl text-foreground/70 mb-8 leading-relaxed" data-testid="text-hero-description">
              Stop losing emails, sharing files by USB stick, or paying for tools you don't understand. I set up Microsoft 365 properly so your business email, file sharing, and collaboration just work — securely, from anywhere.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-accent text-white hover:bg-[#0fa079] rounded-[4px] font-semibold h-12 px-8 text-sm transition-all duration-200 shadow-sm hover:shadow-lg" data-testid="button-hero-cta">
                  Book a Free Consultation
                </Button>
              </Link>
              <Link href="/web-design">
                <Button variant="outline" size="lg" className="rounded-[4px] font-semibold h-12 px-8 text-sm transition-all duration-200" data-testid="link-web-design">
                  View Web Design Services <ArrowRight className="ml-2" size={16} />
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn className="text-center mb-14">
            <span className="eyebrow mb-4 inline-block">Is This for You?</span>
            <h2 className="text-3xl">Who This Is For</h2>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Tradespeople & Contractors", desc: "You need a professional email address and a simple way to share quotes, invoices, and site photos — not a personal Gmail." },
              { title: "Small Offices & Teams", desc: "You have 2–20 staff and need email, shared calendars, and file storage that everyone can access without IT headaches." },
              { title: "Professional Services", desc: "Accountants, solicitors, consultants — you handle sensitive client data and need proper security, not consumer-grade email." },
              { title: "Growing Businesses", desc: "You've outgrown free email and ad-hoc file sharing. You need a system that scales as you hire." },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="border border-gray-200/80 p-8 rounded-[4px] card-hover" data-testid={`card-who-for-${item.title.toLowerCase().replace(/\s+/g, '-')}`}>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-foreground/70 text-[15px] leading-relaxed">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-28 bg-secondary border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn className="text-center mb-14">
            <span className="eyebrow mb-4 inline-block">Full Service</span>
            <h2 className="text-3xl">What's Included</h2>
            <p className="text-foreground/70 mt-4 max-w-2xl mx-auto leading-relaxed">
              I don't just hand you a licence key and wish you luck. Every setup includes hands-on configuration, migration, and training so your team is productive from day one.
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 gap-8">
            {[
              { icon: <Mail className="text-accent shrink-0" size={32} />, title: "Professional Business Email", desc: "Custom domain email (you@yourbusiness.ie) with 50 GB+ mailboxes, shared calendars, and contacts on Exchange Online." },
              { icon: <Cloud className="text-accent shrink-0" size={32} />, title: "Licensing & Subscription Advice", desc: "I recommend the right Microsoft 365 plan for your needs — no upselling, no unnecessary features you'll never use." },
              { icon: <Users className="text-accent shrink-0" size={32} />, title: "Teams & Collaboration Setup", desc: "Microsoft Teams configured for chat, video calls, and team channels so your staff can work together — in the office or remotely." },
              { icon: <FileLock className="text-accent shrink-0" size={32} />, title: "OneDrive & SharePoint", desc: "Cloud file storage that replaces USB sticks and local servers. Version-controlled, accessible from anywhere, properly organised." },
              { icon: <ShieldCheck className="text-accent shrink-0" size={32} />, title: "Security & Compliance", desc: "Multi-Factor Authentication (MFA), tenant hardening, and security policies to protect your business against phishing and data breaches." },
              { icon: <Wrench className="text-accent shrink-0" size={32} />, title: "Email Migration", desc: "Safe migration from POP/IMAP, Gmail, or legacy Exchange — zero data loss, minimal downtime, and clear communication throughout." },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="bg-white border border-gray-200/80 p-8 rounded-[4px] flex gap-6 card-hover" data-testid={`card-included-${item.title.toLowerCase().replace(/\s+/g, '-')}`}>
                  {item.icon}
                  <div>
                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                    <p className="text-foreground/70 text-[15px] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Without vs With Comparison */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn className="text-center mb-14">
            <span className="eyebrow mb-4 inline-block">The Difference</span>
            <h2 className="text-3xl">Without Professional Setup vs With Professional Setup</h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            <FadeIn delay={0.05}>
              <div className="border border-red-200 bg-red-50/40 p-8 rounded-[4px] h-full" data-testid="card-comparison-without">
                <h3 className="text-lg font-bold mb-6 text-red-700 flex items-center gap-2">
                  <XCircle size={20} /> Without Professional Setup
                </h3>
                <ul className="space-y-4">
                  {[
                    "Free email addresses that look unprofessional to clients",
                    "Files scattered across USB sticks, personal laptops, and email attachments",
                    "No security — one phishing email could compromise everything",
                    "Staff can't access what they need when working remotely",
                    "Paying for licences you don't need or missing features you do",
                    "Hours wasted troubleshooting problems you shouldn't have",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[15px] text-red-800/80">
                      <XCircle className="text-red-400 shrink-0 mt-0.5" size={16} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="border border-green-200 bg-green-50/40 p-8 rounded-[4px] h-full" data-testid="card-comparison-with">
                <h3 className="text-lg font-bold mb-6 text-green-700 flex items-center gap-2">
                  <CheckCircle size={20} /> With Professional Setup
                </h3>
                <ul className="space-y-4">
                  {[
                    "Professional you@yourbusiness.ie email that builds client trust",
                    "All files in one secure, organised cloud — accessible from any device",
                    "MFA and security policies protecting your data from day one",
                    "Staff can collaborate seamlessly whether in the office or on-site",
                    "The right plan at the right price — nothing wasted",
                    "Ongoing support so problems get solved quickly by someone who knows your setup",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[15px] text-green-800/80">
                      <CheckCircle className="text-green-500 shrink-0 mt-0.5" size={16} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Why Proper Setup Saves You Money */}
      <section className="py-28 bg-secondary border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn>
            <div className="text-center mb-14">
              <span className="eyebrow mb-4 inline-block">Smart Investment</span>
              <h2 className="text-3xl">Why Proper Setup Saves You Money</h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Avoid Costly Mistakes", desc: "A misconfigured tenant can lead to data breaches, lost emails, or compliance failures. Getting it right from the start prevents expensive emergency fixes later." },
              { title: "Stop Paying for What You Don't Need", desc: "Many businesses are on the wrong Microsoft 365 plan — overpaying for features they'll never use. I match the right plan to your actual needs." },
              { title: "Reduce Downtime & Wasted Hours", desc: "When email goes down or files disappear, your business stops. Professional setup means fewer problems, and when issues arise, someone who knows your system can fix them fast." },
            ].map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.1}>
                <div className="bg-white border border-gray-200/80 p-8 rounded-[4px] h-full" data-testid={`card-saves-money-${index}`}>
                  <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                  <p className="text-foreground/70 text-[15px] leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Guidance */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn className="text-center mb-14">
            <span className="eyebrow mb-4 inline-block">Pricing</span>
            <h2 className="text-3xl">What Affects the Price</h2>
            <p className="text-foreground/70 mt-4 max-w-2xl mx-auto leading-relaxed">
              Every business is different, so I quote based on your specific needs. Here's what typically influences the cost:
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-14 items-start">
            <FadeIn>
              <ul className="space-y-5">
                {[
                  { factor: "Number of users", detail: "More mailboxes and licences means a larger setup scope." },
                  { factor: "Migration complexity", detail: "Moving from Gmail is simpler than migrating a legacy Exchange server with years of data." },
                  { factor: "Security requirements", detail: "Basic MFA setup vs advanced compliance policies for regulated industries." },
                  { factor: "Training needs", detail: "A quick walkthrough vs hands-on training sessions for your full team." },
                  { factor: "Ongoing support", detail: "One-off setup vs monthly support and administration." },
                ].map((item) => (
                  <li key={item.factor} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-accent rounded-sm shrink-0 mt-2.5"></span>
                    <div>
                      <span className="font-semibold text-[15px]">{item.factor}:</span>
                      <span className="text-foreground/70 text-[15px] ml-1">{item.detail}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="bg-secondary border border-gray-200/80 p-8 rounded-[4px]" data-testid="card-pricing-guidance">
                <h3 className="text-lg font-bold mb-4">Indicative Ranges</h3>
                <ul className="space-y-4 text-[15px]">
                  <li className="flex justify-between border-b border-gray-200 pb-3">
                    <span className="text-foreground/70">Basic setup (1–5 users)</span>
                    <span className="font-semibold">From €250</span>
                  </li>
                  <li className="flex justify-between border-b border-gray-200 pb-3">
                    <span className="text-foreground/70">Full migration & setup (5–20 users)</span>
                    <span className="font-semibold">From €500</span>
                  </li>
                  <li className="flex justify-between border-b border-gray-200 pb-3">
                    <span className="text-foreground/70">Security hardening add-on</span>
                    <span className="font-semibold">From €150</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-foreground/70">Monthly support & admin</span>
                    <span className="font-semibold">From €50/mo</span>
                  </li>
                </ul>
                <p className="text-foreground/50 text-sm mt-6 leading-relaxed">
                  These are starting points — I'll give you an exact quote after a free discovery call. Microsoft 365 licence fees are separate and billed directly by Microsoft.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-28 bg-secondary border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn className="text-center mb-14">
            <span className="eyebrow mb-4 inline-block">Common Questions</span>
            <h2 className="text-3xl">Frequently Asked Questions</h2>
          </FadeIn>

          <FadeIn>
            <Accordion type="single" collapsible className="w-full" data-testid="faq-accordion">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left text-base font-semibold" data-testid="faq-question-1">
                  I already have Gmail — why would I switch to Microsoft 365?
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70 leading-relaxed" data-testid="faq-answer-1">
                  Gmail works fine for personal use, but Microsoft 365 gives you a professional email address on your own domain, better security controls, and tools like Teams, OneDrive, and SharePoint that are designed for business collaboration. It also makes it much easier to manage staff accounts as you grow.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left text-base font-semibold" data-testid="faq-question-2">
                  Will I lose any emails during migration?
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70 leading-relaxed" data-testid="faq-answer-2">
                  No. I use proven migration tools and processes to ensure every email, contact, and calendar entry is transferred safely. I'll also run checks after migration to confirm everything has moved across correctly.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left text-base font-semibold" data-testid="faq-question-3">
                  I'm not technical — will this be complicated for me?
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70 leading-relaxed" data-testid="faq-answer-3">
                  Not at all. I handle all the technical setup and configuration. You'll receive plain-English guidance and training so you and your team can use everything confidently. That's exactly why I exist — so you don't have to be technical.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left text-base font-semibold" data-testid="faq-question-4">
                  How long does the setup take?
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70 leading-relaxed" data-testid="faq-answer-4">
                  A basic setup for a small team (1–5 users) can typically be completed within a few days. Larger migrations with complex email histories may take one to two weeks, but I'll give you a clear timeline before we start.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left text-base font-semibold" data-testid="faq-question-5">
                  Do you offer ongoing support after setup?
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70 leading-relaxed" data-testid="faq-answer-5">
                  Yes. I offer flexible monthly support plans that cover user management, troubleshooting, security updates, and general administration — so you always have someone to call who knows your setup inside out.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger className="text-left text-base font-semibold" data-testid="faq-question-6">
                  Which Microsoft 365 plan do I need?
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70 leading-relaxed" data-testid="faq-answer-6">
                  It depends on your needs. Most small businesses do well with Microsoft 365 Business Basic or Business Standard. I'll assess what you actually need and recommend the most cost-effective option — no upselling.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 section-gradient border-t border-gray-100 text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <FadeIn>
            <h2 className="text-3xl mb-4">Ready to Get Your Email and IT Working Properly?</h2>
            <p className="text-foreground/70 mb-8 leading-relaxed">
              Book a free, no-obligation consultation. I'll assess your current setup, recommend the right plan, and give you a clear quote — in plain English.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-accent text-white hover:bg-[#0fa079] rounded-[4px] font-semibold h-12 px-8 text-sm transition-all duration-200 shadow-sm hover:shadow-lg" data-testid="button-cta-consultation">
                  Book a Free Consultation
                </Button>
              </Link>
              <Link href="/network-wifi-security">
                <Button variant="outline" size="lg" className="rounded-[4px] font-semibold h-12 px-8 text-sm transition-all duration-200" data-testid="link-network">
                  Network & Wi-Fi Services <ArrowRight className="ml-2" size={16} />
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
