import { HeroSection } from "@/components/sections/hero-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { HowItWorksSection } from "@/components/sections/how-it-works-section";
import { FutureTrendSection } from "@/components/sections/future-trend-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <main className="flex-1">
        <HeroSection />
        <FutureTrendSection />
        <FeaturesSection />
        <HowItWorksSection />
      </main>
      <Footer />
    </div>
  );
}

