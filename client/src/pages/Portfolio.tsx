import { Link } from "wouter";
import project1 from "@assets/portfolio-bm-custom-furniture.png";
import project2 from "@assets/portfolio-go-green-steam-clean.png";
import project3 from "@assets/portfolio-nurney-plant-civil.png";
import project4 from "@assets/portfolio-more-than-points.png";
import { Button } from "@/components/ui/button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/FadeIn";
import { Quote, ArrowRight, Globe, Mail, Wifi, Star, Tag } from "lucide-react";

export default function Portfolio() {
  const projects = [
    {
      title: "BM Custom Furniture",
      url: "https://bmcustomfurniture.ie",
      image: project1,
      imageAlt: "BM Custom Furniture — bespoke fitted furniture and wall panelling website homepage",
      industry: "Home & Interiors",
      serviceLink: "/web-design",
      serviceLabel: "Web Design",
      challenge: "BM Custom Furniture does outstanding work — bespoke fitted wardrobes, wall panelling, and custom cabinetry — but had no online presence to show for it. New clients came entirely through word-of-mouth, and the business was missing enquiries from homeowners searching Google for furniture makers in Carlow and Laois.",
      solution: "Designed and built a visually rich, image-led website showcasing their craftsmanship in detail. The site included a portfolio gallery, service pages for each product category, and strong local SEO targeting Carlow, Laois, and surrounding areas, with clear calls-to-action for quote requests.",
      outcome: "BM Custom Furniture now has a professional online presence that positions them as a credible, high-quality provider. The site generates consistent enquiries from homeowners and businesses across Carlow and Laois who found them through Google — customers who previously wouldn't have known they existed."
    },
    {
      title: "Go Green Steam Clean",
      url: "https://gogreensteamclean.ie",
      image: project2,
      imageAlt: "Go Green Steam Clean — eco-friendly steam cleaning business website homepage",
      industry: "Cleaning Services",
      serviceLink: "/web-design",
      serviceLabel: "Web Design",
      challenge: "Go Green Steam Clean offered a differentiated eco-friendly cleaning service but had no website to communicate their proposition. Without an online presence, they were invisible to the growing number of customers searching for cleaning services in the Midlands — and had no way to showcase what made them different.",
      solution: "Built a service-focused website with dedicated pages for each cleaning service, strong local SEO targeting the Midlands and surrounding areas, and conversion-optimised CTAs to drive bookings. The eco-friendly angle was emphasised throughout as a key differentiator that resonates with their target customers.",
      outcome: "The website now acts as a 24/7 booking engine, bringing in new customers who find the business through Google searches for steam cleaning services in their area. Enquiry volume increased significantly in the weeks following launch."
    },
    {
      title: "Nurney Plant and Civil",
      url: "https://nurneyplantandcivil.ie",
      image: project3,
      imageAlt: "Nurney Plant and Civil — plant hire and civil engineering website homepage",
      industry: "Civil Engineering & Plant Hire",
      serviceLink: "/web-design",
      serviceLabel: "Web Design",
      challenge: "Nurney Plant and Civil operate a substantial plant hire and civil engineering business in Co. Carlow, but their online presence didn't reflect the scale or professionalism of their operation. Prospective clients — including councils and main contractors — were making decisions based on a website that undersold the business.",
      solution: "Created a professional corporate website that clearly presents their plant hire fleet and civil engineering capabilities. Designed to build trust with potential clients through strong imagery, detailed service breakdowns, and easy-to-find contact information. Also set up Microsoft 365 for professional email across the office and site teams, and sorted the Wi-Fi in their premises.",
      outcome: "A credible, modern web presence that helps Nurney Plant and Civil win contracts by demonstrating professionalism and capability. The team now have professional email and reliable connectivity — and they regularly get compliments from clients about the website."
    },
    {
      title: "More Than Points",
      url: "https://morethanpoints.ie",
      image: project4,
      imageAlt: "More Than Points — teen and parent coaching website homepage",
      industry: "Education & Coaching",
      serviceLink: "/web-design",
      serviceLabel: "Web Design",
      challenge: "More Than Points is a coaching service helping Irish teenagers aged 16–19 and their parents navigate the pressures of the Irish education system. The founder had a clear offering and a compelling message — but no website to communicate it to families who were searching for help.",
      solution: "Designed and built a warm, grounded website with empathetic, conversion-focused copy and a clear service structure for both audiences: teens and parents. The visual identity was calm and reassuring, reflecting the coaching approach. The site makes it easy for families to understand the service, see who it's for, and take the step of booking a session.",
      outcome: "A professional, trust-building online presence that clearly communicates the coaching offering and differentiates the service from traditional academic tutoring. The site gives families the confidence to reach out and book — guiding them from curiosity to conversation."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-[#f3f4f5] py-24 md:py-32 dot-matrix-bg">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <FadeIn>
            <span className="eyebrow mb-5 inline-block">Portfolio</span>
            <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.1] mb-6" data-testid="text-portfolio-heading">
              Real Websites. Real Results. Real Local Businesses.
            </h1>
            <p className="text-xl text-foreground/70 mb-4 leading-relaxed font-sans font-normal" data-testid="text-portfolio-intro">
              Every project here started the same way — a local business owner who knew they needed a better online presence but wasn't sure where to start. I helped them get found on Google, look professional, and win more customers.
            </p>
            <p className="text-lg text-foreground/60 leading-relaxed font-sans">
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
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
                      <img
                        src={project.image}
                        alt={project.imageAlt}
                        className="w-full h-full object-cover"
                        width="600"
                        height="450"
                        loading="lazy"
                      />
                    </div>
                    <div className="mt-4 flex items-center justify-between flex-wrap gap-3">
                      <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-sm font-headline font-bold text-muted-foreground hover:text-accent inline-flex items-center gap-1 transition-colors" data-testid={`link-project-url-${index}`}>
                        <Globe className="w-3.5 h-3.5" />
                        {project.url.replace('https://', '')}
                      </a>
                      <span className="inline-flex items-center gap-1 text-xs font-headline font-bold text-accent/70 bg-accent/10 px-3 py-1 rounded-full" data-testid={`tag-industry-${index}`}>
                        <Tag className="w-3 h-3" />
                        {project.industry}
                      </span>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2">
                    <h3 className="text-2xl mb-4" data-testid={`text-project-title-${index}`}>{project.title}</h3>

                    <div className="mb-5">
                      <h4 className="text-sm font-headline font-bold uppercase tracking-wide text-accent mb-2">The Challenge</h4>
                      <p className="text-[15px] text-foreground/70 leading-relaxed font-sans">
                        {project.challenge}
                      </p>
                    </div>

                    <div className="mb-5">
                      <h4 className="text-sm font-headline font-bold uppercase tracking-wide text-accent mb-2">What We Did</h4>
                      <p className="text-[15px] text-foreground/70 leading-relaxed font-sans">
                        {project.solution}
                      </p>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-headline font-bold uppercase tracking-wide text-accent mb-2">The Outcome</h4>
                      <p className="text-[15px] text-foreground/70 leading-relaxed font-sans">
                        {project.outcome}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <Link href={project.serviceLink} className="text-accent font-headline font-bold inline-flex items-center gap-1 text-sm hover:text-primary transition-colors" data-testid={`link-service-${index}`}>
                        Learn about {project.serviceLabel} <ArrowRight className="w-4 h-4" />
                      </Link>
                      <Link href="/contact#send-message" className="text-foreground/50 font-headline font-bold inline-flex items-center gap-1 text-sm hover:text-accent transition-colors" data-testid={`link-discuss-project-${index}`}>
                        Discuss a similar project <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-20 bg-[#f3f4f5]">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <FadeIn>
            <Quote className="w-10 h-10 text-accent/30 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl mb-4" data-testid="text-testimonials-heading">What Clients Say</h2>
            <p className="text-foreground/60 mb-10 text-lg font-sans">
              Don't just take my word for it — here's what recent clients have to say.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  quote: "Joey built us a website that actually looks as good as the furniture we make. Within weeks of launching, we were getting enquiries from people who found us on Google — that never happened before. Brilliant service, no messing.",
                  name: "Barry",
                  business: "BM Custom Furniture"
                },
                {
                  quote: "I had no website and no idea where to start. Joey made the whole thing painless — explained everything in plain English and delivered a site that brings in new bookings every week. Best investment I've made in my business.",
                  name: "Darren",
                  business: "Go Green Steam Clean"
                },
                {
                  quote: "Joey did the lot for us — a professional website, Microsoft 365 so we have proper email between the office and the lads on site, and sorted our Wi-Fi so it works in every room. The lads even get compliments from clients about the website now. Can't recommend him enough.",
                  name: "Brian",
                  business: "Nurney Plant and Civil"
                }
              ].map((testimonial, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-sm text-left" data-testid={`card-testimonial-${i + 1}`}>
                  <div className="flex gap-0.5 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-foreground/70 text-[15px] leading-relaxed mb-5 italic font-sans">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <p className="font-headline font-bold text-sm text-foreground" data-testid={`text-testimonial-name-${i + 1}`}>{testimonial.name}</p>
                    <p className="text-foreground/60 text-sm">{testimonial.business}</p>
                  </div>
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
            <p className="text-foreground/60 mb-8 text-lg max-w-2xl mx-auto font-sans">
              I offer a full range of digital services to help your business run smoothly and grow online.
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              <Link href="/web-design" data-testid="link-service-webdesign">
                <div className="p-6 rounded-2xl bg-[#f3f4f5] hover:shadow-md transition-all cursor-pointer">
                  <Globe className="w-8 h-8 text-accent mb-3 mx-auto" />
                  <h3 className="font-headline font-bold mb-1">Web Design</h3>
                  <p className="text-[15px] text-foreground/70 font-sans">Professional websites that get found and win customers</p>
                </div>
              </Link>
              <Link href="/microsoft-365" data-testid="link-service-m365">
                <div className="p-6 rounded-2xl bg-[#f3f4f5] hover:shadow-md transition-all cursor-pointer">
                  <Mail className="w-8 h-8 text-accent mb-3 mx-auto" />
                  <h3 className="font-headline font-bold mb-1">Microsoft 365</h3>
                  <p className="text-[15px] text-foreground/70 font-sans">Business email, Teams, and cloud setup done right</p>
                </div>
              </Link>
              <Link href="/network-wifi-security" data-testid="link-service-network">
                <div className="p-6 rounded-2xl bg-[#f3f4f5] hover:shadow-md transition-all cursor-pointer">
                  <Wifi className="w-8 h-8 text-accent mb-3 mx-auto" />
                  <h3 className="font-headline font-bold mb-1">Network &amp; Wi-Fi</h3>
                  <p className="text-[15px] text-foreground/70 font-sans">Reliable connectivity for offices and workshops</p>
                </div>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-28 bg-primary dot-matrix-bg text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl text-white mb-4" data-testid="text-cta-heading">Ready to Join These Businesses?</h2>
            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto font-sans font-normal">
              If you're a local business owner who wants to look more professional online and win more customers, let's have a chat. No pressure, no jargon — just honest advice.
            </p>
            <Link href="/contact#send-message">
              <Button size="lg" className="px-10 bg-accent text-white hover:bg-[#18a07e]" data-testid="button-start-project">
                Book a Free Consultation
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
