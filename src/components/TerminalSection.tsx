import { useState, useEffect } from "react";

const terminalLines = [
  { type: "input", text: "> User input: Analyze Q3 Financial Report." },
  { type: "output", text: "> Agent: Retrieving documents from vector store...", delay: 800 },
  { type: "output", text: "> Agent: Found 3 relevant documents.", delay: 1600 },
  { type: "output", text: "> Agent: Analyzing with LangGraph node 'Financial_Analyzer'...", delay: 2400 },
  { type: "warning", text: "> Agent: Processing 847 transactions...", delay: 3200 },
  { type: "success", text: "> Agent: Analysis complete.", delay: 4000 },
  { type: "error", text: "> Agent: ⚠️ Flagging discrepancies found in row 42...", delay: 4800 },
  { type: "output", text: "> Agent: Generating compliance report...", delay: 5600 },
  { type: "success", text: "> Agent: Report ready. 3 action items identified.", delay: 6400 },
];

export const TerminalSection = () => {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById("terminal-section");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [isInView]);

  useEffect(() => {
    if (!isInView) return;

    const timers: NodeJS.Timeout[] = [];
    
    terminalLines.forEach((line, index) => {
      const timer = setTimeout(() => {
        setVisibleLines(index + 1);
      }, line.delay || index * 600);
      timers.push(timer);
    });

    return () => timers.forEach(clearTimeout);
  }, [isInView]);

  const getLineClass = (type: string) => {
    switch (type) {
      case "input":
        return "text-foreground";
      case "success":
        return "text-accent";
      case "warning":
        return "text-yellow-400";
      case "error":
        return "text-orange-400";
      default:
        return "text-muted-foreground";
    }
  };

  return (
    <section id="observability" className="py-24 relative">
      {/* Background Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            See it <span className="gradient-text">in Action</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Watch our agents process complex queries with full transparency and traceability.
          </p>
        </div>

        {/* Terminal Window */}
        <div id="terminal-section" className="max-w-3xl mx-auto">
          <div className="terminal-window">
            {/* Terminal Header */}
            <div className="terminal-header">
              <div className="terminal-dot bg-red-500/80" />
              <div className="terminal-dot bg-yellow-500/80" />
              <div className="terminal-dot bg-green-500/80" />
              <span className="ml-4 text-xs text-muted-foreground font-mono">nexusflow-agent — bash</span>
            </div>

            {/* Terminal Content */}
            <div className="p-6 font-mono text-sm space-y-2 min-h-[300px]">
              {terminalLines.slice(0, visibleLines).map((line, index) => (
                <div
                  key={index}
                  className={`${getLineClass(line.type)} animate-fade-in`}
                  style={{ animationDuration: "0.3s" }}
                >
                  {line.text}
                </div>
              ))}
              
              {/* Blinking Cursor */}
              {visibleLines < terminalLines.length && (
                <span className="inline-block w-2 h-4 bg-primary animate-blink" />
              )}
              
              {visibleLines >= terminalLines.length && (
                <div className="flex items-center gap-2 mt-4 pt-4 border-t border-glass">
                  <span className="text-accent">$</span>
                  <span className="inline-block w-2 h-4 bg-accent/80 animate-blink" />
                </div>
              )}
            </div>
          </div>

          {/* Status Bar */}
          <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span>LangSmith Trace Active</span>
            </div>
            <span>Tokens: 1,247 | Latency: 342ms</span>
          </div>
        </div>
      </div>
    </section>
  );
};
