import { ArrowRight, BookOpen, Brain, CreditCard } from "lucide-react";
import { Link } from "react-router-dom";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";
import ValkyraLogo from "@/components/Logo";

const Home = () => {
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
            required
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
            required
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
          required
        ></textarea>
      </div>
      <button type="submit" className="neo-button w-full">
        Send Message
      </button>
    </form>
  );

  return (
    // Removed pt-16 md:pt-20 from here
    <div className="animate-fadeIn relative">
      {/* Hero Section */}
      {/* Use calc() to ensure hero fills the screen minus header height (assume 64px header) */}
      <section className="relative container mx-auto px-6 py-24 md:py-32 min-h-[calc(100vh-64px)] flex items-center justify-center">
        {/* Background Animation */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <iframe
            src="src/ascii/valkyra-anim.html"
            title="Hero Animation"
            className="w-full h-full opacity-75 block"
            style={{ border: 'none' }}
            aria-hidden="true"
          ></iframe>
        </div>

        {/* Hero Content Container */}
        <div className="max-w-4xl text-center space-y-4 relative z-10 flex flex-col items-center">
          <div className="flex flex-col items-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Valkyra Labs
            </h1>
          </div>
          <div className="space-y-8">
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We craft cutting-edge solutions in EdTech, FinTech, and AI, prioritizing privacy and security in every project.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/solutions" className="neo-button">
                Our Solutions
              </Link>
              <button className="neo-button" onClick={() => setShowContactModal(true)}>
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* Services Section */}
      {/* If needed, add a margin top here to create space below the hero */}
      <section className="container mx-auto px-6 py-24 mt-16">
        <h2 className="text-3xl font-bold text-center mb-16">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link to="/edtech" className="neo-card group hover:scale-[1.02] transition-transform duration-300">
            <BookOpen className="h-8 w-8 mb-4" />
            <h3 className="text-xl font-bold mb-4">EdTech Solutions</h3>
            <p className="text-muted-foreground mb-6">
              Transforming education through innovative technology solutions.
            </p>
            <div className="flex items-center text-sm group-hover:translate-x-1 transition-transform">
              Learn More <ArrowRight size={16} className="ml-2" />
            </div>
          </Link>

          <Link to="/fintech" className="neo-card group hover:scale-[1.02] transition-transform duration-300">
            <CreditCard className="h-8 w-8 mb-4" />
            <h3 className="text-xl font-bold mb-4">FinTech Development</h3>
            <p className="text-muted-foreground mb-6">
              Building secure and scalable financial technology solutions.
            </p>
            <div className="flex items-center text-sm group-hover:translate-x-1 transition-transform">
              Learn More <ArrowRight size={16} className="ml-2" />
            </div>
          </Link>

          <Link to="/ai" className="neo-card group hover:scale-[1.02] transition-transform duration-300">
            <Brain className="h-8 w-8 mb-4" />
            <h3 className="text-xl font-bold mb-4">AI Integration</h3>
            <p className="text-muted-foreground mb-6">
              Leveraging artificial intelligence to drive innovation.
            </p>
            <div className="flex items-center text-sm group-hover:translate-x-1 transition-transform">
              Learn More <ArrowRight size={16} className="ml-2" />
            </div>
          </Link>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="container mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold text-center mb-16">Why Choose Us</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {[
            "20+ years of combined experience in product development",
            "Privacy-first approach to data handling",
            "Scalable solutions for institutions of all sizes",
            "Continuous support and maintenance",
            "Integration with existing systems",
          ].map((benefit, index) => (
            <div key={index} className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <ArrowRight className="h-6 w-6 text-primary" />
              </div>
              <p className="text-lg">{benefit}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-6 py-24" id="contact">
        <div className="neo-card max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>
          <ContactForm />
        </div>
      </section>

      {/* Contact Modal */}
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

export default Home;
