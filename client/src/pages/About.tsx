import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-secondary py-16 md:py-24 border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
            About Crettyard Digital
          </h1>
          <p className="text-xl text-foreground">
            An independent web design, cloud, and network studio based near Crettyard on the Laois–Carlow border.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="prose prose-lg prose-headings:text-primary prose-p:text-foreground max-w-none">
            <p className="lead text-xl mb-8">
              Crettyard Digital is run by a senior cloud and network architect with extensive enterprise experience at companies like Microsoft, Intel, Dell, and Citi. 
            </p>
            <p className="mb-8">
              The goal of Crettyard Digital is simple: to bring enterprise-grade reliability and security to Irish small businesses, without the corporate jargon or unnecessary complexity. Whether you need a local SEO-optimized website to win more trade, a secure Microsoft 365 migration, or a robust Wi-Fi network for your office or workshop, I provide practical, effective solutions.
            </p>

            <h2 className="text-3xl mt-12 mb-6 font-bold text-primary">What this means for you</h2>
            
            <div className="grid sm:grid-cols-2 gap-6 mt-8 not-prose">
              <div className="border border-gray-200 p-6 rounded-sm">
                <h3 className="text-xl font-bold mb-2">Direct Communication</h3>
                <p className="text-foreground">You deal directly with the person doing the work. No account managers, no confusing support ticketing systems.</p>
              </div>
              <div className="border border-gray-200 p-6 rounded-sm">
                <h3 className="text-xl font-bold mb-2">Enterprise Quality</h3>
                <p className="text-foreground">Performance, security, and scalability are built in from the start, applying big-company standards to SME budgets.</p>
              </div>
              <div className="border border-gray-200 p-6 rounded-sm">
                <h3 className="text-xl font-bold mb-2">No Jargon</h3>
                <p className="text-foreground">I provide practical, straightforward advice in plain English. I focus on business outcomes, not technical buzzwords.</p>
              </div>
              <div className="border border-gray-200 p-6 rounded-sm">
                <h3 className="text-xl font-bold mb-2">Local Focus</h3>
                <p className="text-foreground">A strong technical foundation tailored specifically for local businesses in Laois, Carlow, Kilkenny, and surrounding areas.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary border-t border-gray-200 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl mb-6">Need a reliable technical partner?</h2>
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
