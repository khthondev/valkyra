import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, ChevronRight } from "lucide-react";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const Solutions = () => {
  const [selectedSection, setSelectedSection] = useState("edtech-overview");
  const [openSections, setOpenSections] = useState({
    edtech: true,
    fintech: false,
    ai: false
  });

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const sections = {
    "edtech-overview": {
      title: "EdTech Solutions Overview",
      content: `
# EdTech Solutions Overview

Welcome to our comprehensive EdTech solutions guide. We'll explore how our technology transforms education.

## Learning Management Systems

Our LMS provides a robust foundation for digital education:

- **Real-time collaboration** tools for interactive learning
- *Customizable assessment* frameworks
- \`Integrated grading\` systems

### Key Features

1. Automated attendance tracking
2. Progress monitoring dashboards
3. Resource management tools

> "Education is not preparation for life; education is life itself." - John Dewey

#### Technical Implementation

\`\`\`typescript
interface LearningModule {
  id: string;
  title: string;
  content: ContentBlock[];
  assessments: Assessment[];
}
\`\`\`

##### Integration Options

| Feature | Basic | Premium | Enterprise |
|---------|-------|---------|------------|
| Users | 100 | 1000 | Unlimited |
| Storage | 10GB | 100GB | 100GB |
| Support | Email | 24/7 | Dedicated |

###### Getting Started

1. Set up your institution profile
2. Import your curriculum
3. Invite faculty and students

[Learn more about our implementation process →](/)

![Learning Dashboard](/placeholder.svg)

---

Need help? Contact our support team for assistance.
      `,
      links: [
        "Learning Management Systems",
        "Key Features",
        "Technical Implementation",
        "Integration Options",
        "Getting Started"
      ],
      tags: ["education", "lms", "e-learning", "assessment", "collaboration"]
    },
    "fintech-overview": {
      title: "FinTech Solutions Overview",
      content: `
# FinTech Solutions Overview

## Payment Processing
Secure and efficient payment processing solutions for modern financial transactions.

## Banking Integration
Seamless integration with banking systems for real-time financial operations.

## Risk Management
Advanced risk assessment and management tools for financial institutions.
      `,
      links: ["Payment Processing", "Banking Integration", "Risk Management"]
    },
    "ai-overview": {
      title: "AI Solutions Overview",
      content: `
# AI Solutions Overview

## Machine Learning Models
Custom ML models designed for specific business needs and use cases.

## Natural Language Processing
Advanced NLP solutions for text analysis and processing requirements.

## Predictive Analytics
Data-driven predictive analytics for business intelligence and decision making.
      `,
      links: ["Machine Learning Models", "Natural Language Processing", "Predictive Analytics"]
    }
  };

  return (
    <div className="h-[calc(100vh-5rem)] pt-0 container mx-auto">
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel defaultSize={25} minSize={20}>
          <ScrollArea className="h-full">
            <div className="p-4 space-y-4">
              <h3 className="text-lg font-semibold mb-2">Our Solutions</h3>
              
              <Collapsible open={openSections.edtech} onOpenChange={() => toggleSection('edtech')}>
                <CollapsibleTrigger className="flex items-center gap-2 w-full hover:bg-accent rounded-lg p-2">
                  {openSections.edtech ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                  EdTech
                </CollapsibleTrigger>
                <CollapsibleContent className="pl-4 space-y-1">
                  <button
                    onClick={() => setSelectedSection("edtech-overview")}
                    className="w-full text-left p-2 hover:bg-accent rounded-lg text-sm"
                  >
                    Overview
                  </button>
                </CollapsibleContent>
              </Collapsible>

              <Collapsible open={openSections.fintech} onOpenChange={() => toggleSection('fintech')}>
                <CollapsibleTrigger className="flex items-center gap-2 w-full hover:bg-accent rounded-lg p-2">
                  {openSections.fintech ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                  FinTech
                </CollapsibleTrigger>
                <CollapsibleContent className="pl-4 space-y-1">
                  <button
                    onClick={() => setSelectedSection("fintech-overview")}
                    className="w-full text-left p-2 hover:bg-accent rounded-lg text-sm"
                  >
                    Overview
                  </button>
                </CollapsibleContent>
              </Collapsible>

              <Collapsible open={openSections.ai} onOpenChange={() => toggleSection('ai')}>
                <CollapsibleTrigger className="flex items-center gap-2 w-full hover:bg-accent rounded-lg p-2">
                  {openSections.ai ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                  AI
                </CollapsibleTrigger>
                <CollapsibleContent className="pl-4 space-y-1">
                  <button
                    onClick={() => setSelectedSection("ai-overview")}
                    className="w-full text-left p-2 hover:bg-accent rounded-lg text-sm"
                  >
                    Overview
                  </button>
                </CollapsibleContent>
              </Collapsible>
            </div>
          </ScrollArea>
        </ResizablePanel>

        <ResizableHandle withHandle />

        <ResizablePanel defaultSize={50} minSize={30}>
          <ScrollArea className="h-full">
            <div className="p-6 prose prose-invert max-w-none">
                            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                {sections[selectedSection].content}
                            </ReactMarkdown>
            </div>
          </ScrollArea>
        </ResizablePanel>

        <ResizableHandle withHandle />

        <ResizablePanel defaultSize={25} minSize={20}>
          <ScrollArea className="h-full">
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-4">On This Page</h3>
              <div className="space-y-2">
                {sections[selectedSection].links.map((link, index) => (
                  <a
                    key={index}
                    href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                    className="block text-sm text-muted-foreground hover:text-foreground"
                  >
                    {link}
                  </a>
                ))}
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {sections[selectedSection].tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </ScrollArea>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default Solutions;
