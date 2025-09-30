import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, MapPin } from "lucide-react";

const Dashboard = () => {
  // Sample data for the chart
  const chartData = [
    { day: 'Sen', value: 3 },
    { day: 'Sel', value: 5 },
    { day: 'Rab', value: 8 },
    { day: 'Kam', value: 6 },
    { day: 'Jum', value: 7 },
    { day: 'Sab', value: 4 },
    { day: 'Min', value: 2 }
  ];

  const maxValue = Math.max(...chartData.map(d => d.value));

  const outlets = [
    { name: 'Toko Joni', address: 'Jl. Joni No. 5, Bekasi', date: '28 Sep, 16:47', status: 'terbaru' },
    { name: 'Toko Maju', address: 'Jl. Sutan No. 4, Jakarta', date: '28 Sep, 16:47' },
    { name: 'Grosir Santri', address: 'Jl Santri No. 8, Depok', date: '28 Sep, 16:47' }
  ];

  return (
    <section id="dashboard" className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-primary text-sm font-medium mb-4 bg-primary/10 px-4 py-2 rounded-full">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            Langkah 3
          </div>
          <h2 className="text-3xl font-bold mb-4">Dashboard Interaktif</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Data hasil percakapan langsung mengisi dashboard berikut. Lihat perkembangan kunjungan, order, 
            dan pemasangan POSM, serta daftar outlet yang terakhir dikunjungi.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="bg-card border shadow-sm">
            <CardContent className="p-6">
              <div className="text-sm text-muted-foreground mb-1">Total Kunjungan</div>
              <div className="text-3xl font-bold">12</div>
            </CardContent>
          </Card>

          <Card className="bg-card border shadow-sm">
            <CardContent className="p-6">
              <div className="text-sm text-muted-foreground mb-1">Total Order (pack)</div>
              <div className="text-3xl font-bold">45</div>
            </CardContent>
          </Card>

          <Card className="bg-card border shadow-sm">
            <CardContent className="p-6">
              <div className="text-sm text-muted-foreground mb-1">POSM Terpasang</div>
              <div className="text-3xl font-bold">7</div>
            </CardContent>
          </Card>

          <Card className="bg-card border shadow-sm">
            <CardContent className="p-6">
              <div className="text-sm text-muted-foreground mb-1">Outlet Aktif</div>
              <div className="text-3xl font-bold">3</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Performance Chart */}
          <Card className="bg-card border shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-semibold mb-1">Performa Harian</h3>
                  <p className="text-sm text-muted-foreground">Order per kunjungan</p>
                </div>
                <div className="flex items-center gap-2 text-primary text-sm">
                  <TrendingUp className="w-4 h-4" />
                  <span className="font-semibold">+12%</span>
                </div>
              </div>

              {/* Simple Area Chart */}
              <div className="relative h-48">
                <div className="absolute inset-0 flex items-end justify-between gap-2">
                  {chartData.map((item, index) => (
                    <div key={index} className="flex-1 flex flex-col items-center gap-2">
                      <div className="w-full flex flex-col justify-end" style={{ height: '150px' }}>
                        <div 
                          className="w-full bg-gradient-to-t from-primary/80 to-primary/40 rounded-t-sm transition-all"
                          style={{ height: `${(item.value / maxValue) * 100}%` }}
                        />
                      </div>
                      <div className="text-xs text-muted-foreground">{item.day}</div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Outlet List */}
          <Card className="bg-card border shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-semibold mb-1">Riwayat Outlet</h3>
                  <p className="text-sm text-muted-foreground">Outlet yang dikunjungi</p>
                </div>
                <button className="text-primary text-sm font-medium hover:underline">
                  TERBARU
                </button>
              </div>

              <div className="space-y-4">
                {outlets.map((outlet, index) => (
                  <div key={index} className="flex items-start gap-3 pb-4 border-b border-border last:border-0">
                    <div className="bg-primary/10 text-primary rounded-lg p-2 mt-1">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <div className="font-semibold">{outlet.name}</div>
                        {outlet.status && (
                          <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                            {outlet.status}
                          </span>
                        )}
                      </div>
                      <div className="text-sm text-muted-foreground mt-1">{outlet.address}</div>
                      <div className="text-xs text-muted-foreground mt-1">{outlet.date}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
