import Link from "next/link";
import { Building2, UserCheck, Wrench, FileBarChart, ArrowRight } from "lucide-react";
import { ScrollSection, ScrollDiv } from "@/components/ui/scroll-section";

const services = [
  {
    icon: Building2,
    title: "Full-Service Management",
    description: "Complete property oversight from tenant placement to maintenance coordination.",
    href: "/services/full-service",
  },
  {
    icon: UserCheck,
    title: "Tenant Placement",
    description: "Thorough screening, marketing, and lease execution for quality tenants.",
    href: "/services/tenant-placement",
  },
  {
    icon: Wrench,
    title: "Maintenance Coordination",
    description: "24/7 maintenance handling with vetted vendors and transparent pricing.",
    href: "/services/maintenance",
  },
  {
    icon: FileBarChart,
    title: "Financial Reporting",
    description: "Monthly statements, annual reports, and real-time owner portal access.",
    href: "/services/reporting",
  },
];

export function ServicesSnapshot() {
  return (
    <ScrollSection className="section-padding bg-primary text-primary-foreground">
      <div className="container-wide">
        <ScrollDiv className="text-center mb-12" delay={100}>
          <h2 className="mb-4">Our Services</h2>
          <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">
            Everything you need to manage your rental—handled professionally.
          </p>
        </ScrollDiv>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <ScrollDiv key={service.title} delay={200 + index * 100} animation="fade-up">
              <Link
                href={service.href}
                className="group p-6 rounded-xl border border-primary-foreground/10 hover:bg-primary-foreground/5 transition-all duration-300 block"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary-foreground/10 flex items-center justify-center shrink-0">
                    <service.icon size={24} className="text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold">{service.title}</h3>
                      <ArrowRight size={18} className="text-primary-foreground/50 group-hover:text-primary-foreground group-hover:translate-x-1 transition-all" />
                    </div>
                    <p className="text-sm text-primary-foreground/60">{service.description}</p>
                  </div>
                </div>
              </Link>
            </ScrollDiv>
          ))}
        </div>

        <ScrollDiv className="text-center mt-10" delay={600}>
          <Link href="/services" className="inline-flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
            View all services
            <ArrowRight size={16} />
          </Link>
        </ScrollDiv>
      </div>
    </ScrollSection>
  );
}
