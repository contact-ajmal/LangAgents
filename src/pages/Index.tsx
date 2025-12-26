import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { TechStackSection } from "@/components/TechStackSection";
import { IndustrySolutionsSection } from "@/components/IndustrySolutionsSection";
import { TrustSection } from "@/components/TrustSection";
import { TerminalSection } from "@/components/TerminalSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <TechStackSection />
        <IndustrySolutionsSection />
        <TrustSection />
        <TerminalSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
