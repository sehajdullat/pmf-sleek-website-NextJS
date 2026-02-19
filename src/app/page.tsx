import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { ValueProposition } from "@/components/home/ValueProposition";
import { HowItWorks } from "@/components/home/HowItWorks";
import { ServicesSnapshot } from "@/components/home/ServicesSnapshot";
import { TrustSection } from "@/components/home/TrustSection";
import { FinalCTA } from "@/components/home/FinalCTA";
import { InquiryAssistant } from "@/components/chat/InquiryAssistant";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ValueProposition />
        <HowItWorks />
        <ServicesSnapshot />
        <TrustSection />
        <FinalCTA />
      </main>
      <Footer />
      <InquiryAssistant />
    </div>
  );
}
