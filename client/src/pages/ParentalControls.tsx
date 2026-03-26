import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Shield, Search, Youtube, Ban, Clock, Smartphone, CheckCircle, HelpCircle, ArrowRight, Users, Home } from "lucide-react";
import serviceImg from "@assets/service-parental-controls.png";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/FadeIn";
import { FAQSchema } from "@/components/SEO";

const faqItems = [
  {
    q: "What kinds of things can be blocked?",
    a: "The setup can help block categories such as adult content and other inappropriate material, and can also be tailored to block selected sites, apps, or services where needed."
  },
  {
    q: "Can this work on more than one device?",
    a: "Yes, the goal is to help protect the devices your family uses, based on the setup you choose and the devices involved."
  },
  {
    q: "Can you help with YouTube and search safety?",
    a: "Yes, safer search settings and stricter YouTube filtering can be included as part of the setup."
  },
  {
    q: "Can time limits or schedule rules be added?",
    a: "Yes, sensible time-based rules can be set for selected services, apps, or categories where appropriate."
  },
  {
    q: "Do I need an in-home visit?",
    a: "Not always. Some families may be fine with a remote or simpler setup, while others may prefer an in-home visit if they want help applying the setup on multiple devices."
  },
  {
    q: "Is this a guarantee that my child will never see anything harmful online?",
    a: "No. No technical system can guarantee complete protection. This service adds a strong practical layer of safety and control, but open conversations, supervision, and device habits still matter."
  },
  {
    q: "Is this only for young children?",
    a: "No. The setup can be useful for different age groups, from younger children to teenagers, depending on the type of controls a parent wants in place."
  },
];

const benefits = [
  { icon: Shield, title: "Block harmful content", desc: "Help reduce access to adult material, violent content, and other categories most parents do not want children reaching by accident." },
  { icon: Search, title: "Safer search results", desc: "Add safer search filtering so explicit search results are reduced across major search engines." },
  { icon: Youtube, title: "Safer YouTube viewing", desc: "Apply stricter YouTube filtering to help reduce access to mature or inappropriate video content." },
  { icon: Ban, title: "App and website blocking", desc: "Block specific websites, apps, or online platforms where needed, based on what works for your family." },
  { icon: Clock, title: "Time-based rules", desc: "Put sensible time rules in place for selected apps, games, or categories — especially for evenings, homework time, or bedtime." },
  { icon: Smartphone, title: "Multi-device protection", desc: "Help apply the setup across the family's supported devices so the rules are not limited to just one screen." },
];

const steps = [
  { num: "1", title: "Tell me about your family setup", desc: "You send a short request with the devices you use and the kind of controls you want." },
  { num: "2", title: "I recommend a simple setup", desc: "I put together a practical setup based on your household, children's ages, and the level of control you want." },
  { num: "3", title: "Your protections are configured", desc: "Your family internet protections are set up to block harmful content and apply the rules you've asked for." },
  { num: "4", title: "You get a safer, easier setup to manage", desc: "You have a clearer, more controlled home internet environment without needing to become the expert." },
];

const whyReasons = [
  "Easier than trying to piece together settings across different devices.",
  "More consistent than relying on one app alone.",
  "Built around your family, not a generic one-size-fits-all setup.",
  "Plain-English help if you are not technical.",
  "Clearer boundaries for children and less stress for parents.",
];

const devices = [
  "iPhone / iPad",
  "Android phone / tablet",
  "Windows laptop / PC",
  "MacBook / iMac",
  "Smart TV",
  "Games console",
  "Home Wi-Fi / router",
  "Other",
];

const helpOptions = [
  "Block inappropriate websites",
  "Safer Google and search results",
  "Safer YouTube setup",
  "Block selected apps or games",
  "Time-based rules",
  "Help across multiple devices",
  "In-home setup visit (€79 once off)",
];

