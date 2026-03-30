import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import type { LucideIcon } from "lucide-react";
import {
  Hammer, Store, Briefcase, Users, Heart, Building2,
  Target, Image, Newspaper, CalendarCheck, ShoppingCart, Calendar,
  Star, MessageSquare, Shield, BarChart3, CheckCircle2, ArrowRight,
  Mail, ChevronLeft, Clock
} from "lucide-react";
import { FadeIn } from "@/components/FadeIn";

const BASE_PRICES: Record<string, number> = {
  "1-3": 499,
  "4-7": 899,
  "8+": 1399,
};

const FEATURE_OPTIONS = [
  { id: "gallery",      label: "Photo gallery / portfolio",      desc: "Showcase your work with a visual gallery", price: 149, icon: Image },
  { id: "blog",         label: "Blog / news section",            desc: "Share updates, tips, and news articles",  price: 249, icon: Newspaper },
  { id: "booking",      label: "Online booking / appointments",  desc: "Let customers book directly online",       price: 349, icon: CalendarCheck },
  { id: "ecommerce",    label: "E-commerce shop",                desc: "Sell products online (up to 20 items)",   price: 599, icon: ShoppingCart },
  { id: "events",       label: "Events & classes calendar",      desc: "Display upcoming events or class schedules", price: 199, icon: Calendar },
  { id: "testimonials", label: "Testimonials / reviews slider",  desc: "Showcase customer reviews with style",    price: 99,  icon: Star },
  { id: "livechat",     label: "Live chat widget",               desc: "Chat with website visitors in real time",  price: 79,  icon: MessageSquare },
  { id: "gdpr",         label: "GDPR cookie consent",           desc: "Cookie banner & consent management",      price: 99,  icon: Shield },
  { id: "analytics",   label: "Google Analytics setup",         desc: "Track visitors & search performance",     price: 79,  icon: BarChart3 },
];

const DOMAIN_YEARLY = 24;
const EMAIL_PER_USER = 6;

interface FormState {
  businessType: string;
  businessName: string;
  websiteGoals: string[];
  pageCount: string;
  isRedesign: boolean;
  hasDomain: boolean | null;
  features: string[];
  wantsEmail: boolean;
  emailUsers: number;
  name: string;
  email: string;
  phone: string;
  followUp: "email" | "whatsapp" | "phone";
  launchDate: string;
  budget: string;
  notes: string;
}

function calcPrice(form: FormState) {
  const base = form.pageCount ? (BASE_PRICES[form.pageCount] ?? 0) : 0;
  const discountedBase = form.isRedesign ? Math.round(base * 0.8) : base;
  const addons = form.features.reduce(
    (sum, f) => sum + (FEATURE_OPTIONS.find((o) => o.id === f)?.price ?? 0),
    0
  );
  const oneTime = discountedBase + addons;
  const yearly = form.hasDomain === false ? DOMAIN_YEARLY : 0;
  const monthly = form.wantsEmail ? form.emailUsers * EMAIL_PER_USER : 0;
  return { base: discountedBase, addons, oneTime, yearly, monthly };
}

function fmt(n: number) {
  return `€${n.toLocaleString("en-IE")}`;
}

const TOTAL_STEPS = 6;

