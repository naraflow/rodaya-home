import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'id' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  id: {
    // Navigation
    'nav.features': 'Fitur',
    'nav.workflow': 'Alur Kerja',
    'nav.demo': 'Demo',
    'nav.contact': 'Hubungi Kami',
    
    // Hero
    'hero.title': 'Sederhanakan',
    'hero.title.highlight': 'Pekerjaan Motoris',
    'hero.title.suffix': 'dengan Bot WhatsApp',
    'hero.description': 'Rodaya Motoris adalah solusi WhatsApp-first untuk tim FMCG. Catat kunjungan, stok, order, dan materi promosi lebih cepat, rapi, dan otomatis—tanpa aplikasi tambahan.',
    'hero.cta.demo': 'Coba Demo',
    'hero.cta.contact': 'Hubungi Kami',
    
    // Features
    'features.title': 'Fitur Unggulan',
    'features.whatsapp.title': 'WhatsApp First',
    'features.whatsapp.desc1': 'Tanpa instal aplikasi tambahan, cukup chat biasa.',
    'features.whatsapp.desc2': 'Template input singkat (SKU, stok, order) dengan auto-parse.',
    'features.whatsapp.desc3': 'Draft lokal saat sinyal buruk, sinkron otomatis.',
    'features.fast.title': 'Pencatatan Cepat',
    'features.fast.desc1': '1 baris teks untuk beberapa field sekaligus.',
    'features.fast.desc2': 'Auto-validasi angka (qty, harga) dan field wajib.',
    'features.fast.desc3': 'Auto-suggest outlet & SKU yang paling sering dipakai.',
    'features.reports.title': 'Laporan Akurat',
    'features.reports.desc1': 'Pratinjau sebelum simpan (minim salah input).',
    'features.reports.desc2': 'Ringkasan harian: kunjungan, order, POSM, OOS%.',
    'features.reports.desc3': 'Notifikasi supervisor real-time via WhatsApp/Email.',
    'features.efficient.title': 'Efisien & Andal',
    'features.efficient.desc1': 'Akses cepat, minim admin—fokus ke penjualan.',
    'features.efficient.desc2': 'Audit trail untuk setiap perubahan.',
    'features.efficient.desc3': 'Ekspor CSV/Google Sheets untuk analisis lebih lanjut.',
    
    // Workflow
    'workflow.title': 'Alur Kerja Sederhana',
    'workflow.step1.title': 'Mulai Kunjungan',
    'workflow.step1.desc': 'Ketik nama outlet untuk mulai sesi. Jika tidak ditemukan, sistem minta registrasi singkat.',
    'workflow.step2.title': 'Input Data Cepat',
    'workflow.step2.desc': 'Masukkan stok, pembelian, POSM, atau retur dalam satu baris.',
    'workflow.step3.title': 'Konfirmasi Instan',
    'workflow.step3.desc': 'Bot menampilkan pratinjau. Balas \'ya\' untuk simpan, atau \'edit\' untuk memperbaiki.',
    'workflow.step4.title': 'Laporan Otomatis',
    'workflow.step4.desc': 'Di akhir hari, ringkasan performa tersedia on-demand.',
    
    // Demo
    'demo.title': 'Mockup Interaktif',
    'demo.description': 'Simulasi alur kerja Motoris—bisa diketik untuk mencoba. Jika tidak ada input, percakapan berjalan otomatis.',
    
    // CTA
    'cta.title': 'Siap Ubah Cara Kerja Tim Anda?',
    'cta.description': 'Hubungi kami untuk demo langsung Rodaya Motoris.',
    
    // Footer
    'footer.copyright': '© 2025 Rodaya Motoris · Part of Naraflow Ecosystem'
  },
  en: {
    // Navigation
    'nav.features': 'Features',
    'nav.workflow': 'Workflow',
    'nav.demo': 'Demo',
    'nav.contact': 'Contact Us',
    
    // Hero
    'hero.title': 'Simplify',
    'hero.title.highlight': 'Field Sales Work',
    'hero.title.suffix': 'with WhatsApp Bot',
    'hero.description': 'Rodaya Motoris is a WhatsApp-first solution for FMCG teams. Record visits, stock, orders, and promotional materials faster, cleaner, and automatically—without additional apps.',
    'hero.cta.demo': 'Try Demo',
    'hero.cta.contact': 'Contact Us',
    
    // Features
    'features.title': 'Key Features',
    'features.whatsapp.title': 'WhatsApp First',
    'features.whatsapp.desc1': 'No additional app installation, just regular chat.',
    'features.whatsapp.desc2': 'Short input templates (SKU, stock, order) with auto-parse.',
    'features.whatsapp.desc3': 'Local draft when signal is poor, auto sync.',
    'features.fast.title': 'Fast Recording',
    'features.fast.desc1': '1 line of text for multiple fields at once.',
    'features.fast.desc2': 'Auto-validation of numbers (qty, price) and required fields.',
    'features.fast.desc3': 'Auto-suggest outlets & SKUs most frequently used.',
    'features.reports.title': 'Accurate Reports',
    'features.reports.desc1': 'Preview before save (minimize input errors).',
    'features.reports.desc2': 'Daily summary: visits, orders, POSM, OOS%.',
    'features.reports.desc3': 'Real-time supervisor notifications via WhatsApp/Email.',
    'features.efficient.title': 'Efficient & Reliable',
    'features.efficient.desc1': 'Quick access, minimal admin—focus on sales.',
    'features.efficient.desc2': 'Audit trail for every change.',
    'features.efficient.desc3': 'Export CSV/Google Sheets for further analysis.',
    
    // Workflow
    'workflow.title': 'Simple Workflow',
    'workflow.step1.title': 'Start Visit',
    'workflow.step1.desc': 'Type outlet name to start session. If not found, system requests brief registration.',
    'workflow.step2.title': 'Quick Data Input',
    'workflow.step2.desc': 'Enter stock, purchases, POSM, or returns in one line.',
    'workflow.step3.title': 'Instant Confirmation',
    'workflow.step3.desc': 'Bot displays preview. Reply \'yes\' to save, or \'edit\' to correct.',
    'workflow.step4.title': 'Automatic Reports',
    'workflow.step4.desc': 'At end of day, performance summary available on-demand.',
    
    // Demo
    'demo.title': 'Interactive Mockup',
    'demo.description': 'Field sales workflow simulation—you can type to try. If no input, conversation runs automatically.',
    
    // CTA
    'cta.title': 'Ready to Transform Your Team\'s Workflow?',
    'cta.description': 'Contact us for a live demo of Rodaya Motoris.',
    
    // Footer
    'footer.copyright': '© 2025 Rodaya Motoris · Part of Naraflow Ecosystem'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('id');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['id']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};