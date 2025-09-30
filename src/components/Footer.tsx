import { useLanguage } from "@/hooks/useLanguage";
import rodayaLogo from "@/assets/rodaya_logo.png";

const Footer = () => {
  const { t } = useLanguage();
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-hero-dark text-white py-12 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-8">
          <img src={rodayaLogo} alt="Rodaya Logo" className="w-16 h-16 mb-4" />
          <h3 className="text-xl font-bold mb-2">Rodaya Motoris</h3>
          <p className="text-white/60 text-sm text-center max-w-md">
            Solusi WhatsApp-first untuk tim FMCG. Kelola kunjungan, stok, dan laporan dengan mudah.
          </p>
        </div>

        <div className="flex justify-center space-x-8 mb-6">
          <button 
            onClick={() => scrollToSection('fitur')}
            className="text-white/80 hover:text-primary transition-colors text-sm" 
          >
            Fitur
          </button>
          <button 
            onClick={() => scrollToSection('demo')}
            className="text-white/80 hover:text-primary transition-colors text-sm" 
          >
            Demo
          </button>
          <button 
            onClick={() => scrollToSection('dashboard')}
            className="text-white/80 hover:text-primary transition-colors text-sm" 
          >
            Dashboard
          </button>
          <button 
            onClick={() => scrollToSection('kontak')}
            className="text-white/80 hover:text-primary transition-colors text-sm" 
          >
            Kontak
          </button>
        </div>
        
        <div className="text-center border-t border-white/10 pt-6">
          <p className="text-sm text-white/60">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;