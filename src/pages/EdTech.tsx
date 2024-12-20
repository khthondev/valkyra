import { Check, BookOpen, ChartBar, Smartphone } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";

const EdTech = () => {
  const [showContactModal, setShowContactModal] = useState(false);

  const ContactForm = () => (
    <form className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full bg-secondary rounded-lg border border-border/50 px-4 py-2"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full bg-secondary rounded-lg border border-border/50 px-4 py-2"
          />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          className="w-full bg-secondary rounded-lg border border-border/50 px-4 py-2"
        ></textarea>
      </div>
      <button type="submit" className="neo-button w-full">
        Send Message
      </button>
    </form>
  );

  const SolutionsSection = () => (
    <section className="container mx-auto px-6 py-24">
    <h2 className="text-3xl font-bold text-center mb-16">Our Solutions</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      <div className="neo-card">
        <h3 className="text-xl font-bold mb-4">Payment Systems</h3>
        <ul className="space-y-3 text-muted-foreground">
          <li>• Secure payment gateways</li>
          <li>• Multi-currency support</li>
          <li>• Real-time processing</li>
          <li>• Fraud detection</li>
        </ul>
      </div>
      <div className="neo-card">
        <h3 className="text-xl font-bold mb-4">Banking Solutions</h3>
        <ul className="space-y-3 text-muted-foreground">
          <li>• Digital banking platforms</li>
          <li>• Mobile banking apps</li>
          <li>• Account management</li>
          <li>• Transaction monitoring</li>
        </ul>
      </div>
    </div>
  </section>
  );

  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-secondary rounded-full">
            EdTech Solutions
          </span>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Transform Education
            <span className="block mt-2">Through Technology</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We create innovative educational technology solutions that enhance learning experiences while maintaining the highest standards of privacy and security.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="neo-card">
            <BookOpen className="h-8 w-8 mb-4" />
            <h3 className="text-xl font-bold mb-4">Learning Platforms</h3>
            <p className="text-muted-foreground">
              Custom-built platforms that facilitate engaging and effective learning experiences.
            </p>
          </div>
          <div className="neo-card">
            <ChartBar className="h-8 w-8 mb-4" />
            <h3 className="text-xl font-bold mb-4">Analytics Tools</h3>
            <p className="text-muted-foreground">
              Comprehensive analytics to track and improve student performance and engagement.
            </p>
          </div>
          <div className="neo-card">
            <Smartphone className="h-8 w-8 mb-4" />
            <h3 className="text-xl font-bold mb-4">Mobile Learning</h3>
            <p className="text-muted-foreground">
              Accessible education solutions optimized for mobile devices.
            </p>
          </div>
        </div>
      </section>


       {/* Solutions Section */}
       <SolutionsSection/>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-24">
        <div className="neo-card text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Education?</h2>
          <p className="text-muted-foreground mb-8">
            Let's discuss how we can help you create innovative educational experiences.
          </p>
          <button className="neo-button" onClick={() => setShowContactModal(true)}>
            Schedule a Consultation
          </button>
        </div>
      </section>

      <Dialog open={showContactModal} onOpenChange={setShowContactModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Get in Touch</DialogTitle>
          </DialogHeader>
          <ContactForm />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EdTech;