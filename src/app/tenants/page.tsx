"use client";

import { useState, useEffect } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { InquiryAssistant } from "@/components/chat/InquiryAssistant";
import { ScrollSection, ScrollDiv } from "@/components/ui/scroll-section";
import {
    Home,
    FileText,
    User,
    Wrench,
    ArrowRight,
    ExternalLink,
    Bed,
    Bath,
    Square,
    MapPin
} from "lucide-react";
import tenantsHeroBg from "@/assets/tenants-hero-bg.jpg";
import demoListingImg from "@/assets/demo-listing.jpg";

const tenantResources = [
    {
        icon: Home,
        title: "View Available Rentals",
        description: "Browse our current listings and find your next home.",
        action: "Browse Rentals",
        href: "#rentals",
    },
    {
        icon: FileText,
        title: "Apply Online",
        description: "Submit your rental application securely online.",
        action: "Start Application",
        href: "#apply",
    },
    {
        icon: User,
        title: "Tenant Portal",
        description: "Pay rent, view your lease, and manage your account.",
        action: "Log In",
        href: "#portal",
        external: true,
    },
    {
        icon: Wrench,
        title: "Maintenance Request",
        description: "Submit a maintenance request through your portal.",
        action: "Request Maintenance",
        href: "#maintenance",
    },
];

