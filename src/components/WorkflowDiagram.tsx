import { Bot, Database, FileText, Shield, Zap, Brain, ArrowRight } from "lucide-react";

const nodes = [
  { id: 1, icon: FileText, label: "Input", x: 10, y: 35, color: "primary" },
  { id: 2, icon: Brain, label: "LLM Router", x: 30, y: 20, color: "accent" },
  { id: 3, icon: Database, label: "RAG Store", x: 30, y: 50, color: "primary" },
  { id: 4, icon: Bot, label: "Agent", x: 50, y: 35, color: "accent" },
  { id: 5, icon: Shield, label: "Validator", x: 70, y: 20, color: "primary" },
  { id: 6, icon: Zap, label: "Output", x: 90, y: 35, color: "accent" },
];

const connections = [
  { from: 1, to: 2 },
  { from: 1, to: 3 },
  { from: 2, to: 4 },
  { from: 3, to: 4 },
  { from: 4, to: 5 },
  { from: 5, to: 4, curved: true },
  { from: 5, to: 6 },
];

export const WorkflowDiagram = () => {
  return (
    <div className="glass-card p-1 glow-effect">
      {/* Window Header */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-glass bg-secondary/30 rounded-t-xl">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-destructive/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-accent/80" />
        </div>
        <span className="text-xs text-muted-foreground ml-4">langgraph-workflow.tsx</span>
      </div>

      {/* Diagram Canvas */}
      <div className="relative h-[300px] md:h-[400px] bg-gradient-to-br from-card/50 to-background/50 rounded-b-xl overflow-hidden">
        {/* Background Grid */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }}
        />

        {/* Connection Lines */}
        <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
              <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.6" />
            </linearGradient>
            <marker
              id="arrowhead"
              markerWidth="10"
              markerHeight="7"
              refX="9"
              refY="3.5"
              orient="auto"
            >
              <polygon
                points="0 0, 10 3.5, 0 7"
                fill="url(#lineGradient)"
              />
            </marker>
          </defs>
          
          {connections.map((conn, i) => {
            const from = nodes.find(n => n.id === conn.from)!;
            const to = nodes.find(n => n.id === conn.to)!;
            
            if (conn.curved) {
              // Curved path for loop back
              return (
                <path
                  key={i}
                  d={`M ${to.x}% ${to.y + 8}% C ${to.x - 10}% ${to.y + 25}%, ${from.x + 10}% ${from.y + 25}%, ${from.x}% ${from.y + 8}%`}
                  fill="none"
                  stroke="url(#lineGradient)"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  className="animate-pulse"
                />
              );
            }
            
            return (
              <line
                key={i}
                x1={`${from.x + 4}%`}
                y1={`${from.y + 4}%`}
                x2={`${to.x - 2}%`}
                y2={`${to.y + 4}%`}
                stroke="url(#lineGradient)"
                strokeWidth="2"
                markerEnd="url(#arrowhead)"
              />
            );
          })}
        </svg>

        {/* Nodes */}
        {nodes.map((node, index) => {
          const Icon = node.icon;
          const colorClass = node.color === "primary" ? "bg-primary/20 border-primary/40 text-primary" : "bg-accent/20 border-accent/40 text-accent";
          
          return (
            <div
              key={node.id}
              className={`absolute flex flex-col items-center gap-2 transition-transform hover:scale-110 duration-300`}
              style={{ 
                left: `${node.x}%`, 
                top: `${node.y}%`,
                transform: 'translate(-50%, -50%)',
                animationDelay: `${index * 0.1}s`,
                zIndex: 10
              }}
            >
              <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl ${colorClass} border backdrop-blur-sm flex items-center justify-center shadow-lg`}>
                <Icon className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <span className="text-[10px] md:text-xs text-muted-foreground font-medium whitespace-nowrap">
                {node.label}
              </span>
            </div>
          );
        })}

        {/* Floating Data Particles */}
        <div className="absolute top-[20%] left-[40%] w-2 h-2 bg-primary/60 rounded-full animate-float" style={{ animationDelay: "0s" }} />
        <div className="absolute top-[60%] left-[55%] w-1.5 h-1.5 bg-accent/60 rounded-full animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute top-[40%] left-[75%] w-2 h-2 bg-primary/40 rounded-full animate-float" style={{ animationDelay: "2s" }} />
      </div>
    </div>
  );
};
