import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-secondary py-16 md:py-24 border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl leading-tight mb-6">
            Ready to Talk About Your Website, Microsoft 365 or Network?
          </h1>
          <p className="text-xl text-foreground">
            Get in touch to discuss your project. Replies usually come within one business day.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl mb-6">Service Area</h2>
              <p className="text-foreground mb-8 text-lg">
                Based near Crettyard on the Laois–Carlow border. I primarily serve businesses in Laois, Carlow, Kilkenny, Kildare, Offaly, Tipperary, and nearby counties, but I am able to work remotely across Ireland for cloud and web projects.
              </p>
              
              <div className="bg-secondary aspect-video rounded-sm border border-gray-200 overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19124.629555198084!2d-7.143872473854153!3d52.85378190000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x485d6a9277c61d77%3A0x2600c7a819bf1c62!2sClonbrock%2C%20Co.%20Laois!5e1!3m2!1sen!2sie!4v1714567890123!5m2!1sen!2sie" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Service Area Map - Clonbrock, Co. Laois"
                ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 border border-gray-200 rounded-sm shadow-sm">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              <form className="space-y-5" action="https://formsubmit.co/info@crettyard.com" method="POST">
                {/* FormSubmit config options */}
                <input type="hidden" name="_subject" value="New contact form submission from Crettyard Digital" />
                <input type="hidden" name="_template" value="table" />

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" name="name" required placeholder="Your name" className="rounded-sm border-gray-300 focus-visible:ring-accent" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="businessName">Business Name</Label>
                    <Input id="businessName" name="businessName" placeholder="Your company" className="rounded-sm border-gray-300 focus-visible:ring-accent" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" required placeholder="you@company.com" className="rounded-sm border-gray-300 focus-visible:ring-accent" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone (optional)</Label>
                    <Input id="phone" name="phone" type="tel" placeholder="08..." className="rounded-sm border-gray-300 focus-visible:ring-accent" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>What can I help you with?</Label>
                  <Select name="service">
                    <SelectTrigger className="rounded-sm border-gray-300 focus:ring-accent">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="new-website">New website</SelectItem>
                      <SelectItem value="website-design">Website design</SelectItem>
                      <SelectItem value="microsoft-365">Microsoft 365</SelectItem>
                      <SelectItem value="network-wifi">Network & Wi‑Fi</SelectItem>
                      <SelectItem value="ongoing-support">Ongoing support</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    name="message"
                    required
                    placeholder="Tell me a bit about your business and what you need help with..." 
                    className="min-h-[120px] rounded-sm border-gray-300 focus-visible:ring-accent" 
                  />
                </div>

                <Button type="submit" className="w-full bg-accent text-white hover:bg-[#0fa079] rounded-sm font-bold h-12">
                  Send Message
                </Button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
