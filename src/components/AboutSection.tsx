const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-16">
          
          {/* About Us */}
          <div className="text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-primary">About Us</h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Revolvex is a UAE-based company providing AI-driven tools and services to help 
              professionals and SMEs digitize, optimize, and grow through innovative digital solutions.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-secondary rounded-2xl p-8 md:p-12">
            <div className="text-center space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold text-primary">Our Mission</h3>
              <p className="text-lg md:text-xl text-foreground leading-relaxed">
                We simplify the digital journey — from idea to scale — through AI-powered tools 
                and expert services that accelerate productivity, innovation, and business transformation.
              </p>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="text-center space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold text-primary">Why Choose Us</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent-gold rounded-full"></div>
                <p className="text-lg text-muted-foreground">UAE-registered, global mindset</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent-gold rounded-full"></div>
                <p className="text-lg text-muted-foreground">Tailored for solopreneurs and SMEs</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent-gold rounded-full"></div>
                <p className="text-lg text-muted-foreground">No-code AI tools and consulting</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent-gold rounded-full"></div>
                <p className="text-lg text-muted-foreground">Fast, scalable digital solutions</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;