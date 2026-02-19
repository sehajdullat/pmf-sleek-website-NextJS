import { Star, Quote } from "lucide-react";
import { ScrollSection, ScrollDiv } from "@/components/ui/scroll-section";

const testimonials = [
  {
    content: "PMF has managed our properties for 3 years now. They're organized, responsive, and actually treat our tenants well. It's rare to find that combination.",
    author: "Michael R.",
    role: "Owner of 4 rental properties",
    rating: 5,
  },
  {
    content: "I was skeptical about property management companies after a bad experience. PMF changed my mind. Their transparency on fees and monthly reporting is exactly what I needed.",
    author: "Sarah K.",
    role: "Out-of-state investor",
    rating: 5,
  },
  {
    content: "The onboarding was smooth, and within a month they had a qualified tenant in place. Their screening process is thorough—no headaches since.",
    author: "David L.",
    role: "First-time landlord",
    rating: 5,
  },
];

export function TrustSection() {
  return (
    <ScrollSection className="section-padding">
      <div className="container-wide">
        <ScrollDiv className="text-center mb-12" delay={100}>
          <div className="flex items-center justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={24} className="fill-sage text-sage" />
            ))}
          </div>
          <h2 className="mb-4">Trusted by Property Owners</h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Real reviews from real owners we work with every day.
          </p>
        </ScrollDiv>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <ScrollDiv 
              key={index} 
              className="glass-card p-6 relative"
              delay={200 + index * 100}
              animation="fade-up"
            >
              <Quote size={24} className="text-sage/20 absolute top-6 right-6" />
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={14} className="fill-sage text-sage" />
                ))}
              </div>
              <p className="text-foreground mb-6 text-sm leading-relaxed">
                "{testimonial.content}"
              </p>
              <div>
                <p className="font-semibold text-sm">{testimonial.author}</p>
                <p className="text-xs text-muted-foreground">{testimonial.role}</p>
              </div>
            </ScrollDiv>
          ))}
        </div>
      </div>
    </ScrollSection>
  );
}
