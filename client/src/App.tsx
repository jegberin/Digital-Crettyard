import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import WebDesign from "@/pages/WebDesign";
import Microsoft365 from "@/pages/Microsoft365";
import NetworkWifi from "@/pages/Network";
import Portfolio from "@/pages/Portfolio";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsAndConditions from "@/pages/TermsAndConditions";
import CookiePolicy from "@/pages/CookiePolicy";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CookieBanner } from "@/components/CookieBanner";
import { SEO, LocalBusinessSchema, ServiceSchema, FAQSchema } from "@/components/SEO";

const pageSEO: Record<string, { title: string; description: string }> = {
  "/": {
    title: "Crettyard Digital — Web Design, Microsoft 365 & Network Solutions for Small Businesses",
    description: "Professional web design, Microsoft 365 setup, and network solutions for small businesses in Laois, Carlow, Kilkenny, and surrounding areas. No jargon, no hassle."
  },
  "/web-design": {
    title: "Professional Website Design for Small Businesses in Laois & Carlow | Crettyard Digital",
    description: "Custom website design for tradespeople, contractors, and small businesses in Laois, Carlow, and Kilkenny. From €500. Mobile-friendly, SEO-optimised, and built to win customers."
  },
  "/microsoft-365": {
    title: "Microsoft 365 Setup & Business Email for Small Businesses in Ireland | Crettyard Digital",
    description: "Professional Microsoft 365 setup, business email, Teams, OneDrive, and SharePoint for small businesses in Ireland. Avoid costly mistakes with expert configuration."
  },
  "/network-wifi-security": {
    title: "Business Network & Wi-Fi Solutions for Offices and Workshops | Crettyard Digital",
    description: "Reliable network design, Wi-Fi setup, security, and support for offices, workshops, and retail spaces in Laois, Carlow, and surrounding areas."
  },
  "/portfolio": {
    title: "Our Work — Websites Built for Local Businesses | Crettyard Digital",
    description: "See real websites built for small businesses in Ireland. Each project designed to get found on Google, look professional, and win more customers."
  },
  "/about": {
    title: "About Crettyard Digital — Local IT Services with Enterprise Experience",
    description: "Run by Joey, Crettyard Digital brings enterprise IT experience to small businesses in Laois, Carlow, and Kilkenny. Plain English, no jargon, direct communication."
  },
  "/contact": {
    title: "Book a Free Consultation — No Obligation, No Pressure | Crettyard Digital",
    description: "Get in touch for a free, no-obligation chat about your website, email, or network needs. Fast response, local support, plain-English advice."
  },
  "/privacy-policy": {
    title: "Privacy Policy | Crettyard Digital",
    description: "How Crettyard Digital collects, uses, stores, and protects your personal data. Read our full privacy policy."
  },
  "/terms-and-conditions": {
    title: "Terms and Conditions | Crettyard Digital",
    description: "Terms and Conditions governing the use of the Crettyard Digital website and engagement with our services."
  },
  "/cookie-policy": {
    title: "Cookie Policy | Crettyard Digital",
    description: "How Crettyard Digital uses cookies and similar technologies on our website. Manage your cookie preferences."
  }
};

