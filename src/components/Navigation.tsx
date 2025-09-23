import { useState } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="bg-background/90 backdrop-blur-md shadow-sm border-b sticky top-0 z-50" role="navigation" aria-label="Primary">
      <div className="container mx-auto flex justify-between items-center px-4 py-4">
        {/* Logo */}
        <button 
          onClick={() => scrollToSection('hero')}
          className="flex items-center text-2xl font-bold hover:opacity-80 transition-opacity"
          aria-label="Beranda Rodaya Motoris"
        >
          <svg 
            aria-hidden="true" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 512 512" 
            className="h-8 w-8 mr-2"
          >
            <rect width="512" height="512" rx="100" fill="hsl(var(--primary))"></rect>
            <path fill="white" d="M150 350h60l20-50h70l30 50h60l-50-90 40-40-30-30h-80l-40-60h-60l10 60-30 30 40 40-40 90z"></path>
          </svg>
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            Rodaya Motoris
          </span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <button 
            onClick={() => scrollToSection('fitur')} 
            className="nav-link text-foreground hover:text-primary transition-colors"
          >
            Fitur
          </button>
          <button 
            onClick={() => scrollToSection('alur')} 
            className="nav-link text-foreground hover:text-primary transition-colors"
          >
            Alur Kerja
          </button>
          <button 
            onClick={() => scrollToSection('demo')} 
            className="nav-link text-foreground hover:text-primary transition-colors"
          >
            Demo
          </button>
          <Button 
            onClick={() => scrollToSection('kontak')}
            className="bg-gradient-primary hover:opacity-90 shadow-glow transition-all"
          >
            Hubungi Kami
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="sm"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label="Buka menu"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div 
          id="mobile-menu" 
          className="md:hidden bg-background border-t animate-fade-in"
          role="menu" 
          aria-label="Mobile menu"
        >
          <div className="px-4 py-2 space-y-2">
            <button 
              onClick={() => scrollToSection('fitur')}
              className="block w-full text-left px-4 py-2 hover:bg-accent rounded-lg transition-colors"
              role="menuitem"
            >
              Fitur
            </button>
            <button 
              onClick={() => scrollToSection('alur')}
              className="block w-full text-left px-4 py-2 hover:bg-accent rounded-lg transition-colors"
              role="menuitem"
            >
              Alur Kerja
            </button>
            <button 
              onClick={() => scrollToSection('demo')}
              className="block w-full text-left px-4 py-2 hover:bg-accent rounded-lg transition-colors"
              role="menuitem"
            >
              Demo
            </button>
            <Button 
              onClick={() => scrollToSection('kontak')}
              className="w-full bg-gradient-primary hover:opacity-90 mt-2"
              role="menuitem"
            >
              Hubungi Kami
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;