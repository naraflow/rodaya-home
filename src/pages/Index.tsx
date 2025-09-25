import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import Workflow from "@/components/Workflow";
import ChatDemo from "@/components/ChatDemo";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/hooks/useLanguage";

const Index = () => {
  return (
<<<<<<< Updated upstream
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          <Hero />
          <Features />
          <Workflow />
          <ChatDemo />
          <CallToAction />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
=======
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Features />
        <Workflow />
        <ChatDemo />
        <CallToAction />
      </main>
      <Footer />
    </div>
>>>>>>> Stashed changes
  );
};

export default Index;