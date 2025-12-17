import { Bug, BookOpen, Shield, Zap, GitBranch, Lock } from "lucide-react";

const features = [
  {
    icon: Bug,
    title: "Smart Bug Detection",
    description: "AI finds bugs before your users do. Catches async issues, type errors, and security vulnerabilities instantly.",
    bgColor: "bg-primary/10",
    textColor: "text-primary",
  },
  {
    icon: BookOpen,
    title: "Learn While You Fix",
    description: "Not just fixes—explanations. Understand why bugs happen so you don't make them again. Level up fr fr.",
    bgColor: "bg-accent/10",
    textColor: "text-accent",
  },
  {
    icon: Shield,
    title: "Security First",
    description: "Catches SQL injection, XSS, and other vulnerabilities. Keep your code secure without being a security expert.",
    bgColor: "bg-neon-pink/10",
    textColor: "text-neon-pink",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Get results in seconds, not minutes. Our AI is optimized for speed so you can stay in your flow state.",
    bgColor: "bg-neon-cyan/10",
    textColor: "text-neon-cyan",
  },
  {
    icon: GitBranch,
    title: "GitHub Integration",
    description: "Automated PR reviews with fix suggestions. No more \"LGTM\" when there are obvious bugs.",
    bgColor: "bg-primary/10",
    textColor: "text-primary",
  },
  {
    icon: Lock,
    title: "Privacy Modes",
    description: "Your code stays yours. Choose server-side or fully local analysis for sensitive projects.",
    bgColor: "bg-accent/10",
    textColor: "text-accent",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 relative scroll-mt-4">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 glass rounded-full text-sm text-primary mb-4">
            ✨ Features that slap
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Everything you need to
            <br />
            <span className="text-gradient">ship clean code</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Built for developers who want to write better code without the lecture. 
            Real tools, real results, no cap.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group glass glass-hover rounded-2xl p-6 opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-12 h-12 rounded-xl ${feature.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <feature.icon className={`w-6 h-6 ${feature.textColor}`} />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
