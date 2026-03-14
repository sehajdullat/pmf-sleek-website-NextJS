import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { InquiryAssistant } from "@/components/chat/InquiryAssistant";
import { ScrollSection, ScrollDiv } from "@/components/ui/scroll-section";
import {
    Building2,
    UserCheck,
    Wrench,
    FileBarChart,
    Scale,
    ArrowRight
} from "lucide-react";

const services = [
    {
        icon: Building2,
        title: "Full-Service Property Management",
        description: "Complete oversight of your rental property from tenant placement to move-out. We handle everything so you don&apos;t have to.",
        features: [
            "Tenant screening & placement",
            "Rent collection & enforcement",
            "Maintenance coordination",
            "Regular property inspections",
            "Financial reporting & owner payouts",
        ],
        href: "/services/full-service",
    },
    {
        icon: UserCheck,
        title: "Tenant Placement",
        description: "Professional marketing, thorough screening, and efficient lease execution. Find qualified tenants faster.",
        features: [
            "Professional photography & listings",
            "Multi-platform marketing",
            "Background & credit checks",
            "Income & rental history verification",
            "Lease preparation & signing",
        ],
        href: "/services/tenant-placement",
    },
    {
        icon: Wrench,
        title: "Maintenance Coordination",
        description: "24/7 maintenance handling with vetted vendors and transparent pricing. Protect your investment.",
        features: [
            "24/7 emergency response",
            "Vetted vendor network",
            "Transparent pricing (no markups)",
            "Preventive maintenance programs",
            "Photo documentation",
        ],
        href: "/services/maintenance",
    },
    {
        icon: FileBarChart,
        title: "Accounting & Reporting",
        description: "Clear financial reporting, on-time owner payouts, and tax-ready documentation.",
        features: [
            "Monthly financial statements",
            "Real-time owner portal access",
            "Year-end tax documentation",
            "Reserve fund management",
            "Expense tracking & categorization",
        ],
        href: "/services/reporting",
    },
    {
        icon: Scale,
        title: "Lease Enforcement & Compliance",
        description: "Stay compliant with local regulations while enforcing lease terms professionally and fairly.",
        features: [
            "Lease violation handling",
            "Eviction coordination (when necessary)",
            "Fair housing compliance",
            "Local regulation adherence",
            "Security deposit management",
        ],
        href: "/services/compliance",
    },
];

export default function ServiceDetail() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 pt-20">
                {/* Hero */}
                <ScrollSection className="section-padding bg-gradient-to-b from-sage-light/30 to-background">
                    <div className="container-narrow text-center">
                        <ScrollDiv delay={100}>
                            <h1 className="mb-6">Our Services</h1>
                        </ScrollDiv>
                        <ScrollDiv delay={200}>
                            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                                Everything you need to manage your rental—handled professionally.
                            </p>
                        </ScrollDiv>
                    </div>
                </ScrollSection>

                {/* Services List */}
                <ScrollSection className="section-padding-sm">
                    <div className="container-wide">
                        <div className="space-y-8">
                            {services.map((service, index) => (
                                <ScrollDiv
                                    key={service.title}
                                    className={`glass-card p-8 lg:p-10 ${index % 2 === 0 ? "" : "bg-muted/30"
                                        }`}
                                    delay={100 + index * 100}
                                    animation={index % 2 === 0 ? "fade-right" : "fade-left"}
                                >
                                    <div className="grid lg:grid-cols-2 gap-8 items-start">
                                        <div>
                                            <div className="w-14 h-14 rounded-xl bg-sage-light flex items-center justify-center mb-6">
                                                <service.icon size={28} className="text-sage" />
                                            </div>
                                            <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
                                            <p className="text-muted-foreground mb-6">{service.description}</p>
                                            <Link href={service.href}>
                                                <Button variant="sage-outline" className="gap-2">
                                                    Learn more
                                                    <ArrowRight size={16} />
                                                </Button>
                                            </Link>
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-semibold text-muted-foreground mb-4 uppercase tracking-wide">
                                                What&apos;s Included
                                            </h4>
                                            <ul className="space-y-3">
                                                {service.features.map((feature) => (
                                                    <li key={feature} className="flex items-center gap-3">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-sage" />
                                                        <span className="text-foreground">{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </ScrollDiv>
                            ))}
                        </div>
                    </div>
                </ScrollSection>

                {/* CTA */}
                <ScrollSection className="section-padding bg-primary text-primary-foreground">
                    <div className="container-narrow text-center">
                        <ScrollDiv delay={100}>
                            <h2 className="mb-4">Not Sure Which Service You Need?</h2>
                        </ScrollDiv>
                        <ScrollDiv delay={200}>
                            <p className="text-lg text-primary-foreground/70 mb-8 max-w-xl mx-auto">
                                Let&apos;s discuss your property and goals. We&apos;ll recommend the right approach.
                            </p>
                        </ScrollDiv>
                        <ScrollDiv delay={300} animation="scale">
                            <Link href="/contact">
                                <Button variant="secondary" size="lg" className="gap-2">
                                    Talk to a Property Manager
                                    <ArrowRight size={18} />
                                </Button>
                            </Link>
                        </ScrollDiv>
                    </div>
                </ScrollSection>
            </main>
            <Footer />
            <InquiryAssistant />
        </div>
    );
}
