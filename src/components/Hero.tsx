import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/hooks/useLanguage";

const Hero = () => {
  const { t } = useLanguage();
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      id="hero"
      className="relative py-20 md:py-28 bg-gradient-hero-dark overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-green/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="text-left">
            <div className="inline-flex items-center gap-2 text-primary text-sm font-medium mb-6 bg-primary/10 px-4 py-2 rounded-full">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              Rodaya untuk Motoris
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6 animate-fade-in text-white">
              Dampingi Motoris dari percakapan{" "}
              <span className="text-accent-green">WhatsApp</span> hingga{" "}
              <span className="text-primary">dashboard analitik.</span>
            </h1>
            
            <p className="text-lg text-white/80 mb-10 leading-relaxed animate-fade-in max-w-xl">
              Pelajari bagaimana Rodaya membantu Motoris FMCG menjalankan tugas harian secara konsisten. 
              Dari edukasi produk, pengisian data lapangan, hingga visualisasi hasil secara real time.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start gap-4 animate-fade-in">
              <Button 
                onClick={() => scrollToSection('demo')} 
                size="lg"
                className="bg-primary hover:bg-primary-light text-white shadow-glow transition-all px-8 py-6 text-base font-semibold"
              >
                Lihat Simulasi WhatsApp
              </Button>
              <Button 
                onClick={() => scrollToSection('dashboard')} 
                size="lg"
                variant="outline"
                className="border-2 border-white/30 bg-white/5 text-white hover:bg-white/10 hover:border-white/50 px-8 py-6 text-base font-semibold backdrop-blur-sm"
              >
                Jelajahi Dashboard
              </Button>
            </div>
          </div>

          {/* Right side - Stats Card - 3D Modern Design */}
          <div className="animate-fade-in perspective-1000">
            <Card className="bg-gradient-card border-white/10 p-6 backdrop-blur-sm shadow-float relative overflow-hidden transform hover:scale-105 transition-all duration-500 hover:shadow-glow" style={{ transformStyle: 'preserve-3d', transform: 'rotateX(5deg) rotateY(-5deg)' }}>
              {/* 3D Depth Layers */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-50"></div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                <div className="text-white/60 text-sm font-medium mb-4 uppercase tracking-wider flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  Hari Ini
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white/5 p-4 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300 transform hover:translate-y-[-4px]">
                    <div className="text-white/60 text-sm mb-1">Kunjungan</div>
                    <div className="text-4xl font-bold text-white">12</div>
                  </div>
                  <div className="bg-white/5 p-4 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300 transform hover:translate-y-[-4px]">
                    <div className="text-white/60 text-sm mb-1">Order</div>
                    <div className="text-4xl font-bold text-white">45</div>
                  </div>
                  <div className="bg-white/5 p-4 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300 transform hover:translate-y-[-4px]">
                    <div className="text-white/60 text-sm mb-1">POSM</div>
                    <div className="text-4xl font-bold text-white">7</div>
                  </div>
                  <div className="bg-white/5 p-4 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300 transform hover:translate-y-[-4px]">
                    <div className="text-white/60 text-sm mb-1">Outlet Aktif</div>
                    <div className="text-4xl font-bold text-white">3</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
