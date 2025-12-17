const languages = [
  { name: "Auto", icon: "⚙️", popular: false },
  { name: "JavaScript", icon: "🟨", popular: true },
  { name: "TypeScript", icon: "🔷", popular: true },
  { name: "Python", icon: "🐍", popular: true },
  { name: "Java", icon: "☕", popular: false },
  { name: "Go", icon: "🐹", popular: false },
  { name: "Rust", icon: "🦀", popular: false },
  { name: "PHP", icon: "🐘", popular: false },
  { name: "Ruby", icon: "💎", popular: false },
  { name: "C#", icon: "🎯", popular: false },
  { name: "Kotlin", icon: "🎨", popular: false },
  { name: "Dart", icon: "🎯", popular: false },
];

const Languages = () => {
  return (
    <section id="languages" className="py-24 relative overflow-hidden scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Speaks your <span className="text-gradient">language</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Whatever stack you're on, we got you covered 💯
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {languages.map((lang, index) => (
            <div
              key={lang.name}
              className={`group glass glass-hover rounded-xl px-6 py-4 flex items-center gap-3 cursor-pointer opacity-0 animate-fade-in ${
                lang.popular ? 'glow-primary' : ''
              }`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <span className="text-2xl group-hover:scale-125 transition-transform">{lang.icon}</span>
              <span className="font-medium group-hover:text-primary transition-colors">{lang.name}</span>
              {lang.popular && (
                <span className="text-xs px-2 py-0.5 rounded-full bg-primary/20 text-primary">
                  Popular
                </span>
              )}
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground text-sm mt-8">
          + more coming soon. Request your fave in Discord 👀
        </p>
      </div>
    </section>
  );
};

export default Languages;
