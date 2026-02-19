import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { InquiryAssistant } from "@/components/chat/InquiryAssistant";
import { ScrollSection, ScrollDiv } from "@/components/ui/scroll-section";
import {
    CheckCircle,
    XCircle,
    Building2,
    MessageSquare,
    DollarSign,
    ArrowRight
} from "lucide-react";

const whoThisIsFor = [
    "Owners of 1–20 residential rental units",
    "Out-of-state or time-constrained investors",
    "First-time landlords who want to do it right",
    "Owners frustrated with unresponsive managers",
    "Risk-aware investors who value transparency",
];

const whoThisIsNotFor = [
    "Owners seeking the absolute lowest cost management",
    "Those who want to be hands-on with daily decisions",
    "Properties requiring extensive rehab before renting",
    "Commercial or short-term rental properties",
];

const whatWeManage = [
    "Single-family homes",
    "Condos & townhomes",
    "Small multi-family (2–4 units)",
    "Small apartment buildings (up to 20 units)",
];

const communicationHighlights = [
    { title: "Real-time owner portal", description: "Access statements, maintenance updates, and tenant info 24/7" },
    { title: "Monthly reporting", description: "Clear financial statements delivered on the 10th of each month" },
    { title: "Proactive updates", description: "We reach out before problems escalate—not after" },
    { title: "Direct contact", description: "Your dedicated property manager, not a call center" },
];

export default function Owners() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 pt-20">
                {/* Hero */}
                <ScrollSection className="section-padding bg-gradient-to-b from-sage-light/30 to-background">
                    <div className="container-narrow text-center">
                        <ScrollDiv delay={100}>
                            <h1 className="mb-6 text-balance">
                                Property Management Built for Owners Who Value Peace of Mind
                            </h1>
                        </ScrollDiv>
                        <ScrollDiv delay={200}>
                            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                                We built PMF around what owners actually need: transparency, reliability, and a team that treats your property like an investment—not a transaction.
                            </p>
                        </ScrollDiv>
                        <ScrollDiv delay={300} animation="scale">
                            <Link href="/contact">
                                <Button variant="hero" size="lg">
                                    Get a Rental Analysis
                                </Button>
                            </Link>
                        </ScrollDiv>
                    </div>
                </ScrollSection>

                {/* Who This Is For / Not For */}
                <ScrollSection className="section-padding-sm">
                    <div className="container-wide">
                        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
                            {/* For */}
                            <ScrollDiv className="glass-card p-8" delay={100} animation="fade-right">
                                <h3 className="text-xl font-semibold mb-6 text-sage">Who This Is For</h3>
                                <ul className="space-y-4">
                                    {whoThisIsFor.map((item) => (
                                        <li key={item} className="flex items-start gap-3">
                                            <CheckCircle size={20} className="text-sage shrink-0 mt-0.5" />
                                            <span className="text-foreground">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </ScrollDiv>

                            {/* Not For */}
                            <ScrollDiv className="glass-card p-8 bg-muted/30" delay={200} animation="fade-left">
                                <h3 className="text-xl font-semibold mb-6 text-muted-foreground">Who This Is NOT For</h3>
                                <ul className="space-y-4">
                                    {whoThisIsNotFor.map((item) => (
                                        <li key={item} className="flex items-start gap-3">
                                            <XCircle size={20} className="text-muted-foreground/50 shrink-0 mt-0.5" />
                                            <span className="text-muted-foreground">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </ScrollDiv>
                        </div>
                    </div>
                </ScrollSection>

                {/* What We Manage */}
                <ScrollSection className="section-padding-sm bg-muted/50">
                    <div className="container-narrow">
                        <ScrollDiv className="flex items-center gap-4 mb-8" delay={100}>
                            <div className="w-12 h-12 rounded-lg bg-sage-light flex items-center justify-center">
                                <Building2 size={24} className="text-sage" />
                            </div>
                            <h2>What We Manage</h2>
                        </ScrollDiv>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {whatWeManage.map((item, index) => (
                                <ScrollDiv
                                    key={item}
                                    className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border"
                                    delay={200 + index * 75}
                                >
                                    <CheckCircle size={18} className="text-sage" />
                                    <span className="text-foreground">{item}</span>
                                </ScrollDiv>
                            ))}
                        </div>
                    </div>
                </ScrollSection>

                {/* How We Communicate */}
                <ScrollSection className="section-padding-sm">
                    <div className="container-narrow">
                        <ScrollDiv className="flex items-center gap-4 mb-8" delay={100}>
                            <div className="w-12 h-12 rounded-lg bg-sage-light flex items-center justify-center">
                                <MessageSquare size={24} className="text-sage" />
                            </div>
                            <h2>How We Communicate</h2>
                        </ScrollDiv>
                        <div className="grid sm:grid-cols-2 gap-6">
                            {communicationHighlights.map((item, index) => (
                                <ScrollDiv
                                    key={item.title}
                                    className="glass-card p-6"
                                    delay={200 + index * 75}
                                >
                                    <h4 className="font-semibold mb-2">{item.title}</h4>
                                    <p className="text-sm text-muted-foreground">{item.description}</p>
                                </ScrollDiv>
                            ))}
                        </div>
                    </div>
                </ScrollSection>

                {/* How Owners Get Paid */}
                <ScrollSection className="section-padding-sm bg-muted/50">
                    <div className="container-narrow">
                        <ScrollDiv className="flex items-center gap-4 mb-8" delay={100}>
                            <div className="w-12 h-12 rounded-lg bg-sage-light flex items-center justify-center">
                                <DollarSign size={24} className="text-sage" />
                            </div>
                            <h2>How Owners Get Paid</h2>
                        </ScrollDiv>
                        <ScrollDiv className="glass-card p-8" delay={200}>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <CheckCircle size={20} className="text-sage shrink-0 mt-0.5" />
                                    <span><strong>Reliable ACH deposits</strong> — Owner distributions processed on the 10th of each month</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle size={20} className="text-sage shrink-0 mt-0.5" />
                                    <span><strong>Clear statements</strong> — Itemized income and expenses, no surprises</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle size={20} className="text-sage shrink-0 mt-0.5" />
                                    <span><strong>Year-end reporting</strong> — 1099s and annual summaries ready for tax time</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle size={20} className="text-sage shrink-0 mt-0.5" />
                                    <span><strong>Reserve transparency</strong> — You always know what's in your maintenance reserve</span>
                                </li>
                            </ul>
                        </ScrollDiv>
                    </div>
                </ScrollSection>

                {/* CTA */}
                <ScrollSection className="section-padding bg-sage-light">
                    <div className="container-narrow text-center">
                        <ScrollDiv delay={100}>
                            <h2 className="mb-4">See What PMF Can Do For Your Property</h2>
                        </ScrollDiv>
                        <ScrollDiv delay={200}>
                            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
                                Get a free rental analysis and a custom management proposal—no obligation.
                            </p>
                        </ScrollDiv>
                        <ScrollDiv delay={300} animation="scale">
                            <Link href="/contact">
                                <Button variant="hero" size="lg" className="gap-2">
                                    Get a Rental Analysis
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
