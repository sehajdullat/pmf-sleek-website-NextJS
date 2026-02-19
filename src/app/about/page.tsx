import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { InquiryAssistant } from "@/components/chat/InquiryAssistant";
import { ScrollSection, ScrollDiv } from "@/components/ui/scroll-section";
import { MapPin, Shield, Users, ArrowRight, CheckCircle } from "lucide-react";

const values = [
    {
        title: "Transparency First",
        description: "No hidden fees, no surprises. We communicate clearly and honestly with every owner and tenant.",
    },
    {
        title: "Owner-Centric Approach",
        description: "We built our systems around what property owners actually need—not what's convenient for us.",
    },
    {
        title: "Local Accountability",
        description: "We're not a national franchise. We're a local team that knows your market and stands behind our work.",
    },
    {
        title: "Professional Standards",
        description: "Licensed, insured, and committed to fair housing and ethical property management practices.",
    },
];

const team = [
    {
        name: "Jennifer Martinez",
        role: "Founder & Principal Broker",
        bio: "15+ years in Central Texas real estate. Started PMF to bring transparency to property management.",
    },
    {
        name: "Michael Chen",
        role: "Operations Director",
        bio: "Former tech startup operations lead. Brings systems thinking to property management.",
    },
    {
        name: "Sarah Johnson",
        role: "Property Manager",
        bio: "10 years managing residential properties. Known for tenant relations and owner communication.",
    },
];

export default function About() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 pt-20">
                {/* Hero */}
                <ScrollSection className="section-padding bg-gradient-to-b from-sage-light/30 to-background">
                    <div className="container-narrow text-center">
                        <ScrollDiv delay={100}>
                            <h1 className="mb-6">A Local Team You Can Trust With Your Property</h1>
                        </ScrollDiv>
                        <ScrollDiv delay={200}>
                            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                                PMF was founded on a simple belief: property owners deserve transparency, reliability, and a management company that treats their investment like it matters.
                            </p>
                        </ScrollDiv>
                    </div>
                </ScrollSection>

                {/* Story */}
                <ScrollSection className="section-padding-sm">
                    <div className="container-narrow">
                        <ScrollDiv className="glass-card p-8 lg:p-12" delay={150}>
                            <h2 className="text-2xl font-semibold mb-6">Our Story</h2>
                            <div className="prose prose-slate max-w-none">
                                <p className="text-muted-foreground mb-4">
                                    PMF started in 2018 when our founder, Jennifer Martinez, grew frustrated with the property management companies she was working with as an investor. Hidden fees, poor communication, and a "tenant-first" approach that ignored owner concerns.
                                </p>
                                <p className="text-muted-foreground mb-4">
                                    She knew there had to be a better way. So she built it.
                                </p>
                                <p className="text-muted-foreground">
                                    Today, PMF manages over 300 properties across Central Texas. We've grown because owners refer us to other owners. No aggressive marketing. No sales tactics. Just consistent, professional property management that speaks for itself.
                                </p>
                            </div>
                        </ScrollDiv>
                    </div>
                </ScrollSection>

                {/* Values */}
                <ScrollSection className="section-padding-sm bg-muted/50">
                    <div className="container-wide">
                        <ScrollDiv delay={100}>
                            <h2 className="text-2xl font-semibold mb-8 text-center">How We Operate</h2>
                        </ScrollDiv>
                        <div className="grid md:grid-cols-2 gap-6">
                            {values.map((value, index) => (
                                <ScrollDiv
                                    key={value.title}
                                    className="glass-card p-6"
                                    delay={200 + index * 75}
                                    animation="fade-up"
                                >
                                    <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                                    <p className="text-muted-foreground text-sm">{value.description}</p>
                                </ScrollDiv>
                            ))}
                        </div>
                    </div>
                </ScrollSection>

                {/* Team */}
                <ScrollSection className="section-padding-sm">
                    <div className="container-wide">
                        <ScrollDiv delay={100}>
                            <h2 className="text-2xl font-semibold mb-8 text-center">Our Team</h2>
                        </ScrollDiv>
                        <div className="grid md:grid-cols-3 gap-6">
                            {team.map((member, index) => (
                                <ScrollDiv
                                    key={member.name}
                                    className="glass-card p-6 text-center"
                                    delay={200 + index * 100}
                                    animation="scale"
                                >
                                    <div className="w-20 h-20 rounded-full bg-sage-light mx-auto mb-4 flex items-center justify-center">
                                        <Users size={32} className="text-sage" />
                                    </div>
                                    <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                                    <p className="text-sm text-sage mb-3">{member.role}</p>
                                    <p className="text-sm text-muted-foreground">{member.bio}</p>
                                </ScrollDiv>
                            ))}
                        </div>
                    </div>
                </ScrollSection>

                {/* Credentials */}
                <ScrollSection className="section-padding-sm bg-muted/50">
                    <div className="container-narrow">
                        <ScrollDiv delay={100}>
                            <h2 className="text-2xl font-semibold mb-8 text-center">Licensing & Compliance</h2>
                        </ScrollDiv>
                        <ScrollDiv className="glass-card p-8" delay={200}>
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="flex items-start gap-3">
                                    <Shield size={20} className="text-sage shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="font-semibold mb-1">Licensed Property Manager</h4>
                                        <p className="text-sm text-muted-foreground">Texas Real Estate Commission License #12345678</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle size={20} className="text-sage shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="font-semibold mb-1">Errors & Omissions Insurance</h4>
                                        <p className="text-sm text-muted-foreground">Comprehensive coverage for your protection</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle size={20} className="text-sage shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="font-semibold mb-1">Fair Housing Compliant</h4>
                                        <p className="text-sm text-muted-foreground">Annual training and strict adherence</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <MapPin size={20} className="text-sage shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="font-semibold mb-1">Local Office</h4>
                                        <p className="text-sm text-muted-foreground">123 Main Street, Suite 100, Austin, TX 78701</p>
                                    </div>
                                </div>
                            </div>
                        </ScrollDiv>
                    </div>
                </ScrollSection>

                {/* CTA */}
                <ScrollSection className="section-padding bg-sage-light">
                    <div className="container-narrow text-center">
                        <ScrollDiv delay={100}>
                            <h2 className="mb-4">Ready to Work Together?</h2>
                        </ScrollDiv>
                        <ScrollDiv delay={200}>
                            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
                                Let's discuss your property and see if PMF is the right fit.
                            </p>
                        </ScrollDiv>
                        <ScrollDiv delay={300} animation="scale">
                            <Link href="/contact">
                                <Button variant="hero" size="lg" className="gap-2">
                                    Schedule a Consultation
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
