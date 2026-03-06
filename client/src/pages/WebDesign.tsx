import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { MonitorSmartphone, Search, Wrench, Smartphone, Rocket, FormInput } from "lucide-react";

export default function WebDesign() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-secondary py-16 md:py-24 border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
            Web Design Carlow & Laois – Fast, Mobile-Friendly Websites That Win You Work
          </h1>
          <p className="text-xl text-foreground mb-8 leading-relaxed">
            I build bespoke websites tailored for local businesses. Whether you need a simple brochure site, a lead generation page, or a complete redesign, I deliver modern, lightweight solutions that rank on Google and convert visitors into enquiries.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-accent text-white hover:bg-[#0fa079] rounded-sm font-semibold h-14 px-8 text-base">
              Talk About Your Project
            </Button>
          </Link>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div>
              <h2 className="text-3xl mb-6">Built for Local Search</h2>
              <p className="text-foreground mb-4">
                Having a nice website isn't enough; it needs to be found. I build SEO-friendly page structures designed to rank for searches like <strong>bespoke furniture Dublin</strong>, <strong>carpet cleaning Laois</strong>, or <strong>plant hire Carlow</strong>.
              </p>
              <p className="text-foreground">
                I use natural, conversion-oriented copy and clean semantic HTML to give you the best possible chance of ranking well on local Google searches.
              </p>
            </div>
            <div className="bg-secondary p-8 rounded-sm border border-gray-100 flex flex-col justify-center">
              <h3 className="text-xl mb-4 font-bold">What I offer:</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3"><span className="w-2 h-2 bg-accent rounded-sm"></span> New business websites</li>
                <li className="flex items-center gap-3"><span className="w-2 h-2 bg-accent rounded-sm"></span> Website redesigns</li>
                <li className="flex items-center gap-3"><span className="w-2 h-2 bg-accent rounded-sm"></span> Local SEO-focused content</li>
                <li className="flex items-center gap-3"><span className="w-2 h-2 bg-accent rounded-sm"></span> Quote and contact forms</li>
                <li className="flex items-center gap-3"><span className="w-2 h-2 bg-accent rounded-sm"></span> Hosting and maintenance</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl text-center mb-12">The Benefits for Your Business</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border border-gray-200 p-6 rounded-sm hover:shadow-md transition-shadow">
              <Smartphone className="text-accent mb-4" size={32} />
              <h3 className="text-xl font-bold mb-3">Mobile Usability</h3>
              <p className="text-foreground text-sm">Over 60% of searches are on mobile. Your site will look perfectly proportioned and be easy to use on any device.</p>
            </div>
            
            <div className="border border-gray-200 p-6 rounded-sm hover:shadow-md transition-shadow">
              <Rocket className="text-accent mb-4" size={32} />
              <h3 className="text-xl font-bold mb-3">Faster Loading</h3>
              <p className="text-foreground text-sm">Fast, lightweight implementation means no bloated code, keeping visitors engaged and Google happy.</p>
            </div>

            <div className="border border-gray-200 p-6 rounded-sm hover:shadow-md transition-shadow">
              <Search className="text-accent mb-4" size={32} />
              <h3 className="text-xl font-bold mb-3">Better Visibility</h3>
              <p className="text-foreground text-sm">Proper semantic heading hierarchies and location-aware service pages boost your local Google rankings.</p>
            </div>

            <div className="border border-gray-200 p-6 rounded-sm hover:shadow-md transition-shadow">
              <FormInput className="text-accent mb-4" size={32} />
              <h3 className="text-xl font-bold mb-3">More Enquiries</h3>
              <p className="text-foreground text-sm">Clear structure and prominent contact/quote forms turn passive browsing into actionable business leads.</p>
            </div>

            <div className="border border-gray-200 p-6 rounded-sm hover:shadow-md transition-shadow">
              <MonitorSmartphone className="text-accent mb-4" size={32} />
              <h3 className="text-xl font-bold mb-3">Better Impressions</h3>
              <p className="text-foreground text-sm">A highly structured, clean design builds trust and credibility with potential clients instantly.</p>
            </div>

            <div className="border border-gray-200 p-6 rounded-sm hover:shadow-md transition-shadow">
              <Wrench className="text-accent mb-4" size={32} />
              <h3 className="text-xl font-bold mb-3">Simple Maintenance</h3>
              <p className="text-foreground text-sm">Ongoing hosting and maintenance care plans available so you never have to worry about updates or security.</p>
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary border-t border-gray-200 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl mb-6">Need a professional website for your trade or service?</h2>
          <Link href="/contact">
            <Button size="lg" className="bg-primary text-white hover:bg-primary/90 rounded-sm font-semibold h-14 px-8 text-base">
              Contact Crettyard Digital
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
