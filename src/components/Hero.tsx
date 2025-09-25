import { Button } from "@/components/ui/button";
<<<<<<< Updated upstream
import { useLanguage } from "@/hooks/useLanguage";

const Hero = () => {
  const { t } = useLanguage();
=======
import { useI18n } from "@/lib/i18n";

const Hero = () => {
  const { t } = useI18n();
>>>>>>> Stashed changes
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      id="hero"
<<<<<<< Updated upstream
      className="relative py-24 md:py-28 text-center bg-gradient-hero-vibrant overflow-hidden"
    >
      {/* Enhanced decorative background elements */}
      <div className="absolute inset-0 bg-gradient-hero-overlay"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-primary-glow/30 rounded-full blur-2xl translate-x-1/2"></div>
      <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-gradient-primary opacity-20 rounded-full blur-xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 animate-fade-in text-white drop-shadow-lg">
          {t('hero.title')}{" "}
          <span className="relative inline-block">
            <span className="bg-gradient-accent bg-clip-text text-transparent font-black text-5xl md:text-7xl drop-shadow-2xl animate-pulse">
              {t('hero.title.highlight')}
            </span>
            <div className="absolute -inset-2 bg-white/20 blur-xl rounded-lg -z-10 animate-pulse"></div>
            <div className="absolute -inset-1 bg-gradient-primary/30 blur-lg rounded-lg -z-10"></div>
          </span>
          <br className="hidden md:block"/>
          {t('hero.title.suffix')}
        </h1>
        
        <p className="text-lg md:text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in drop-shadow-sm">
          {t('hero.description')}
=======
      className="relative py-24 md:py-28 text-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, rgba(255,115,50,0.12) 0%, rgba(255,115,50,0.08) 40%, rgba(255,255,255,1) 100%), radial-gradient(1000px 300px at 50% -100px, rgba(249,115,22,0.35), rgba(249,115,22,0))',
      }}
    >
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 animate-fade-in">
          {t('hero_title_1')}{" "}
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            {t('hero_title_2')}
          </span>
          <br className="hidden md:block"/>
          {t('hero_title_3')}
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in">
          {t('hero_subtitle')}
>>>>>>> Stashed changes
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in">
          <Button 
            onClick={() => scrollToSection('demo')} 
            size="lg"
            className="bg-white text-primary hover:bg-white/90 shadow-glow transition-all px-7 py-3 font-semibold"
          >
<<<<<<< Updated upstream
            {t('hero.cta.demo')}
=======
            {t('hero_cta_try')}
>>>>>>> Stashed changes
          </Button>
          <Button 
            onClick={() => scrollToSection('kontak')} 
            variant="outline"
            size="lg"
            className="border-white/50 text-white hover:bg-white/10 backdrop-blur-sm px-7 py-3 font-semibold transition-all"
          >
<<<<<<< Updated upstream
            {t('hero.cta.contact')}
          </Button>
        </div>
      </div>
=======
            {t('hero_cta_contact')}
          </Button>
        </div>
      </div>

>>>>>>> Stashed changes
    </header>
  );
};

export default Hero;