const faqData: Record<string, { question: string; answer: string }[]> = {
  "/": [
    { question: "I already have a Facebook page — do I really need a website?", answer: "Facebook is great for social engagement, but it won't help you rank on Google when someone searches 'plumber near me' or 'furniture maker Carlow.' A website gives you a professional presence you own and control, and it works around the clock to bring you new customers." },
    { question: "I'm not very technical — will this be complicated?", answer: "Not at all. That's exactly why I exist. I handle all the technical work and explain everything in plain English. You don't need to know anything about hosting, DNS, or code — I take care of it all." },
    { question: "How much does a website cost?", answer: "It depends on what you need, but most small business websites start from around €800. I always provide a clear, fixed quote upfront — no hidden fees, no surprises." },
    { question: "How long does it take to build a website?", answer: "A typical small business website takes 2–4 weeks from start to launch." },
    { question: "Can you help with just email or networking, without a website?", answer: "Absolutely. Many of my clients come to me for Microsoft 365 setup, business email, or network and Wi-Fi solutions without needing a new website. Each service works independently." },
    { question: "What happens after my website is live?", answer: "I don't disappear after launch. I offer optional ongoing support so your site stays updated, secure, and performing well." }
  ],
  "/web-design": [
    { question: "How long does it take to build a website?", answer: "A typical small business website takes 2–4 weeks from start to launch. The timeline depends on content readiness and the number of revisions needed." },
    { question: "What do I need to provide?", answer: "Just your logo (if you have one), some photos, and a rough idea of what you want. I handle the rest — writing, design, and all the technical setup." },
    { question: "Do you include SEO?", answer: "Yes. Every website I build includes on-page SEO fundamentals — proper headings, meta descriptions, mobile optimisation, fast loading, and local search setup." },
    { question: "Can I update the site myself?", answer: "Absolutely. I build sites that are easy to update. I'll show you how, and I'm always available if you need help." },
    { question: "What about hosting and ongoing support?", answer: "I can handle hosting and ongoing maintenance for you, or set you up to manage it independently. Either way, you're never locked in." },
    { question: "Can you redesign my existing website?", answer: "Yes. I work with businesses that have outdated or underperforming websites and bring them up to modern standards." }
  ],
  "/microsoft-365": [
    { question: "Should I switch from Gmail to Microsoft 365?", answer: "If you want professional business email (@yourbusiness.ie), integrated Teams, and cloud storage that works seamlessly with Office apps, Microsoft 365 is the better choice for most businesses." },
    { question: "Will I lose my existing emails during migration?", answer: "No. I migrate everything carefully — emails, contacts, and calendar entries — so nothing is lost in the transition." },
    { question: "Do I need to be technical to use Microsoft 365?", answer: "Not at all. I set everything up and walk you through it. Microsoft 365 is designed to be user-friendly, and I'm always available for support." },
    { question: "How long does setup take?", answer: "A basic setup typically takes 1–2 days. Larger migrations with multiple mailboxes may take a bit longer." },
    { question: "Do you offer ongoing support?", answer: "Yes. I offer optional monthly support plans so you always have someone to call when things go wrong." },
    { question: "How do I know which Microsoft 365 plan to choose?", answer: "I'll recommend the right plan based on your team size, needs, and budget. Most small businesses only need Business Basic or Business Standard." }
  ],
  "/network-wifi-security": [
    { question: "Can you fix my existing network or do I need a new one?", answer: "I always assess what you have first. Often, improvements to your existing setup can solve the problem without starting from scratch." },
    { question: "Do you work outside business hours?", answer: "Yes. I can schedule installations and major changes outside your business hours to minimise disruption." },
    { question: "Do I need to buy new hardware?", answer: "Not necessarily. I'll assess your current equipment and only recommend replacements when needed. I source business-grade hardware at competitive prices." },
    { question: "How long does a network installation take?", answer: "A small office setup can be done in a day. Larger installations may take 2–3 days depending on complexity." },
    { question: "Do you provide ongoing network support?", answer: "Yes. I offer remote monitoring and support plans so issues are caught early, often before you even notice them." },
    { question: "What area do you cover?", answer: "I cover Laois, Carlow, Kilkenny, Kildare, and surrounding counties. Remote support is available across Ireland." }
  ]
};

function RouteSEO() {
  const [location] = useLocation();
  const seo = pageSEO[location];
  if (!seo) return null;

  const faq = faqData[location];

  return (
    <>
      <SEO title={seo.title} description={seo.description} canonicalPath={location} />
      {faq && <FAQSchema items={faq} />}
      {location === "/web-design" && (
        <ServiceSchema name="Professional Website Design" description="Custom website design and development for small businesses in Laois, Carlow, Kilkenny, and surrounding areas. Mobile-friendly, SEO-optimised, and built to win customers." />
      )}
      {location === "/microsoft-365" && (
        <ServiceSchema name="Microsoft 365 Setup & Business Email" description="Professional Microsoft 365 setup, business email configuration, Teams, OneDrive, and SharePoint for small businesses in Ireland." />
      )}
      {location === "/network-wifi-security" && (
        <ServiceSchema name="Business Network & Wi-Fi Solutions" description="Network design, Wi-Fi setup, security, and ongoing support for offices, workshops, and retail spaces." />
      )}
    </>
  );
}

function Router() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/web-design" component={WebDesign} />
          <Route path="/microsoft-365" component={Microsoft365} />
          <Route path="/network-wifi-security" component={NetworkWifi} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
          <Route path="/terms-and-conditions" component={TermsAndConditions} />
          <Route path="/cookie-policy" component={CookiePolicy} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
      <WhatsAppButton />
      <CookieBanner />
      <LocalBusinessSchema />
      <RouteSEO />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
