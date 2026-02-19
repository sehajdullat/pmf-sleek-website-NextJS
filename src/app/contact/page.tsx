"use client";

import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { InquiryAssistant } from "@/components/chat/InquiryAssistant";
import { ScrollSection, ScrollDiv } from "@/components/ui/scroll-section";
import { Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1000));

        setIsSubmitting(false);
        setIsSubmitted(true);
        toast({
            title: "Message sent!",
            description: "We'll get back to you within 24 hours.",
        });
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 pt-20">
                {/* Hero */}
                <ScrollSection className="section-padding bg-gradient-to-b from-sage-light/30 to-background">
                    <div className="container-narrow text-center">
                        <ScrollDiv delay={100}>
                            <h1 className="mb-6">Let's Talk About Your Property</h1>
                        </ScrollDiv>
                        <ScrollDiv delay={200}>
                            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                                Whether you're exploring management options or ready to get started, we're here to help.
                            </p>
                        </ScrollDiv>
                    </div>
                </ScrollSection>

                {/* Contact Form + Info */}
                <ScrollSection className="section-padding-sm">
                    <div className="container-wide">
                        <div className="grid lg:grid-cols-5 gap-12">
                            {/* Form */}
                            <ScrollDiv className="lg:col-span-3" delay={100} animation="fade-right">
                                <div className="glass-card p-8">
                                    <h2 className="text-xl font-semibold mb-6">Schedule a Consultation</h2>

                                    {isSubmitted ? (
                                        <div className="text-center py-12">
                                            <div className="w-16 h-16 rounded-full bg-sage-light mx-auto mb-4 flex items-center justify-center">
                                                <CheckCircle size={32} className="text-sage" />
                                            </div>
                                            <h3 className="text-lg font-semibold mb-2">Thank You!</h3>
                                            <p className="text-muted-foreground">
                                                We've received your message and will respond within 24 hours.
                                            </p>
                                        </div>
                                    ) : (
                                        <form onSubmit={handleSubmit} className="space-y-6">
                                            <div className="grid sm:grid-cols-2 gap-4">
                                                <div className="space-y-2">
                                                    <Label htmlFor="firstName">First Name *</Label>
                                                    <Input id="firstName" required />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="lastName">Last Name *</Label>
                                                    <Input id="lastName" required />
                                                </div>
                                            </div>

                                            <div className="grid sm:grid-cols-2 gap-4">
                                                <div className="space-y-2">
                                                    <Label htmlFor="email">Email *</Label>
                                                    <Input id="email" type="email" required />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="phone">Phone</Label>
                                                    <Input id="phone" type="tel" />
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="propertyAddress">Property Address</Label>
                                                <Input id="propertyAddress" placeholder="Optional" />
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="inquiryType">I am a...</Label>
                                                <select
                                                    id="inquiryType"
                                                    className="w-full h-10 px-3 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                                                >
                                                    <option value="owner">Property Owner</option>
                                                    <option value="investor">Real Estate Investor</option>
                                                    <option value="tenant">Prospective Tenant</option>
                                                    <option value="other">Other</option>
                                                </select>
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="message">How can we help? *</Label>
                                                <Textarea
                                                    id="message"
                                                    rows={4}
                                                    required
                                                    placeholder="Tell us about your property or ask us a question..."
                                                />
                                            </div>

                                            <Button type="submit" variant="hero" className="w-full" disabled={isSubmitting}>
                                                {isSubmitting ? "Sending..." : "Send Message"}
                                            </Button>

                                            <p className="text-xs text-muted-foreground text-center">
                                                We'll respond within 24 hours. No spam, ever.
                                            </p>
                                        </form>
                                    )}
                                </div>
                            </ScrollDiv>

                            {/* Contact Info */}
                            <div className="lg:col-span-2 space-y-6">
                                <ScrollDiv className="glass-card p-6" delay={200} animation="fade-left">
                                    <h3 className="font-semibold mb-4">Contact Information</h3>
                                    <div className="space-y-4">
                                        <a
                                            href="tel:+15551234567"
                                            className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                                        >
                                            <Phone size={18} className="text-sage" />
                                            (555) 123-4567
                                        </a>
                                        <a
                                            href="mailto:info@pmfproperty.com"
                                            className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                                        >
                                            <Mail size={18} className="text-sage" />
                                            info@pmfproperty.com
                                        </a>
                                        <div className="flex items-start gap-3 text-muted-foreground">
                                            <MapPin size={18} className="text-sage shrink-0 mt-0.5" />
                                            <span>
                                                123 Main Street, Suite 100
                                                <br />
                                                Austin, TX 78701
                                            </span>
                                        </div>
                                    </div>
                                </ScrollDiv>

                                <ScrollDiv className="glass-card p-6" delay={300} animation="fade-left">
                                    <h3 className="font-semibold mb-4">Office Hours</h3>
                                    <div className="flex items-start gap-3 text-muted-foreground">
                                        <Clock size={18} className="text-sage shrink-0 mt-0.5" />
                                        <div className="text-sm">
                                            <p>Monday – Friday: 9:00 AM – 5:00 PM</p>
                                            <p>Saturday: By appointment</p>
                                            <p>Sunday: Closed</p>
                                            <p className="mt-2 text-xs">
                                                24/7 emergency maintenance line for current tenants
                                            </p>
                                        </div>
                                    </div>
                                </ScrollDiv>

                                {/* Map placeholder */}
                                <ScrollDiv className="glass-card p-6 h-48 flex items-center justify-center bg-muted/50" delay={400} animation="fade-left">
                                    <div className="text-center">
                                        <MapPin size={32} className="text-muted-foreground/30 mx-auto mb-2" />
                                        <p className="text-sm text-muted-foreground">Map integration</p>
                                    </div>
                                </ScrollDiv>
                            </div>
                        </div>
                    </div>
                </ScrollSection>
            </main>
            <Footer />
            <InquiryAssistant />
        </div>
    );
}
