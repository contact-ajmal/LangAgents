import { Shield, Heart, Globe, Server } from "lucide-react";

const trustItems = [
  { icon: Shield, label: "SOC2 Certified" },
  { icon: Heart, label: "HIPAA Compliant" },
  { icon: Globe, label: "GDPR Ready" },
  { icon: Server, label: "On-Premises Available" },
];

export const TrustSection = () => {
  return (
    <section id="enterprise" className="py-12 bg-secondary/30 border-y border-glass">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            
            return (
              <div 
                key={item.label}
                className="flex items-center gap-3 group cursor-default"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-10 h-10 rounded-lg bg-card/50 border border-glass flex items-center justify-center group-hover:border-primary/40 transition-colors duration-300">
                  <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                </div>
                <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
