import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, TrendingUp, Heart, AlertTriangle, CheckCircle2 } from "lucide-react";

const industries = {
  healthcare: {
    icon: Heart,
    title: "HIPAA-Compliant Patient Triage Agents",
    description: "Automate intake forms and summaries without data leakage. Our agents handle sensitive patient information with military-grade encryption and full audit trails.",
    features: [
      "Zero data retention on external servers",
      "Automated PHI detection and masking",
      "Real-time compliance monitoring",
      "Seamless EHR integration",
    ],
    badge: "HIPAA Certified",
  },
  finance: {
    icon: TrendingUp,
    title: "High-Frequency Analyst Agents",
    description: "Real-time portfolio adjustment and fraud detection algorithms. Deploy agents that analyze market data and execute strategies with sub-second latency.",
    features: [
      "SEC-compliant trading automation",
      "Real-time anomaly detection",
      "Multi-asset portfolio optimization",
      "Regulatory reporting automation",
    ],
    badge: "SOC2 Type II",
  },
};

export const IndustrySolutionsSection = () => {
  return (
    <section id="solutions" className="py-24 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Purpose-Built for <span className="gradient-text">Regulated Industries</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Compliance-first AI agents designed for the world's most demanding sectors.
          </p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="healthcare" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 bg-secondary/50 border border-glass backdrop-blur-sm p-1 rounded-xl mb-8">
            <TabsTrigger 
              value="healthcare" 
              className="data-[state=active]:bg-card data-[state=active]:shadow-lg data-[state=active]:border-primary/20 rounded-lg transition-all duration-300"
            >
              <Heart className="w-4 h-4 mr-2" />
              Healthcare
            </TabsTrigger>
            <TabsTrigger 
              value="finance"
              className="data-[state=active]:bg-card data-[state=active]:shadow-lg data-[state=active]:border-primary/20 rounded-lg transition-all duration-300"
            >
              <TrendingUp className="w-4 h-4 mr-2" />
              Finance
            </TabsTrigger>
          </TabsList>

          {Object.entries(industries).map(([key, industry]) => {
            const Icon = industry.icon;
            
            return (
              <TabsContent key={key} value={key} className="animate-fade-in">
                <Card className="glass-card-hover overflow-hidden">
                  <CardContent className="p-8">
                    <div className="flex flex-col lg:flex-row gap-8">
                      {/* Left: Icon & Badge */}
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-glass flex items-center justify-center mb-4">
                          <Icon className="w-8 h-8 text-primary" />
                        </div>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-medium">
                          <Shield className="w-3 h-3" />
                          {industry.badge}
                        </span>
                      </div>

                      {/* Right: Content */}
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-foreground mb-3">
                          {industry.title}
                        </h3>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {industry.description}
                        </p>

                        {/* Features */}
                        <div className="grid sm:grid-cols-2 gap-3">
                          {industry.features.map((feature) => (
                            <div key={feature} className="flex items-center gap-2 text-sm">
                              <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                              <span className="text-muted-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </section>
  );
};
