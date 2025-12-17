import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap } from "lucide-react";
import CodePreview from "./CodePreview";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-accent/5" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-[100px] animate-float" style={{ animationDelay: '-3s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-sm opacity-0 animate-fade-in">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-muted-foreground">AI-Powered Code Analysis</span>
            </div>
            
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight opacity-0 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Debug code
              <br />
              <span className="text-gradient">like a pro</span>
              <br />
              not a noob 🚀
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Let's Run finds bugs, explains what's wrong, and teaches you to fix them. 
              Perfect for devs who want to level up their code game.
            </p>
            
            <div className="flex flex-wrap gap-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Button variant="hero" size="xl" onClick={() => document.getElementById('debug')?.scrollIntoView({ behavior: 'smooth' })}>
                Start Debugging
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="xl" onClick={() => document.getElementById('debug')?.scrollIntoView({ behavior: 'smooth' })}>
                <Zap className="w-5 h-5" />
                See Demo
              </Button>
            </div>
            
            <div className="flex items-center gap-6 pt-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/50 to-accent/50 border-2 border-background flex items-center justify-center text-xs font-bold">
                    {['🔥', '💀', '✨', '🎯'][i - 1]}
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                <span className="text-primary font-semibold">10k+</span> devs already vibing
              </p>
            </div>
          </div>
          
          {/* Right content - Code Preview */}
          <div className="opacity-0 animate-scale-in" style={{ animationDelay: '0.5s' }}>
            <CodePreview />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
