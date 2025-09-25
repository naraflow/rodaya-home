import { Button } from "@/components/ui/button";
<<<<<<< Updated upstream
import { useLanguage } from "@/hooks/useLanguage";

const CallToAction = () => {
  const { t } = useLanguage();
=======
import { useI18n } from "@/lib/i18n";

const CallToAction = () => {
  const { t } = useI18n();
>>>>>>> Stashed changes
  return (
    <section id="kontak" className="py-20 px-4 bg-muted text-center">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4 animate-fade-in">
<<<<<<< Updated upstream
          {t('cta.title')}
        </h2>
        <p className="text-muted-foreground mb-8 max-w-xl mx-auto animate-fade-in">
          {t('cta.description')}
=======
          {t('cta_heading')}
        </h2>
        <p className="text-muted-foreground mb-8 max-w-xl mx-auto animate-fade-in">
          {t('cta_subtitle')}
>>>>>>> Stashed changes
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in">
          <Button 
            asChild
            size="lg"
            className="bg-whatsapp hover:opacity-90 text-white px-6 py-3 shadow-glow transition-all"
          >
            <a 
              href="https://wa.me/6287731771859?text=Halo%20Field%20Sales%20Bot%2C%20saya%20ingin%20jadwalkan%20demo." 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
              aria-label="Hubungi via WhatsApp"
            >
              <svg 
                aria-hidden="true" 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 32 32" 
                className="w-5 h-5"
              >
                <path 
                  fill="currentColor" 
                  d="M19.11 17.19c-.29-.15-1.7-.84-1.96-.94-.26-.1-.45-.15-.64.15-.19.29-.74.94-.9 1.13-.16.2-.33.22-.62.07-.29-.15-1.23-.45-2.34-1.43-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.33.43-.49.14-.16.19-.26.29-.45.1-.19.05-.35-.03-.49-.08-.15-.64-1.55-.88-2.12-.23-.56-.47-.49-.64-.49-.16 0-.35-.02-.54-.02-.19 0-.49.07-.75.35-.26.29-1 1-1 2.43 0 1.43 1.03 2.82 1.18 3.01.15.2 2.03 3.1 4.93 4.35.69.3 1.23.48 1.65.61.69.22 1.32.19 1.82.11.55-.08 1.7-.7 1.94-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.2-.55-.35zM16.02 4C9.94 4 5 8.94 5 15.02c0 1.94.51 3.76 1.41 5.33L5 28l7.81-1.98a10.98 10.98 0 0 0 3.21.47C22.9 26.49 28 21.39 28 15.02 28 8.94 23.1 4 16.02 4z"
                />
              </svg>
              {t('cta_whatsapp')}
            </a>
          </Button>
          
          <Button 
            asChild
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 py-3 transition-all"
          >
            <a 
              href="mailto:info@fieldsalesbot.com"
              className="inline-flex items-center gap-2"
            >
              <svg 
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                className="w-5 h-5"
              >
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
              {t('cta_email')}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;