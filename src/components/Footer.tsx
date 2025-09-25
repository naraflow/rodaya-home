import { useLanguage } from "@/hooks/useLanguage";

const Footer = () => {
  const { t } = useLanguage();
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-foreground text-background py-8 text-center">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-6 mb-4">
          <button 
            onClick={() => scrollToSection('hero')}
            className="hover:text-primary transition-colors p-2" 
            aria-label="Website"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="currentColor" 
              className="w-6 h-6"
            >
              <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM6.262 6.072a8.25 8.25 0 1010.532-.002 2.25 2.25 0 01-2.618 1.772c-.24 0-.47-.013-.692-.039a6.75 6.75 0 01-1.318 2.614A6.751 6.751 0 005.197 8.99c.385-.27.838-.364 1.065-.918z" clipRule="evenodd" />
            </svg>
          </button>
          
          <button 
            onClick={() => scrollToSection('kontak')}
            className="hover:text-primary transition-colors p-2" 
            aria-label="Kontak"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="currentColor" 
              className="w-6 h-6"
            >
              <path fillRule="evenodd" d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97-1.94.284-3.916.455-5.922.505a2.25 2.25 0 00-1.88 1.26l-2.25 4.5a.75.75 0 01-1.35-.676l1.665-3.33a3.75 3.75 0 00.614-2.07 49.106 49.106 0 01-7.152-.52C1.897 14.677.527 12.945.527 11v-6.02c0-1.946 1.37-3.678 3.348-3.97z" clipRule="evenodd" />
            </svg>
          </button>
          
          <button 
            onClick={() => scrollToSection('demo')}
            className="hover:text-primary transition-colors p-2" 
            aria-label="Demo"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="currentColor" 
              className="w-6 h-6"
            >
              <path d="M4.5 4.5a3 3 0 00-3 3v9a3 3 0 003 3h8.25a3 3 0 003-3v-9a3 3 0 00-3-3H4.5zM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06z" />
            </svg>
          </button>
        </div>
        
        <p className="text-sm opacity-80">
          {t('footer.copyright')}
        </p>
      </div>
    </footer>
  );
};

export default Footer;