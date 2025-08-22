import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import LegalSections from "@/components/LegalSections";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
      <LegalSections />
      
      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-xl font-bold mb-4 md:mb-0">Revolvex FZC LLC</div>
            <div className="text-sm opacity-90">
              © 2025 Revolvex. Registered in SPC Free Zone, Sharjah, UAE.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
