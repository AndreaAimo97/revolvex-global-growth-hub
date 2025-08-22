import { Card } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      title: "AI-Generated Digital Content",
      description: "eBooks, video courses, templates, and SaaS solutions powered by artificial intelligence.",
      icon: "📚"
    },
    {
      title: "SaaS Tools for Digital Delivery",
      description: "Comprehensive platforms for delivering and monetizing your digital products.",
      icon: "🚀"
    },
    {
      title: "Marketing Automation & Data Monetization",
      description: "Streamline your marketing processes and unlock the value of your data.",
      icon: "📊"
    },
    {
      title: "Custom GPT Agents & White-Label AI Apps",
      description: "Tailored AI solutions and brandable applications for your specific needs.",
      icon: "🤖"
    },
    {
      title: "AI Integrations for Creators",
      description: "Seamless AI tools for educators, entrepreneurs, and content creators.",
      icon: "⚡"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-secondary to-muted">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary">Our Services</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive AI-powered solutions designed to accelerate your digital growth and streamline your business processes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-8 bg-card hover:shadow-lg transition-all duration-300 border-border">
                <div className="space-y-4">
                  <div className="text-4xl">{service.icon}</div>
                  <h3 className="text-xl font-bold text-card-foreground">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </Card>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesSection;