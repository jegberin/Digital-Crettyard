import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { MonitorSmartphone, Cloud, Wifi, CheckCircle2 } from "lucide-react";
import heroImg from "@assets/Gemini_Generated_Image_52qfjo52qfjo52qf_1772790597131.png";
import project1 from "@/assets/portfolio-furniture.jpg";
import project2 from "@/assets/portfolio-cleaning.jpg";
import project3 from "@/assets/portfolio-plant.jpg";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
                Web Design, Office and Networking for Small Businesses in Laois, Carlow & Kilkenny
              </h1>
              <p className="text-lg text-foreground mb-8 leading-relaxed">
                Crettyard Digital builds fast, modern websites and cloud and network setups for small businesses across Laois, Carlow and the surrounding counties. Whether you need a new website, better local SEO, a reliable Microsoft 365 environment or a secure Wi‑Fi network, I help you get online, stay secure and win more customers.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <Link href="/contact">
                  <Button size="lg" className="bg-accent text-white hover:bg-[#0fa079] rounded-sm font-semibold w-full sm:w-auto h-14 px-8 text-base">
                    Request a Free Website, IT & Network Review
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <a className="text-accent font-bold hover:text-primary transition-colors flex items-center gap-1">
                    See Recent Projects &gt;
                  </a>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-sm overflow-hidden border border-gray-100 shadow-sm">
                <img src={heroImg} alt="Modern professional office" className="object-cover w-full h-full" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-sm shadow-md border border-gray-100 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-secondary flex items-center justify-center rounded-full text-accent">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-primary">Trusted Local Partner</p>
                    <p className="text-sm text-foreground">Laois & Carlow</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl mb-6">Why work with a local web & network specialist?</h2>
          <p className="text-lg text-foreground mb-12">
            When you search for web design in Carlow or Laois, or Microsoft 365 support in Ireland, you want a local, dependable expert rather than a faceless overseas agency. 
          </p>
          
          <div className="grid sm:grid-cols-2 gap-6 text-left">
            {[
              "Bespoke websites that convert visitors into enquiries",
              "SEO-ready content for local search",
              "Microsoft 365 that “just works”",
              "Network architecture advice from modem to mesh Wi‑Fi",
              "Practical network security for Irish SMEs"
            ].map((point, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 className="text-accent shrink-0 mt-1" size={20} />
                <span className="text-foreground font-medium">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">Core Services</h2>
            <p className="text-foreground max-w-2xl mx-auto">Enterprise-grade reliability with small-business simplicity.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="border border-gray-200 rounded-sm p-8 bg-white hover:shadow-md transition-shadow group flex flex-col h-full">
              <div className="w-14 h-14 bg-secondary text-accent flex items-center justify-center rounded-sm mb-6 group-hover:scale-110 transition-transform">
                <MonitorSmartphone size={28} />
              </div>
              <h3 className="text-2xl mb-4">Web Design</h3>
              <p className="text-foreground mb-8 flex-grow">
                Fast, mobile-friendly websites designed to look professional, rank well locally, and convert visitors into enquiries.
              </p>
              <Link href="/web-design">
                <a className="text-accent font-bold inline-flex items-center mt-auto hover:text-primary transition-colors">
                  Learn more &gt;
                </a>
              </Link>
            </div>

            {/* Service 2 */}
            <div className="border border-gray-200 rounded-sm p-8 bg-white hover:shadow-md transition-shadow group flex flex-col h-full">
              <div className="w-14 h-14 bg-secondary text-accent flex items-center justify-center rounded-sm mb-6 group-hover:scale-110 transition-transform">
                <Cloud size={28} />
              </div>
              <h3 className="text-2xl mb-4">Microsoft 365</h3>
              <p className="text-foreground mb-8 flex-grow">
                Reliable setup, email migration, and ongoing support for Microsoft Teams, OneDrive, SharePoint, and security.
              </p>
              <Link href="/microsoft-365">
                <a className="text-accent font-bold inline-flex items-center mt-auto hover:text-primary transition-colors">
                  Learn more &gt;
                </a>
              </Link>
            </div>

            {/* Service 3 */}
            <div className="border border-gray-200 rounded-sm p-8 bg-white hover:shadow-md transition-shadow group flex flex-col h-full">
              <div className="w-14 h-14 bg-secondary text-accent flex items-center justify-center rounded-sm mb-6 group-hover:scale-110 transition-transform">
                <Wifi size={28} />
              </div>
              <h3 className="text-2xl mb-4">Network & Wi‑Fi</h3>
              <p className="text-foreground mb-8 flex-grow">
                Professional network design, Wi-Fi optimisation, firewall configuration, and secure remote access for your office or workshop.
              </p>
              <Link href="/network-wifi-security">
                <a className="text-accent font-bold inline-flex items-center mt-auto hover:text-primary transition-colors">
                  Learn more &gt;
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl text-center mb-16">How it works</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {[
              { num: "01", title: "Free discovery call" },
              { num: "02", title: "Proposal & fixed price" },
              { num: "03", title: "Content, build & network plan" },
              { num: "04", title: "Launch & training" },
              { num: "05", title: "Optional care plan" }
            ].map((step, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl font-bold text-primary/20 mb-4">{step.num}</div>
                <h4 className="font-bold text-primary">{step.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl mb-4">Featured Projects</h2>
              <p className="text-foreground max-w-2xl">Recent websites built for local businesses.</p>
            </div>
            <Link href="/portfolio">
              <a className="hidden md:inline-flex text-accent font-bold items-center hover:text-primary transition-colors">
                View all projects &gt;
              </a>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group cursor-pointer">
              <div className="aspect-[4/3] bg-gray-100 mb-6 overflow-hidden border border-gray-100 rounded-sm">
                <img src={project1} alt="BM Custom Furniture" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="text-xl mb-2 group-hover:text-accent transition-colors">BM Custom Furniture</h3>
              <p className="text-sm text-foreground mb-4">Bespoke fitted furniture showcase</p>
              <Link href="/portfolio"><a className="text-accent font-bold inline-flex items-center text-sm">View project &gt;</a></Link>
            </div>
            <div className="group cursor-pointer">
              <div className="aspect-[4/3] bg-gray-100 mb-6 overflow-hidden border border-gray-100 rounded-sm">
                <img src={project2} alt="Go Green Steam Clean" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="text-xl mb-2 group-hover:text-accent transition-colors">Go Green Steam Clean</h3>
              <p className="text-sm text-foreground mb-4">Service-led eco-friendly cleaning</p>
              <Link href="/portfolio"><a className="text-accent font-bold inline-flex items-center text-sm">View project &gt;</a></Link>
            </div>
            <div className="group cursor-pointer">
              <div className="aspect-[4/3] bg-gray-100 mb-6 overflow-hidden border border-gray-100 rounded-sm">
                <img src={project3} alt="Nurney Plant and Civil" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="text-xl mb-2 group-hover:text-accent transition-colors">Nurney Plant and Civil</h3>
              <p className="text-sm text-foreground mb-4">Professional plant hire services</p>
              <Link href="/portfolio"><a className="text-accent font-bold inline-flex items-center text-sm">View project &gt;</a></Link>
            </div>
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link href="/portfolio">
              <a className="text-accent font-bold items-center hover:text-primary transition-colors">
                View all projects &gt;
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-5xl text-white mb-6">Ready to improve your digital presence?</h2>
          <p className="text-lg text-gray-300 mb-10">
            Let's discuss how a new website, better Microsoft 365 setup, or a faster network can help your business grow.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-accent text-white hover:bg-[#0fa079] rounded-sm font-semibold h-14 px-10 text-lg border-0">
              Get in touch
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
