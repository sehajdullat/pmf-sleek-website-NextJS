import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { ScrollSection, ScrollDiv } from "@/components/ui/scroll-section";

export function FinalCTA() {
  return (
    <ScrollSection className="section-padding-sm bg-sage-light">
      <div className="container-narrow text-center">
        <ScrollDiv delay={100}>
          <h2 className="mb-4">Ready for Stress-Free Property Management?</h2>
        </ScrollDiv>
        <ScrollDiv delay={200}>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Get a free rental analysis and see how PMF can help you maximize your investment.
          </p>
        </ScrollDiv>
        <ScrollDiv delay={300} animation="scale">
          <Link href="/contact">
            <Button variant="hero" size="lg" className="gap-2">
              Schedule a Consultation
              <ArrowRight size={18} />
            </Button>
          </Link>
        </ScrollDiv>
      </div>
    </ScrollSection>
  );
}
