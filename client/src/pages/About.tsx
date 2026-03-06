import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/FadeIn";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="section-gradient py-24 md:py-32 border-b border-gray-100">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <FadeIn>
            <span className="eyebrow mb-4 inline-block">About</span>
            <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.1] mb-6">
              About Crettyard Digital
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed">
              An independent web design, cloud, and network studio based near Crettyard on the Laois–Carlow border.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-28 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeIn>
            <p className="text-xl mb-8 text-foreground/80 leading-relaxed">
              Crettyard Digital is run by a senior cloud and network architect with extensive enterprise experience at companies like Microsoft, Intel, Dell, and Citi. 
            </p>
            <p className="mb-8 text-foreground/70 leading-relaxed">
              The goal of Crettyard Digital is simple: to bring enterprise-grade reliability and security to Irish small businesses, without the corporate jargon or unnecessary complexity. Whether you need a local SEO-optimized website to win more trade, a secure Microsoft 365 migration, or a robust Wi-Fi network for your office or workshop, I provide practical, effective solutions.
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <span className="eyebrow mb-4 inline-block">Your Advantage</span>
            <h2 className="text-3xl mt-4 mb-8">What this means for you</h2>
          </FadeIn>
          
          <StaggerContainer className="grid sm:grid-cols-2 gap-6 mt-8">
            <StaggerItem>
              <div className="border border-gray-200/80 p-7 rounded-[4px] card-hover">
                <h3 className="text-lg font-bold mb-2">Direct Communication</h3>
                <p className="text-foreground/70 text-[15px] leading-relaxed">You deal directly with the person doing the work. No account managers, no confusing support ticketing systems.</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="border border-gray-200/80 p-7 rounded-[4px] card-hover">
                <h3 className="text-lg font-bold mb-2">Enterprise Quality</h3>
                <p className="text-foreground/70 text-[15px] leading-relaxed">Performance, security, and scalability are built in from the start, applying big-company standards to SME budgets.</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="border border-gray-200/80 p-7 rounded-[4px] card-hover">
                <h3 className="text-lg font-bold mb-2">No Jargon</h3>
                <p className="text-foreground/70 text-[15px] leading-relaxed">I provide practical, straightforward advice in plain English. I focus on business outcomes, not technical buzzwords.</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="border border-gray-200/80 p-7 rounded-[4px] card-hover">
                <h3 className="text-lg font-bold mb-2">Local Focus</h3>
                <p className="text-foreground/70 text-[15px] leading-relaxed">A strong technical foundation tailored specifically for local businesses in Laois, Carlow, Kilkenny, and surrounding areas.</p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      <section className="py-24 section-gradient border-t border-gray-100 text-center">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl mb-6">Need a reliable technical partner?</h2>
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
