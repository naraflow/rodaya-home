import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import InteractiveDemo from "@/components/InteractiveDemo";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/hooks/useLanguage";

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          <Hero />
          <Features />
          <InteractiveDemo />
          <CallToAction />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;