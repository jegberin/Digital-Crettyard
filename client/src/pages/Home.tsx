import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { MonitorSmartphone, Cloud, Wifi, CheckCircle2 } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/FadeIn";
import heroImg from "@assets/Gemini_Generated_Image_52qfjo52qfjo52qf_1772790597131.png";
import project1 from "@assets/screenshot-1772791998786.png";
import project2 from "@assets/screenshot-1772791995871.png";
import project3 from "@assets/screenshot-1772791990532.png";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-white py-24 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <FadeIn direction="up" className="max-w-xl">
              <span className="eyebrow mb-4 inline-block">Crettyard Digital</span>
              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.1] mb-6">
                Web Design, Office and Networking for Small Businesses
              </h1>
              <p className="text-lg text-foreground/80 mb-10 leading-relaxed">
                Crettyard Digital builds fast, modern websites and cloud and network setups for small businesses across Laois, Carlow, Kilkenny and the surrounding counties. Whether you need a new website, better local SEO, a reliable Microsoft 365 environment or a secure Wi‑Fi network, I help you get online, stay secure and win more customers.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
                <Link href="/contact">
                  <Button size="lg" className="bg-accent text-white hover:bg-[#0fa079] rounded-[4px] font-semibold w-full sm:w-auto h-12 px-8 text-sm transition-all duration-200 shadow-sm hover:shadow-lg">
                    Request a Free Review
                  </Button>
                </Link>
                <Link href="/portfolio" className="text-accent font-semibold hover:text-primary transition-all duration-200 flex items-center gap-1 text-sm">
                  See Recent Projects &gt;
                </Link>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={0.2} className="relative">
              <div className="aspect-[4/3] rounded-[4px] overflow-hidden shadow-lg">
                <img src={heroImg} alt="Digital services professional" className="object-cover w-full h-full" />
              </div>
              <div className="absolute -bottom-5 -left-5 bg-white py-4 px-5 rounded-[4px] shadow-lg border border-gray-100/60 hidden md:flex items-center gap-3">
                <div className="w-10 h-10 bg-accent/10 flex items-center justify-center rounded-full text-accent">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <p className="font-semibold text-primary text-sm">Trusted Local Partner</p>
                  <p className="text-xs text-foreground/60">Laois, Carlow & Kilkenny</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="section-gradient py-28">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <FadeIn>
            <span className="eyebrow mb-4 inline-block">Why Choose Local</span>
            <h2 className="text-3xl md:text-4xl mb-6">Why work with a local web & network specialist?</h2>
            <p className="text-lg text-foreground/70 mb-14">
              When you search for web design in Carlow or Laois, or Microsoft 365 support in Ireland, you want a local, dependable expert rather than a faceless overseas agency. 
            </p>
          </FadeIn>
          
          <StaggerContainer className="grid sm:grid-cols-2 gap-6 text-left">
            {[
              "Bespoke websites that convert visitors into enquiries",
              "SEO-ready content for local search",
              "Microsoft 365 that \u201Cjust works\u201D",
              "Network architecture advice from modem to mesh Wi\u2011Fi",
              "Practical network security for Irish SMEs"
            ].map((point, i) => (
              <StaggerItem key={i} className="flex items-start gap-3">
                <CheckCircle2 className="text-accent shrink-0 mt-1" size={18} />
                <span className="text-foreground/80 font-medium text-[15px]">{point}</span>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-28 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center mb-16">
            <span className="eyebrow mb-4 inline-block">Our Services</span>
            <h2 className="text-3xl md:text-4xl mb-4">Core Services</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">Enterprise-grade reliability with small-business simplicity.</p>
          </FadeIn>
          
          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            <StaggerItem>
              <div className="border border-gray-200/80 rounded-[4px] p-8 bg-white card-hover group flex flex-col h-full">
                <div className="w-12 h-12 bg-accent/8 text-accent flex items-center justify-center rounded-[4px] mb-6 group-hover:bg-accent/15 transition-colors duration-300">
                  <MonitorSmartphone size={24} />
                </div>
                <h3 className="text-xl mb-3">Web Design</h3>
                <p className="text-foreground/70 mb-8 flex-grow text-[15px] leading-relaxed">
                  Fast, mobile-friendly websites designed to look professional, rank well locally, and convert visitors into enquiries.
                </p>
                <Link href="/web-design" className="text-accent font-semibold inline-flex items-center mt-auto hover:text-primary transition-colors text-sm">
                  Learn more &gt;
                </Link>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="border border-gray-200/80 rounded-[4px] p-8 bg-white card-hover group flex flex-col h-full">
                <div className="w-12 h-12 bg-accent/8 text-accent flex items-center justify-center rounded-[4px] mb-6 group-hover:bg-accent/15 transition-colors duration-300">
                  <Cloud size={24} />
                </div>
                <h3 className="text-xl mb-3">Microsoft 365</h3>
                <p className="text-foreground/70 mb-8 flex-grow text-[15px] leading-relaxed">
                  Reliable setup, email migration, and ongoing support for Microsoft Teams, OneDrive, SharePoint, and security.
                </p>
                <Link href="/microsoft-365" className="text-accent font-semibold inline-flex items-center mt-auto hover:text-primary transition-colors text-sm">
                  Learn more &gt;
                </Link>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="border border-gray-200/80 rounded-[4px] p-8 bg-white card-hover group flex flex-col h-full">
                <div className="w-12 h-12 bg-accent/8 text-accent flex items-center justify-center rounded-[4px] mb-6 group-hover:bg-accent/15 transition-colors duration-300">
                  <Wifi size={24} />
                </div>
                <h3 className="text-xl mb-3">Network & Wi&#8209;Fi</h3>
                <p className="text-foreground/70 mb-8 flex-grow text-[15px] leading-relaxed">
                  Professional network design, Wi-Fi optimisation, firewall configuration, and secure remote access for your office or workshop.
                </p>
                <Link href="/network-wifi-security" className="text-accent font-semibold inline-flex items-center mt-auto hover:text-primary transition-colors text-sm">
                  Learn more &gt;
                </Link>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-28 section-gradient">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center mb-16">
            <span className="eyebrow mb-4 inline-block">How It Works</span>
            <h2 className="text-3xl md:text-4xl">A simple, transparent process</h2>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-5 gap-8" staggerDelay={0.08}>
            {[
              { num: "01", title: "Free discovery call" },
              { num: "02", title: "Proposal & fixed price" },
              { num: "03", title: "Content, build & network plan" },
              { num: "04", title: "Launch & training" },
              { num: "05", title: "Optional care plan" }
            ].map((step, i) => (
              <StaggerItem key={i} className="text-center">
                <div className="text-4xl font-light text-primary/15 mb-4 tracking-tight">{step.num}</div>
                <h4 className="font-semibold text-primary text-sm">{step.title}</h4>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn className="flex justify-between items-end mb-14">
            <div>
              <span className="eyebrow mb-4 inline-block">Featured Projects</span>
              <h2 className="text-3xl md:text-4xl mb-3">Recent websites built for local businesses</h2>
            </div>
            <Link href="/portfolio" className="hidden md:inline-flex text-accent font-semibold items-center hover:text-primary transition-colors text-sm">
              View all projects &gt;
            </Link>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            <StaggerItem>
              <a href="https://bmcustomfurniture.ie" target="_blank" rel="noopener noreferrer" className="group cursor-pointer block">
                <div className="aspect-[4/3] bg-gray-50 mb-5 overflow-hidden rounded-[4px] shadow-sm">
                  <img src={project1} alt="BM Custom Furniture" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <h3 className="text-lg mb-1 group-hover:text-accent transition-colors font-semibold">BM Custom Furniture</h3>
                <p className="text-xs font-medium text-muted-foreground mb-2">bmcustomfurniture.ie</p>
                <p className="text-sm text-foreground/70 mb-3">Bespoke fitted furniture showcase</p>
                <span className="text-accent font-semibold inline-flex items-center text-sm">View project &gt;</span>
              </a>
            </StaggerItem>
            <StaggerItem>
              <a href="https://gogreensteamclean.ie" target="_blank" rel="noopener noreferrer" className="group cursor-pointer block">
                <div className="aspect-[4/3] bg-gray-50 mb-5 overflow-hidden rounded-[4px] shadow-sm">
                  <img src={project2} alt="Go Green Steam Clean" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <h3 className="text-lg mb-1 group-hover:text-accent transition-colors font-semibold">Go Green Steam Clean</h3>
                <p className="text-xs font-medium text-muted-foreground mb-2">gogreensteamclean.ie</p>
                <p className="text-sm text-foreground/70 mb-3">Service-led eco-friendly cleaning</p>
                <span className="text-accent font-semibold inline-flex items-center text-sm">View project &gt;</span>
              </a>
            </StaggerItem>
            <StaggerItem>
              <a href="https://nurneyplantandcivil.ie" target="_blank" rel="noopener noreferrer" className="group cursor-pointer block">
                <div className="aspect-[4/3] bg-gray-50 mb-5 overflow-hidden rounded-[4px] shadow-sm">
                  <img src={project3} alt="Nurney Plant and Civil" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <h3 className="text-lg mb-1 group-hover:text-accent transition-colors font-semibold">Nurney Plant and Civil</h3>
                <p className="text-xs font-medium text-muted-foreground mb-2">nurneyplantandcivil.ie</p>
                <p className="text-sm text-foreground/70 mb-3">Professional plant hire services</p>
                <span className="text-accent font-semibold inline-flex items-center text-sm">View project &gt;</span>
              </a>
            </StaggerItem>
          </StaggerContainer>
          <div className="mt-8 text-center md:hidden">
            <Link href="/portfolio" className="text-accent font-semibold items-center hover:text-primary transition-colors text-sm">
              View all projects &gt;
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 bg-primary text-white text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeIn>
            <h2 className="text-3xl md:text-[2.75rem] text-white mb-6 leading-tight">Ready to improve your digital presence?</h2>
            <p className="text-lg text-white/60 mb-10 leading-relaxed">
              Let's discuss how a new website, better Microsoft 365 setup, or a faster network can help your business grow.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-accent text-white hover:bg-[#0fa079] rounded-[4px] font-semibold h-12 px-10 text-sm border-0 transition-all duration-200 shadow-sm hover:shadow-lg">
                Get in touch
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
