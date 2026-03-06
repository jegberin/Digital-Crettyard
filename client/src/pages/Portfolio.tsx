import { Link } from "wouter";
import project1 from "@assets/screenshot-1772791998786.png";
import project2 from "@assets/screenshot-1772791995871.png";
import project3 from "@assets/screenshot-1772791990532.png";
import { Button } from "@/components/ui/button";

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
      <section className="bg-secondary py-16 md:py-24 border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
            Recent Websites Built for Local Businesses
          </h1>
          <p className="text-xl text-foreground mb-8">
            See how I help tradespeople, contractors, and professional services establish a strong, trustworthy online presence.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid gap-16">
            {projects.map((project, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-8 items-center border-b border-gray-100 pb-16 last:border-0 last:pb-0">
                <div className="w-full md:w-1/2">
                  <div className="aspect-[4/3] rounded-sm overflow-hidden border border-gray-200 shadow-sm">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <h3 className="text-3xl font-bold mb-2">{project.title}</h3>
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-muted-foreground hover:text-accent mb-4 inline-block">
                    {project.url.replace('https://', '')}
                  </a>
                  <p className="text-lg text-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <Link href="/contact">
                    <a className="text-accent font-bold inline-flex items-center text-lg hover:text-primary transition-colors">
                      Discuss a similar project &gt;
                    </a>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-white text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl text-white mb-6">Looking for a trusted digital partner?</h2>
          <Link href="/contact">
            <Button size="lg" className="bg-accent text-white hover:bg-[#0fa079] rounded-sm font-semibold h-14 px-10 text-lg border-0">
              Start Your Project
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
