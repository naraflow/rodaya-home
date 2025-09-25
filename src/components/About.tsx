import { useI18n } from "@/lib/i18n";

const About = () => {
  const { t } = useI18n();

  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">
            {t('about_heading')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            {t('about_subtitle')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Description */}
          <div className="mb-12 text-center">
            <p className="text-lg leading-relaxed text-muted-foreground animate-fade-in">
              {t('about_description')}
            </p>
          </div>

          {/* Mission & Vision Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Mission Card */}
            <div className="bg-card p-8 rounded-2xl shadow-sm border animate-fade-in">
              <div className="mb-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="white" 
                    className="w-6 h-6"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  {t('about_mission')}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('about_mission_text')}
                </p>
              </div>
            </div>

            {/* Vision Card */}
            <div className="bg-card p-8 rounded-2xl shadow-sm border animate-fade-in">
              <div className="mb-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="white" 
                    className="w-6 h-6"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  {t('about_vision')}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('about_vision_text')}
                </p>
              </div>
            </div>
          </div>

          {/* Key Features Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 rounded-xl bg-muted/50 animate-fade-in">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="white" 
                  className="w-8 h-8"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h4 className="font-semibold mb-2">WhatsApp-First</h4>
              <p className="text-sm text-muted-foreground">
                Menggunakan platform yang sudah familiar dengan tim lapangan
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-muted/50 animate-fade-in">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="white" 
                  className="w-8 h-8"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Otomatis & Efisien</h4>
              <p className="text-sm text-muted-foreground">
                Mengurangi pekerjaan manual dan human error
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-muted/50 animate-fade-in">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="white" 
                  className="w-8 h-8"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Real-time Insights</h4>
              <p className="text-sm text-muted-foreground">
                Data dan laporan tersedia secara real-time
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
