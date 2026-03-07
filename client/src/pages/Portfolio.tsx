import { Link } from "wouter";
import project1 from "@assets/screenshot-1772791998786.png";
import project2 from "@assets/screenshot-1772791995871.png";
import project3 from "@assets/screenshot-1772791990532.png";
import { Button } from "@/components/ui/button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/FadeIn";
import { Quote, ArrowRight, Globe, Mail, Wifi } from "lucide-react";

export default function Portfolio() {
  const projects = [
    {
      title: "BM Custom Furniture",
      url: "https://bmcustomfurniture.ie",
      image: project1,
      description: "A brochure-style website for bespoke furniture, fitted furniture, wall panelling, and custom cabinetry. Features an image-led presentation and strong local search focus to highlight their craftsmanship.",
      whatWeDid: "Designed and built a visually rich website showcasing their craftsmanship — fitted furniture, wall panelling, and custom cabinetry. Focused on high-quality imagery, local SEO for Carlow and surrounding areas, and clear calls-to-action for quote requests.",
      theResult: "A professional online presence that positions BM Custom Furniture as a credible, high-quality provider. The site now generates consistent enquiries from homeowners and businesses across Carlow and Laois looking for bespoke furniture solutions.",
    },
    {
      title: "Go Green Steam Clean",
      url: "https://gogreensteamclean.ie",
      image: project2,
      description: "A service-led site for an eco-friendly steam cleaning business in the Midlands. Built with strong local service pages and clear CTAs to drive enquiries and bookings.",
      whatWeDid: "Built a service-focused website with dedicated pages for each cleaning service, strong local SEO targeting the Midlands, and conversion-optimised CTAs to drive bookings. Emphasised their eco-friendly approach as a key differentiator.",
      theResult: "The website now acts as a 24/7 booking engine, bringing in new customers who find the business through Google searches for steam cleaning services in their area. Enquiry volume increased significantly after launch.",
    },
    {
      title: "Nurney Plant and Civil",
      url: "https://nurneyplantandcivil.ie",
      image: project3,
      description: "A professional corporate site for plant hire and civil engineering services operating in Co. Carlow and nearby areas. Designed to present credibility, capabilities, and ease of contact.",
      whatWeDid: "Created a professional corporate website that clearly presents their plant hire fleet and civil engineering capabilities. Designed to build trust with potential clients through strong visuals, service breakdowns, and easy-to-find contact information.",
      theResult: "A credible, modern web presence that helps Nurney Plant and Civil win contracts by demonstrating professionalism and capability to prospective clients, councils, and contractors across the region.",
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <section className="section-gradient py-24 md:py-32 border-b border-gray-100">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <FadeIn>
            <span className="eyebrow mb-4 inline-block">Portfolio</span>
            <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.1] mb-6" data-testid="text-portfolio-heading">
              Real Websites. Real Results. Real Local Businesses.
            </h1>
            <p className="text-xl text-foreground/70 mb-4 leading-relaxed" data-testid="text-portfolio-intro">
              Every project here started the same way — a local business owner who knew they needed a better online presence but wasn't sure where to start. I helped them get found on Google, look professional, and win more customers.
            </p>
            <p className="text-lg text-foreground/60 leading-relaxed">
              These aren't template sites. Each one was built around the business's specific goals, customers, and location.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-28 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <StaggerContainer className="grid gap-24">
            {projects.map((project, index) => (
              <StaggerItem key={index}>
                <div className="flex flex-col md:flex-row gap-10 items-start border-b border-gray-100 pb-20 last:border-0 last:pb-0" data-testid={`card-project-${index}`}>
                  <div className="w-full md:w-1/2">
                    <div className="aspect-[4/3] rounded-[4px] overflow-hidden shadow-md">
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="mt-4">
                      <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-muted-foreground hover:text-accent inline-flex items-center gap-1 transition-colors" data-testid={`link-project-url-${index}`}>
                        <Globe className="w-3.5 h-3.5" />
                        {project.url.replace('https://', '')}
                      </a>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2">
                    <h3 className="text-2xl font-semibold mb-4" data-testid={`text-project-title-${index}`}>{project.title}</h3>

                    <div className="mb-5">
                      <h4 className="text-sm font-semibold uppercase tracking-wide text-accent mb-2">What We Did</h4>
                      <p className="text-[15px] text-foreground/70 leading-relaxed">
                        {project.whatWeDid}
                      </p>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold uppercase tracking-wide text-accent mb-2">The Result</h4>
                      <p className="text-[15px] text-foreground/70 leading-relaxed">
                        {project.theResult}
                      </p>
                    </div>

                    <Link href="/contact" className="text-accent font-semibold inline-flex items-center gap-1 text-sm hover:text-primary transition-colors" data-testid={`link-discuss-project-${index}`}>
                      Discuss a similar project <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-20 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <FadeIn>
            <Quote className="w-10 h-10 text-accent/30 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl mb-4" data-testid="text-testimonials-heading">What Clients Say</h2>
            <p className="text-foreground/60 mb-10 text-lg">
              Testimonials coming soon — I'm collecting feedback from recent clients. In the meantime, feel free to check out the live sites above or get in touch to chat about your project.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white rounded-[4px] p-6 shadow-sm border border-gray-100" data-testid={`card-testimonial-placeholder-${i}`}>
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, j) => (
                      <div key={j} className="w-4 h-4 rounded-full bg-accent/20" />
                    ))}
                  </div>
                  <div className="h-3 bg-gray-100 rounded mb-2 w-full" />
                  <div className="h-3 bg-gray-100 rounded mb-2 w-5/6" />
                  <div className="h-3 bg-gray-100 rounded mb-4 w-4/6" />
                  <div className="h-3 bg-gray-100 rounded w-1/3 mt-4" />
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl mb-4" data-testid="text-services-heading">Looking for More Than a Website?</h2>
            <p className="text-foreground/60 mb-8 text-lg max-w-2xl mx-auto">
              I offer a full range of digital services to help your business run smoothly and grow online.
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              <Link href="/web-design" data-testid="link-service-webdesign">
                <div className="p-6 rounded-[4px] border border-gray-100 hover:border-accent/30 hover:shadow-md transition-all cursor-pointer">
                  <Globe className="w-8 h-8 text-accent mb-3 mx-auto" />
                  <h3 className="font-semibold mb-1">Web Design</h3>
                  <p className="text-sm text-foreground/60">Professional websites that get found and win customers</p>
                </div>
              </Link>
              <Link href="/microsoft-365" data-testid="link-service-m365">
                <div className="p-6 rounded-[4px] border border-gray-100 hover:border-accent/30 hover:shadow-md transition-all cursor-pointer">
                  <Mail className="w-8 h-8 text-accent mb-3 mx-auto" />
                  <h3 className="font-semibold mb-1">Microsoft 365</h3>
                  <p className="text-sm text-foreground/60">Business email, Teams, and cloud setup done right</p>
                </div>
              </Link>
              <Link href="/network-wifi-security" data-testid="link-service-network">
                <div className="p-6 rounded-[4px] border border-gray-100 hover:border-accent/30 hover:shadow-md transition-all cursor-pointer">
                  <Wifi className="w-8 h-8 text-accent mb-3 mx-auto" />
                  <h3 className="font-semibold mb-1">Network & Wi-Fi</h3>
                  <p className="text-sm text-foreground/60">Reliable connectivity for offices and workshops</p>
                </div>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-28 bg-primary text-white text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl text-white mb-4" data-testid="text-cta-heading">Ready to Join These Businesses?</h2>
            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
              If you're a local business owner who wants to look more professional online and win more customers, let's have a chat. No pressure, no jargon — just honest advice.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-accent text-white hover:bg-[#0fa079] rounded-[4px] font-semibold h-12 px-10 text-sm border-0 transition-all duration-200 shadow-sm hover:shadow-lg" data-testid="button-start-project">
                Book a Free Consultation
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
