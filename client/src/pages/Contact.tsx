import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/FadeIn";
import { MessageCircle, Clock, FileText, CheckCircle } from "lucide-react";

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="section-gradient py-24 md:py-32 border-b border-gray-100">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <FadeIn>
            <span className="eyebrow mb-4 inline-block" data-testid="text-contact-eyebrow">Get in Touch</span>
            <h1 className="text-4xl md:text-5xl leading-[1.1] mb-6" data-testid="text-contact-heading">
              No Jargon. No Pressure. Just a Friendly Chat About Your Business.
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed max-w-2xl mx-auto" data-testid="text-contact-intro">
              Whether you have a clear idea or just a rough question, drop me a message. I'll get back to you within one business day with straightforward, plain-English advice.
            </p>
            <p className="mt-6 text-sm text-foreground/50 font-medium tracking-wide" data-testid="text-trust-line">
              Fast response · Local support · Plain-English advice
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4" data-testid="text-what-happens-heading">What Happens After You Get in Touch</h2>
              <p className="text-foreground/60 max-w-xl mx-auto">No surprises — here's exactly what to expect.</p>
            </div>
          </FadeIn>
          <StaggerContainer className="grid md:grid-cols-3 gap-8 mb-8">
            <StaggerItem>
              <div className="text-center p-6" data-testid="card-step-1">
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-6 h-6 text-accent" />
                </div>
                <div className="text-sm font-semibold text-accent mb-2">Step 1</div>
                <h3 className="text-lg font-bold mb-2">I Reply Within a Business Day</h3>
                <p className="text-foreground/60 text-sm leading-relaxed">You'll hear back from me personally — not a chatbot, not an assistant. Just me.</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="text-center p-6" data-testid="card-step-2">
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <div className="text-sm font-semibold text-accent mb-2">Step 2</div>
                <h3 className="text-lg font-bold mb-2">We Have a Quick Chat</h3>
                <p className="text-foreground/60 text-sm leading-relaxed">A relaxed phone call or video chat to understand your business and what you need. No tech talk.</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="text-center p-6" data-testid="card-step-3">
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-6 h-6 text-accent" />
                </div>
                <div className="text-sm font-semibold text-accent mb-2">Step 3</div>
                <h3 className="text-lg font-bold mb-2">I Send You a Clear Proposal</h3>
                <p className="text-foreground/60 text-sm leading-relaxed">You'll get a straightforward quote with no hidden fees. Take your time — no pressure to decide.</p>
              </div>
            </StaggerItem>
          </StaggerContainer>
          <FadeIn>
            <div className="text-center">
              <p className="text-foreground/50 text-sm italic">No obligation. No hard sell. If we're not the right fit, I'll tell you honestly.</p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4" data-testid="text-who-should-heading">Who Should Get in Touch</h2>
              <p className="text-foreground/60 max-w-xl mx-auto">If any of these sound like you, I'd love to hear from you.</p>
            </div>
          </FadeIn>
          <StaggerContainer className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {[
              "You need a website but don't know where to start",
              "Your current site looks outdated or isn't bringing in enquiries",
              "You want to set up professional email with Microsoft 365",
              "Your office Wi-Fi or network keeps causing problems",
              "You're a tradesperson, contractor, or small business owner",
              "You just want honest advice — even if you're not ready to buy yet",
            ].map((item, index) => (
              <StaggerItem key={index}>
                <div className="flex items-start gap-3 p-4 bg-white rounded-[4px] border border-gray-100" data-testid={`card-who-${index}`}>
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground/80 leading-relaxed">{item}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-28 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16">
            
            <FadeIn>
              <h2 className="text-3xl mb-6" data-testid="text-service-area-heading">Service Area</h2>
              <p className="text-foreground/70 mb-8 text-[15px] leading-relaxed">
                Based near Crettyard on the Laois–Carlow border. I primarily serve businesses in Laois, Carlow, Kilkenny, Kildare, Offaly, Tipperary, and nearby counties, but I am able to work remotely across Ireland for cloud and web projects.
              </p>
              
              <div className="bg-secondary aspect-video rounded-[4px] border border-gray-200 overflow-hidden shadow-sm" data-testid="map-container">
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

              <div className="mt-8 p-5 bg-secondary/50 rounded-[4px] border border-gray-100">
                <p className="text-sm font-semibold mb-1">Prefer email?</p>
                <a href="mailto:info@crettyard.com" className="text-accent hover:underline text-sm" data-testid="link-email">info@crettyard.com</a>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div id="send-message" className="bg-white p-8 border border-gray-200/80 rounded-[4px] shadow-sm">
                <h3 className="text-xl font-bold mb-2" data-testid="text-form-heading">Send a Message</h3>
                <p className="text-foreground/50 text-sm mb-6">It only takes a minute. I'll get back to you within one business day.</p>
                <form className="space-y-5" action="https://formsubmit.co/a91adc27e1b3a9255f7d031230612b44" method="POST" data-testid="form-contact">
                  <input type="hidden" name="_subject" value="New contact form submission from Crettyard Digital" />
                  <input type="hidden" name="_template" value="table" />

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm">Name</Label>
                      <Input id="name" name="name" required placeholder="Your name" className="rounded-[4px] border-gray-200 focus-visible:ring-accent h-10" data-testid="input-name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm">Email</Label>
                      <Input id="email" name="email" type="email" required placeholder="you@company.com" className="rounded-[4px] border-gray-200 focus-visible:ring-accent h-10" data-testid="input-email" />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm">Phone (optional)</Label>
                      <Input id="phone" name="phone" type="tel" placeholder="08..." className="rounded-[4px] border-gray-200 focus-visible:ring-accent h-10" data-testid="input-phone" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service" className="text-sm">What can I help with?</Label>
                      <select
                        id="service"
                        name="service"
                        className="flex h-10 w-full rounded-[4px] border border-gray-200 bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                        data-testid="select-service"
                        defaultValue=""
                      >
                        <option value="" disabled>Select a service</option>
                        <option value="new-website">New website</option>
                        <option value="website-redesign">Website redesign</option>
                        <option value="microsoft-365">Microsoft 365</option>
                        <option value="network-wifi">Network &amp; Wi‑Fi</option>
                        <option value="ongoing-support">Ongoing support</option>
                        <option value="not-sure">Not sure yet</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm">Message</Label>
                    <Textarea 
                      id="message" 
                      name="message"
                      required
                      placeholder="Tell me a bit about your business and what you need help with..." 
                      className="min-h-[120px] rounded-[4px] border-gray-200 focus-visible:ring-accent" 
                      data-testid="input-message"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-accent text-white hover:bg-[#0fa079] rounded-[4px] font-semibold h-11 transition-all duration-200 shadow-sm hover:shadow-md" data-testid="button-submit">
                    Send Message
                  </Button>
                  <p className="text-xs text-foreground/40 text-center">No spam. Your details are only used to reply to your enquiry.</p>
                </form>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>
    </div>
  );
}