function ProgressBar({ step }: { step: number }) {
  const pct = Math.round(((step - 1) / (TOTAL_STEPS - 1)) * 100);
  return (
    <div className="w-full bg-gray-100 rounded-full h-1.5 mb-2">
      <div
        className="bg-accent h-1.5 rounded-full transition-all duration-500"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}

function SelectCard({
  selected,
  onClick,
  icon: Icon,
  label,
  desc,
  badge,
  testId,
}: {
  selected: boolean;
  onClick: () => void;
  icon?: LucideIcon;
  label: string;
  desc?: string;
  badge?: string;
  testId?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      data-testid={testId}
      className={`w-full text-left p-5 rounded-2xl border-2 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
        selected
          ? "border-accent bg-accent/5 shadow-sm"
          : "border-gray-200 bg-white hover:border-accent/40 hover:bg-gray-50"
      }`}
    >
      <div className="flex items-start gap-3">
        {Icon && (
          <div className={`shrink-0 w-9 h-9 rounded-xl flex items-center justify-center mt-0.5 ${selected ? "bg-accent text-white" : "bg-gray-100 text-gray-500"}`}>
            <Icon size={17} />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className={`font-headline font-bold text-sm ${selected ? "text-accent" : "text-primary"}`}>{label}</span>
            {badge && (
              <span className="text-[11px] font-bold bg-accent/10 text-accent px-2 py-0.5 rounded-full">{badge}</span>
            )}
          </div>
          {desc && <p className="text-xs text-foreground/60 mt-1 font-sans leading-relaxed">{desc}</p>}
        </div>
        <div className={`shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center mt-0.5 transition-all ${selected ? "border-accent bg-accent" : "border-gray-300"}`}>
          {selected && <CheckCircle2 size={12} className="text-white" />}
        </div>
      </div>
    </button>
  );
}


export default function GetAQuote() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormState>({
    businessType: "",
    businessName: "",
    websiteGoals: [],
    pageCount: "",
    isRedesign: false,
    hasDomain: null,
    features: [],
    wantsEmail: false,
    emailUsers: 1,
    name: "",
    email: "",
    phone: "",
    followUp: "email",
    launchDate: "",
    budget: "",
    notes: "",
  });
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [step]);

  function set<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function toggleArrayItem(key: "websiteGoals" | "features", id: string) {
    setForm((prev) => {
      const arr = prev[key] as string[];
      return { ...prev, [key]: arr.includes(id) ? arr.filter((x) => x !== id) : [...arr, id] };
    });
  }

  const phoneRequired = form.followUp === "whatsapp" || form.followUp === "phone";

  function canProceed(): boolean {
    if (step === 1) return !!form.businessType;
    if (step === 2) return form.websiteGoals.length > 0;
    if (step === 3) return !!form.pageCount && form.hasDomain !== null;
    if (step === 6) {
      const baseOk = !!form.name.trim() && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
      const phoneOk = !phoneRequired || !!form.phone.trim();
      return baseOk && phoneOk;
    }
    return true;
  }

  function next() {
    if (!canProceed()) {
      setTouched({ all: true, name: true, email: true, phone: true });
      return;
    }
    setTouched({});
    setStep((s) => s + 1);
  }

  function back() {
    setTouched({});
    setStep((s) => s - 1);
  }

  async function handleSubmit() {
    setTouched({ all: true, name: true, email: true, phone: true });
    if (!canProceed()) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setSubmitStatus("success");
        setSubmitted(true);
      } else {
        setErrorMsg(data.error ?? "Something went wrong.");
        setSubmitStatus("error");
      }
    } catch {
      setErrorMsg("Network error. Please check your connection and try again.");
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  const pricing = calcPrice(form);

  const stepTitles = [
    "About Your Business",
    "Your Website Goals",
    "Project Scope",
    "Features & Add-ons",
    "Business Email",
    "Your Details",
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <noscript>
        <div style={{ padding: "2rem", textAlign: "center" }}>
          <p>This page requires JavaScript to use the interactive quote calculator.</p>
          <p>Please <a href="/contact.html">contact us directly</a> for a free quote.</p>
        </div>
      </noscript>

      <section className="bg-[#f3f4f5] py-16 md:py-20 dot-matrix-bg">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <FadeIn>
            <span className="eyebrow mb-4 inline-block">Free Guide Quote</span>
            <h1 className="text-3xl md:text-4xl leading-[1.1] mb-4" data-testid="text-page-title">
              Get Your Website Quote in 2 Minutes
            </h1>
            <p className="text-foreground/70 leading-relaxed font-sans font-normal">
              Answer a few quick questions and we'll calculate a guide price for your project. No obligation — this is just a starting point.
            </p>
          </FadeIn>
        </div>
      </section>

      {!submitted && (
        <section className="py-10 bg-white">
          <div className="container mx-auto px-4 max-w-2xl">
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-headline font-bold text-foreground/50 uppercase tracking-wider">
                  Step {step} of {TOTAL_STEPS}
                </span>
                <span className="text-xs font-sans text-foreground/40">{stepTitles[step - 1] ?? ""}</span>
              </div>
              <ProgressBar step={step} />
            </div>

            <div className="bg-white">
              {step === 1 && (
                <FadeIn key="step1">
                  <h2 className="text-2xl mb-1 font-headline font-bold text-primary" data-testid="text-step-heading">About Your Business</h2>
                  <p className="text-foreground/60 text-sm mb-7 font-sans">Select the option that best describes your business.</p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {[
                      { id: "tradesperson", label: "Tradesperson / Contractor", desc: "Plumber, electrician, builder, carpenter, etc.", icon: Hammer },
                      { id: "retail",       label: "Retail / Hospitality",       desc: "Shop, café, B&B, restaurant, etc.",              icon: Store },
                      { id: "professional", label: "Professional Services",      desc: "Accountant, solicitor, consultant, etc.",        icon: Briefcase },
                      { id: "service",      label: "Service Business",           desc: "Cleaner, landscaper, tutor, therapist, etc.",   icon: Users },
                      { id: "charity",      label: "Charity / Community",        desc: "Voluntary group, community organisation, etc.", icon: Heart },
                      { id: "other",        label: "Other",                      desc: "Something different from the above",            icon: Building2 },
                    ].map((opt) => (
                      <SelectCard
                        key={opt.id}
                        selected={form.businessType === opt.id}
                        onClick={() => set("businessType", opt.id)}
                        icon={opt.icon}
                        label={opt.label}
                        desc={opt.desc}
                        testId={`card-business-type-${opt.id}`}
                      />
                    ))}
                  </div>
                  {touched.all && !form.businessType && (
                    <p className="text-red-500 text-xs mt-3 font-sans" role="alert">Please select your business type to continue.</p>
                  )}
                  <div className="mt-6 space-y-1">
                    <Label htmlFor="businessName" className="text-xs font-headline font-bold text-foreground/50 uppercase tracking-wide">
                      Business Name <span className="text-foreground/30 font-normal normal-case">(optional)</span>
                    </Label>
                    <Input
                      id="businessName"
                      placeholder="e.g. Murphy's Plumbing"
                      value={form.businessName}
                      onChange={(e) => set("businessName", e.target.value)}
                      className="rounded-none border-0 border-b border-gray-300 focus-visible:ring-0 focus-visible:border-accent h-10 bg-transparent px-0 shadow-none"
                      data-testid="input-business-name"
                    />
                  </div>
                </FadeIn>
              )}

              {step === 2 && (
                <FadeIn key="step2">
                  <h2 className="text-2xl mb-1 font-headline font-bold text-primary" data-testid="text-step-heading">Your Website Goals</h2>
                  <p className="text-foreground/60 text-sm mb-7 font-sans">Select everything that applies — you can choose more than one.</p>
                  <div className="grid gap-3">
                    {[
                      { id: "enquiries",    label: "Get more enquiries & leads",        desc: "Drive phone calls, emails, and contact form submissions",    icon: Target },
                      { id: "showcase",     label: "Showcase my work & portfolio",      desc: "Let potential customers see examples of what I do",          icon: Image },
                      { id: "credibility",  label: "Build credibility & trust",         desc: "Look professional and established when customers search me", icon: CheckCircle2 },
                      { id: "ecommerce",    label: "Sell products or services online",  desc: "Take orders, bookings, or payments through the site",        icon: ShoppingCart },
                      { id: "information",  label: "Provide information & contact",     desc: "Share opening hours, location, services, and contact info",  icon: Building2 },
                    ].map((opt) => (
                      <SelectCard
                        key={opt.id}
                        selected={form.websiteGoals.includes(opt.id)}
                        onClick={() => toggleArrayItem("websiteGoals", opt.id)}
                        icon={opt.icon}
                        label={opt.label}
                        desc={opt.desc}
                        testId={`card-goal-${opt.id}`}
                      />
                    ))}
                  </div>
                  {touched.all && form.websiteGoals.length === 0 && (
                    <p className="text-red-500 text-xs mt-3 font-sans" role="alert">Please select at least one goal to continue.</p>
                  )}
                </FadeIn>
              )}

              {step === 3 && (
                <FadeIn key="step3">
                  <h2 className="text-2xl mb-1 font-headline font-bold text-primary" data-testid="text-step-heading">Project Scope</h2>
                  <p className="text-foreground/60 text-sm mb-7 font-sans">How many pages does your website need? Not sure — pick the closest match.</p>
                  <div className="grid gap-3 mb-8">
                    {[
                      { id: "1-3", label: "1–3 Pages", desc: "Home, About, Contact — great for tradespeople or new businesses needing a fast, clean online presence.", popular: false },
                      { id: "4-7", label: "4–7 Pages", desc: "Home, Services, About, Gallery, Contact & more — ideal for most established small businesses.", popular: true },
                      { id: "8+",  label: "8+ Pages",  desc: "Full site with multiple service pages, blog, portfolio, or other sections — for larger needs.", popular: false },
                    ].map((opt) => (
                      <SelectCard
                        key={opt.id}
                        selected={form.pageCount === opt.id}
                        onClick={() => set("pageCount", opt.id)}
                        label={opt.label}
                        desc={opt.desc}
                        badge={opt.popular ? "Most popular" : undefined}
                        testId={`card-page-count-${opt.id}`}
                      />
                    ))}
                  </div>
                  {touched.all && !form.pageCount && (
                    <p className="text-red-500 text-xs mt-1 mb-4 font-sans" role="alert">Please select a page count to continue.</p>
                  )}

                  <div className="space-y-4">
                    <div
                      className={`flex items-start gap-4 p-4 rounded-2xl border-2 cursor-pointer transition-all ${form.isRedesign ? "border-accent bg-accent/5" : "border-gray-200 hover:border-accent/40"}`}
                      onClick={() => set("isRedesign", !form.isRedesign)}
                      data-testid="toggle-redesign"
                    >
                      <div className={`shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center mt-0.5 transition-all ${form.isRedesign ? "border-accent bg-accent" : "border-gray-300"}`}>
                        {form.isRedesign && <CheckCircle2 size={12} className="text-white" />}
                      </div>
                      <div>
                        <p className="font-headline font-bold text-sm text-primary">This is a redesign of an existing website</p>
                        <p className="text-xs text-foreground/60 font-sans mt-0.5">We already have a site — we're looking to update or rebuild it.</p>
                      </div>
                    </div>

                    <div>
                      <p className="font-headline font-bold text-sm text-primary mb-3">Do you already have a domain name? <span className="text-red-500">*</span></p>
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          { val: true,  label: "Yes, I have one", desc: "e.g. mybusiness.ie" },
                          { val: false, label: "No, I need one",  desc: "We'll register one for you" },
                        ].map((opt) => (
                          <button
                            key={String(opt.val)}
                            type="button"
                            onClick={() => set("hasDomain", opt.val)}
                            data-testid={`button-domain-${opt.val}`}
                            className={`text-left p-4 rounded-2xl border-2 transition-all ${form.hasDomain === opt.val ? "border-accent bg-accent/5" : "border-gray-200 hover:border-accent/40"}`}
                          >
                            <p className={`font-headline font-bold text-sm ${form.hasDomain === opt.val ? "text-accent" : "text-primary"}`}>{opt.label}</p>
                            <p className="text-xs text-foreground/60 font-sans mt-0.5">{opt.desc}</p>
                          </button>
                        ))}
                      </div>
                      {touched.all && form.hasDomain === null && (
                        <p className="text-red-500 text-xs mt-2 font-sans" role="alert">Please select a domain option to continue.</p>
                      )}
                    </div>
                  </div>
                </FadeIn>
              )}

              {step === 4 && (
                <FadeIn key="step4">
                  <h2 className="text-2xl mb-1 font-headline font-bold text-primary" data-testid="text-step-heading">Features & Add-ons</h2>
                  <p className="text-foreground/60 text-sm mb-2 font-sans">Select any extra features you'd like included in your website.</p>
                  <div className="flex items-center gap-2 mb-6 p-3 bg-accent/5 rounded-xl">
                    <CheckCircle2 size={16} className="text-accent shrink-0" />
                    <span className="text-sm font-sans text-foreground/70"><strong className="text-primary">Included:</strong> Contact form with email notifications</span>
                  </div>
                  <div className="grid gap-3">
                    {FEATURE_OPTIONS.map((opt) => (
                      <SelectCard
                        key={opt.id}
                        selected={form.features.includes(opt.id)}
                        onClick={() => toggleArrayItem("features", opt.id)}
                        icon={opt.icon}
                        label={opt.label}
                        desc={opt.desc}
                        testId={`card-feature-${opt.id}`}
                      />
                    ))}
                  </div>
                  {form.features.length === 0 && (
                    <p className="text-foreground/40 text-xs mt-4 text-center font-sans italic">No extra features selected — you can always add them later.</p>
                  )}
                </FadeIn>
              )}

              {step === 5 && (
                <FadeIn key="step5">
                  <h2 className="text-2xl mb-1 font-headline font-bold text-primary" data-testid="text-step-heading">Business Email</h2>
                  <p className="text-foreground/60 text-sm mb-7 font-sans">Would you like to add professional business email to your project?</p>

                  <div className="grid gap-3 mb-6">
                    {[
                      { val: false, label: "No thanks — I already have business email", desc: "Skip this step" },
                      { val: true,  label: "Yes — set up Microsoft 365 business email", desc: "Includes Teams, OneDrive & Office apps" },
                    ].map((opt) => (
                      <button
                        key={String(opt.val)}
                        type="button"
                        onClick={() => set("wantsEmail", opt.val)}
                        data-testid={`button-email-${opt.val}`}
                        className={`text-left p-5 rounded-2xl border-2 transition-all ${form.wantsEmail === opt.val ? "border-accent bg-accent/5" : "border-gray-200 hover:border-accent/40"}`}
                      >
                        <div className="flex items-start gap-3">
                          <Mail size={18} className={`shrink-0 mt-0.5 ${form.wantsEmail === opt.val ? "text-accent" : "text-gray-400"}`} />
                          <div>
                            <p className={`font-headline font-bold text-sm ${form.wantsEmail === opt.val ? "text-accent" : "text-primary"}`}>{opt.label}</p>
                            <p className="text-xs text-foreground/60 font-sans mt-0.5">{opt.desc}</p>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>

                  {form.wantsEmail && (
                    <div className="p-5 bg-[#f3f4f5] rounded-2xl space-y-4">
                      <p className="font-headline font-bold text-sm text-primary">How many mailboxes do you need?</p>
                      <div className="flex items-center gap-4">
                        <button
                          type="button"
                          onClick={() => set("emailUsers", Math.max(1, form.emailUsers - 1))}
                          className="w-10 h-10 rounded-xl border-2 border-gray-300 flex items-center justify-center font-bold text-lg hover:border-accent hover:text-accent transition-colors"
                          data-testid="button-email-minus"
                        >−</button>
                        <span className="text-2xl font-headline font-extrabold text-primary w-8 text-center" data-testid="text-email-users">{form.emailUsers}</span>
                        <button
                          type="button"
                          onClick={() => set("emailUsers", Math.min(20, form.emailUsers + 1))}
                          className="w-10 h-10 rounded-xl border-2 border-gray-300 flex items-center justify-center font-bold text-lg hover:border-accent hover:text-accent transition-colors"
                          data-testid="button-email-plus"
                        >+</button>
                        <span className="text-sm text-foreground/60 font-sans">mailbox{form.emailUsers !== 1 ? "es" : ""}</span>
                      </div>
                      <p className="text-xs text-foreground/50 pt-2 border-t border-gray-200 font-sans">Billed directly by Microsoft. Setup assistance included.</p>
                    </div>
                  )}
                </FadeIn>
              )}

              {step === 6 && (
                <FadeIn key="step6">
                  <h2 className="text-2xl mb-1 font-headline font-bold text-primary" data-testid="text-step-heading">Almost There</h2>
                  <p className="text-foreground/60 text-sm mb-7 font-sans">Just a few details and we'll calculate your guide price and send it across.</p>

                  {submitStatus === "error" && (
                    <div role="alert" className="mb-5 p-4 bg-red-50 border border-red-200 rounded-xl text-red-800 text-sm font-sans">
                      <strong>Something went wrong.</strong> {errorMsg} Please email <a href="mailto:info@crettyard.ie" className="underline">info@crettyard.ie</a> directly if the problem persists.
                    </div>
                  )}

                  <div className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div className="space-y-1">
                        <Label htmlFor="q-name" className="text-xs font-headline font-bold text-foreground/50 uppercase tracking-wide">
                          Your Name <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="q-name"
                          placeholder="First and last name"
                          value={form.name}
                          onChange={(e) => set("name", e.target.value)}
                          onBlur={() => setTouched((t) => ({ ...t, name: true }))}
                          className="rounded-none border-0 border-b border-gray-300 focus-visible:ring-0 focus-visible:border-accent h-10 bg-transparent px-0 shadow-none"
                          data-testid="input-name"
                          aria-required="true"
                        />
                        {touched.name && !form.name.trim() && (
                          <p className="text-red-500 text-xs mt-1 font-sans" role="alert">Your name is required.</p>
                        )}
                      </div>
                      <div className="space-y-1">
                        <Label htmlFor="q-email" className="text-xs font-headline font-bold text-foreground/50 uppercase tracking-wide">
                          Email Address <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="q-email"
                          type="email"
                          placeholder="you@yourbusiness.ie"
                          value={form.email}
                          onChange={(e) => set("email", e.target.value)}
                          onBlur={() => setTouched((t) => ({ ...t, email: true }))}
                          className="rounded-none border-0 border-b border-gray-300 focus-visible:ring-0 focus-visible:border-accent h-10 bg-transparent px-0 shadow-none"
                          data-testid="input-email"
                          aria-required="true"
                        />
                        {touched.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) && (
                          <p className="text-red-500 text-xs mt-1 font-sans" role="alert">Please enter a valid email address.</p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-1">
                      <Label htmlFor="q-followup" className="text-xs font-headline font-bold text-foreground/50 uppercase tracking-wide">
                        Preferred follow-up method <span className="text-red-500">*</span>
                      </Label>
                      <select
                        id="q-followup"
                        value={form.followUp}
                        onChange={(e) => set("followUp", e.target.value as FormState["followUp"])}
                        className="flex h-10 w-full rounded-none border-0 border-b border-gray-300 bg-transparent px-0 py-2 text-sm focus:outline-none focus:border-accent font-sans transition-colors"
                        data-testid="select-followup"
                      >
                        <option value="email">Email</option>
                        <option value="whatsapp">WhatsApp</option>
                        <option value="phone">Phone call</option>
                      </select>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div className="space-y-1">
                        <Label htmlFor="q-phone" className="text-xs font-headline font-bold text-foreground/50 uppercase tracking-wide">
                          Phone{phoneRequired ? <span className="text-red-500 ml-0.5">*</span> : <span className="text-foreground/30 font-normal normal-case"> (optional)</span>}
                        </Label>
                        <Input
                          id="q-phone"
                          type="tel"
                          placeholder="08..."
                          value={form.phone}
                          onChange={(e) => set("phone", e.target.value)}
                          className="rounded-none border-0 border-b border-gray-300 focus-visible:ring-0 focus-visible:border-accent h-10 bg-transparent px-0 shadow-none"
                          data-testid="input-phone"
                          aria-required={phoneRequired}
                        />
                        {touched.phone && phoneRequired && !form.phone.trim() && (
                          <p className="text-red-500 text-xs mt-1 font-sans" role="alert">Phone number is required for this follow-up method.</p>
                        )}
                      </div>
                      <div className="space-y-1">
                        <Label htmlFor="q-launch" className="text-xs font-headline font-bold text-foreground/50 uppercase tracking-wide">Ideal Launch Date <span className="text-foreground/30 font-normal normal-case">(optional)</span></Label>
                        <select
                          id="q-launch"
                          value={form.launchDate}
                          onChange={(e) => set("launchDate", e.target.value)}
                          className="flex h-10 w-full rounded-none border-0 border-b border-gray-300 bg-transparent px-0 py-2 text-sm focus:outline-none focus:border-accent font-sans transition-colors"
                          data-testid="select-launch-date"
                        >
                          <option value="">Select a timeframe</option>
                          <option value="ASAP (within 2 weeks)">ASAP (within 2 weeks)</option>
                          <option value="1–2 months">1–2 months</option>
                          <option value="3–6 months">3–6 months</option>
                          <option value="No rush">No rush</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <Label htmlFor="q-budget" className="text-xs font-headline font-bold text-foreground/50 uppercase tracking-wide">Budget Range <span className="text-foreground/30 font-normal normal-case">(optional)</span></Label>
                      <select
                        id="q-budget"
                        value={form.budget}
                        onChange={(e) => set("budget", e.target.value)}
                        className="flex h-10 w-full rounded-none border-0 border-b border-gray-300 bg-transparent px-0 py-2 text-sm focus:outline-none focus:border-accent font-sans transition-colors"
                        data-testid="select-budget"
                      >
                        <option value="">Select a budget range</option>
                        <option value="Under €500">Under €500</option>
                        <option value="€500–€1,000">€500–€1,000</option>
                        <option value="€1,000–€2,000">€1,000–€2,000</option>
                        <option value="Over €2,000">Over €2,000</option>
                        <option value="Not sure yet">Not sure yet</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <Label htmlFor="q-notes" className="text-xs font-headline font-bold text-foreground/50 uppercase tracking-wide">Anything else to mention? <span className="text-foreground/30 font-normal normal-case">(optional)</span></Label>
                      <Textarea
                        id="q-notes"
                        placeholder="e.g. We have a logo and some photos ready. We'd ideally like a booking system for consultations..."
                        value={form.notes}
                        onChange={(e) => set("notes", e.target.value)}
                        className="rounded-none border-0 border-b border-gray-300 focus-visible:ring-0 focus-visible:border-accent min-h-[100px] bg-transparent px-0 shadow-none resize-none font-sans"
                        data-testid="input-notes"
                      />
                    </div>

                    <div className="pt-2 p-4 bg-[#f3f4f5] rounded-2xl">
                      <p className="text-xs text-foreground/50 font-sans">By submitting, you agree that your details are used only to prepare and deliver your quote. No spam — ever.</p>
                    </div>
                  </div>
                </FadeIn>
              )}

              <div className="mt-8 flex items-center gap-3">
                {step > 1 && (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={back}
                    disabled={isSubmitting}
                    className="gap-1"
                    data-testid="button-back"
                  >
                    <ChevronLeft size={16} />
                    Back
                  </Button>
                )}
                {step < 6 && (
                  <Button
                    type="button"
                    onClick={next}
                    className="flex-1 sm:flex-none sm:min-w-[160px]"
                    data-testid="button-next"
                  >
                    Continue <ArrowRight size={16} className="ml-1" />
                  </Button>
                )}
                {step === 6 && (
                  <Button
                    type="button"
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="flex-1 sm:flex-none sm:min-w-[200px]"
                    data-testid="button-submit"
                  >
                    {isSubmitting ? "Calculating…" : "View Guide Price Now →"}
                  </Button>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {submitted && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-2xl">
            <FadeIn>
              <div className="text-center mb-10">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-5">
                  <CheckCircle2 size={32} className="text-accent" />
                </div>
                <h2 className="text-3xl font-headline font-bold text-primary mb-3" data-testid="text-success-heading">Quote Request Sent!</h2>
                <p className="text-foreground/70 font-sans leading-relaxed mb-3">
                  Your request has been received by Crettyard Digital.
                </p>
                <div className="inline-block text-left bg-accent/8 border border-accent/20 rounded-xl px-5 py-4 text-sm font-sans text-foreground/70 leading-relaxed">
                  <strong className="text-primary block mb-1">What you see below is an initial guide price.</strong>
                  A full fixed quote will be prepared and sent to you by Crettyard Digital on the next working day.
                </div>
              </div>

              <div className="bg-[#f3f4f5] rounded-2xl p-7 mb-8">
                <h3 className="font-headline font-bold text-primary mb-5 text-base uppercase tracking-wide text-sm">Your Guide Price Summary</h3>

                <div className="space-y-3 mb-5">
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-sm font-sans text-foreground/70">Base build ({form.pageCount} pages{form.isRedesign ? " — redesign" : ""})</span>
                    <span className="font-headline font-bold text-primary">{fmt(pricing.base)}</span>
                  </div>
                  {form.features.length > 0 && (
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-sm font-sans text-foreground/70">Feature add-ons ({form.features.length})</span>
                      <span className="font-headline font-bold text-primary">+{fmt(pricing.addons)}</span>
                    </div>
                  )}
                  {pricing.yearly > 0 && (
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-sm font-sans text-foreground/70">Domain registration</span>
                      <span className="font-headline font-bold text-primary">+{fmt(pricing.yearly)}/yr</span>
                    </div>
                  )}
                  {pricing.monthly > 0 && (
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-sm font-sans text-foreground/70">Business email ({form.emailUsers} mailbox{form.emailUsers > 1 ? "es" : ""})</span>
                      <span className="font-headline font-bold text-primary">+{fmt(pricing.monthly)}/mo</span>
                    </div>
                  )}
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2 pt-2">
                  <span className="text-sm font-headline font-bold text-foreground/50 uppercase tracking-wide">One-time investment</span>
                  <span className="text-2xl font-headline font-extrabold text-accent">{fmt(pricing.oneTime)}</span>
                </div>

                <p className="text-xs text-foreground/40 mt-4 font-sans italic">Guide price only — your fixed quote from Crettyard Digital will follow on the next working day.</p>
              </div>

              <div className="bg-primary rounded-2xl p-7 text-white mb-8">
                <h3 className="font-headline font-bold text-white mb-4 flex items-center gap-2">
                  <Clock size={18} className="text-accent" />
                  What Happens Next
                </h3>
                <ol className="space-y-3">
                  {[
                    "Joey reviews your quote request — usually within a few hours",
                    "You'll get a personalised email with a more detailed proposal",
                    "A quick free call to answer any questions and confirm the scope",
                    "You get a clear, fixed quote — no hidden fees, no surprises",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm font-sans text-white/80">
                      <span className="shrink-0 w-5 h-5 bg-accent/20 rounded-full flex items-center justify-center text-accent font-bold text-xs">{i + 1}</span>
                      {item}
                    </li>
                  ))}
                </ol>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/">
                  <Button variant="outline" data-testid="button-back-home">
                    Back to Home
                  </Button>
                </Link>
                <a href="https://wa.me/353879700701" target="_blank" rel="noopener noreferrer">
                  <Button className="gap-2" data-testid="button-whatsapp">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Chat on WhatsApp
                  </Button>
                </a>
              </div>
            </FadeIn>
          </div>
        </section>
      )}

    </div>
  );
}
