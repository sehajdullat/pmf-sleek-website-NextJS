import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTAV2() {
  return (
    <section className="py-32 bg-black border-t border-zinc-900 relative overflow-hidden">
      {/* Decorative gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-zinc-900/40 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-wide relative z-10 text-center">
        <h2 className="text-4xl md:text-6xl font-light text-white mb-8 tracking-tighter">
          Ready for the next tier of <br className="hidden md:block"/> management?
        </h2>
        <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto font-light">
          Join an exclusive group of property owners who demand nothing but the best for their investments.
        </p>

        <Link href="/contact">
          <Button size="lg" className="bg-white text-black hover:bg-zinc-200 h-16 px-10 rounded-none text-sm font-semibold tracking-wider uppercase transition-all duration-300 group">
            Schedule a Private Consultation
            <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
