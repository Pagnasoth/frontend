import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
const CTA = () => {
  return <section id="cta" className="py-24 relative scroll-mt-16">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-accent/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="glass rounded-3xl p-8 md:p-12 lg:p-16 text-center max-w-4xl mx-auto glow-primary">
          <div className="inline-block mb-6 text-6xl animate-float opacity-100">​🚀</div>
          
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Ready to stop
            <br />
            <span className="text-gradient">debugging at 3am?</span>
          </h2>
          
          <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of developers who ship cleaner code, faster. 
            Free to start, no credit card required.
          </p>

          <div className="flex justify-center">
            <Button variant="hero" size="xl" onClick={() => document.getElementById('debug')?.scrollIntoView({ behavior: 'smooth' })}>
              Start Now
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default CTA;