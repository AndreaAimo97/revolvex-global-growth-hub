import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary">Contact Us</h2>
            <p className="text-lg text-muted-foreground">
              Ready to transform your digital presence? Get in touch with our team.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="p-6 bg-secondary border-border">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-card-foreground">Company Information</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p><strong>Company:</strong> Revolvex FZC LLC</p>
                    <p><strong>Registration:</strong> SPC Free Zone, Sharjah, United Arab Emirates</p>
                    <p><strong>Email:</strong> info@revolve-x.com</p>
                  </div>
                </div>
              </Card>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground">Why Partner With Us?</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>✓ UAE-based with global reach</li>
                  <li>✓ Cutting-edge AI technology</li>
                  <li>✓ Scalable digital solutions</li>
                  <li>✓ Expert technical support</li>
                  <li>✓ Proven track record</li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="p-8 bg-card border-border">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-card-foreground mb-2">
                    Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-card-foreground mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full"
                    placeholder="your.email@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-card-foreground mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full"
                    placeholder="Tell us about your project and how we can help..."
                  />
                </div>

                <Button type="submit" variant="corporate" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </Card>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;