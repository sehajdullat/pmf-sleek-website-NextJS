import { Users, FileText, Clock, MapPin } from "lucide-react";
import { ScrollSection, ScrollDiv } from "@/components/ui/scroll-section";

const values = [
  {
    icon: Users,
    title: "Owner-First Systems",
    description: "Everything we do is designed around protecting your investment and maximizing your returns.",
  },
  {
    icon: FileText,
    title: "Clear Pricing & Contracts",
    description: "No hidden fees. No surprises. You'll always know exactly what you're paying for.",
  },
  {
    icon: Clock,
    title: "Fast Response Times",
    description: "24-hour response guarantee for maintenance. Same-day updates on critical issues.",
  },
  {
    icon: MapPin,
    title: "Local Accountability",
    description: "A real team in your market. We know the neighborhoods, the regulations, and the tenants.",
  },
];

export function ValueProposition() {
  return (
    <ScrollSection className="section-padding-sm bg-muted/50">
      <div className="container-wide">
        <ScrollDiv className="text-center mb-12" delay={100}>
          <h2 className="mb-4">Why Property Owners Choose PMF</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We built our systems around what owners actually need—not what's convenient for us.
          </p>
        </ScrollDiv>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <ScrollDiv
              key={value.title}
              className="glass-card p-6 hover-lift"
              delay={200 + index * 100}
              animation="fade-up"
            >
              <div className="w-12 h-12 rounded-lg bg-sage-light flex items-center justify-center mb-4">
                <value.icon size={24} className="text-sage" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
              <p className="text-sm text-muted-foreground">{value.description}</p>
            </ScrollDiv>
          ))}
        </div>
      </div>
    </ScrollSection>
  );
}
