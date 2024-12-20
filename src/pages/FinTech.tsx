import { Shield, Lock, Zap } from "lucide-react";

const FinTech = () => {
  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-secondary rounded-full">
            FinTech Solutions
          </span>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Secure Financial
            <span className="block mt-2">Technology Solutions</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We develop robust and secure financial technology solutions that drive innovation while ensuring data privacy and regulatory compliance.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="neo-card">
            <Shield className="h-8 w-8 mb-4" />
            <h3 className="text-xl font-bold mb-4">Secure Payments</h3>
            <p className="text-muted-foreground">
              Advanced payment processing systems with multi-layer security.
            </p>
          </div>
          <div className="neo-card">
            <Lock className="h-8 w-8 mb-4" />
            <h3 className="text-xl font-bold mb-4">Data Protection</h3>
            <p className="text-muted-foreground">
              State-of-the-art encryption and security protocols for sensitive data.
            </p>
          </div>
          <div className="neo-card">
            <Zap className="h-8 w-8 mb-4" />
            <h3 className="text-xl font-bold mb-4">Fast Processing</h3>
            <p className="text-muted-foreground">
              High-performance systems optimized for speed and reliability.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
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

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-24">
        <div className="neo-card text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Innovate?</h2>
          <p className="text-muted-foreground mb-8">
            Let's discuss how we can help you build secure and scalable FinTech solutions.
          </p>
          <button className="neo-button">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
};

export default FinTech;