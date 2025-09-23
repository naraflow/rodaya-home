import { Card, CardContent } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: "📱",
      title: "WhatsApp First",
      items: [
        "Tanpa instal aplikasi tambahan, cukup chat biasa.",
        "Template input singkat (SKU, stok, order) dengan auto-parse.",
        "Draft lokal saat sinyal buruk, sinkron otomatis."
      ]
    },
    {
      icon: "⚡",
      title: "Pencatatan Cepat",
      items: [
        "1 baris teks untuk beberapa field sekaligus.",
        "Auto-validasi angka (qty, harga) dan field wajib.",
        "Auto-suggest outlet & SKU yang paling sering dipakai."
      ]
    },
    {
      icon: "📊",
      title: "Laporan Akurat",
      items: [
        "Pratinjau sebelum simpan (minim salah input).",
        "Ringkasan harian: kunjungan, order, POSM, OOS%.",
        "Notifikasi supervisor real-time via WhatsApp/Email."
      ]
    },
    {
      icon: "🚀",
      title: "Efisien & Andal",
      items: [
        "Akses cepat, minim admin—fokus ke penjualan.",
        "Audit trail untuk setiap perubahan.",
        "Ekspor CSV/Google Sheets untuk analisis lebih lanjut."
      ]
    }
  ];

  return (
    <section id="fitur" className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-14 animate-fade-in">
          Fitur Unggulan
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
                  {feature.title}
                </h3>
                
                <ul className="text-muted-foreground space-y-2">
                  {feature.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full inline-block mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-sm leading-relaxed">{item}</span>
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