import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSectionV3 } from "@/components/home-v3/HeroSectionV3";
import { ServicesV3 } from "@/components/home-v3/ServicesV3";
import { StatsV3 } from "@/components/home-v3/StatsV3";
import { InquiryAssistant } from "@/components/chat/InquiryAssistant";

export default function HomeV3() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <HeroSectionV3 />
        <ServicesV3 />
        <StatsV3 />
      </main>
      <Footer />
      <InquiryAssistant />
    </div>
  );
}
