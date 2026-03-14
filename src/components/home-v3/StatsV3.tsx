import Link from "next/link";
import { Button } from "@/components/ui/button";

const stats = [
  { value: "$50M+", label: "Assets Managaged" },
  { value: "0", label: "Evictions Last Year" },
  { value: "14", label: "Days Avg. Vacancy" },
  { value: "24/7", label: "Support Access" },
];

export function StatsV3() {
  return (
    <section className="bg-foreground text-background py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <div className="container-wide relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-24">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-start border-l-4 border-sage pl-6">
              <span className="text-4xl md:text-6xl font-black tracking-tighter mb-2">{stat.value}</span>
              <span className="text-sm md:text-base font-bold uppercase tracking-widest opacity-70">{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="bg-sage p-12 md:p-20 rounded-[3rem] shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-12 transform hover:scale-[1.02] transition-transform duration-500 text-sage-foreground">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter max-w-3xl leading-none">
            Stop waiting. <br /> Start profiting.
          </h2>
          <Link href="/contact" className="w-full lg:w-auto shrink-0">
            <Button size="lg" className="w-full bg-background text-foreground hover:bg-background/90 rounded-full h-20 px-12 text-xl font-black uppercase tracking-wider">
              Claim Your Free Analysis
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
