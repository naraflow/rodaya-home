import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const Features = () => {
  return (
    <section id="fitur" className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-left mb-4 animate-fade-in">
          Kenapa Rodaya?
        </h2>
        <p className="text-muted-foreground text-left mb-12 max-w-3xl animate-fade-in">
          Rodaya mempermudah Motoris untuk mengeksekusi program penjualan. 
          Semua interaksi dimulai dari edukasi singkat, lalu diarahkan ke percakapan interaktif yang terstruktur. 
          Data tersebut akan otomatis masuk ke dashboard monitoring.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <Card className="bg-card border shadow-card card-hover animate-fade-in text-left">
            <CardContent className="p-6">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Onboarding Cepat</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Motoris memahami narasi program inisial: highlight yang ringkas dan jelas.
              </p>
            </CardContent>
          </Card>

          {/* Card 2 */}
          <Card className="bg-card border shadow-card card-hover animate-fade-in text-left" style={{ animationDelay: '0.1s' }}>
            <CardContent className="p-6">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">💬</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Percakapan Teratur</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Alur WhatsApp memandu setiap tindakan dengan format yang konsisten.
              </p>
            </CardContent>
          </Card>

          {/* Card 3 */}
          <Card className="bg-card border shadow-card card-hover animate-fade-in text-left" style={{ animationDelay: '0.2s' }}>
            <CardContent className="p-6">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Dashboard Interaktif</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Dashboard interaktif yang memudahkan data hasil percakapan secara real time.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* What Can Be Done Section */}
        <div className="mt-16 grid md:grid-cols-2 gap-12">
          {/* Left - Description */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Yang Bisa Dilakukan</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-primary/20 text-primary rounded-full p-1 mt-1">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Pendaftaran langkah Cepat</div>
                  <p className="text-sm text-muted-foreground">
                    Pendaftaran langkah singkat dari program dan manfaat melalui Rodaya.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-primary/20 text-primary rounded-full p-1 mt-1">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Simulasi percakapan WhatsApp</div>
                  <p className="text-sm text-muted-foreground">
                    Simulasi percakapan WhatsApp lengkap dengan menu dan format input.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-primary/20 text-primary rounded-full p-1 mt-1">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Dashboard interaktif</div>
                  <p className="text-sm text-muted-foreground">
                    Dashboard interaktif yang memudahkan data hasil percakapan secara real time.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Additional Info */}
          <div className="bg-muted/50 rounded-lg p-6">
            <h4 className="font-semibold mb-4">Tips Cepat</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Gunakan tombol di bawah untuk mengisi chat secara instan dan melihat update dashboard:
            </p>
            <div className="flex flex-wrap gap-2">
              <div className="bg-background px-3 py-1.5 rounded-md text-xs font-medium border">Menu Utama</div>
              <div className="bg-background px-3 py-1.5 rounded-md text-xs font-medium border">Kunjungan Outlet</div>
              <div className="bg-background px-3 py-1.5 rounded-md text-xs font-medium border">Input Stok</div>
              <div className="bg-background px-3 py-1.5 rounded-md text-xs font-medium border">Daftar Outlet Baru</div>
              <div className="bg-background px-3 py-1.5 rounded-md text-xs font-medium border">Input POSM</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
