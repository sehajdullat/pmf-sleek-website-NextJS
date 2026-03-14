import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg"; // Re-using existing asset for the image side

export function HeroSectionV3() {
  return (
    <section className="relative min-h-[90vh] flex flex-col lg:flex-row bg-white overflow-hidden pt-20">
      {/* Left Text Content */}
      <div className="w-full lg:w-1/2 flex items-center p-8 md:p-16 lg:p-24 z-10">
        <div className="max-w-2xl">
          <div className="inline-block px-4 py-2 bg-sage/10 text-sage-foreground font-bold tracking-widest text-sm uppercase rounded-md mb-8">
            Modern Property Management
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter mb-8 text-foreground uppercase">
            Smarter. <br />
            <span className="text-sage">Faster.</span> <br />
            Profitable.
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground font-medium mb-12 max-w-lg leading-snug">
            Stop losing sleep over your rentals. We deliver tech-driven management that actualizes your property&apos;s true potential.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto bg-foreground text-background hover:bg-foreground/90 rounded-full h-16 px-10 text-lg font-bold group">
                Get Started
                <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Right Image/Visual Content */}
      <div className="w-full lg:w-1/2 relative min-h-[50vh] lg:min-h-full clip-path-slant bg-sand/20 overflow-hidden group">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] group-hover:scale-110"
          style={{ backgroundImage: `url(${heroBg.src})` }}
        />
        {/* Overlay gradient for harsh contrast */}
        <div className="absolute inset-0 bg-gradient-to-tr from-sage/40 to-transparent mix-blend-multiply" />
        
        {/* Decorative bold elements */}
        <div className="absolute bottom-10 right-10 bg-white p-6 rounded-2xl shadow-2xl max-w-xs transform translate-y-10 opacity-0 animate-[fade-in-up_1s_ease-out_0.5s_forwards]">
          <p className="text-3xl font-black text-foreground mb-1">98%</p>
          <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Occupancy Rate</p>
        </div>
      </div>
    </section>
  );
}
