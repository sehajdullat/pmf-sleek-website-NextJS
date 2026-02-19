import { ClipboardCheck, Settings, BarChart3 } from "lucide-react";
import { ScrollSection, ScrollDiv } from "@/components/ui/scroll-section";

const steps = [
  {
    number: "01",
    icon: ClipboardCheck,
    title: "Property Evaluation",
    description: "We assess your property, market rent, and create a custom management plan.",
  },
  {
    number: "02",
    icon: Settings,
    title: "Tenant & Operations",
    description: "We handle tenant placement, rent collection, maintenance, and compliance.",
  },
  {
    number: "03",
    icon: BarChart3,
    title: "Reporting & Payouts",
    description: "Monthly statements, real-time dashboard access, and reliable owner payouts.",
  },
];

export function HowItWorks() {
  return (
    <ScrollSection className="section-padding">
      <div className="container-wide">
        <ScrollDiv className="text-center mb-16" delay={100}>
          <h2 className="mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Three simple steps from property evaluation to passive income.
          </p>
        </ScrollDiv>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <ScrollDiv 
              key={step.number} 
              className="relative text-center"
              delay={200 + index * 150}
              animation="scale"
            >
              {/* Connector line (hidden on mobile, shown on md+) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-1/2 w-full h-px bg-border" />
              )}
              
              <div className="relative">
                {/* Number badge */}
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-sand mb-6 relative">
                  <step.icon size={32} className="text-primary" />
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                    {step.number}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground max-w-xs mx-auto">{step.description}</p>
              </div>
            </ScrollDiv>
          ))}
        </div>
      </div>
    </ScrollSection>
  );
}
