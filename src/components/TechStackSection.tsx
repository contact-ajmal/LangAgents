import { RefreshCw, Search, Link } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const techCards = [
  {
    icon: RefreshCw,
    title: "Cyclic Workflows",
    description: "Beyond simple chains. Build complex, stateful agents that loop and self-correct.",
    gradient: "from-primary/20 to-primary/5",
  },
  {
    icon: Search,
    title: "Enterprise Observability",
    description: "Trace every token. Debug via LangSmith for full compliance auditing.",
    gradient: "from-accent/20 to-accent/5",
  },
  {
    icon: Link,
    title: "Universal Integration",
    description: "Connect to proprietary SQL databases, vector stores, and APIs.",
    gradient: "from-primary/15 to-accent/10",
  },
];

export const TechStackSection = () => {
  return (
    <section id="platform" className="py-24 relative">
      {/* Background Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/3 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Built on the <span className="gradient-text">Modern AI Stack</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Enterprise-grade infrastructure powered by the industry's most trusted frameworks.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {techCards.map((card, index) => {
            const Icon = card.icon;
            
            return (
              <Card 
                key={card.title}
                className="glass-card-hover group cursor-pointer overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 relative">
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  {/* Icon */}
                  <div className="relative mb-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary/80 border border-glass flex items-center justify-center group-hover:border-primary/40 transition-colors duration-300">
                      <Icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors duration-300" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {card.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {card.description}
                    </p>
                  </div>

                  {/* Hover Indicator */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
