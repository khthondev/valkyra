import { Brain, Cpu, Network } from "lucide-react";

const AI = () => {
  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-secondary rounded-full">
            AI Solutions
          </span>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Artificial Intelligence
            <span className="block mt-2">for Real Innovation</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We leverage cutting-edge AI technologies to create intelligent solutions that drive business growth while maintaining data privacy and security.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="neo-card">
            <Brain className="h-8 w-8 mb-4" />
            <h3 className="text-xl font-bold mb-4">Machine Learning</h3>
            <p className="text-muted-foreground">
              Custom ML models tailored to your specific business needs.
            </p>
          </div>
          <div className="neo-card">
            <Cpu className="h-8 w-8 mb-4" />
            <h3 className="text-xl font-bold mb-4">Deep Learning</h3>
            <p className="text-muted-foreground">
              Advanced neural networks for complex pattern recognition.
            </p>
          </div>
          <div className="neo-card">
            <Network className="h-8 w-8 mb-4" />
            <h3 className="text-xl font-bold mb-4">Natural Language</h3>
            <p className="text-muted-foreground">
              NLP solutions for text analysis and language processing.
            </p>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="container mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold text-center mb-16">AI Applications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="neo-card">
            <h3 className="text-xl font-bold mb-4">Business Intelligence</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li>• Predictive analytics</li>
              <li>• Market trend analysis</li>
              <li>• Customer behavior modeling</li>
              <li>• Risk assessment</li>
            </ul>
          </div>
          <div className="neo-card">
            <h3 className="text-xl font-bold mb-4">Process Automation</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li>• Workflow optimization</li>
              <li>• Document processing</li>
              <li>• Quality control</li>
              <li>• Resource allocation</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-24">
        <div className="neo-card text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Implement AI?</h2>
          <p className="text-muted-foreground mb-8">
            Let's discuss how AI can transform your business operations.
          </p>
          <button className="neo-button">
            Schedule a Demo
          </button>
        </div>
      </section>
    </div>
  );
};

export default AI;