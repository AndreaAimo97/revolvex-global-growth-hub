import { Card } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      title: "E-Commerce Solutions",
      description: "Retail sale of digital products via online platforms. E-commerce platform optimization and online marketplace management.",
      icon: "🛒"
    },
    {
      title: "AI & Digital Innovation Consultancy",
      description: "AI research and consulting to support digital transformation. AI strategy development and innovation consulting.",
      icon: "🤖"
    },
    {
      title: "IT & Business Consultancy",
      description: "Helping SMEs optimize their technology infrastructure and business processes through strategic consulting.",
      icon: "💼"
    },
    {
      title: "Professional Training & Development",
      description: "Customized programs to build digital and AI capabilities through training and innovation workshops.",
      icon: "🎓"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-secondary to-muted">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary">Core Business Activities</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions designed to accelerate your digital transformation and business growth.
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