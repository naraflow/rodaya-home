import { useState } from "react";
import { Button } from "@/components/ui/button";
<<<<<<< Updated upstream
import { useLanguage } from "@/hooks/useLanguage";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
=======
import { useI18n } from "@/lib/i18n";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, lang, setLang } = useI18n();
>>>>>>> Stashed changes

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
        {/* Brand Text Only */}
        <button 
          onClick={() => scrollToSection('hero')}
<<<<<<< Updated upstream
          className="text-2xl font-bold hover:opacity-80 transition-opacity"
          aria-label="Beranda Rodaya Motoris"
=======
          className="flex items-center text-2xl font-bold hover:opacity-80 transition-opacity"
          aria-label="Home"
>>>>>>> Stashed changes
        >
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            Rodaya
          </span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <button 
            onClick={() => scrollToSection('about')} 
            className="nav-link text-foreground hover:text-primary transition-colors"
          >
            {t('nav_about')}
          </button>
          <button 
            onClick={() => scrollToSection('fitur')} 
            className="nav-link text-foreground hover:text-primary transition-colors"
          >
<<<<<<< Updated upstream
            {t('nav.features')}
=======
            {t('nav_features')}
>>>>>>> Stashed changes
          </button>
          <button 
            onClick={() => scrollToSection('alur')} 
            className="nav-link text-foreground hover:text-primary transition-colors"
          >
<<<<<<< Updated upstream
            {t('nav.workflow')}
=======
            {t('nav_workflow')}
>>>>>>> Stashed changes
          </button>
          <button 
            onClick={() => scrollToSection('demo')} 
            className="nav-link text-foreground hover:text-primary transition-colors"
          >
<<<<<<< Updated upstream
            {t('nav.demo')}
=======
            {t('nav_demo')}
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
            {t('nav.contact')}
=======
            {t('nav_contact')}
>>>>>>> Stashed changes
          </Button>

          {/* Language Switcher */}
          <div className="ml-2">
            <select
              aria-label="Select language"
              value={lang}
              onChange={(e) => setLang(e.target.value as any)}
              className="border rounded-md px-3 py-2 text-sm bg-background hover:border-primary focus:border-primary focus:ring-1 focus:ring-primary transition-colors cursor-pointer"
            >
              <option value="id">🇮🇩 ID</option>
              <option value="en">🇺🇸 EN</option>
            </select>
          </div>
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
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-4 py-2 hover:bg-accent rounded-lg transition-colors"
              role="menuitem"
            >
              {t('nav_about')}
            </button>
            <button 
              onClick={() => scrollToSection('fitur')}
              className="block w-full text-left px-4 py-2 hover:bg-accent rounded-lg transition-colors"
              role="menuitem"
            >
<<<<<<< Updated upstream
              {t('nav.features')}
=======
              {t('nav_features')}
>>>>>>> Stashed changes
            </button>
            <button 
              onClick={() => scrollToSection('alur')}
              className="block w-full text-left px-4 py-2 hover:bg-accent rounded-lg transition-colors"
              role="menuitem"
            >
<<<<<<< Updated upstream
              {t('nav.workflow')}
=======
              {t('nav_workflow')}
>>>>>>> Stashed changes
            </button>
            <button 
              onClick={() => scrollToSection('demo')}
              className="block w-full text-left px-4 py-2 hover:bg-accent rounded-lg transition-colors"
              role="menuitem"
            >
<<<<<<< Updated upstream
              {t('nav.demo')}
=======
              {t('nav_demo')}
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
              {t('nav.contact')}
=======
              {t('nav_contact')}
>>>>>>> Stashed changes
            </Button>
            <div className="pt-2">
              <select
                aria-label="Select language"
                value={lang}
                onChange={(e) => setLang(e.target.value as any)}
                className="w-full border rounded-md px-3 py-2 text-sm bg-background hover:border-primary focus:border-primary focus:ring-1 focus:ring-primary transition-colors cursor-pointer"
              >
                <option value="id">🇮🇩 Indonesia</option>
                <option value="en">🇺🇸 English</option>
              </select>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;