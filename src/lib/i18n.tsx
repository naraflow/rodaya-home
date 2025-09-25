import { createContext, useContext, useMemo, useState, ReactNode } from "react";

type LanguageCode = "id" | "en";

type Translations = Record<string, Record<LanguageCode, string>>;

const translations: Translations = {
  app_brand: { id: "Rodaya", en: "Rodaya" },
  nav_about: { id: "Tentang", en: "About" },
  nav_features: { id: "Fitur", en: "Features" },
  nav_workflow: { id: "Alur Kerja", en: "Workflow" },
  nav_demo: { id: "Demo", en: "Demo" },
  nav_contact: { id: "Hubungi Kami", en: "Contact Us" },
  hero_title_1: { id: "Sederhanakan", en: "Simplify" },
  hero_title_2: { id: "Pekerjaan Motoris", en: "Field Sales Work" },
  hero_title_3: { id: "dengan Bot WhatsApp", en: "with a WhatsApp Bot" },
  hero_subtitle: {
    id: "Solusi WhatsApp-first untuk tim FMCG. Catat kunjungan, stok, order, dan materi promosi lebih cepat, rapi, dan otomatis—tanpa aplikasi tambahan.",
    en: "WhatsApp-first solution for FMCG teams. Log visits, stock, orders, and POSM faster, cleaner, and automated—no extra apps needed.",
  },
  hero_cta_try: { id: "Coba Demo", en: "Try Demo" },
  hero_cta_contact: { id: "Hubungi Kami", en: "Contact Us" },
  about_heading: { id: "Tentang Rodaya", en: "About Rodaya" },
  about_subtitle: { id: "Solusi inovatif untuk transformasi digital tim FMCG", en: "Innovative solution for FMCG team digital transformation" },
  about_description: { 
    id: "Rodaya adalah platform WhatsApp-first yang dirancang khusus untuk tim FMCG (Fast Moving Consumer Goods). Kami membantu motoris dan tim sales untuk mencatat kunjungan, mengelola stok, memproses order, dan melacak materi promosi dengan lebih efisien dan otomatis.", 
    en: "Rodaya is a WhatsApp-first platform specifically designed for FMCG (Fast Moving Consumer Goods) teams. We help field sales representatives and sales teams to record visits, manage inventory, process orders, and track promotional materials more efficiently and automatically." 
  },
  about_mission: { id: "Misi Kami", en: "Our Mission" },
  about_mission_text: { 
    id: "Menyederhanakan operasional lapangan dengan teknologi yang mudah digunakan, meningkatkan produktivitas tim, dan memberikan insights yang actionable untuk pengambilan keputusan yang lebih baik.", 
    en: "To simplify field operations with user-friendly technology, increase team productivity, and provide actionable insights for better decision making." 
  },
  about_vision: { id: "Visi Kami", en: "Our Vision" },
  about_vision_text: { 
    id: "Menjadi platform terdepan dalam transformasi digital industri FMCG di Indonesia, mendukung pertumbuhan bisnis yang berkelanjutan.", 
    en: "To become the leading platform in digital transformation of the FMCG industry in Indonesia, supporting sustainable business growth." 
  },
  features_heading: { id: "Fitur Unggulan", en: "Key Features" },
  workflow_heading: { id: "Alur Kerja Sederhana", en: "Simple Workflow" },
  demo_heading: { id: "Mockup Interaktif", en: "Interactive Mockup" },
  demo_subtitle: {
    id: "Simulasi alur kerja Motoris—ketik pesan untuk mencoba fitur lengkap bot WhatsApp.",
    en: "Simulate the workflow—type a message to try the WhatsApp bot features.",
  },
  cta_heading: { id: "Siap Ubah Cara Kerja Tim Anda?", en: "Ready to Transform Your Team?" },
  cta_subtitle: { id: "Hubungi kami untuk demo langsung Field Sales Bot.", en: "Contact us for a live demo of Field Sales Bot." },
  cta_whatsapp: { id: "WhatsApp", en: "WhatsApp" },
  cta_email: { id: "Email", en: "Email" },
  footer_copyright: { id: "© 2025 Field Sales Bot · Solusi Digital FMCG", en: "© 2025 Field Sales Bot · FMCG Digital Solution" },
};

type I18nContextValue = {
  lang: LanguageCode;
  t: (key: keyof typeof translations) => string;
  setLang: (lang: LanguageCode) => void;
};

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<LanguageCode>((localStorage.getItem("lang") as LanguageCode) || "id");

  const value = useMemo<I18nContextValue>(() => ({
    lang,
    setLang: (l: LanguageCode) => {
      localStorage.setItem("lang", l);
      setLang(l);
    },
    t: (key) => translations[key]?.[lang] ?? String(key),
  }), [lang]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}



