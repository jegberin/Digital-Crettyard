import { Link } from "wouter";
import project1 from "@assets/screenshot-1772791998786.png";
import project2 from "@assets/screenshot-1772791995871.png";
import project3 from "@assets/screenshot-1772791990532.png";
import { Button } from "@/components/ui/button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/FadeIn";

export default function Portfolio() {
  const projects = [
    {
      title: "BM Custom Furniture",
      url: "https://bmcustomfurniture.ie",
      image: project1,
      description: "A brochure-style website for bespoke furniture, fitted furniture, wall panelling, and custom cabinetry. Features an image-led presentation and strong local search focus to highlight their craftsmanship.",
    },
    {
      title: "Go Green Steam Clean",
      url: "https://gogreensteamclean.ie",
      image: project2,
      description: "A service-led site for an eco-friendly steam cleaning business in the Midlands. Built with strong local service pages and clear CTAs to drive enquiries and bookings.",
    },
    {
      title: "Nurney Plant and Civil",
      url: "https://nurneyplantandcivil.ie",
      image: project3,
      description: "A professional corporate site for plant hire and civil engineering services operating in Co. Carlow and nearby areas. Designed to present credibility, capabilities, and ease of contact.",
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <section className="section-gradient py-24 md:py-32 border-b border-gray-100">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <FadeIn>
            <span className="eyebrow mb-4 inline-block">Portfolio</span>
            <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.1] mb-6">
              Recent Websites Built for Local Businesses
            </h1>
            <p className="text-xl text-foreground/70 mb-8 leading-relaxed">
              See how I help tradespeople, contractors, and professional services establish a strong, trustworthy online presence.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-28 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <StaggerContainer className="grid gap-20">
            {projects.map((project, index) => (
              <StaggerItem key={index}>
                <div className="flex flex-col md:flex-row gap-10 items-center border-b border-gray-100 pb-20 last:border-0 last:pb-0">
                  <div className="w-full md:w-1/2">
                    <div className="aspect-[4/3] rounded-[4px] overflow-hidden shadow-md">
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="w-full md:w-1/2">
                    <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-muted-foreground hover:text-accent mb-4 inline-block transition-colors">
                      {project.url.replace('https://', '')}
                    </a>
                    <p className="text-[15px] text-foreground/70 mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    <Link href="/contact" className="text-accent font-semibold inline-flex items-center text-sm hover:text-primary transition-colors">
                      Discuss a similar project &gt;
                    </Link>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-28 bg-primary text-white text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl text-white mb-6">Looking for a trusted digital partner?</h2>
            <Link href="/contact">
              <Button size="lg" className="bg-accent text-white hover:bg-[#0fa079] rounded-[4px] font-semibold h-12 px-10 text-sm border-0 transition-all duration-200 shadow-sm hover:shadow-lg">
                Start Your Project
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
