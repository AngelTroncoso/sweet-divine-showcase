import { Navbar } from "@/components/Navbar";
import { HeroCarousel } from "@/components/HeroCarousel";
import { ValueSection } from "@/components/ValueSection";
import { CategoriesSection } from "@/components/CategoriesSection";
import { VitrinaSection } from "@/components/VitrinaSection";
import { ProcessSection } from "@/components/ProcessSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16 md:pt-20">
        <HeroCarousel />
        <ValueSection />
        <CategoriesSection />
        <VitrinaSection />
        <ProcessSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
