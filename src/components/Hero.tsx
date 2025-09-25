import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      id="hero"
      className="relative py-24 md:py-28 text-center bg-gradient-hero-vibrant overflow-hidden"
    >
      {/* Enhanced decorative background elements */}
      <div className="absolute inset-0 bg-gradient-hero-overlay"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-primary-glow/30 rounded-full blur-2xl translate-x-1/2"></div>
      <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-gradient-primary opacity-20 rounded-full blur-xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 animate-fade-in text-white drop-shadow-lg">
          Sederhanakan{" "}
          <span className="bg-gradient-accent bg-clip-text text-transparent">
            Pekerjaan Motoris
          </span>
          <br className="hidden md:block"/>
          dengan Bot WhatsApp
        </h1>
        
        <p className="text-lg md:text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in drop-shadow-sm">
          Rodaya Motoris adalah solusi WhatsApp-first untuk tim FMCG. Catat kunjungan, stok, order, dan materi promosi lebih cepat, rapi, dan otomatis—tanpa aplikasi tambahan.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in">
          <Button 
            onClick={() => scrollToSection('demo')} 
            size="lg"
            className="bg-white text-primary hover:bg-white/90 shadow-glow transition-all px-7 py-3 font-semibold"
          >
            Coba Demo
          </Button>
          <Button 
            onClick={() => scrollToSection('kontak')} 
            variant="outline"
            size="lg"
            className="border-white/50 text-white hover:bg-white/10 backdrop-blur-sm px-7 py-3 font-semibold transition-all"
          >
            Hubungi Kami
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Hero;