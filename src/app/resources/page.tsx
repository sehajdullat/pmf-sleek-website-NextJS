import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { InquiryAssistant } from "@/components/chat/InquiryAssistant";
import { ScrollSection, ScrollDiv } from "@/components/ui/scroll-section";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const ownerFaqs = [
    {
        question: "How long does it take to find a tenant?",
        answer: "On average, we place qualified tenants within 2–4 weeks, depending on the property, price point, and market conditions. We prioritize finding the right tenant over the fastest placement.",
    },
    {
        question: "How do you screen tenants?",
        answer: "We run comprehensive background checks including credit history, criminal background, eviction history, income verification (we require 3x monthly rent), and previous landlord references.",
    },
    {
        question: "What happens if a tenant doesn't pay rent?",
        answer: "We have a structured process: friendly reminder on day 1, formal notice on day 3, and if needed, we begin the legal process on day 5. We keep you informed throughout and handle all communication.",
    },
    {
        question: "How do I see my financial statements?",
        answer: "You have 24/7 access to your owner portal where you can view real-time financials, historical statements, maintenance history, and tenant information. Monthly statements are also emailed on the 10th.",
    },
    {
        question: "Can I use my own contractors for maintenance?",
        answer: "Yes, if you have preferred vendors, we're happy to work with them as long as they're licensed, insured, and responsive. Otherwise, we use our vetted vendor network.",
    },
    {
        question: "What's your management contract length?",
        answer: "Our standard contract is month-to-month after an initial 6-month term. We believe in earning your business every month, not locking you into long contracts.",
    },
];

const tenantFaqs = [
    {
        question: "How do I pay rent?",
        answer: "Rent is paid through your tenant portal via ACH, debit card, or credit card. You can also set up automatic payments to never miss a due date.",
    },
    {
        question: "What's the process for maintenance requests?",
        answer: "Submit requests through your tenant portal. For emergencies (water leaks, no heat/AC, security issues), call our 24/7 emergency line. We aim to address non-emergency requests within 48 hours.",
    },
    {
        question: "Can I have pets?",
        answer: "Pet policies vary by property. Check your lease or the listing for specific pet policies. Pet deposits and monthly pet rent may apply.",
    },
    {
        question: "How do I get my security deposit back?",
        answer: "Security deposits are returned within 30 days of move-out, minus any deductions for damages beyond normal wear and tear. We provide an itemized statement with any deductions.",
    },
];

const generalFaqs = [
    {
        question: "Are you licensed and insured?",
        answer: "Yes. PMF is a licensed property management company in Texas. We carry errors & omissions insurance and require all vendors to be licensed and insured.",
    },
    {
        question: "How do you handle communication?",
        answer: "Owners and tenants have dedicated points of contact—not a call center. You can reach us via phone, email, or through your portal. We respond to all inquiries within 24 hours.",
    },
    {
        question: "What areas do you serve?",
        answer: "We manage properties throughout Central Texas, including Austin, Round Rock, Cedar Park, Georgetown, Pflugerville, and San Marcos.",
    },
];

export default function Resources() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 pt-20">
                {/* Hero */}
                <ScrollSection className="section-padding bg-gradient-to-b from-sage-light/30 to-background">
                    <div className="container-narrow text-center">
                        <ScrollDiv delay={100}>
                            <h1 className="mb-6">Resources & FAQ</h1>
                        </ScrollDiv>
                        <ScrollDiv delay={200}>
                            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                                Clear answers to common questions about our property management services.
                            </p>
                        </ScrollDiv>
                    </div>
                </ScrollSection>

                {/* Owner FAQs */}
                <ScrollSection className="section-padding-sm">
                    <div className="container-narrow">
                        <ScrollDiv delay={100}>
                            <h2 className="text-2xl font-semibold mb-6">For Property Owners</h2>
                        </ScrollDiv>
                        <ScrollDiv delay={200}>
                            <Accordion type="single" collapsible className="space-y-3">
                                {ownerFaqs.map((faq, index) => (
                                    <AccordionItem
                                        key={index}
                                        value={`owner-${index}`}
                                        className="glass-card px-6 border-none"
                                    >
                                        <AccordionTrigger className="text-left hover:no-underline py-5">
                                            {faq.question}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-muted-foreground pb-5">
                                            {faq.answer}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </ScrollDiv>
                    </div>
                </ScrollSection>

                {/* Tenant FAQs */}
                <ScrollSection className="section-padding-sm bg-muted/50">
                    <div className="container-narrow">
                        <ScrollDiv delay={100}>
                            <h2 className="text-2xl font-semibold mb-6">For Tenants</h2>
                        </ScrollDiv>
                        <ScrollDiv delay={200}>
                            <Accordion type="single" collapsible className="space-y-3">
                                {tenantFaqs.map((faq, index) => (
                                    <AccordionItem
                                        key={index}
                                        value={`tenant-${index}`}
                                        className="bg-card rounded-xl px-6 border-none shadow-soft-sm"
                                    >
                                        <AccordionTrigger className="text-left hover:no-underline py-5">
                                            {faq.question}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-muted-foreground pb-5">
                                            {faq.answer}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </ScrollDiv>
                    </div>
                </ScrollSection>

                {/* General FAQs */}
                <ScrollSection className="section-padding-sm">
                    <div className="container-narrow">
                        <ScrollDiv delay={100}>
                            <h2 className="text-2xl font-semibold mb-6">General Questions</h2>
                        </ScrollDiv>
                        <ScrollDiv delay={200}>
                            <Accordion type="single" collapsible className="space-y-3">
                                {generalFaqs.map((faq, index) => (
                                    <AccordionItem
                                        key={index}
                                        value={`general-${index}`}
                                        className="glass-card px-6 border-none"
                                    >
                                        <AccordionTrigger className="text-left hover:no-underline py-5">
                                            {faq.question}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-muted-foreground pb-5">
                                            {faq.answer}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </ScrollDiv>
                    </div>
                </ScrollSection>
            </main>
            <Footer />
            <InquiryAssistant />
        </div>
    );
}
