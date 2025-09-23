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
      className="relative py-24 md:py-28 text-center bg-gradient-hero overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 animate-fade-in">
          Sederhanakan{" "}
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            Pekerjaan Motoris
          </span>
          <br className="hidden md:block"/>
          dengan Bot WhatsApp
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in">
          Rodaya Motoris adalah solusi WhatsApp-first untuk tim FMCG. Catat kunjungan, stok, order, dan materi promosi lebih cepat, rapi, dan otomatis—tanpa aplikasi tambahan.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in">
          <Button 
            onClick={() => scrollToSection('demo')} 
            size="lg"
            className="bg-gradient-primary hover:opacity-90 shadow-glow transition-all px-7 py-3 font-semibold"
          >
            Coba Demo
          </Button>
          <Button 
            onClick={() => scrollToSection('kontak')} 
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-7 py-3 font-semibold transition-all"
          >
            Hubungi Kami
          </Button>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-primary/5 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
    </header>
  );
};

export default Hero;