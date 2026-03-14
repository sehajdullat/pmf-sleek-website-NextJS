"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Diamond, Star, Award } from "lucide-react";
import { useEffect, useState } from "react";

const eliteSignals = [
  { icon: Diamond, label: "Exclusive Portfolio" },
  { icon: Star, label: "5-Star Concierge" },
  { icon: Award, label: "Award-Winning Service" },
];

export function HeroSectionV2() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 lg:pt-56 lg:pb-40 overflow-hidden bg-black text-white">
      {/* Dark moody gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-zinc-800/40 via-black to-black" />
      
      {/* Subtle animated blurs for depth */}
      <div 
        className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-indigo-900/20 rounded-full blur-[120px] will-change-transform"
        style={{ transform: `translateY(${scrollY * 0.15}px)` }}
      />
      
      <div className="container-wide relative z-10">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          {/* Subtle luxurious badge */}
          <div className="animate-fade-in inline-flex items-center gap-2 px-5 py-2 mb-10 rounded-full bg-zinc-900/80 border border-zinc-800 backdrop-blur-md">
            <Diamond className="w-3.5 h-3.5 text-zinc-400" />
            <span className="text-xs font-semibold text-zinc-300 tracking-widest uppercase">Premium Property Management</span>
          </div>

          <h1 className="animate-fade-in-up text-5xl md:text-7xl font-bold tracking-tight mb-8 text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-400">
            Elevate Your <br className="hidden md:block" /> Property Portfolio.
          </h1>

          <p className="animate-fade-in-delay-1 text-xl text-zinc-400 max-w-2xl text-center mb-14 font-light leading-relaxed">
            Bespoke management for high-value properties. Experience uncompromising quality, complete transparency, and exceptional returns.
          </p>

          <div className="animate-fade-in-delay-2 flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
            <Link href="/contact" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto bg-white text-black hover:bg-zinc-200 h-14 px-8 rounded-none text-sm font-semibold tracking-wide uppercase transition-colors">
                Request Private Consultation
              </Button>
            </Link>
            <Link href="/contact" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full sm:w-auto border-zinc-700 text-white hover:bg-zinc-900 hover:text-white h-14 px-8 rounded-none text-sm font-semibold tracking-wide uppercase transition-colors">
                Explore Our Approach
              </Button>
            </Link>
          </div>

          <div className="animate-fade-in-delay-3 flex flex-wrap items-center justify-center gap-10 mt-24 pt-10 border-t border-zinc-900 w-full max-w-3xl">
            {eliteSignals.map((signal) => (
              <div key={signal.label} className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-zinc-900/50 flex items-center justify-center border border-zinc-800">
                  <signal.icon className="w-5 h-5 text-zinc-400" />
                </div>
                <span className="text-sm font-medium text-zinc-500">{signal.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
