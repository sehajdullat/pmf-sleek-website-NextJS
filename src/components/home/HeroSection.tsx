"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Star, Shield, Home } from "lucide-react";
import { useEffect, useState } from "react";
import heroBg from "@/assets/hero-bg.jpg";

const trustSignals = [
  { icon: Star, label: "4.9★ Google Reviews" },
  { icon: Home, label: "300+ Homes Managed" },
  { icon: Shield, label: "Licensed & Insured" },
];

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 lg:pt-48 lg:pb-36 overflow-hidden">
      {/* Hero background image with parallax effect - extremely faded */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15 will-change-transform"
        style={{
          backgroundImage: `url(${heroBg.src})`,
          transform: `translateY(${scrollY * 0.3}px) scale(1.1)`,
        }}
      />
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-background/90" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background" />

      {/* Subtle decorative elements with zoom on scroll */}
      <div
        className="absolute top-32 right-10 w-[500px] h-[500px] bg-sage/5 rounded-full blur-3xl will-change-transform transition-transform duration-100"
        style={{ transform: `scale(${1 + scrollY * 0.0003})` }}
      />
      <div
        className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-sand/15 rounded-full blur-3xl will-change-transform transition-transform duration-100"
        style={{ transform: `scale(${1 + scrollY * 0.0005})` }}
      />

      <div className="container-wide relative">
        <div className="max-w-3xl mx-auto text-center">
          {/* Confidence badge */}
          <div className="animate-fade-in inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-sage-light/60 border border-sage/10">
            <span className="text-xs font-medium text-sage-foreground/80 tracking-wide uppercase">Trusted by local owners since 2018</span>
          </div>

          {/* Headline - sharper with confidence */}
          <h1 className="animate-fade-in-up text-balance mb-6 text-foreground">
            Your Property Is an Asset.
            <span className="block text-primary">We Manage It That Way.</span>
          </h1>

          {/* Subheadline - emotional tension with pain-aware language */}
          <p className="animate-fade-in-delay-1 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            No hidden fees. No unanswered calls. No guessing where your money went.
            <span className="block mt-2 text-foreground/70 font-medium">Just professional management you can trust.</span>
          </p>

          {/* Elevated CTA area with visual depth */}
          <div className="animate-fade-in-delay-2 relative">
            <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-4 p-6 sm:p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/30 shadow-lg">
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Link href="/contact">
                  <Button variant="hero" size="lg" className="shadow-lg hover:shadow-xl">
                    Get a Free Rental Analysis
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="hero-secondary" size="lg">
                    Talk to a Property Manager
                  </Button>
                </Link>
              </div>
            </div>
            {/* Reassurance microcopy */}
            <p className="mt-4 text-xs text-muted-foreground/70">
              Takes 2 minutes · No obligation · Real numbers, not estimates
            </p>
          </div>

          {/* Trust Signals - refined spacing */}
          <div className="animate-fade-in-delay-3 flex flex-wrap items-center justify-center gap-8 md:gap-12 mt-16 pt-8 border-t border-border/30">
            {trustSignals.map((signal) => (
              <div key={signal.label} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                <signal.icon size={18} className="text-sage" />
                <span className="font-medium">{signal.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
