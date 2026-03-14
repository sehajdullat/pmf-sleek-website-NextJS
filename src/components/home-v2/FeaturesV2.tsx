import { ShieldCheck, TrendingUp, Clock, FileText } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Vetted Clientele",
    description: "Rigorous screening processes ensuring only the most qualified and responsible tenants occupy your premium properties.",
    colSpan: "col-span-1 md:col-span-2 lg:col-span-2",
  },
  {
    icon: TrendingUp,
    title: "Optimized Yields",
    description: "Data-driven pricing strategies that maximize your revenue while minimizing vacancy periods.",
    colSpan: "col-span-1 lg:col-span-1",
  },
  {
    icon: Clock,
    title: "24/7 Concierge Support",
    description: "Round-the-clock dedicated assistance for both you and your tenants, handling emergencies with discretion and speed.",
    colSpan: "col-span-1 lg:col-span-1",
  },
  {
    icon: FileText,
    title: "Transparent Reporting",
    description: "Crystal clear financial statements, real-time maintenance logs, and comprehensive performance analytics delivered to your private dashboard.",
    colSpan: "col-span-1 md:col-span-2 lg:col-span-2",
  },
];

export function FeaturesV2() {
  return (
    <section className="py-24 bg-[#0a0a0b]">
      <div className="container-wide">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-light text-white mb-6 tracking-tight">
            The standard of <span className="font-semibold">excellence.</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl font-light">
            We don&apos;t just manage properties; we curate living experiences and protect your investments with unparalleled attention to detail.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`group p-10 rounded-2xl bg-zinc-900/30 border border-zinc-800/50 hover:bg-zinc-900/80 hover:border-zinc-700 transition-all duration-500 ease-out flex flex-col justify-between ${feature.colSpan}`}
            >
              <div>
                <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center border border-zinc-800 mb-8 group-hover:scale-110 group-hover:bg-zinc-800 transition-all duration-500">
                  <feature.icon className="w-6 h-6 text-zinc-300" />
                </div>
                <h3 className="text-2xl font-medium text-white mb-4 tracking-tight">{feature.title}</h3>
                <p className="text-zinc-500 leading-relaxed font-light">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
