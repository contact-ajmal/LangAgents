import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { WorkflowDiagram } from "./WorkflowDiagram";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-16 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] animate-glow-pulse" />
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-primary/3 rounded-full blur-[100px]" />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                             linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <Badge 
              variant="outline" 
              className="px-4 py-2 text-sm font-medium bg-secondary/50 border-glass backdrop-blur-sm"
            >
              <span className="w-2 h-2 bg-accent rounded-full mr-2 animate-pulse" />
              Powered by LangGraph & LangChain
            </Badge>
          </div>

          {/* Headline */}
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Deterministic AI Agents for{" "}
            <span className="gradient-text">Regulated Industries</span>
          </h1>

          {/* Subtext */}
          <p 
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            Deploy autonomous, self-correcting agentic workflows in Healthcare and Finance. 
            Full observability via LangSmith. 100% Audit Logs.
          </p>

          {/* CTAs */}
          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <Button variant="hero" size="lg" className="group">
              Start Building
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="heroOutline" size="lg" className="group">
              <Play className="mr-2 h-4 w-4" />
              View Architecture
            </Button>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div 
          className="max-w-5xl mx-auto animate-fade-in-up"
          style={{ animationDelay: "0.5s" }}
        >
          <WorkflowDiagram />
        </div>
      </div>
    </section>
  );
};
