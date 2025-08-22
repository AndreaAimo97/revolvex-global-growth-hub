import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const LegalSections = () => {
  return (
    <section className="py-8 border-t border-border bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-2">
            
            {/* Privacy Policy */}
            <AccordionItem value="privacy" className="border border-border rounded-lg bg-card">
              <AccordionTrigger className="px-6 text-lg font-semibold hover:no-underline">
                Privacy Policy
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <p className="text-sm text-muted-foreground mb-4">Last updated: {new Date().toLocaleDateString()}</p>
                
                <div className="space-y-4 text-muted-foreground leading-relaxed text-sm">
                  <p>
                    Revolvex FZC LLC collects personal data including email, IP address, and behavior analytics 
                    for service delivery, performance analytics, and marketing purposes.
                  </p>
                  
                  <div>
                    <h4 className="font-semibold text-card-foreground mb-2">Data We Collect</h4>
                    <ul className="list-disc list-inside ml-2 space-y-1">
                      <li>Email addresses from contact forms and transactions</li>
                      <li>IP addresses and technical data for security and analytics</li>
                      <li>Website behavior and usage patterns</li>
                      <li>Payment information for digital product purchases</li>
                    </ul>
                  </div>
                  
                  <p>
                    Data retention aligns with UAE law with a maximum period of 10 years for business records. 
                    You have rights to access, correct, delete, and port your data. Contact us at info@revolvex.co 
                    for privacy-related requests.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Cookie Policy */}
            <AccordionItem value="cookies" className="border border-border rounded-lg bg-card">
              <AccordionTrigger className="px-6 text-lg font-semibold hover:no-underline">
                Cookie Policy
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4 text-muted-foreground leading-relaxed text-sm">
                  <p>
                    We use cookies to enhance website performance and provide analytics. Cookies include 
                    session cookies (temporary) and persistent cookies (stored for set periods).
                  </p>
                  
                  <div>
                    <h4 className="font-semibold text-card-foreground mb-2">Cookie Types</h4>
                    <ul className="list-disc list-inside ml-2 space-y-1">
                      <li><strong>Essential cookies:</strong> Required for basic website functionality</li>
                      <li><strong>Analytics cookies:</strong> Help us understand usage patterns</li>
                      <li><strong>Third-party cookies:</strong> Used for performance optimization</li>
                    </ul>
                  </div>
                  
                  <p>
                    You can manage cookie preferences through your browser settings. Disabling certain 
                    cookies may affect website functionality.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Terms & Conditions */}
            <AccordionItem value="terms" className="border border-border rounded-lg bg-card">
              <AccordionTrigger className="px-6 text-lg font-semibold hover:no-underline">
                Terms & Conditions
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4 text-muted-foreground leading-relaxed text-sm">
                  <p>
                    Revolvex operates under UAE jurisdiction. By using our website or purchasing digital 
                    products, you agree to these terms governed by UAE law.
                  </p>
                  
                  <div>
                    <h4 className="font-semibold text-card-foreground mb-2">Key Terms</h4>
                    <ul className="list-disc list-inside ml-2 space-y-1">
                      <li>Digital products are non-refundable unless otherwise stated</li>
                      <li>Users must agree to terms before completing purchases</li>
                      <li>Website content is protected by intellectual property laws</li>
                      <li>We reserve the right to modify terms with notice</li>
                    </ul>
                  </div>
                  
                  <p>
                    <strong>Governing Law:</strong> These terms are governed by UAE law. 
                    Disputes shall be resolved in Sharjah or other competent UAE courts.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default LegalSections;