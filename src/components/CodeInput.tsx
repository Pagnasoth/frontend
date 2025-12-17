import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Bug, Sparkles, Copy, Trash2, Check, ChevronDown } from "lucide-react";
import { toast } from "sonner";

const languages = [
  { name: "Auto", icon: "⚙️" },
  { name: "JavaScript", icon: "🟨" },
  { name: "TypeScript", icon: "🔷" },
  { name: "Python", icon: "🐍" },
  { name: "Java", icon: "☕" },
  { name: "Go", icon: "🐹" },
  { name: "Rust", icon: "🦀" },
  { name: "PHP", icon: "🐘" },
  { name: "Ruby", icon: "💎" },
  { name: "C#", icon: "🎯" },
];

const CodeInput = () => {
  const [code, setCode] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
  const [model, setModel] = useState<string>("gemini-2.0-flash");
  const [modelMenuOpen, setModelMenuOpen] = useState<boolean>(false);
  const [modelOptions, setModelOptions] = useState<Array<{ value: string; label: string }>>([]);

  // Fetch available models on component mount
  useEffect(() => {
    const fetchModels = async () => {
      try {
        const resp = await fetch('/api/models');
        if (resp.ok) {
          const data = await resp.json();
          setModelOptions(data.models || []);
          if (data.models && data.models.length > 0) {
            setModel(data.models[0].value);
          }
        }
      } catch (err) {
        console.error('Failed to fetch models:', err);
        // Fallback to default
        setModelOptions([{ value: 'gemini-2.0-flash', label: 'Gemini 2.0 Flash' }]);
      }
    };
    fetchModels();
  }, []);

  const handleAnalyze = async () => {
    if (!code.trim()) {
      toast.error("Paste some code first!");
      return;
    }
    if (!selectedLanguage) {
      toast.error("Select a language first!");
      return;
    }
    setIsAnalyzing(true);
    setResult(null);

    // Send request to backend analyze endpoint
    try {
      const resp = await fetch('/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code, language: selectedLanguage, model }),
      });

      if (!resp.ok) {
        const err = await resp.json().catch(() => ({}));
        throw new Error(err.error || `Server responded ${resp.status}`);
      }

      const json = await resp.json();
      setResult(json.result || 'No result returned');
      const modelLabel = modelOptions.find(m => m.value === model)?.label || model;
      toast.success(`${selectedLanguage} analysis complete (${modelLabel})!`);
    } catch (err: any) {
      console.error('Analyze failed', err);
      toast.error(err.message || 'Analysis failed');
      setResult(`Error: ${err.message || 'Analysis failed'}`);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleClear = () => {
    setCode("");
    setResult(null);
  };

  const handleCopy = () => {
    if (result) {
      navigator.clipboard.writeText(result);
      toast.success("Copied to clipboard!");
    }
  };

  return (
    <section id="debug" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-primary/5" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-sm mb-6">
            <Bug className="w-4 h-4 text-primary" />
            <span className="text-muted-foreground">Try It Now</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Paste your <span className="text-gradient"> insecure code</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-6">
            Select your language, then drop your code below for focused analysis
          </p>

          {/* Language badges */}
          <div className="flex flex-wrap justify-center gap-2">
            {languages.map((lang) => (
              <button
                key={lang.name}
                onClick={() => setSelectedLanguage(lang.name)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm transition-all cursor-pointer ${
                  selectedLanguage === lang.name
                    ? "bg-primary text-primary-foreground glow-primary"
                    : "glass text-muted-foreground hover:text-primary hover:border-primary/50"
                }`}
              >
                <span>{lang.icon}</span>
                <span>{lang.name}</span>
                {selectedLanguage === lang.name && <Check className="w-3 h-3 ml-1" />}
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* Code Input */}
          <div className="glass-card p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-lg flex items-center gap-2">
                <span className="text-primary">01</span> Your Code
                {selectedLanguage && (
                  <span className="text-xs px-2 py-0.5 rounded-full bg-primary/20 text-primary">
                    {selectedLanguage}
                  </span>
                )}
              </h3>
              <Button variant="ghost" size="sm" onClick={handleClear} className="text-muted-foreground hover:text-destructive">
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>

            <Textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder={`// Paste your ${selectedLanguage || ""} code here...\nfunction example() {\n  const result = await fetch(url);\n  return result.json();\n}`}
              className="min-h-[300px] font-mono text-sm bg-background/50 border-border/50 focus:border-primary/50 resize-none"
            />

            <div className="flex items-center gap-3">
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setModelMenuOpen((s) => !s)}
                  aria-haspopup="listbox"
                  className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm transition-all focus:outline-none ${
                    modelMenuOpen
                      ? 'bg-primary text-primary-foreground glow-primary'
                      : 'glass text-muted-foreground hover:text-primary hover:border-primary/50'
                  }`}
                >
                  <span className="text-sm font-medium">AI Models</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-background/10 text-muted-foreground">{modelOptions.find(o => o.value === model)?.label || model}</span>
                  <ChevronDown className="w-4 h-4 opacity-80" />
                </button>

                {modelMenuOpen && (
                  <ul role="listbox" className="absolute right-0 mt-2 w-44 bg-background rounded-lg border border-border p-2 shadow-lg z-50">
                    {modelOptions.map((opt) => (
                      <li key={opt.value} className="mb-1 last:mb-0">
                        <button
                          type="button"
                          onClick={() => {
                            setModel(opt.value);
                            setModelMenuOpen(false);
                          }}
                          className={`w-full text-left px-3 py-1.5 rounded-md text-sm transition-colors ${
                            model === opt.value ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:bg-accent/5'
                          }`}
                        >
                          {opt.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <Button onClick={handleAnalyze} disabled={isAnalyzing || !code.trim() || !selectedLanguage} variant="hero" className="flex-1">
              {isAnalyzing ? (
                <>
                  <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                  Analyzing {selectedLanguage} with {model}...
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  {selectedLanguage ? `Analyze ${selectedLanguage}` : "Select a language first"}
                </>
              )}
              </Button>
            </div>
          </div>

          {/* Results */}
          <div className="glass-card p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-lg flex items-center gap-2">
                <span className="text-accent">02</span> Analysis Results
              </h3>
              {result && (
                <Button variant="ghost" size="sm" onClick={handleCopy} className="text-muted-foreground hover:text-primary">
                  <Copy className="w-4 h-4" />
                </Button>
              )}
            </div>

            <div className="min-h-[300px] bg-background/50 rounded-lg border border-border/50 p-4 overflow-auto">
              {result ? (
                <pre className="font-mono text-sm whitespace-pre-wrap text-foreground/90">{result}</pre>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-muted-foreground">
                  <Bug className="w-12 h-12 mb-4 opacity-30" />
                  <p className="text-center">
                    {isAnalyzing
                      ? `🔍 Scanning ${selectedLanguage} code...`
                      : selectedLanguage
                      ? "Paste code and click analyze to see results"
                      : "Select a language above to get started"}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CodeInput;