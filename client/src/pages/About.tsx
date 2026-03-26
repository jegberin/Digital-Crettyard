import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/FadeIn";
import { MonitorSmartphone, Cloud, Wifi, MessageSquare, Shield, MapPin, Languages, Wrench, Briefcase, Store, HardHat, CheckCircle2, ArrowRight } from "lucide-react";
import joeyImg from "@assets/joey-profile-photo.png";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Local Trust Hero */}
      <section className="bg-[#f3f4f5] py-24 md:py-32 dot-matrix-bg">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <FadeIn>
            <span className="eyebrow mb-5 inline-block">About Crettyard Digital</span>
            <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.1] mb-6">
              Local Support, Enterprise Experience — Right Here in Laois and Carlow
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed max-w-2xl mx-auto font-sans font-normal">
              Based near Crettyard on the Laois–Carlow border, I work with tradespeople, contractors, and local businesses who need reliable websites, email, and IT — without the jargon or the runaround.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
              <Link href="/contact#send-message">
                <Button size="lg" className="px-10" data-testid="button-hero-cta">
                  Book a Free Consultation
                </Button>
              </Link>
              <Link href="/web-design" className="text-accent font-headline font-bold hover:text-primary transition-all duration-200 flex items-center justify-center gap-1 text-sm" data-testid="link-services">
                See Our Services <ArrowRight size={14} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-28 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">

          <FadeIn className="mb-14">
            <span className="eyebrow mb-5 inline-block">Who I Help</span>
            <h2 className="text-3xl mb-4">Built for businesses like yours</h2>
            <p className="text-foreground/70 max-w-2xl font-sans font-normal">
              I specialise in helping small businesses that are great at what they do — but need a hand getting their online presence and technology sorted properly.
            </p>
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-2 gap-6 mb-20">
            <StaggerItem>
              <div className="bg-[#f3f4f5] p-7 rounded-2xl card-hover flex gap-4 items-start" data-testid="card-who-tradespeople">
                <HardHat className="text-accent mt-1 shrink-0" size={22} />
                <div>
                  <h3 className="text-lg mb-2">Tradespeople &amp; Contractors</h3>
                  <p className="text-foreground/70 text-[15px] leading-relaxed font-sans font-normal">Electricians, plumbers, builders, landscapers — anyone who wins work locally and needs to be found on Google.</p>
                </div>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-[#f3f4f5] p-7 rounded-2xl card-hover flex gap-4 items-start" data-testid="card-who-professional">
                <Briefcase className="text-accent mt-1 shrink-0" size={22} />
                <div>
                  <h3 className="text-lg mb-2">Professional Services</h3>
                  <p className="text-foreground/70 text-[15px] leading-relaxed font-sans font-normal">Accountants, solicitors, consultants, and therapists who need a polished online presence that builds trust.</p>
                </div>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-[#f3f4f5] p-7 rounded-2xl card-hover flex gap-4 items-start" data-testid="card-who-retail">
                <Store className="text-accent mt-1 shrink-0" size={22} />
                <div>
                  <h3 className="text-lg mb-2">Retailers &amp; Hospitality</h3>
                  <p className="text-foreground/70 text-[15px] leading-relaxed font-sans font-normal">Shops, cafés, and B&Bs who want to attract visitors, take bookings, or simply show up when people search.</p>
                </div>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-[#f3f4f5] p-7 rounded-2xl card-hover flex gap-4 items-start" data-testid="card-who-service">
                <Wrench className="text-accent mt-1 shrink-0" size={22} />
                <div>
                  <h3 className="text-lg mb-2">Service Businesses</h3>
                  <p className="text-foreground/70 text-[15px] leading-relaxed font-sans font-normal">Cleaners, pest control, skip hire, vehicle recovery — businesses that rely on local enquiries to keep busy.</p>
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>

          <div className="grid md:grid-cols-3 gap-12 items-start mb-20">
            <FadeIn className="md:col-span-2 md:order-1">
              <span className="eyebrow mb-5 inline-block">Meet Joey</span>
              <h2 className="text-3xl mb-6">Enterprise experience, small-business focus</h2>
              <p className="text-lg mb-6 text-foreground/80 leading-relaxed font-sans font-normal">
                I'm Joey — the person behind Crettyard Digital. I've worked with some of the biggest names in tech, including Microsoft, Intel, and Dell. Now I use that experience to help local SMEs get the same quality of website, email, and network setup — at a price that makes sense.
              </p>
              <p className="mb-6 text-foreground/70 leading-relaxed font-sans font-normal">
                I started Crettyard Digital because I saw too many small businesses paying for poor websites, badly configured email, or patchy Wi-Fi — and not knowing they deserved better. My job is to give you the tools to compete, without the complexity.
              </p>
              <p className="text-foreground/70 leading-relaxed font-sans font-normal">
                When you work with me, you deal directly with the person doing the work. No account managers, no support tickets, no being passed around. Just honest advice and reliable delivery.
              </p>
            </FadeIn>
            <FadeIn delay={0.2} className="md:col-span-1 md:order-2 flex justify-center md:mt-10">
              <div className="w-44 md:w-full max-w-[200px]">
                <div className="aspect-square rounded-full overflow-hidden shadow-sm">
                  <img
                    src={joeyImg}
                    alt="Joey — founder of Crettyard Digital, based in Laois-Carlow"
                    className="w-full h-full object-cover object-top"
                    data-testid="img-joey"
                    width="200"
                    height="200"
                    loading="lazy"
                  />
                </div>
                <p className="text-center mt-3 text-sm font-headline font-bold text-primary">Joey</p>
                <p className="text-center text-sm text-muted-foreground font-sans">Founder, Crettyard Digital</p>
              </div>
            </FadeIn>
          </div>

          {/* No Jargon in Practice */}
          <FadeIn className="mb-8">
            <span className="eyebrow mb-5 inline-block">How I Work</span>
            <h2 className="text-3xl mb-4">No Jargon — in Practice</h2>
            <p className="text-lg text-foreground/70 leading-relaxed max-w-2xl font-sans font-normal">
              "No jargon" isn't just a slogan. Here's what it actually means when you work with me.
            </p>
          </FadeIn>

          <FadeIn className="mb-20">
            <div className="rounded-2xl p-8 bg-[#f3f4f5]" data-testid="section-no-jargon">
              <div className="grid sm:grid-cols-2 gap-8">
                <div>
                  <p className="text-foreground/80 leading-relaxed mb-4 font-sans font-normal">
                    Most of my clients aren't technical — and they don't need to be. You know your business better than anyone. My job is to handle the technology so you can focus on what you do best.
                  </p>
                  <p className="text-foreground/80 leading-relaxed mb-4 font-sans font-normal">
                    I explain every decision in plain English before I make it. I'll tell you what I'm doing, why it matters, and how much it costs — before anything is agreed.
                  </p>
                  <p className="text-foreground/80 leading-relaxed font-sans font-normal">
                    If something can wait, I'll say so. If something needs fixing urgently, I'll explain why in terms that actually make sense — not tech speak.
                  </p>
                </div>
                <div>
                  <ul className="space-y-3">
                    <li className="flex gap-3 items-start text-foreground/80 font-sans">
                      <CheckCircle2 className="text-accent mt-0.5 shrink-0" size={18} />
                      <span>Everything explained in plain English — no acronyms, no buzzwords</span>
                    </li>
                    <li className="flex gap-3 items-start text-foreground/80 font-sans">
                      <CheckCircle2 className="text-accent mt-0.5 shrink-0" size={18} />
                      <span>No pressure to buy things you don't need</span>
                    </li>
                    <li className="flex gap-3 items-start text-foreground/80 font-sans">
                      <CheckCircle2 className="text-accent mt-0.5 shrink-0" size={18} />
                      <span>You stay in control of your own website and accounts</span>
                    </li>
                    <li className="flex gap-3 items-start text-foreground/80 font-sans">
                      <CheckCircle2 className="text-accent mt-0.5 shrink-0" size={18} />
                      <span>I guide you step by step through every decision</span>
                    </li>
                    <li className="flex gap-3 items-start text-foreground/80 font-sans">
                      <CheckCircle2 className="text-accent mt-0.5 shrink-0" size={18} />
                      <span>One point of contact — no being passed around</span>
                    </li>
                    <li className="flex gap-3 items-start text-foreground/80 font-sans">
                      <CheckCircle2 className="text-accent mt-0.5 shrink-0" size={18} />
                      <span>Honest advice even if it means recommending you wait</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Areas Served */}
          <FadeIn className="mb-20">
            <div className="rounded-2xl p-8 bg-primary text-white" data-testid="section-areas-served">
              <div className="flex items-start gap-4 mb-6">
                <MapPin className="text-accent shrink-0 mt-1" size={28} />
                <div>
                  <h2 className="text-2xl text-white mb-2">Areas Served</h2>
                  <p className="text-white/70 font-sans font-normal leading-relaxed">
                    Based near Crettyard on the Laois–Carlow border, I primarily work with businesses in:
                  </p>
                </div>
              </div>
              <div className="grid sm:grid-cols-3 gap-4 mb-6">
                {[
                  { county: "County Laois", examples: "Portlaoise, Portarlington, Abbeyleix, Mountmellick" },
                  { county: "County Carlow", examples: "Carlow town, Tullow, Muinebheag, Borris" },
                  { county: "County Kilkenny", examples: "Kilkenny city, Castlecomer, Graiguenamanagh" },
                  { county: "County Kildare", examples: "Athy, Monasterevin, Newbridge (south Kildare)" },
                  { county: "County Offaly", examples: "Tullamore, Portarlington, Edenderry" },
                  { county: "County Tipperary", examples: "North Tipperary and surrounding areas" },
                ].map((area, i) => (
                  <div key={i} className="bg-white/10 rounded-xl p-4">
                    <p className="font-headline font-bold text-white text-sm mb-1">{area.county}</p>
                    <p className="text-white/60 text-xs font-sans">{area.examples}</p>
                  </div>
                ))}
              </div>
              <p className="text-white/70 text-sm font-sans">
                For cloud and web projects, I work with businesses remotely across all of Ireland. Get in touch and we'll figure out what works for you.
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            <span className="eyebrow mb-5 inline-block">Why Work With Me</span>
            <h2 className="text-3xl mt-4 mb-8">What sets Crettyard Digital apart</h2>
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-2 gap-6 mb-20">
            <StaggerItem>
              <div className="bg-[#f3f4f5] p-7 rounded-2xl card-hover flex gap-4 items-start" data-testid="card-trust-enterprise">
                <Shield className="text-accent mt-1 shrink-0" size={22} />
                <div>
                  <h3 className="text-lg mb-2">Enterprise Background</h3>
                  <p className="text-foreground/70 text-[15px] leading-relaxed font-sans font-normal">Years of experience at Microsoft, Intel, and Dell — applied to your small business. You get big-company standards at SME-friendly prices.</p>
                </div>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-[#f3f4f5] p-7 rounded-2xl card-hover flex gap-4 items-start" data-testid="card-trust-plain-english">
                <Languages className="text-accent mt-1 shrink-0" size={22} />
                <div>
                  <h3 className="text-lg mb-2">Plain English</h3>
                  <p className="text-foreground/70 text-[15px] leading-relaxed font-sans font-normal">No buzzwords, no tech-speak. I explain what I'm doing, why it matters, and what it costs — in language that makes sense.</p>
                </div>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-[#f3f4f5] p-7 rounded-2xl card-hover flex gap-4 items-start" data-testid="card-trust-local">
                <MapPin className="text-accent mt-1 shrink-0" size={22} />
                <div>
                  <h3 className="text-lg mb-2">Local Focus</h3>
                  <p className="text-foreground/70 text-[15px] leading-relaxed font-sans font-normal">Based on the Laois–Carlow border, serving businesses across Laois, Carlow, Kilkenny, and surrounding areas. I understand local business.</p>
                </div>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-[#f3f4f5] p-7 rounded-2xl card-hover flex gap-4 items-start" data-testid="card-trust-direct">
                <MessageSquare className="text-accent mt-1 shrink-0" size={22} />
                <div>
                  <h3 className="text-lg mb-2">Direct Communication</h3>
                  <p className="text-foreground/70 text-[15px] leading-relaxed font-sans font-normal">You deal directly with Joey — the person doing the work. No call centres, no ticketing systems, no waiting days for a reply.</p>
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>

          <FadeIn className="mb-14">
            <span className="eyebrow mb-5 inline-block">Services</span>
            <h2 className="text-3xl mb-4">Three ways I can help</h2>
            <p className="text-foreground/70 max-w-2xl font-sans font-normal">Everything you need to get online, stay secure, and look professional — from one trusted partner.</p>
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-3 gap-6 mb-10">
            <StaggerItem>
              <Link href="/web-design">
                <div className="bg-[#f3f4f5] p-6 rounded-2xl card-hover text-center cursor-pointer" data-testid="card-service-web">
                  <MonitorSmartphone className="text-accent mx-auto mb-4" size={24} />
                  <h3 className="text-base mb-2">Web Design</h3>
                  <p className="text-foreground/70 text-[13px] leading-relaxed font-sans">Fast, SEO-ready websites that help you get found and win more enquiries.</p>
                  <span className="text-accent text-xs font-headline font-bold mt-3 inline-flex items-center gap-1">Learn more <ArrowRight size={12} /></span>
                </div>
              </Link>
            </StaggerItem>
            <StaggerItem>
              <Link href="/microsoft-365">
                <div className="bg-[#f3f4f5] p-6 rounded-2xl card-hover text-center cursor-pointer" data-testid="card-service-m365">
                  <Cloud className="text-accent mx-auto mb-4" size={24} />
                  <h3 className="text-base mb-2">Microsoft 365</h3>
                  <p className="text-foreground/70 text-[13px] leading-relaxed font-sans">Professional email, Teams, and cloud storage — set up properly from day one.</p>
                  <span className="text-accent text-xs font-headline font-bold mt-3 inline-flex items-center gap-1">Learn more <ArrowRight size={12} /></span>
                </div>
              </Link>
            </StaggerItem>
            <StaggerItem>
              <Link href="/network-wifi-security">
                <div className="bg-[#f3f4f5] p-6 rounded-2xl card-hover text-center cursor-pointer" data-testid="card-service-network">
                  <Wifi className="text-accent mx-auto mb-4" size={24} />
                  <h3 className="text-base mb-2">Network &amp; Wi-Fi</h3>
                  <p className="text-foreground/70 text-[13px] leading-relaxed font-sans">Reliable coverage, secure firewalls, and proper setup for offices and workshops.</p>
                  <span className="text-accent text-xs font-headline font-bold mt-3 inline-flex items-center gap-1">Learn more <ArrowRight size={12} /></span>
                </div>
              </Link>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      <section className="py-24 bg-primary dot-matrix-bg text-center">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl text-white mb-4">Let's Talk About Your Business</h2>
            <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto font-sans font-normal">
              Whether you need a website, email setup, or better Wi-Fi — I'll give you honest, practical advice with no obligation.
            </p>
            <Link href="/contact#send-message">
              <Button size="lg" className="px-10 bg-accent text-white hover:bg-[#18a07e]" data-testid="button-contact-cta">
                Book a Free Consultation
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
