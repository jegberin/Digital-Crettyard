import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FadeIn } from "@/components/FadeIn";

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="section-gradient py-24 md:py-32 border-b border-gray-100">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <FadeIn>
            <span className="eyebrow mb-4 inline-block">Contact</span>
            <h1 className="text-4xl md:text-5xl leading-[1.1] mb-6">
              Ready to Talk About Your Website, Microsoft 365 or Network?
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed">
              Get in touch to discuss your project. Replies usually come within one business day.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-28 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <FadeIn>
              <h2 className="text-3xl mb-6">Service Area</h2>
              <p className="text-foreground/70 mb-8 text-[15px] leading-relaxed">
                Based near Crettyard on the Laois–Carlow border. I primarily serve businesses in Laois, Carlow, Kilkenny, Kildare, Offaly, Tipperary, and nearby counties, but I am able to work remotely across Ireland for cloud and web projects.
              </p>
              
              <div className="bg-secondary aspect-video rounded-[4px] border border-gray-200 overflow-hidden shadow-sm">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38249.25911039808!2d-7.1574163!3d52.8534297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x485d6a98122565d1%3A0x76ca5b3cd5d8e81b!2sCrettyard%2C%20Co.%20Laois!5e0!3m2!1sen!2sie!4v1714567890123!5m2!1sen!2sie" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Service Area Map - Crettyard, Co. Laois"
                ></iframe>
              </div>
            </FadeIn>

            {/* Contact Form */}
            <FadeIn delay={0.15}>
              <div className="bg-white p-8 border border-gray-200/80 rounded-[4px] shadow-sm">
                <h3 className="text-xl font-bold mb-6">Send a Message</h3>
                <form className="space-y-5" action="https://formsubmit.co/info@crettyard.com" method="POST">
                  <input type="hidden" name="_subject" value="New contact form submission from Crettyard Digital" />
                  <input type="hidden" name="_template" value="table" />

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm">Name</Label>
                      <Input id="name" name="name" required placeholder="Your name" className="rounded-[4px] border-gray-200 focus-visible:ring-accent h-10" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="businessName" className="text-sm">Business Name</Label>
                      <Input id="businessName" name="businessName" placeholder="Your company" className="rounded-[4px] border-gray-200 focus-visible:ring-accent h-10" />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm">Email</Label>
                      <Input id="email" name="email" type="email" required placeholder="you@company.com" className="rounded-[4px] border-gray-200 focus-visible:ring-accent h-10" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm">Phone (optional)</Label>
                      <Input id="phone" name="phone" type="tel" placeholder="08..." className="rounded-[4px] border-gray-200 focus-visible:ring-accent h-10" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm">What can I help you with?</Label>
                    <Select name="service">
                      <SelectTrigger className="rounded-[4px] border-gray-200 focus:ring-accent h-10">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="new-website">New website</SelectItem>
                        <SelectItem value="website-design">Website design</SelectItem>
                        <SelectItem value="microsoft-365">Microsoft 365</SelectItem>
                        <SelectItem value="network-wifi">Network & Wi&#8209;Fi</SelectItem>
                        <SelectItem value="ongoing-support">Ongoing support</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm">Message</Label>
                    <Textarea 
                      id="message" 
                      name="message"
                      required
                      placeholder="Tell me a bit about your business and what you need help with..." 
                      className="min-h-[120px] rounded-[4px] border-gray-200 focus-visible:ring-accent" 
                    />
                  </div>

                  <Button type="submit" className="w-full bg-accent text-white hover:bg-[#0fa079] rounded-[4px] font-semibold h-11 transition-all duration-200 shadow-sm hover:shadow-md">
                    Send Message
                  </Button>
                </form>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>
    </div>
  );
}
