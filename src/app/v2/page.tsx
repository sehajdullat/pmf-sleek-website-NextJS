import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSectionV2 } from "@/components/home-v2/HeroSectionV2";
import { FeaturesV2 } from "@/components/home-v2/FeaturesV2";
import { CTAV2 } from "@/components/home-v2/CTAV2";
import { InquiryAssistant } from "@/components/chat/InquiryAssistant";

export default function HomeV2() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0b] text-white">
      <Header />
      <main className="flex-1">
        <HeroSectionV2 />
        <FeaturesV2 />
        <CTAV2 />
      </main>
      <Footer />
      <InquiryAssistant />
    </div>
  );
}
