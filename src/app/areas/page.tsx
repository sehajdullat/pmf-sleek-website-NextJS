import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { InquiryAssistant } from "@/components/chat/InquiryAssistant";
import { ScrollSection, ScrollDiv } from "@/components/ui/scroll-section";
import { MapPin, ArrowRight, CheckCircle } from "lucide-react";

const areas = [
    {
        city: "Austin",
        state: "TX",
        neighborhoods: ["Downtown", "East Austin", "South Congress", "Mueller", "Hyde Park", "Travis Heights"],
        description: "Our home base. Deep market knowledge and the largest vendor network in the area.",
    },
    {
        city: "Round Rock",
        state: "TX",
        neighborhoods: ["Downtown Round Rock", "Old Settlers Park", "Brushy Creek", "Paloma Lake"],
        description: "Growing suburb with strong rental demand. We've managed here since 2019.",
    },
    {
        city: "Cedar Park",
        state: "TX",
        neighborhoods: ["Town Center", "Cypress Canyon", "Buttercup Creek", "Anderson Mill"],
        description: "Family-friendly community with consistent tenant quality and low turnover.",
    },
    {
        city: "Georgetown",
        state: "TX",
        neighborhoods: ["Downtown Georgetown", "Sun City", "Berry Creek", "Cimarron Hills"],
        description: "Historic charm meets modern growth. Strong appreciation potential.",
    },
    {
        city: "Pflugerville",
        state: "TX",
        neighborhoods: ["Downtown Pflugerville", "Blackhawk", "Falcon Pointe", "Bohls Place"],
        description: "Affordable entry point with excellent schools. High renter interest.",
    },
    {
        city: "San Marcos",
        state: "TX",
        neighborhoods: ["Downtown", "Spring Lake", "Blanco Gardens", "Dunbar"],
        description: "University town with unique rental dynamics. We know this market well.",
    },
];

export default function Areas() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 pt-20">
                {/* Hero */}
                <ScrollSection className="section-padding bg-gradient-to-b from-sage-light/30 to-background">
                    <div className="container-narrow text-center">
                        <ScrollDiv delay={100}>
                            <h1 className="mb-6">Areas We Serve</h1>
                        </ScrollDiv>
                        <ScrollDiv delay={200}>
                            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                                Local expertise matters. We manage properties in Central Texas communities where we have deep market knowledge and established vendor relationships.
                            </p>
                        </ScrollDiv>
                    </div>
                </ScrollSection>

                {/* Google Map with Texas locations */}
                <ScrollSection className="py-8">
                    <div className="container-wide">
                        <ScrollDiv delay={100}>
                            <div className="h-80 md:h-96 rounded-xl overflow-hidden border border-border shadow-lg">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d441396.62828545045!2d-98.04467879999999!3d30.30798565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b599a0cc032f%3A0x5d9b464bd469d57a!2sAustin%2C%20TX!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus&markers=color:green%7CAustin,TX&markers=color:green%7CRound+Rock,TX&markers=color:green%7CCedar+Park,TX&markers=color:green%7CGeorgetown,TX&markers=color:green%7CPflugerville,TX&markers=color:green%7CSan+Marcos,TX"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="PMF Service Areas in Central Texas"
                                />
                            </div>
                        </ScrollDiv>
                    </div>
                </ScrollSection>

                {/* Areas Grid */}
                <ScrollSection className="section-padding-sm">
                    <div className="container-wide">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {areas.map((area, index) => (
                                <ScrollDiv
                                    key={area.city}
                                    className="glass-card p-6 hover-lift"
                                    delay={100 + index * 75}
                                    animation="fade-up"
                                >
                                    <div className="flex items-center gap-2 mb-3">
                                        <MapPin size={18} className="text-sage" />
                                        <h3 className="text-xl font-semibold">
                                            {area.city}, {area.state}
                                        </h3>
                                    </div>
                                    <p className="text-sm text-muted-foreground mb-4">{area.description}</p>
                                    <div className="mb-4">
                                        <p className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wide">
                                            Neighborhoods
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {area.neighborhoods.slice(0, 4).map((hood) => (
                                                <span
                                                    key={hood}
                                                    className="text-xs px-2 py-1 bg-muted rounded-md"
                                                >
                                                    {hood}
                                                </span>
                                            ))}
                                            {area.neighborhoods.length > 4 && (
                                                <span className="text-xs px-2 py-1 text-muted-foreground">
                                                    +{area.neighborhoods.length - 4} more
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    <Link
                                        href={`/contact?area=${area.city.toLowerCase()}`}
                                        className="text-sm text-sage hover:text-sage/80 font-medium inline-flex items-center gap-1"
                                    >
                                        Get local pricing
                                        <ArrowRight size={14} />
                                    </Link>
                                </ScrollDiv>
                            ))}
                        </div>
                    </div>
                </ScrollSection>

                {/* Why Local Matters */}
                <ScrollSection className="section-padding-sm bg-muted/50">
                    <div className="container-narrow">
                        <ScrollDiv delay={100}>
                            <h2 className="text-2xl font-semibold mb-8 text-center">Why Local Expertise Matters</h2>
                        </ScrollDiv>
                        <div className="grid sm:grid-cols-2 gap-6">
                            {[
                                "We know fair market rents down to the neighborhood level",
                                "Our vendors are vetted locals—not national call centers",
                                "We understand city-specific regulations and requirements",
                                "Quick response times because we're actually here",
                            ].map((item, index) => (
                                <ScrollDiv key={item} className="flex items-start gap-3" delay={200 + index * 75}>
                                    <CheckCircle size={20} className="text-sage shrink-0 mt-0.5" />
                                    <span>{item}</span>
                                </ScrollDiv>
                            ))}
                        </div>
                    </div>
                </ScrollSection>

                {/* CTA */}
                <ScrollSection className="section-padding bg-sage-light">
                    <div className="container-narrow text-center">
                        <ScrollDiv delay={100}>
                            <h2 className="mb-4">Have a Property in Our Service Area?</h2>
                        </ScrollDiv>
                        <ScrollDiv delay={200}>
                            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
                                Let's discuss your property and see how PMF can help.
                            </p>
                        </ScrollDiv>
                        <ScrollDiv delay={300} animation="scale">
                            <Link href="/contact">
                                <Button variant="hero" size="lg" className="gap-2">
                                    Get a Local Quote
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
