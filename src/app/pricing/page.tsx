import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { InquiryAssistant } from "@/components/chat/InquiryAssistant";
import { ScrollSection, ScrollDiv } from "@/components/ui/scroll-section";
import { CheckCircle, ArrowRight, AlertCircle } from "lucide-react";

const managementFees = {
    title: "Full-Service Management",
    percentage: "8–10%",
    description: "of monthly rent collected",
    includes: [
        "Tenant communication & support",
        "Rent collection & enforcement",
        "Maintenance coordination",
        "Monthly financial reporting",
        "Owner portal access",
        "Annual property inspections",
    ],
};

const placementFee = {
    title: "Tenant Placement",
    percentage: "50–75%",
    description: "of first month's rent (one-time)",
    includes: [
        "Professional photography & listings",
        "Multi-platform marketing",
        "Showing coordination",
        "Thorough tenant screening",
        "Lease preparation & execution",
    ],
};

const additionalServices = [
    { service: "Lease renewal", fee: "$150–$250" },
    { service: "Eviction coordination", fee: "$300+ (plus legal costs)" },
    { service: "Property inspection (additional)", fee: "$75–$100" },
    { service: "Maintenance markup", fee: "None (we don't mark up vendor costs)" },
];

export default function Pricing() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 pt-20">
                {/* Hero */}
                <ScrollSection className="section-padding bg-gradient-to-b from-sage-light/30 to-background">
                    <div className="container-narrow text-center">
                        <ScrollDiv delay={100}>
                            <h1 className="mb-6">Transparent Pricing. No Surprises.</h1>
                        </ScrollDiv>
                        <ScrollDiv delay={200}>
                            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                                We believe in straightforward pricing. Here's exactly what our services cost—no hidden fees, no fine print.
                            </p>
                        </ScrollDiv>
                    </div>
                </ScrollSection>

                {/* Main Pricing */}
                <ScrollSection className="section-padding-sm">
                    <div className="container-wide">
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Management Fee */}
                            <ScrollDiv className="glass-card p-8 border-2 border-sage/20" delay={100} animation="fade-right">
                                <div className="mb-6">
                                    <h3 className="text-xl font-semibold mb-2">{managementFees.title}</h3>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-4xl font-bold text-sage">{managementFees.percentage}</span>
                                        <span className="text-muted-foreground">{managementFees.description}</span>
                                    </div>
                                </div>
                                <ul className="space-y-3">
                                    {managementFees.includes.map((item) => (
                                        <li key={item} className="flex items-center gap-3">
                                            <CheckCircle size={18} className="text-sage shrink-0" />
                                            <span className="text-sm">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </ScrollDiv>

                            {/* Placement Fee */}
                            <ScrollDiv className="glass-card p-8" delay={200} animation="fade-left">
                                <div className="mb-6">
                                    <h3 className="text-xl font-semibold mb-2">{placementFee.title}</h3>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-4xl font-bold text-primary">{placementFee.percentage}</span>
                                        <span className="text-muted-foreground">{placementFee.description}</span>
                                    </div>
                                </div>
                                <ul className="space-y-3">
                                    {placementFee.includes.map((item) => (
                                        <li key={item} className="flex items-center gap-3">
                                            <CheckCircle size={18} className="text-sage shrink-0" />
                                            <span className="text-sm">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </ScrollDiv>
                        </div>
                    </div>
                </ScrollSection>

                {/* Additional Services */}
                <ScrollSection className="section-padding-sm bg-muted/50">
                    <div className="container-narrow">
                        <ScrollDiv delay={100}>
                            <h2 className="text-2xl font-semibold mb-8">Additional Services</h2>
                        </ScrollDiv>
                        <ScrollDiv className="glass-card overflow-hidden" delay={200}>
                            <table className="w-full">
                                <thead className="bg-muted">
                                    <tr>
                                        <th className="text-left p-4 font-semibold text-sm">Service</th>
                                        <th className="text-right p-4 font-semibold text-sm">Fee</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {additionalServices.map((item, index) => (
                                        <tr key={item.service} className={index % 2 === 0 ? "" : "bg-muted/30"}>
                                            <td className="p-4 text-sm">{item.service}</td>
                                            <td className="p-4 text-sm text-right font-medium">{item.fee}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </ScrollDiv>
                    </div>
                </ScrollSection>

                {/* No Hidden Fees */}
                <ScrollSection className="section-padding-sm">
                    <div className="container-narrow">
                        <ScrollDiv className="glass-card p-8 bg-sage-light/50 border-sage/20" delay={150}>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-sage/10 flex items-center justify-center shrink-0">
                                    <AlertCircle size={24} className="text-sage" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold mb-2">Our No Hidden Fees Promise</h3>
                                    <p className="text-muted-foreground mb-4">
                                        We don't charge for things other companies sneak into contracts:
                                    </p>
                                    <ul className="grid sm:grid-cols-2 gap-2">
                                        {[
                                            "No setup or onboarding fees",
                                            "No advertising fees",
                                            "No lease admin fees",
                                            "No monthly minimum fees",
                                            "No cancellation fees (30-day notice)",
                                            "No maintenance markups",
                                        ].map((item) => (
                                            <li key={item} className="flex items-center gap-2 text-sm">
                                                <CheckCircle size={14} className="text-sage" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </ScrollDiv>
                    </div>
                </ScrollSection>

                {/* CTA */}
                <ScrollSection className="section-padding bg-primary text-primary-foreground">
                    <div className="container-narrow text-center">
                        <ScrollDiv delay={100}>
                            <h2 className="mb-4">Ready for a Custom Quote?</h2>
                        </ScrollDiv>
                        <ScrollDiv delay={200}>
                            <p className="text-lg text-primary-foreground/70 mb-8 max-w-xl mx-auto">
                                Pricing varies based on property type and location. Get a personalized quote for your property.
                            </p>
                        </ScrollDiv>
                        <ScrollDiv delay={300} animation="scale">
                            <Link href="/contact">
                                <Button variant="secondary" size="lg" className="gap-2">
                                    Request a Custom Quote
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
