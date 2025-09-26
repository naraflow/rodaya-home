import { useLanguage } from "@/hooks/useLanguage";

const Workflow = () => {
  const { t } = useLanguage();
  const steps = [
    {
      number: 1,
      title: "Mulai Kunjungan",
      description: "Ketik nama outlet untuk mulai sesi. Jika tidak ditemukan, sistem minta registrasi singkat.",
      details: [
        "Contoh: toko joni",
        "Auto-suggest outlet terdekat/sering dikunjungi.",
        "Registrasi baru: Daftar: Nama, Alamat"
      ],
      position: "left"
    },
    {
      number: 2,
      title: "Input Data Cepat",
      description: "Masukkan stok, pembelian, POSM, atau retur dalam satu baris.",
      details: [
        "Stok & Order: Stok:10, Beli:5, Catatan: kosong",
        "POSM: Jenis: Poster, Jumlah: 2, Catatan: terpasang",
        "Validasi otomatis: angka & field wajib."
      ],
      position: "right"
    },
    {
      number: 3,
      title: "Konfirmasi Instan",
      description: "Bot menampilkan pratinjau. Balas 'ya' untuk simpan, atau 'edit' untuk memperbaiki.",
      details: [
        "Minim kesalahan input.",
        "Supervisor mendapat notifikasi real-time.",
        "Semua tindakan tercatat (audit trail)."
      ],
      position: "left"
    },
    {
      number: 4,
      title: "Laporan Otomatis",
      description: "Di akhir hari, ringkasan performa tersedia on-demand.",
      details: [
        "Kunjungan, total order, POSM, OOS%.",
        "Ekspor ke CSV/Sheets untuk analisis.",
        "Siap dipresentasikan ke manajemen."
      ],
      position: "right"
    }
  ];

  return (
    <section id="alur" className="py-20 bg-muted px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-14 animate-fade-in">
          Alur Kerja Sederhana
        </h2>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line (Desktop) */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-primary/20 rounded hidden md:block"></div>

          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`relative mb-12 md:grid md:grid-cols-2 md:gap-10 items-center animate-fade-in ${
                step.position === 'left' ? '' : 'md:grid-flow-col-dense'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Timeline Dot (Desktop) */}
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-6 z-10 hidden md:block">
                <div className="w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg"></div>
              </div>

              {/* Content */}
              <div className={`${step.position === 'left' ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8 md:col-start-2'}`}>
                <div className="inline-flex items-center gap-3 mb-4">
                  <span className="bg-gradient-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-glow">
                    {step.number}
                  </span>
                  <h3 className="text-xl font-semibold text-foreground">
                    {step.title}
                  </h3>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {step.description}
                </p>
                
                <ul className="text-muted-foreground space-y-2 text-sm">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full inline-block mt-2 mr-3 flex-shrink-0"></span>
                      <span className={detail.includes(':') ? 'font-mono bg-accent px-2 py-1 rounded text-xs' : ''}>
                        {detail}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Empty space for alignment */}
              <div className={step.position === 'right' ? 'md:col-start-1' : ''}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workflow;