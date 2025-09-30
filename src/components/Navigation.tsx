import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";
import rodayaLogo from "@/assets/rodaya_logo.png";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

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
        {/* Brand with Logo */}
        <button 
          onClick={() => scrollToSection('hero')}
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          aria-label="Beranda Rodaya Motoris"
        >
          <img src={rodayaLogo} alt="Rodaya Logo" className="w-10 h-10" />
          <span className="text-xl font-bold text-foreground">
            Rodaya Motoris
          </span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <button 
            onClick={() => scrollToSection('fitur')} 
            className="nav-link text-foreground hover:text-primary transition-colors"
          >
            {t('nav.features')}
          </button>
          <button 
            onClick={() => scrollToSection('demo')} 
            className="nav-link text-foreground hover:text-primary transition-colors"
          >
            {t('nav.demo')}
          </button>
          
          {/* Language Switch */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setLanguage('id')}
              className={`px-2 py-1 text-sm rounded transition-colors ${
                language === 'id' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-primary'
              }`}
            >
              ID
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={`px-2 py-1 text-sm rounded transition-colors ${
                language === 'en' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-primary'
              }`}
            >
              EN
            </button>
          </div>
          
          <Button 
            onClick={() => scrollToSection('kontak')}
            className="bg-gradient-primary hover:opacity-90 shadow-glow transition-all"
          >
            {t('nav.contact')}
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
              {t('nav.features')}
            </button>
            <button 
              onClick={() => scrollToSection('demo')}
              className="block w-full text-left px-4 py-2 hover:bg-accent rounded-lg transition-colors"
              role="menuitem"
            >
              {t('nav.demo')}
            </button>
            
            {/* Mobile Language Switch */}
            <div className="flex space-x-2 px-4 py-2">
              <button
                onClick={() => setLanguage('id')}
                className={`px-3 py-1 text-sm rounded transition-colors ${
                  language === 'id' ? 'bg-primary text-primary-foreground' : 'bg-accent text-accent-foreground'
                }`}
              >
                ID
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 text-sm rounded transition-colors ${
                  language === 'en' ? 'bg-primary text-primary-foreground' : 'bg-accent text-accent-foreground'
                }`}
              >
                EN
              </button>
            </div>
            
            <Button 
              onClick={() => scrollToSection('kontak')}
              className="w-full bg-gradient-primary hover:opacity-90 mt-2"
              role="menuitem"
            >
              {t('nav.contact')}
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;