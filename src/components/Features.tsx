import { Card, CardContent } from "@/components/ui/card";

import { useLanguage } from "@/hooks/useLanguage";

const Features = () => {
  const { t } = useLanguage();
  const features = [
    {
      icon: "📱",
      titleKey: "features.whatsapp.title",
      itemKeys: [
        "features.whatsapp.desc1",
        "features.whatsapp.desc2",
        "features.whatsapp.desc3"
      ]
    },
    {
      icon: "⚡",
      titleKey: "features.fast.title",
      itemKeys: [
        "features.fast.desc1",
        "features.fast.desc2",
        "features.fast.desc3"
      ]
    },
    {
      icon: "📊",
      titleKey: "features.reports.title",
      itemKeys: [
        "features.reports.desc1",
        "features.reports.desc2",
        "features.reports.desc3"
      ]
    },
    {
      icon: "🚀",
      titleKey: "features.efficient.title",
      itemKeys: [
        "features.efficient.desc1",
        "features.efficient.desc2",
        "features.efficient.desc3"
      ]
    }
  ];

  return (
    <section id="fitur" className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-14 animate-fade-in">
          {t('features.title')}
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-card border shadow-card card-hover animate-fade-in text-left"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div 
                  className="w-14 h-14 mb-5 bg-accent rounded-full flex items-center justify-center text-2xl" 
                  aria-hidden="true"
                >
                  {feature.icon}
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">
                  {t(feature.titleKey)}
                </h3>
                
                <ul className="text-muted-foreground space-y-2">
                  {feature.itemKeys.map((itemKey, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full inline-block mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-sm leading-relaxed">{t(itemKey)}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;