export default function Tenants() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 pt-20">
                {/* Hero with background image */}
                <ScrollSection className="section-padding relative overflow-hidden">
                    {/* Background image with parallax */}
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 will-change-transform"
                        style={{
                            backgroundImage: `url(${tenantsHeroBg.src})`,
                            transform: `translateY(${scrollY * 0.3}px) scale(1.1)`
                        }}
                    />
                    {/* Overlay for readability */}
                    <div className="absolute inset-0 bg-background/85" />
                    <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/30 to-background" />

                    <div className="container-narrow text-center relative">
                        <ScrollDiv delay={100}>
                            <h1 className="mb-6">Rental Information & Tenant Resources</h1>
                        </ScrollDiv>
                        <ScrollDiv delay={200}>
                            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                                Everything you need as a current or prospective PMF tenant—all in one place.
                            </p>
                        </ScrollDiv>
                    </div>
                </ScrollSection>

                {/* Resources Grid */}
                <ScrollSection className="section-padding-sm">
                    <div className="container-wide">
                        <div className="grid md:grid-cols-2 gap-6">
                            {tenantResources.map((resource, index) => (
                                <ScrollDiv key={resource.title} delay={100 + index * 75} animation="fade-up">
                                    <a
                                        href={resource.href}
                                        className="glass-card p-8 hover-lift group block h-full"
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className="w-14 h-14 rounded-xl bg-muted flex items-center justify-center shrink-0">
                                                <resource.icon size={28} className="text-primary" />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                                                    {resource.title}
                                                    {resource.external && <ExternalLink size={16} className="text-muted-foreground" />}
                                                </h3>
                                                <p className="text-muted-foreground mb-4">{resource.description}</p>
                                                <span className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                                                    {resource.action}
                                                    <ArrowRight size={16} />
                                                </span>
                                            </div>
                                        </div>
                                    </a>
                                </ScrollDiv>
                            ))}
                        </div>
                    </div>
                </ScrollSection>

                {/* Available Rentals with Demo Listing */}
                <ScrollSection id="rentals" className="section-padding-sm bg-muted/50">
                    <div className="container-wide">
                        <ScrollDiv delay={100}>
                            <h2 className="text-2xl font-semibold mb-8">Available Rentals</h2>
                        </ScrollDiv>

                        {/* Demo Listing */}
                        <ScrollDiv delay={200}>
                            <div className="glass-card overflow-hidden hover-lift">
                                <div className="md:flex">
                                    {/* Image */}
                                    <div className="md:w-2/5 h-64 md:h-auto relative overflow-hidden">
                                        <img
                                            src={demoListingImg.src}
                                            alt="Modern home exterior"
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute top-4 left-4">
                                            <span className="bg-sage text-sage-foreground text-xs font-semibold px-3 py-1 rounded-full">
                                                Available Now
                                            </span>
                                        </div>
                                    </div>

                                    {/* Details */}
                                    <div className="md:w-3/5 p-6 md:p-8 flex flex-col">
                                        <div className="flex items-start justify-between mb-4">
                                            <div>
                                                <h3 className="text-xl font-semibold mb-1">Modern 3-Bedroom Home</h3>
                                                <div className="flex items-center gap-1 text-muted-foreground text-sm">
                                                    <MapPin size={14} />
                                                    <span>East Austin, TX 78702</span>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-2xl font-bold text-sage">$2,450</p>
                                                <p className="text-xs text-muted-foreground">/month</p>
                                            </div>
                                        </div>

                                        <div className="flex gap-6 mb-4 text-sm">
                                            <div className="flex items-center gap-2">
                                                <Bed size={18} className="text-muted-foreground" />
                                                <span>3 Beds</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Bath size={18} className="text-muted-foreground" />
                                                <span>2 Baths</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Square size={18} className="text-muted-foreground" />
                                                <span>1,850 sqft</span>
                                            </div>
                                        </div>

                                        <p className="text-muted-foreground text-sm mb-6 flex-1">
                                            Beautiful updated home with open floor plan, stainless steel appliances,
                                            hardwood floors throughout, and a private backyard. Walking distance to
                                            local shops and restaurants.
                                        </p>

                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {["Pet Friendly", "Washer/Dryer", "Central A/C", "Garage"].map((feature) => (
                                                <span key={feature} className="text-xs px-2 py-1 bg-muted rounded-md">
                                                    {feature}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="flex gap-3">
                                            <Button variant="default" className="flex-1">
                                                Schedule a Tour
                                            </Button>
                                            <Button variant="outline">
                                                Apply Now
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollDiv>

                        {/* More listings coming */}
                        <ScrollDiv className="mt-8 text-center" delay={300}>
                            <p className="text-muted-foreground">
                                More listings added regularly.
                                <Button variant="link" className="px-1">Get notified of new listings →</Button>
                            </p>
                        </ScrollDiv>
                    </div>
                </ScrollSection>

                {/* Application Info */}
                <ScrollSection id="apply" className="section-padding-sm">
                    <div className="container-narrow">
                        <ScrollDiv delay={100}>
                            <h2 className="text-2xl font-semibold mb-8">Rental Application Process</h2>
                        </ScrollDiv>
                        <ScrollDiv className="glass-card p-8" delay={200}>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-8 h-8 rounded-full bg-sage text-sage-foreground flex items-center justify-center shrink-0 font-semibold text-sm">
                                        1
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1">Submit Your Application</h4>
                                        <p className="text-sm text-muted-foreground">
                                            Complete our online application with your personal information, rental history, and employment details.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-8 h-8 rounded-full bg-sage text-sage-foreground flex items-center justify-center shrink-0 font-semibold text-sm">
                                        2
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1">Screening & Verification</h4>
                                        <p className="text-sm text-muted-foreground">
                                            We verify your income, run background and credit checks, and contact previous landlords.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-8 h-8 rounded-full bg-sage text-sage-foreground flex items-center justify-center shrink-0 font-semibold text-sm">
                                        3
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1">Approval & Lease Signing</h4>
                                        <p className="text-sm text-muted-foreground">
                                            If approved, you&apos;ll receive your lease for electronic signature and move-in instructions.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-8 p-4 bg-muted rounded-lg">
                                <p className="text-sm text-muted-foreground">
                                    <strong>Application fee:</strong> $45 per adult applicant (non-refundable)
                                </p>
                            </div>
                        </ScrollDiv>
                    </div>
                </ScrollSection>

                {/* Contact for Tenants */}
                <ScrollSection className="section-padding bg-muted/50">
                    <div className="container-narrow text-center">
                        <ScrollDiv delay={100}>
                            <h2 className="mb-4">Have Questions?</h2>
                        </ScrollDiv>
                        <ScrollDiv delay={200}>
                            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
                                Our team is here to help current and prospective tenants.
                            </p>
                        </ScrollDiv>
                        <ScrollDiv className="flex flex-col sm:flex-row items-center justify-center gap-4" delay={300}>
                            <Button variant="default" size="lg">
                                Contact Us
                            </Button>
                            <a href="tel:+15551234567" className="text-muted-foreground hover:text-foreground transition-colors">
                                Or call (555) 123-4567
                            </a>
                        </ScrollDiv>
                    </div>
                </ScrollSection>
            </main>
            <Footer />
            <InquiryAssistant />
        </div>
    );
}
