import { Card } from "@/components/ui/card";

const LegalSections = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Privacy Policy */}
          <Card className="p-8 bg-card border-border">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-card-foreground">Privacy Policy</h2>
              <p className="text-sm text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Revolvex FZC LLC ("we," "our," or "us") is committed to protecting your privacy. 
                  This Privacy Policy explains how we collect, use, and safeguard your information 
                  when you use our website and services.
                </p>
                
                <div>
                  <h4 className="font-semibold text-card-foreground mb-2">Information We Collect</h4>
                  <p>We collect information you provide directly to us, such as:</p>
                  <ul className="list-disc list-inside ml-4 mt-2">
                    <li>Name and email address from contact forms</li>
                    <li>Payment information for purchases</li>
                    <li>Technical data including IP address, browser type, and usage behavior</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-card-foreground mb-2">How We Use Your Information</h4>
                  <p>We use collected information to:</p>
                  <ul className="list-disc list-inside ml-4 mt-2">
                    <li>Provide and improve our services</li>
                    <li>Enhance user experience and website functionality</li>
                    <li>Comply with UAE laws and regulations</li>
                    <li>Process transactions and provide customer support</li>
                  </ul>
                </div>
                
                <p>
                  Data is stored securely and retained only as long as necessary for business purposes, 
                  with a maximum retention period of 10 years. You have rights to access, correct, 
                  delete, and port your data. Contact us at info@revolvex.co for any privacy-related requests.
                </p>
              </div>
            </div>
          </Card>

          {/* Cookie Policy */}
          <Card className="p-8 bg-card border-border">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-card-foreground">Cookie Policy</h2>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  This website uses cookies to enhance your browsing experience and improve functionality. 
                  Cookies are small text files stored on your device that help us understand how you use our site.
                </p>
                
                <div>
                  <h4 className="font-semibold text-card-foreground mb-2">Types of Cookies We Use</h4>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
                    <li><strong>Analytics Cookies:</strong> Help us understand website usage through tools like Google Analytics</li>
                    <li><strong>Marketing Cookies:</strong> Used for targeted advertising and tracking conversions</li>
                    <li><strong>Session Cookies:</strong> Temporary cookies deleted when you close your browser</li>
                    <li><strong>Persistent Cookies:</strong> Remain on your device for a set period</li>
                  </ul>
                </div>
                
                <p>
                  We may use third-party services such as Google Analytics and Meta Pixel for analytics 
                  and marketing purposes. You can manage cookie preferences through your browser settings, 
                  though disabling certain cookies may affect website functionality.
                </p>
              </div>
            </div>
          </Card>

          {/* Terms & Conditions */}
          <Card className="p-8 bg-card border-border">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-card-foreground">Terms & Conditions</h2>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  These Terms and Conditions ("Terms") govern your use of the Revolvex website and 
                  services operated by Revolvex FZC LLC, a company registered in the SPC Free Zone, 
                  Sharjah, United Arab Emirates.
                </p>
                
                <div>
                  <h4 className="font-semibold text-card-foreground mb-2">Acceptable Use</h4>
                  <p>By accessing our website, you agree to:</p>
                  <ul className="list-disc list-inside ml-4 mt-2">
                    <li>Use the site respectfully and lawfully</li>
                    <li>Not attempt to exploit, copy, or reverse-engineer our content</li>
                    <li>Not engage in activities that could harm our systems or other users</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-card-foreground mb-2">Digital Products & Purchases</h4>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>All purchases of digital products are governed by UAE law</li>
                    <li>Digital products are generally non-refundable unless otherwise stated</li>
                    <li>Users must accept these terms before completing any purchase</li>
                    <li>We reserve the right to modify pricing and availability</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-card-foreground mb-2">Intellectual Property</h4>
                  <p>
                    All content, software, and materials on this website are owned by Revolvex FZC LLC 
                    and protected by applicable intellectual property laws.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-card-foreground mb-2">Limitation of Liability</h4>
                  <p>
                    Revolvex FZC LLC provides services "as is" and disclaims all warranties. 
                    Our liability is limited to the maximum extent permitted by UAE law.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-card-foreground mb-2">Governing Law</h4>
                  <p>
                    These Terms are governed by the laws of the United Arab Emirates. 
                    Any disputes shall be resolved in the courts of Sharjah or other competent UAE courts.
                  </p>
                </div>
                
                <p>
                  We may update these Terms and our policies at any time. Continued use of our 
                  services after changes constitutes acceptance of the updated terms.
                </p>
              </div>
            </div>
          </Card>

        </div>
      </div>
    </section>
  );
};

export default LegalSections;