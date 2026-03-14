import { Home, Users, Search, Wrench } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Aggressive Marketing",
    desc: "Syndication to 40+ premium networks. Professional photography. Virtual tours. We fill vacancies faster.",
    color: "bg-blue-500",
  },
  {
    icon: Users,
    title: "Ironclad Screening",
    desc: "Comprehensive background checks, financial verification, and rental history analysis. Zero compromises.",
    color: "bg-sage",
  },
  {
    icon: Wrench,
    title: "Proactive Maintenance",
    desc: "24/7 dedicated response team. Preventative checks. We fix it before it breaks your budget.",
    color: "bg-orange-500",
  },
  {
    icon: Home,
    title: "Financial Clarity",
    desc: "Real-time owner portals. Automated distributions. Tax-ready statements. Total transparency.",
    color: "bg-indigo-500",
  },
];

export function ServicesV3() {
  return (
    <section className="py-24 bg-sand/30">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-foreground max-w-2xl leading-none">
            Built for <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-sage to-sage-dark">maximum ROI.</span>
          </h2>
          <p className="text-xl font-medium text-muted-foreground max-w-md">
            Our comprehensive service suite is engineered to remove friction and drive profitability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <div 
              key={i} 
              className="group relative bg-white p-10 md:p-14 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden border border-border/50"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 ${service.color} opacity-10 rounded-bl-full group-hover:scale-150 transition-transform duration-500`} />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className={`w-16 h-16 rounded-2xl ${service.color} text-white flex items-center justify-center mb-8 shadow-lg group-hover:-translate-y-2 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8" />
                </div>
                
                <h3 className="text-3xl font-black tracking-tight mb-4 text-foreground">{service.title}</h3>
                <p className="text-lg text-muted-foreground font-medium leading-relaxed">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
