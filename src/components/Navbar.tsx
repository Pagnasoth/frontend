import { Button } from "@/components/ui/button";
const Navbar = () => {
  return <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Let's Run" className="w-8 h-8 rounded-lg" />
            <span className="font-display font-bold text-xl text-accent">Let's Run</span>
          </div>

          {/* Nav links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
              Home
            </a>
            <a href="#features" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Features
            </a>
            <a href="#languages" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Languages
            </a>
          </div>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="hidden sm:flex" asChild>
              
            </Button>
            <Button variant="default" size="sm" onClick={() => document.getElementById('debug')?.scrollIntoView({ behavior: 'smooth' })}>
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>;
};
export default Navbar;