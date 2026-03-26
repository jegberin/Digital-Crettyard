import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Cloud, ShieldCheck, Mail, Users, FileLock, CheckCircle, XCircle, ArrowRight, Monitor, Wrench, Calendar, Globe, HardDrive } from "lucide-react";
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
      <section className="bg-[#f3f4f5] py-24 md:py-32 dot-matrix-bg">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn>
            <span className="eyebrow mb-5 inline-block">Microsoft 365</span>
            <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.1] mb-6" data-testid="text-page-title">
              Microsoft 365 Setup &amp; Business Email for Small Businesses in Ireland
            </h1>
            <p className="text-xl text-foreground/70 mb-8 leading-relaxed font-sans font-normal" data-testid="text-hero-description">
              Stop losing emails, sharing files by USB stick, or paying for tools you don't understand. I set up Microsoft 365 properly so your business email, file sharing, and collaboration just work — securely, from anywhere.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact#send-message">
                <Button size="lg" className="px-10" data-testid="button-hero-cta">
                  Book a Free Consultation
                </Button>
              </Link>
              <Link href="/network-wifi-security">
                <Button variant="outline" size="lg" className="px-8" data-testid="link-network">
                  Network &amp; Wi-Fi Services <ArrowRight className="ml-2" size={16} />
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Key Benefits — Icon + Benefit Blocks */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn className="text-center mb-14">
            <span className="eyebrow mb-5 inline-block">Key Benefits</span>
            <h2 className="text-3xl">What Microsoft 365 Does for Your Business</h2>
            <p className="text-foreground/70 mt-4 max-w-2xl mx-auto leading-relaxed font-sans font-normal">
              Six ways a properly configured Microsoft 365 subscription makes your business run better every day.
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-0">
            {[
              {
                icon: <Mail className="text-accent" size={28} />,
                title: "Professional Email",
                benefit: "Send emails from you@yourbusiness.ie — not a personal Gmail. Instantly builds credibility and trust with every client you contact."
              },
              {
                icon: <HardDrive className="text-accent" size={28} />,
                title: "Cloud File Storage",
                benefit: "All your files in one secure, organised place. Access quotes, invoices, and photos from any device — no more USB sticks or lost attachments."
              },
              {
                icon: <Users className="text-accent" size={28} />,
                title: "Team Collaboration",
                benefit: "Microsoft Teams lets your team chat, share files, and join video calls — whether they're in the office, on-site, or working from home."
              },
              {
                icon: <Calendar className="text-accent" size={28} />,
                title: "Shared Calendars",
                benefit: "Everyone sees the same schedule. Book meetings, set reminders, and share availability without endless back-and-forth messages."
              },
              {
                icon: <Globe className="text-accent" size={28} />,
                title: "Work from Anywhere",
                benefit: "Whether your team is in the office, on a job, or at home — they can access everything they need securely from any device."
              },
              {
                icon: <ShieldCheck className="text-accent" size={28} />,
                title: "Expert Setup &amp; Support",
                benefit: "I configure everything correctly from day one — including security policies, MFA, and migration of existing emails — so you're protected and productive immediately."
              },
            ].map((item, i) => (
              <StaggerItem key={i}>
                <div className="bg-[#f3f4f5] p-7 rounded-2xl card-hover h-full" data-testid={`card-benefit-${i}`}>
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="text-lg mb-2">{item.title}</h3>
                  <p className="text-foreground/70 text-[15px] leading-relaxed font-sans font-normal">{item.benefit}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-28 bg-[#f3f4f5]">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn className="text-center mb-14">
            <span className="eyebrow mb-5 inline-block">Is This for You?</span>
            <h2 className="text-3xl">Who This Is For</h2>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Tradespeople &amp; Contractors", desc: "You need a professional email address and a simple way to share quotes, invoices, and site photos — not a personal Gmail." },
              { title: "Small Offices &amp; Teams", desc: "You have 2–20 staff and need email, shared calendars, and file storage that everyone can access without IT headaches." },
              { title: "Professional Services", desc: "Accountants, solicitors, consultants — you handle sensitive client data and need proper security, not consumer-grade email." },
              { title: "Growing Businesses", desc: "You've outgrown free email and ad-hoc file sharing. You need a system that scales as you hire." },
            ].map((item, i) => (
              <StaggerItem key={i}>
                <div className="bg-white p-8 rounded-2xl card-hover" data-testid={`card-who-for-${i}`}>
                  <h3 className="text-lg mb-2" dangerouslySetInnerHTML={{ __html: item.title }} />
                  <p className="text-foreground/70 text-[15px] leading-relaxed font-sans font-normal">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Feature-to-Benefit Table */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn className="text-center mb-14">
            <span className="eyebrow mb-5 inline-block">Features vs Benefits</span>
            <h2 className="text-3xl">What the Features Actually Mean for You</h2>
            <p className="text-foreground/70 mt-4 max-w-2xl mx-auto leading-relaxed font-sans font-normal">
              Microsoft 365 has a lot of features. Here's what the key ones do in plain English.
            </p>
          </FadeIn>

          <FadeIn>
            <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm" data-testid="table-features-benefits">
              <table className="w-full text-[15px]">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="text-left px-6 py-4 font-headline font-bold">Feature</th>
                    <th className="text-left px-6 py-4 font-headline font-bold">What It Does for You</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "Exchange Online (Business Email)", benefit: "Professional @yourbusiness.ie email, 50 GB+ mailbox, shared calendars and contacts" },
                    { feature: "OneDrive", benefit: "Personal cloud storage — access your files from any device, never lose them again" },
                    { feature: "SharePoint", benefit: "Shared team file storage — everyone works from the same up-to-date documents" },
                    { feature: "Microsoft Teams", benefit: "Chat, video calls, and file sharing — your office communication in one app" },
                    { feature: "Microsoft 365 Apps (Word, Excel, etc.)", benefit: "Full Office apps on up to 5 devices — desktop, laptop, tablet, and phone" },
                    { feature: "Multi-Factor Authentication (MFA)", benefit: "Stops hackers even if they get your password — essential for any business email" },
                    { feature: "Admin Centre", benefit: "Add or remove staff accounts, reset passwords, and manage everything from one place" },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#f3f4f5]/50"}>
                      <td className="px-6 py-4 font-headline font-bold text-primary">{row.feature}</td>
                      <td className="px-6 py-4 text-foreground/70 font-sans">{row.benefit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-28 bg-[#f3f4f5]">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn className="text-center mb-14">
            <span className="eyebrow mb-5 inline-block">Full Service</span>
            <h2 className="text-3xl">What's Included in My Setup Service</h2>
            <p className="text-foreground/70 mt-4 max-w-2xl mx-auto leading-relaxed font-sans font-normal">
              I don't just hand you a licence key and wish you luck. Every setup includes hands-on configuration, migration, and training so your team is productive from day one.
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 gap-8">
            {[
              { icon: <Mail className="text-accent shrink-0" size={32} />, title: "Professional Business Email", desc: "Custom domain email (you@yourbusiness.ie) with 50 GB+ mailboxes, shared calendars, and contacts on Exchange Online." },
              { icon: <Cloud className="text-accent shrink-0" size={32} />, title: "Licensing &amp; Subscription Advice", desc: "I recommend the right Microsoft 365 plan for your needs — no upselling, no unnecessary features you'll never use." },
              { icon: <Users className="text-accent shrink-0" size={32} />, title: "Teams &amp; Collaboration Setup", desc: "Microsoft Teams configured for chat, video calls, and team channels so your staff can work together — in the office or remotely." },
              { icon: <FileLock className="text-accent shrink-0" size={32} />, title: "OneDrive &amp; SharePoint", desc: "Cloud file storage that replaces USB sticks and local servers. Version-controlled, accessible from anywhere, properly organised." },
              { icon: <ShieldCheck className="text-accent shrink-0" size={32} />, title: "Security &amp; Compliance", desc: "Multi-Factor Authentication (MFA), tenant hardening, and security policies to protect your business against phishing and data breaches." },
              { icon: <Wrench className="text-accent shrink-0" size={32} />, title: "Email Migration", desc: "Safe migration from POP/IMAP, Gmail, or legacy Exchange — zero data loss, minimal downtime, and clear communication throughout. Your old emails, contacts, and calendar entries come with you." },
            ].map((item, i) => (
              <StaggerItem key={i}>
                <div className="bg-white p-8 rounded-2xl flex gap-6 card-hover shadow-sm hover:shadow-lg transition-all duration-300" data-testid={`card-included-${i}`}>
                  {item.icon}
                  <div>
                    <h3 className="text-lg mb-2" dangerouslySetInnerHTML={{ __html: item.title }} />
                    <p className="text-foreground/70 text-[15px] leading-relaxed font-sans font-normal">{item.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Migration Reassurance */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn>
            <div className="bg-accent/5 border border-accent/20 rounded-2xl p-8 md:p-12" data-testid="section-migration-reassurance">
              <h2 className="text-2xl mb-6">Worried About Migrating Your Existing Email?</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-foreground/80 leading-relaxed mb-4 font-sans font-normal">
                    Moving to Microsoft 365 from Gmail, a personal email account, or an older system can sound daunting — but it doesn't have to be. I've migrated dozens of businesses without a single lost email.
                  </p>
                  <p className="text-foreground/80 leading-relaxed font-sans font-normal">
                    I plan every migration carefully, run it in stages if needed, and stay available throughout so any hiccup is fixed immediately. You'll be up and running on your new professional email with everything intact.
                  </p>
                </div>
                <ul className="space-y-3">
                  {[
                    "All existing emails moved across safely",
                    "Contacts and calendar entries preserved",
                    "Minimal disruption — often done overnight",
                    "Clear communication at every step",
                    "Test run before going live",
                    "I stay available until you're comfortable",
                  ].map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-foreground/80 font-sans text-[15px]">
                      <CheckCircle className="text-accent shrink-0 mt-0.5" size={17} />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Without vs With Comparison */}
      <section className="py-28 bg-[#f3f4f5]">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn className="text-center mb-14">
            <span className="eyebrow mb-5 inline-block">The Difference</span>
            <h2 className="text-3xl">Without Professional Setup vs With Professional Setup</h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            <FadeIn delay={0.05}>
              <div className="bg-red-50/60 p-8 rounded-2xl h-full" data-testid="card-comparison-without">
                <h3 className="text-lg mb-6 text-red-700 flex items-center gap-2">
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
                    <li key={item} className="flex items-start gap-3 text-[15px] text-red-800/80 font-sans">
                      <XCircle className="text-red-400 shrink-0 mt-0.5" size={16} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="bg-green-50/60 p-8 rounded-2xl h-full" data-testid="card-comparison-with">
                <h3 className="text-lg mb-6 text-green-700 flex items-center gap-2">
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
                    <li key={item} className="flex items-start gap-3 text-[15px] text-green-800/80 font-sans">
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
      <section className="py-28 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn>
            <div className="text-center mb-14">
              <span className="eyebrow mb-5 inline-block">Smart Investment</span>
              <h2 className="text-3xl">Why Proper Setup Saves You Money</h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Avoid Costly Mistakes", desc: "A misconfigured tenant can lead to data breaches, lost emails, or compliance failures. Getting it right from the start prevents expensive emergency fixes later." },
              { title: "Stop Paying for What You Don't Need", desc: "Many businesses are on the wrong Microsoft 365 plan — overpaying for features they'll never use. I match the right plan to your actual needs." },
              { title: "Reduce Downtime &amp; Wasted Hours", desc: "When email goes down or files disappear, your business stops. Professional setup means fewer problems, and when issues arise, someone who knows your system can fix them fast." },
            ].map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.1}>
                <div className="bg-[#f3f4f5] p-8 rounded-2xl h-full" data-testid={`card-saves-money-${index}`}>
                  <h3 className="text-lg mb-3">{item.title}</h3>
                  <p className="text-foreground/70 text-[15px] leading-relaxed font-sans font-normal" dangerouslySetInnerHTML={{ __html: item.desc }} />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Guidance */}
      <section className="py-28 bg-[#f3f4f5]">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn className="text-center mb-14">
            <span className="eyebrow mb-5 inline-block">Pricing</span>
            <h2 className="text-3xl">What Affects the Price</h2>
            <p className="text-foreground/70 mt-4 max-w-2xl mx-auto leading-relaxed font-sans font-normal">
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
                    <span className="w-1.5 h-1.5 bg-accent rounded-full shrink-0 mt-2.5"></span>
                    <div>
                      <span className="font-headline font-bold text-[15px]">{item.factor}:</span>
                      <span className="text-foreground/70 text-[15px] ml-1 font-sans">{item.detail}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="bg-white p-8 rounded-2xl shadow-sm" data-testid="card-pricing-guidance">
                <h3 className="text-lg mb-4">Indicative Ranges</h3>
                <ul className="space-y-4 text-[15px] font-sans">
                  <li className="flex justify-between border-b border-gray-100 pb-3">
                    <span className="text-foreground/70">Basic setup (1–5 users)</span>
                    <span className="font-headline font-bold">From €250</span>
                  </li>
                  <li className="flex justify-between border-b border-gray-100 pb-3">
                    <span className="text-foreground/70">Full migration &amp; setup (5–20 users)</span>
                    <span className="font-headline font-bold">From €500</span>
                  </li>
                  <li className="flex justify-between border-b border-gray-100 pb-3">
                    <span className="text-foreground/70">Security hardening add-on</span>
                    <span className="font-headline font-bold">From €150</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-foreground/70">Monthly support &amp; admin</span>
                    <span className="font-headline font-bold">From €50/mo</span>
                  </li>
                </ul>
                <p className="text-foreground/50 text-sm mt-6 leading-relaxed font-sans">
                  These are starting points — I'll give you an exact quote after a free discovery call. Microsoft 365 licence fees are separate and billed directly by Microsoft.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn className="text-center mb-14">
            <span className="eyebrow mb-5 inline-block">Common Questions</span>
            <h2 className="text-3xl">Frequently Asked Questions</h2>
          </FadeIn>

          <FadeIn>
            <Accordion type="single" collapsible className="w-full" data-testid="faq-accordion">
              {[
                { id: "item-1", q: "I already have Gmail — why would I switch to Microsoft 365?", a: "Gmail works fine for personal use, but Microsoft 365 gives you a professional email address on your own domain, better security controls, and tools like Teams, OneDrive, and SharePoint that are designed for business collaboration. It also makes it much easier to manage staff accounts as you grow." },
                { id: "item-2", q: "Will I lose any emails during migration?", a: "No. I use proven migration tools and processes to ensure every email, contact, and calendar entry is transferred safely. I'll also run checks after migration to confirm everything has moved across correctly." },
                { id: "item-3", q: "I'm not technical — will this be complicated for me?", a: "Not at all. I handle all the technical setup and configuration. You'll receive plain-English guidance and training so you and your team can use everything confidently. That's exactly why I exist — so you don't have to be technical." },
                { id: "item-4", q: "How long does the setup take?", a: "A basic setup for a small team (1–5 users) can typically be completed within a few days. Larger migrations with complex email histories may take one to two weeks, but I'll give you a clear timeline before we start." },
                { id: "item-5", q: "Do you offer ongoing support after setup?", a: "Yes. I offer flexible monthly support plans that cover user management, troubleshooting, security updates, and general administration — so you always have someone to call who knows your setup inside out." },
                { id: "item-6", q: "Which Microsoft 365 plan do I need?", a: "It depends on your needs. Most small businesses do well with Microsoft 365 Business Basic or Business Standard. I'll assess what you actually need and recommend the most cost-effective option — no upselling." },
              ].map((faq) => (
                <AccordionItem key={faq.id} value={faq.id}>
                  <AccordionTrigger className="text-left text-base font-headline font-bold">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-foreground/70 leading-relaxed font-sans">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary dot-matrix-bg text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <FadeIn>
            <h2 className="text-3xl text-white mb-4">Ready to Get Your Email and IT Working Properly?</h2>
            <p className="text-white/70 mb-8 leading-relaxed font-sans font-normal">
              Book a free, no-obligation consultation. I'll assess your current setup, recommend the right plan, and give you a clear quote — in plain English.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact#send-message">
                <Button size="lg" className="px-10 bg-accent text-white hover:bg-[#18a07e]" data-testid="button-cta-consultation">
                  Book a Free Consultation
                </Button>
              </Link>
              <Link href="/network-wifi-security">
                <Button variant="outline" size="lg" className="px-8 border-white/30 text-white hover:bg-white/10" data-testid="link-network-cta">
                  Network &amp; Wi-Fi Services <ArrowRight className="ml-2" size={16} />
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
