import { useState } from "react";
import { Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "798d2f9c-6b63-4aa5-a953-cca84f0226b9");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: "Request Submitted Successfully!",
          description: "Thank you for your interest! We'll be in touch within 24 hours.",
        });
        (event.target as HTMLFormElement).reset();
      } else {
        toast({
          title: "Error",
          description: data.message || "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit form. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section id="contact" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your News Intelligence?</h2>
            <p className="text-xl text-accent-gray mb-8">
              Join leading hedge funds and institutions who trust Sentype for comprehensive market intelligence.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent-orange/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-accent-orange" />
                </div>
                <div>
                  <div className="font-semibold">Email Us</div>
                  <div className="text-accent-gray">enterprise@sentype.com</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent-orange/10 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-accent-orange" />
                </div>
                <div>
                  <div className="font-semibold">Call Us</div>
                  <div className="text-accent-gray">+1 (555) 123-4567</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-dark-card p-8 rounded-xl border border-dark-border">
            <form onSubmit={onSubmit} className="space-y-6">
              <input type="hidden" name="subject" value="New Demo Request from Sentype Landing Page" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium mb-2">First Name</label>
                  <Input 
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="bg-slate-900 border-dark-border text-white focus:border-accent-orange"
                    data-testid="input-first-name"
                    disabled={isSubmitting}
                  />
                </div>
                
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium mb-2">Last Name</label>
                  <Input 
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="bg-slate-900 border-dark-border text-white focus:border-accent-orange"
                    data-testid="input-last-name"
                    disabled={isSubmitting}
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Company Email</label>
                <Input 
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="bg-slate-900 border-dark-border text-white focus:border-accent-orange"
                  data-testid="input-email"
                  disabled={isSubmitting}
                />
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2">Company</label>
                <Input 
                  type="text"
                  id="company"
                  name="company"
                  required
                  className="bg-slate-900 border-dark-border text-white focus:border-accent-orange"
                  data-testid="input-company"
                  disabled={isSubmitting}
                />
              </div>
              
              <div>
                <label htmlFor="role" className="block text-sm font-medium mb-2">Role</label>
                <select 
                  id="role"
                  name="role"
                  required
                  className="w-full px-3 py-2 bg-slate-900 border border-dark-border text-white rounded-md focus:border-accent-orange focus:outline-none"
                  data-testid="select-role"
                  disabled={isSubmitting}
                >
                  <option value="">Select your role</option>
                  <option value="trader">Trader</option>
                  <option value="researcher">Researcher</option>
                  <option value="associate">Associate</option>
                  <option value="portfolio-manager">Portfolio Manager</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <Textarea 
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell us about your news intelligence needs..."
                  className="bg-slate-900 border-dark-border text-white focus:border-accent-orange resize-none"
                  data-testid="textarea-message"
                  disabled={isSubmitting}
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-accent-orange hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition-colors"
                data-testid="button-submit-contact"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Request Demo"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
