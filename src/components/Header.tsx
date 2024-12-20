import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import ValkyraLogo from "./Logo";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "EdTech", href: "/edtech" },
    { name: "FinTech", href: "/fintech" },
    { name: "AI", href: "/ai" },
    { name: "Solutions", href: "/solutions" },
  ];

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

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              {/* <ValkyraLogo width={24} height={24} className="text-primary" /> */}
              <span className="text-2xl font-unbounded font-bold">Valkyra</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm transition-colors hover:text-primary/80 ${
                    location.pathname === item.href ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <button className="neo-button" onClick={() => setShowContactModal(true)}>
                Contact Us
              </button>
            </div>

            {/* Mobile Navigation Button */}
            <button
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border/50 animate-fadeIn">
              <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`text-sm transition-colors hover:text-primary/80 ${
                      location.pathname === item.href ? "text-primary" : "text-muted-foreground"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <button className="neo-button w-full" onClick={() => {
                  setShowContactModal(true);
                  setIsOpen(false);
                }}>
                  Contact Us
                </button>
              </div>
            </div>
          )}
        </nav>
      </header>

      <Dialog open={showContactModal} onOpenChange={setShowContactModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Get in Touch</DialogTitle>
          </DialogHeader>
          <ContactForm />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Header;