export default function ParentalControls() {
  const [submitted, setSubmitted] = useState<"idle" | "success" | "error">("idle");
  const [checkedDevices, setCheckedDevices] = useState<string[]>([]);
  const [checkedHelp, setCheckedHelp] = useState<string[]>([]);

  function toggleDevice(val: string) {
    setCheckedDevices(prev => prev.includes(val) ? prev.filter(d => d !== val) : [...prev, val]);
  }

  function toggleHelp(val: string) {
    setCheckedHelp(prev => prev.includes(val) ? prev.filter(h => h !== val) : [...prev, val]);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    checkedDevices.forEach(d => data.append("Devices used", d));
    checkedHelp.forEach(h => data.append("Help needed", h));
    try {
      const res = await fetch(form.action, { method: "POST", headers: { Accept: "application/json" }, body: data });
      setSubmitted(res.ok ? "success" : "error");
      if (res.ok) form.reset();
    } catch {
      setSubmitted("error");
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <FAQSchema items={faqItems.map(f => ({ question: f.q, answer: f.a }))} />

      {/* Hero */}
      <section className="bg-[#f3f4f5] py-20 md:py-28 dot-matrix-bg">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <span className="eyebrow mb-5 inline-block">Family Internet Safety</span>
              <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.1] mb-6" data-testid="text-page-title">
                Parental Controls That Help Keep Kids Safe Online
              </h1>
              <p className="text-xl text-foreground/70 mb-6 leading-relaxed font-sans font-normal">
                Protect your children from harmful content, reduce online risks, and put simple internet rules in place — without having to figure it all out on your own.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Block inappropriate websites and harmful content.",
                  "Add safer search and YouTube controls.",
                  "Set sensible limits for apps, games, and online access.",
                  "Get plain-English setup and support from a real local service.",
                ].map((b, i) => (
                  <li key={i} className="flex items-start gap-2 text-[15px] text-foreground/70 font-sans">
                    <CheckCircle className="text-accent mt-0.5 flex-shrink-0" size={16} />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="inline-flex flex-col gap-1 bg-white border border-accent/20 rounded-xl px-5 py-4 mb-8 shadow-sm">
                <span className="font-headline font-bold text-2xl text-primary">€99 <span className="text-base font-normal text-foreground/60">per year</span></span>
                <span className="text-sm text-foreground/60 font-sans">Optional in-home setup: <strong className="text-primary">€79</strong> once off</span>
              </div>
              <div className="flex flex-wrap gap-4">
                <a href="#request-form">
                  <Button size="lg" className="px-10" data-testid="button-hero-cta">
                    Request a Setup
                  </Button>
                </a>
                <a href="#how-it-works">
                  <Button variant="outline" size="lg" className="px-8" data-testid="link-how-it-works">
                    See How It Works <ArrowRight className="ml-2" size={16} />
                  </Button>
                </a>
              </div>
            </FadeIn>
            <FadeIn className="hidden md:block">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={serviceImg}
                  alt="A parent and child using a tablet together in a calm family home setting"
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

      {/* Pain Points / Empathy */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn className="mb-16 text-center">
            <span className="eyebrow mb-5 inline-block">You Are Not Alone</span>
            <h2 className="text-3xl mb-6">The Internet Can Feel Hard to Stay On Top Of</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto leading-relaxed font-sans font-normal">
              Children are online earlier, more often, and on more devices than ever. Many parents want to keep things safer, but the settings across phones, tablets, laptops, browsers, apps, and home internet can quickly become confusing.
            </p>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "I'm worried about what they might come across online.",
              "I don't want them stumbling onto adult or harmful content.",
              "I'm not sure which settings actually make a difference.",
              "I don't want a constant battle over apps, games, or screen habits.",
              "Every device seems to need different setup steps.",
              "I want help from someone who can just sort it properly.",
            ].map((point, i) => (
              <StaggerItem key={i}>
                <div className="bg-[#f3f4f5] px-5 py-5 rounded-2xl text-sm text-foreground/80 font-sans leading-relaxed border-l-4 border-accent" data-testid={`text-pain-point-${i}`}>
                  "{point}"
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* What the Service Helps With */}
      <section className="py-28 bg-[#f3f4f5]">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn className="mb-16 text-center">
            <span className="eyebrow mb-5 inline-block">What's Included</span>
            <h2 className="text-3xl mb-6">What This Setup Helps You Control</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto leading-relaxed font-sans font-normal">
              Each benefit below is explained in plain English — no technical dashboards or jargon involved.
            </p>
          </FadeIn>
          <StaggerContainer className="grid md:grid-cols-2 gap-6">
            {benefits.map((b, i) => (
              <StaggerItem key={i}>
                <div className="bg-white p-8 rounded-2xl card-hover shadow-sm hover:shadow-lg transition-all duration-300" data-testid={`card-benefit-${i}`}>
                  <b.icon className="text-accent mb-4" size={28} />
                  <h3 className="text-lg mb-3">{b.title}</h3>
                  <p className="text-foreground/70 text-[15px] leading-relaxed font-sans font-normal">{b.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-28 bg-white" id="how-it-works">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn className="mb-16 text-center">
            <span className="eyebrow mb-5 inline-block">Simple Process</span>
            <h2 className="text-3xl mb-6">How It Works</h2>
          </FadeIn>
          <StaggerContainer className="grid md:grid-cols-2 gap-8 mb-12">
            {steps.map((step, i) => (
              <StaggerItem key={i}>
                <div className="bg-[#f3f4f5] p-8 rounded-2xl card-hover" data-testid={`card-step-${i}`}>
                  <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-headline font-bold text-lg mb-5 flex-shrink-0">
                    {step.num}
                  </div>
                  <h3 className="text-lg mb-3">{step.title}</h3>
                  <p className="text-foreground/70 text-[15px] leading-relaxed font-sans font-normal">{step.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <FadeIn>
            <p className="text-center text-foreground/60 text-sm font-sans italic max-w-xl mx-auto">
              This is about making the internet safer and easier to manage — not making family life more complicated.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-28 bg-[#f3f4f5]" id="pricing">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn className="mb-16 text-center">
            <span className="eyebrow mb-5 inline-block">Pricing</span>
            <h2 className="text-3xl mb-6">Simple Pricing for Peace of Mind</h2>
          </FadeIn>
          <FadeIn>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-accent/20" data-testid="card-pricing-annual">
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="text-accent flex-shrink-0" size={28} />
                  <h3 className="text-xl">Managed parental controls</h3>
                </div>
                <div className="mb-6">
                  <span className="font-headline font-bold text-4xl text-primary">€99</span>
                  <span className="text-foreground/60 font-sans"> per year</span>
                </div>
                <ul className="space-y-3">
                  {[
                    "Parental controls setup",
                    "Safer content filtering",
                    "Search and video safety settings",
                    "App / site blocking where needed",
                    "Ongoing service for the year",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-[15px] text-foreground/70 font-sans">
                      <CheckCircle className="text-accent mt-0.5 flex-shrink-0" size={16} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <a href="#request-form" className="block mt-8">
                  <Button className="w-full" data-testid="button-pricing-annual">Request a Setup</Button>
                </a>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100" data-testid="card-pricing-visit">
                <div className="flex items-center gap-3 mb-6">
                  <Home className="text-accent flex-shrink-0" size={28} />
                  <h3 className="text-xl">Optional in-home setup</h3>
                </div>
                <div className="mb-6">
                  <span className="font-headline font-bold text-4xl text-primary">€79</span>
                  <span className="text-foreground/60 font-sans"> once off</span>
                </div>
                <p className="text-foreground/70 text-[15px] leading-relaxed font-sans">
                  For parents who want help installing and applying the setup on devices in person. I visit your home, walk through everything with you, and make sure the setup is working properly before I leave.
                </p>
                <a href="#request-form" className="block mt-8">
                  <Button variant="outline" className="w-full" data-testid="button-pricing-visit">Enquire About an In-Home Visit</Button>
                </a>
              </div>
            </div>
            <p className="text-center text-sm text-foreground/60 font-sans">
              Not sure if you need the in-home setup? Just ask — I'll advise based on your devices and home setup.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Why Parents Choose This */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn className="mb-12 text-center">
            <Users className="text-accent mx-auto mb-4" size={32} />
            <span className="eyebrow mb-5 inline-block">Why It Makes Sense</span>
            <h2 className="text-3xl mb-6">Why Parents Use a Managed Setup</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto leading-relaxed font-sans font-normal">
              Most parents do not want to spend hours jumping between device settings, browser controls, app restrictions, and home network options. A managed setup helps you put sensible protections in place properly, with clear support and no technical guesswork.
            </p>
          </FadeIn>
          <FadeIn>
            <div className="bg-[#f3f4f5] p-8 rounded-2xl max-w-2xl mx-auto">
              <ul className="space-y-4">
                {whyReasons.map((r, i) => (
                  <li key={i} className="flex items-start gap-3 text-[15px] text-foreground/80 font-sans" data-testid={`text-reason-${i}`}>
                    <CheckCircle className="text-accent mt-0.5 flex-shrink-0" size={18} />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
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

      {/* Request Form */}
      <section className="py-28 bg-white" id="request-form">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeIn className="mb-12 text-center">
            <span className="eyebrow mb-5 inline-block">Get Started</span>
            <h2 className="text-3xl mb-4">Request a Parental Controls Setup</h2>
            <p className="text-foreground/70 max-w-xl mx-auto leading-relaxed font-sans font-normal">
              Tell me a little about your home setup and what kind of help you need. I'll review it and come back to you with the best next step.
            </p>
          </FadeIn>

          <FadeIn>
            <div role="alert" aria-live="polite" aria-atomic="true" data-testid="alert-form-status">
              {submitted === "success" && (
                <div className="bg-accent/10 border border-accent/30 text-accent rounded-xl px-6 py-5 text-center font-sans font-medium">
                  Thank you — your request has been sent. I'll be in touch shortly.
                </div>
              )}
              {submitted === "error" && (
                <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl px-6 py-5 text-center font-sans font-medium">
                  Something went wrong. Please try again or email <a href="mailto:info@crettyard.ie" className="underline">info@crettyard.ie</a> directly.
                </div>
              )}
            </div>

            {submitted !== "success" && (
              <form
                action="https://formsubmit.co/a91adc27e1b3a9255f7d031230612b44"
                method="POST"
                onSubmit={handleSubmit}
                className="space-y-6 bg-[#f3f4f5] p-8 rounded-2xl"
                data-testid="form-parental-controls"
                noValidate
              >
                <input type="hidden" name="_subject" value="New parental controls enquiry from Crettyard Digital" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_captcha" value="false" />

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="pc-name" className="block text-sm font-headline font-bold text-primary mb-1.5">Parent / Guardian Name <span className="text-red-500">*</span></label>
                    <input
                      id="pc-name"
                      name="Name"
                      type="text"
                      required
                      autoComplete="name"
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-accent/40"
                      data-testid="input-name"
                    />
                  </div>
                  <div>
                    <label htmlFor="pc-email" className="block text-sm font-headline font-bold text-primary mb-1.5">Email Address <span className="text-red-500">*</span></label>
                    <input
                      id="pc-email"
                      name="Email"
                      type="email"
                      required
                      autoComplete="email"
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-accent/40"
                      data-testid="input-email"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="pc-phone" className="block text-sm font-headline font-bold text-primary mb-1.5">Phone Number</label>
                    <input
                      id="pc-phone"
                      name="Phone"
                      type="tel"
                      autoComplete="tel"
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-accent/40"
                      data-testid="input-phone"
                    />
                  </div>
                  <div>
                    <label htmlFor="pc-county" className="block text-sm font-headline font-bold text-primary mb-1.5">County / Area <span className="text-red-500">*</span></label>
                    <input
                      id="pc-county"
                      name="County"
                      type="text"
                      required
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-accent/40"
                      placeholder="e.g. Laois, Carlow, Kilkenny"
                      data-testid="input-county"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="pc-children" className="block text-sm font-headline font-bold text-primary mb-1.5">Number of children (optional)</label>
                    <input
                      id="pc-children"
                      name="Number of children"
                      type="number"
                      min={1}
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-accent/40"
                      data-testid="input-children"
                    />
                  </div>
                  <div>
                    <label htmlFor="pc-contact-method" className="block text-sm font-headline font-bold text-primary mb-1.5">Preferred contact method</label>
                    <select
                      id="pc-contact-method"
                      name="Preferred contact method"
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-accent/40"
                      data-testid="select-contact-method"
                    >
                      <option value="">No preference</option>
                      <option value="Email">Email</option>
                      <option value="Phone">Phone</option>
                      <option value="WhatsApp">WhatsApp</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="pc-contact-time" className="block text-sm font-headline font-bold text-primary mb-1.5">Preferred time to be contacted</label>
                  <select
                    id="pc-contact-time"
                    name="Preferred time to contact"
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-accent/40"
                    data-testid="select-contact-time"
                  >
                    <option value="">No preference</option>
                    <option value="Morning (before 12pm)">Morning (before 12pm)</option>
                    <option value="Afternoon (12pm–5pm)">Afternoon (12pm–5pm)</option>
                    <option value="Evening (after 5pm)">Evening (after 5pm)</option>
                    <option value="Weekend">Weekend</option>
                  </select>
                </div>

                <fieldset>
                  <legend className="block text-sm font-headline font-bold text-primary mb-3">Main devices used at home</legend>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {devices.map((d) => (
                      <label key={d} className="flex items-center gap-2 cursor-pointer text-sm text-foreground/70 font-sans bg-white rounded-xl px-3 py-2.5 border border-gray-200 hover:border-accent/40 transition-colors">
                        <input
                          type="checkbox"
                          checked={checkedDevices.includes(d)}
                          onChange={() => toggleDevice(d)}
                          className="accent-accent"
                          data-testid={`checkbox-device-${d.replace(/[^a-zA-Z]/g, "-").toLowerCase()}`}
                        />
                        {d}
                      </label>
                    ))}
                  </div>
                </fieldset>

                <fieldset>
                  <legend className="block text-sm font-headline font-bold text-primary mb-3">What would you like help with?</legend>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {helpOptions.map((h) => (
                      <label key={h} className="flex items-center gap-2 cursor-pointer text-sm text-foreground/70 font-sans bg-white rounded-xl px-3 py-2.5 border border-gray-200 hover:border-accent/40 transition-colors">
                        <input
                          type="checkbox"
                          checked={checkedHelp.includes(h)}
                          onChange={() => toggleHelp(h)}
                          className="accent-accent"
                          data-testid={`checkbox-help-${h.replace(/[^a-zA-Z]/g, "-").toLowerCase()}`}
                        />
                        {h}
                      </label>
                    ))}
                  </div>
                </fieldset>

                <div>
                  <label htmlFor="pc-message" className="block text-sm font-headline font-bold text-primary mb-1.5">Message / Notes</label>
                  <textarea
                    id="pc-message"
                    name="Message"
                    rows={4}
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-accent/40 resize-none"
                    placeholder="Any other details about your home setup or what you'd like help with…"
                    data-testid="textarea-message"
                  />
                </div>

                <Button type="submit" className="w-full" size="lg" data-testid="button-submit">
                  Request My Setup
                </Button>

                <p className="text-xs text-foreground/50 text-center font-sans">
                  Your details are only used to respond to your enquiry and arrange the service you request.
                </p>
              </form>
            )}
          </FadeIn>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-20 bg-[#f3f4f5]">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn className="text-center mb-12">
            <h2 className="text-2xl mb-4">Other Ways I Can Help</h2>
          </FadeIn>
          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            <StaggerItem>
              <Link href="/network-wifi-security">
                <div className="bg-white p-6 rounded-2xl card-hover cursor-pointer group shadow-sm" data-testid="link-network">
                  <h3 className="text-lg mb-2 group-hover:text-accent transition-colors">Network &amp; Wi-Fi</h3>
                  <p className="text-foreground/70 text-[15px] leading-relaxed font-sans">Reliable home or business network setup — fast Wi-Fi in every room, properly configured.</p>
                  <span className="text-accent text-sm font-headline font-bold mt-3 inline-flex items-center gap-1">Learn more <ArrowRight size={13} /></span>
                </div>
              </Link>
            </StaggerItem>
            <StaggerItem>
              <Link href="/about">
                <div className="bg-white p-6 rounded-2xl card-hover cursor-pointer group shadow-sm" data-testid="link-about">
                  <h3 className="text-lg mb-2 group-hover:text-accent transition-colors">About Crettyard Digital</h3>
                  <p className="text-foreground/70 text-[15px] leading-relaxed font-sans">Find out who I am, where I'm based, and how I work with families and businesses.</p>
                  <span className="text-accent text-sm font-headline font-bold mt-3 inline-flex items-center gap-1">About me <ArrowRight size={13} /></span>
                </div>
              </Link>
            </StaggerItem>
            <StaggerItem>
              <Link href="/contact">
                <div className="bg-white p-6 rounded-2xl card-hover cursor-pointer group shadow-sm" data-testid="link-contact">
                  <h3 className="text-lg mb-2 group-hover:text-accent transition-colors">Contact</h3>
                  <p className="text-foreground/70 text-[15px] leading-relaxed font-sans">Have a question before you commit? Get in touch for a no-pressure, no-obligation chat.</p>
                  <span className="text-accent text-sm font-headline font-bold mt-3 inline-flex items-center gap-1">Get in touch <ArrowRight size={13} /></span>
                </div>
              </Link>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-primary dot-matrix-bg text-center">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl text-white mb-4">A Safer Internet Setup Starts with One Simple Step</h2>
            <p className="text-white/70 mb-8 max-w-xl mx-auto leading-relaxed font-sans font-normal">
              You do not need to figure all of this out alone. If you want a calmer, more practical way to protect your children online, request a setup and I'll help you choose the right approach for your home.
            </p>
            <a href="#request-form">
              <Button size="lg" className="px-10 bg-accent text-white hover:bg-[#18a07e]" data-testid="button-cta-bottom">
                Request a Setup
              </Button>
            </a>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
