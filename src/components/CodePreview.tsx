import { useState, useEffect } from "react";
import { AlertCircle, CheckCircle2, Sparkles } from "lucide-react";

const CodePreview = () => {
  const [activeTab, setActiveTab] = useState<'bug' | 'fixed'>('bug');
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveTab(prev => prev === 'bug' ? 'fixed' : 'bug');
        setIsAnimating(false);
      }, 300);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const buggyCode = `function fetchUserData(userId) {
  // ⚠️ Bug: Missing await
  const response = fetch(\`/api/users/\${userId}\`);
  
  // ⚠️ Bug: Accessing .json() on Promise
  const data = response.json();
  
  return data.name; // undefined 💀
}`;

  const fixedCode = `async function fetchUserData(userId) {
  // ✅ Added async/await
  const response = await fetch(\`/api/users/\${userId}\`);
  
  // ✅ Properly awaiting JSON parse
  const data = await response.json();
  
  return data.name; // Works! 🔥
}`;

  return (
    <div className="glass rounded-2xl p-1 glow-primary">
      {/* Window chrome */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-border/50">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-destructive/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-primary/80" />
        </div>
        <span className="text-xs text-muted-foreground font-mono">user-service.js</span>
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-accent animate-pulse" />
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-border/50">
        <button
          onClick={() => setActiveTab('bug')}
          className={`flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors ${
            activeTab === 'bug'
              ? 'text-destructive border-b-2 border-destructive'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          <AlertCircle className="w-4 h-4" />
          Buggy
        </button>
        <button
          onClick={() => setActiveTab('fixed')}
          className={`flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors ${
            activeTab === 'fixed'
              ? 'text-primary border-b-2 border-primary'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          <CheckCircle2 className="w-4 h-4" />
          Fixed
        </button>
      </div>

      {/* Code content */}
      <div className={`p-4 font-mono text-sm transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
        <pre className="overflow-x-auto">
          <code className={activeTab === 'bug' ? 'text-foreground/80' : 'text-primary/90'}>
            {activeTab === 'bug' ? buggyCode : fixedCode}
          </code>
        </pre>
      </div>

      {/* AI Explanation */}
      <div className="mx-4 mb-4 p-3 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
        <div className="flex items-start gap-2">
          <Sparkles className="w-4 h-4 text-primary mt-0.5" />
          <div className="text-sm">
            <span className="text-primary font-semibold">Let's Run AI:</span>
            <span className="text-muted-foreground">
              {activeTab === 'bug' 
                ? " Missing async/await causes promise to be returned instead of resolved value"
                : " Added async keyword and awaited both fetch calls. Now returns actual data! 🎉"
              }
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodePreview;
