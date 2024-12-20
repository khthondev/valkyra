import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, Linkedin, Twitter, MessageSquare } from "lucide-react";
import ValkyraLogo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-card">
      <div className="container mx-auto px-6 pt-12 pb-1">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center space-x-2">
              <ValkyraLogo width={24} height={24} className="text-primary" />
              <h3 className="text-xl font-unbounded font-bold">Valkyra</h3>
            </div>
            <p className="text-sm text-muted-foreground max-w-[30%]">
              Crafting innovative solutions in EdTech, FinTech, and AI with a focus on privacy and security.
            </p>
          </div>

          <div className="md:col-span-8">
            <div className="grid grid-cols-3 gap-12">
              <div className="space-y-4">
                <h4 className="text-sm font-semibold">Services</h4>
                <ul className="space-y-2">
                  <li>
                    <Link to="/edtech" className="text-sm text-muted-foreground hover:text-primary transition-colors focus:outline-none">
                      EdTech Solutions
                    </Link>
                  </li>
                  <li>
                    <Link to="/fintech" className="text-sm text-muted-foreground hover:text-primary transition-colors focus:outline-none">
                      FinTech Development
                    </Link>
                  </li>
                  <li>
                    <Link to="/ai" className="text-sm text-muted-foreground hover:text-primary transition-colors focus:outline-none">
                      AI Integration
                    </Link>
                  </li>
                  <li>
                    <Link to="/solutions" className="text-sm text-muted-foreground hover:text-primary transition-colors focus:outline-none">
                      Solutions
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="text-sm font-semibold">Company</h4>
                <ul className="space-y-2">
                  <li>
                    <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors focus:outline-none">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors focus:outline-none">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors focus:outline-none">
                      Terms of Service
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="text-sm font-semibold">Get in Touch</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors focus:outline-none">
                      <Linkedin size={16} />
                      <span>LinkedIn</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors focus:outline-none">
                      <Twitter size={16} />
                      <span>Twitter</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://reddit.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors focus:outline-none">
                      <MessageSquare size={16} />
                      <span>Reddit</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border -mx-6">
          <p className="text-sm text-center text-muted-foreground py-8">
            © {new Date().getFullYear()} Valkyra. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
