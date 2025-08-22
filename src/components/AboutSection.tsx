const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-16">
          
          {/* About Us */}
          <div className="text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-primary">About Us</h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Revolvex is a UAE-based company that creates and sells AI-powered digital products 
              for businesses and professionals worldwide. We empower creators and companies with 
              scalable automation tools for content, commerce, and marketing.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-secondary rounded-2xl p-8 md:p-12">
            <div className="text-center space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold text-primary">Our Mission</h3>
              <p className="text-lg md:text-xl text-foreground leading-relaxed">
                We make digital growth accessible. Our mission is to simplify the journey from 
                idea to revenue through automation, personalization, and scalable solutions — 
                with zero-code AI tools anyone can use.
              </p>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="text-center space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold text-primary">Why Choose Us</h3>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Whether you're a solopreneur or scaling a brand, Revolvex combines innovation, 
              growth mindset, and technical skill to help you launch and sell smarter — globally.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;