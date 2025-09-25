import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import Workflow from "@/components/Workflow";
import ChatDemo from "@/components/ChatDemo";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
// Removed stray LanguageProvider import from unresolved merge

const Index = () => {
  return (
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
  );
};

export default Index;