import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { MonitorSmartphone, Search, Wrench, Smartphone, Rocket, FormInput } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/FadeIn";

export default function WebDesign() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="section-gradient py-24 md:py-32 border-b border-gray-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn>
            <span className="eyebrow mb-4 inline-block">Web Design</span>
            <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.1] mb-6">
              Web Design Carlow & Laois – Fast, Mobile-Friendly Websites That Win You Work
            </h1>
            <p className="text-xl text-foreground/70 mb-8 leading-relaxed">
              I build bespoke websites tailored for local businesses. Whether you need a simple brochure site, a lead generation page, or a complete redesign, I deliver modern, lightweight solutions that rank on Google and convert visitors into enquiries.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-accent text-white hover:bg-[#0fa079] rounded-[4px] font-semibold h-12 px-8 text-sm transition-all duration-200 shadow-sm hover:shadow-lg">
                Talk About Your Project
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          
          <div className="grid md:grid-cols-2 gap-14 mb-24">
            <FadeIn>
              <h2 className="text-3xl mb-6">Built for Local Search</h2>
              <p className="text-foreground/70 mb-4 leading-relaxed">
                Having a nice website isn't enough; it needs to be found. I build SEO-friendly page structures designed to rank for searches like <strong>bespoke furniture Dublin</strong>, <strong>carpet cleaning Laois</strong>, or <strong>plant hire Carlow</strong>.
              </p>
              <p className="text-foreground/70 leading-relaxed">
                I use natural, conversion-oriented copy and clean semantic HTML to give you the best possible chance of ranking well on local Google searches.
              </p>
            </FadeIn>
            <FadeIn delay={0.15} className="bg-secondary p-8 rounded-[4px] border border-gray-100 flex flex-col justify-center">
              <h3 className="text-lg mb-4 font-bold">What I offer:</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-[15px]"><span className="w-1.5 h-1.5 bg-accent rounded-sm shrink-0"></span> New business websites</li>
                <li className="flex items-center gap-3 text-[15px]"><span className="w-1.5 h-1.5 bg-accent rounded-sm shrink-0"></span> Website redesigns</li>
                <li className="flex items-center gap-3 text-[15px]"><span className="w-1.5 h-1.5 bg-accent rounded-sm shrink-0"></span> Local SEO-focused content</li>
                <li className="flex items-center gap-3 text-[15px]"><span className="w-1.5 h-1.5 bg-accent rounded-sm shrink-0"></span> Quote and contact forms</li>
                <li className="flex items-center gap-3 text-[15px]"><span className="w-1.5 h-1.5 bg-accent rounded-sm shrink-0"></span> Hosting and maintenance</li>
              </ul>
            </FadeIn>
          </div>

          <FadeIn className="text-center mb-14">
            <span className="eyebrow mb-4 inline-block">Benefits</span>
            <h2 className="text-3xl">The Benefits for Your Business</h2>
          </FadeIn>
          
          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            <StaggerItem>
              <div className="border border-gray-200/80 p-7 rounded-[4px] card-hover">
                <Smartphone className="text-accent mb-5" size={28} />
                <h3 className="text-lg font-bold mb-3">Mobile Usability</h3>
                <p className="text-foreground/70 text-[15px] leading-relaxed">Over 60% of searches are on mobile. Your site will look perfectly proportioned and be easy to use on any device.</p>
              </div>
            </StaggerItem>
            
            <StaggerItem>
              <div className="border border-gray-200/80 p-7 rounded-[4px] card-hover">
                <Rocket className="text-accent mb-5" size={28} />
                <h3 className="text-lg font-bold mb-3">Faster Loading</h3>
                <p className="text-foreground/70 text-[15px] leading-relaxed">Fast, lightweight implementation means no bloated code, keeping visitors engaged and Google happy.</p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="border border-gray-200/80 p-7 rounded-[4px] card-hover">
                <Search className="text-accent mb-5" size={28} />
                <h3 className="text-lg font-bold mb-3">Better Visibility</h3>
                <p className="text-foreground/70 text-[15px] leading-relaxed">Proper semantic heading hierarchies and location-aware service pages boost your local Google rankings.</p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="border border-gray-200/80 p-7 rounded-[4px] card-hover">
                <FormInput className="text-accent mb-5" size={28} />
                <h3 className="text-lg font-bold mb-3">More Enquiries</h3>
                <p className="text-foreground/70 text-[15px] leading-relaxed">Clear structure and prominent contact/quote forms turn passive browsing into actionable business leads.</p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="border border-gray-200/80 p-7 rounded-[4px] card-hover">
                <MonitorSmartphone className="text-accent mb-5" size={28} />
                <h3 className="text-lg font-bold mb-3">Better Impressions</h3>
                <p className="text-foreground/70 text-[15px] leading-relaxed">A highly structured, clean design builds trust and credibility with potential clients instantly.</p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="border border-gray-200/80 p-7 rounded-[4px] card-hover">
                <Wrench className="text-accent mb-5" size={28} />
                <h3 className="text-lg font-bold mb-3">Simple Maintenance</h3>
                <p className="text-foreground/70 text-[15px] leading-relaxed">Ongoing hosting and maintenance care plans available so you never have to worry about updates or security.</p>
              </div>
            </StaggerItem>
          </StaggerContainer>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 section-gradient border-t border-gray-100 text-center">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl mb-6">Need a professional website for your trade or service?</h2>
            <Link href="/contact">
              <Button size="lg" className="bg-primary text-white hover:bg-primary/90 rounded-[4px] font-semibold h-12 px-8 text-sm transition-all duration-200">
                Contact Crettyard Digital
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
