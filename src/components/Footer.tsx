import { Github, Twitter } from "lucide-react";
const Footer = () => {
  return <footer className="border-t border-border/50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Let's Run" className="w-8 h-8 rounded-lg" />
            <span className="font-display font-bold text-xl text-accent">Let's Run</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors text-center">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
            <a href="#" className="hover:text-primary transition-colors">About</a>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-4">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="text-center text-sm text-muted-foreground mt-8">                     Built with 💚 for developers who debug. © 2025 Let's Run</div>
      </div>
    </footer>;
};
export default Footer;