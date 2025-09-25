import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useI18n } from "@/lib/i18n";

interface ChatState {
  currentMenu: string;
  sessionData: {
    totalVisits: number;
    totalOrder: number;
    posmCount: number;
    outletData: { [key: string]: { address: string } };
  };
  currentOutlet: string | null;
}

interface MenuData {
  message?: string;
  options?: { [key: string]: { next: string } };
  generate?: () => string;
}

import { useLanguage } from "@/hooks/useLanguage";

const ChatDemo = () => {
  const { t } = useLanguage();
  const [messages, setMessages] = useState<Array<{ text: string; type: 'bot' | 'user'; time: string }>>([]);
  const [inputValue, setInputValue] = useState("");
  const [chatState, setChatState] = useState<ChatState>({
    currentMenu: 'main',
    sessionData: {
      totalVisits: 1,
      totalOrder: 5,
      posmCount: 1,
      outletData: { 'toko joni': { address: 'Jl. Joni No. 5, Bekasi' } }
    },
    currentOutlet: null
  });
  
  const chatBodyRef = useRef<HTMLDivElement>(null);

  const menus: { [key: string]: MenuData } = {
    main: {
      message: "👋 Selamat datang, Motoris!<br><br>Silakan pilih menu:<br>1. Kunjungan Outlet<br>2. Input Stok & Order<br>3. Update Display POSM<br>4. Laporan Harian<br>0. Kembali<br><br><i>Ketik angka menu yang Anda pilih</i>",
      options: {
        '1': { next: 'visit_start' },
        '2': { next: 'stock_start' },
        '3': { next: 'posm_start' },
        '4': { next: 'report' },
        '0': { next: 'main' }
      }
    },
    visit_start: {
      message: "Silakan ketik nama toko atau outlet yang Anda kunjungi."
    },
    visit_confirm: {
      message: "Data pendaftaran outlet diterima. Apakah sudah benar?<br><br>Balas 'ya' untuk simpan atau 'edit' untuk perbaikan."
    },
    visit_finish: {
      message: "✅ Outlet berhasil didaftarkan.<br><br>Ketik '0' untuk kembali ke menu utama."
    },
    stock_start: {
      message: "Silakan tulis format:<br><code>Stok:10, Beli:5, Catatan: kosong</code><br><br>Ketik 'batal' untuk kembali."
    },
    stock_confirm: {
      message: "Data stok & order diterima. Apakah sudah benar?<br><br>Balas 'ya' untuk simpan atau 'edit' untuk perbaikan."
    },
    stock_finish: {
      message: "✅ Data stok & order disimpan.<br><br>Ketik '0' untuk kembali ke menu utama."
    },
    posm_start: {
      message: "Silakan tulis format:<br><code>Jenis: Poster, Jumlah: 2, Catatan: sudah terpasang</code><br><br>Ketik 'batal' untuk kembali."
    },
    posm_confirm: {
      message: "Data POSM diterima. Apakah sudah benar?<br><br>Balas 'ya' untuk simpan atau 'edit' untuk perbaikan."
    },
    posm_finish: {
      message: "✅ Data POSM disimpan.<br><br>Ketik '0' untuk kembali ke menu utama."
    },
    report: {
      generate: () => {
        return `Ringkasan kunjungan hari ini:<br>- Total kunjungan: ${chatState.sessionData.totalVisits} outlet<br>- Total order: ${chatState.sessionData.totalOrder} pack<br>- Total POSM dipasang: ${chatState.sessionData.posmCount} item<br><br>Ketik '0' untuk kembali ke menu utama.`;
      }
    }
  };

  const getCurrentTime = () => {
    return new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
  };

  const addMessage = (text: string, type: 'bot' | 'user') => {
    const newMessage = {
      text,
      type,
      time: getCurrentTime()
    };
    
    setMessages(prev => [...prev, newMessage]);
    
    // Scroll to bottom
    setTimeout(() => {
      if (chatBodyRef.current) {
        chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
      }
    }, 100);
  };

  const getBotResponse = (input: string) => {
    let response = { message: "Pilihan tidak valid. Silakan coba lagi.", nextMenu: chatState.currentMenu };
    const currentMenuData = menus[chatState.currentMenu];

    switch (chatState.currentMenu) {
      case 'main':
        if (currentMenuData.options && currentMenuData.options[input]) {
          response.nextMenu = currentMenuData.options[input].next;
          if (response.nextMenu === 'report') {
            response.message = menus.report.generate!();
          } else {
            response.message = menus[response.nextMenu].message!;
          }
        } else if (input === '0') {
          response.message = menus.main.message!;
          response.nextMenu = 'main';
        } else {
          response.message = `Pilihan tidak valid. Silakan coba lagi.<br><br>${currentMenuData.message}`;
        }
        break;

      case 'visit_start':
        setChatState(prev => ({ ...prev, currentOutlet: input }));
        if (chatState.sessionData.outletData[input]) {
          response.message = `Toko ditemukan: <b>${input}</b><br>Alamat: ${chatState.sessionData.outletData[input].address}<br><br>Ketik 'ya' untuk melanjutkan kunjungan atau 'batal' untuk kembali.`;
          response.nextMenu = 'visit_found';
        } else {
          response.message = `Outlet tidak ditemukan. Silakan daftarkan outlet baru dengan format:<br><b>Daftar: Nama Toko, Alamat Lengkap</b>`;
          response.nextMenu = 'register_outlet';
        }
        break;
        
      case 'visit_found':
        if (input === 'ya') {
          response.message = "✅ Kunjungan ke outlet berhasil dicatat.<br><br>Ketik '0' untuk kembali ke menu utama.";
          response.nextMenu = 'main';
          setChatState(prev => ({
            ...prev,
            sessionData: { ...prev.sessionData, totalVisits: prev.sessionData.totalVisits + 1 }
          }));
        } else if (input === 'batal') {
          response.message = menus.main.message!;
          response.nextMenu = 'main';
        } else {
          response.message = `Pilihan tidak valid. Ketik 'ya' atau 'batal'.`;
        }
        break;

      case 'register_outlet':
        if (input.toLowerCase().startsWith('daftar:')) {
          const parts = input.substring(7).split(',');
          if (parts.length >= 2) {
            const namaToko = parts[0].trim();
            const alamat = parts.slice(1).join(',').trim();
            setChatState(prev => ({
              ...prev,
              sessionData: {
                ...prev.sessionData,
                outletData: { ...prev.sessionData.outletData, [namaToko]: { address: alamat } }
              }
            }));
            response.message = menus.visit_confirm.message!;
            response.nextMenu = 'visit_confirm';
          } else {
            response.message = `Format salah. Harap gunakan format:<br><b>Daftar: Nama Toko, Alamat Lengkap</b>`;
          }
        } else if (input === '0' || input === 'batal') {
          response.message = menus.main.message!;
          response.nextMenu = 'main';
        } else {
          response.message = `Pilihan tidak valid. Harap gunakan format pendaftaran atau ketik 'batal'.`;
        }
        break;

      case 'visit_confirm':
        if (input === 'ya') {
          response.message = `✅ Outlet <b>${chatState.currentOutlet}</b> berhasil didaftarkan.<br><br>Ketik '0' untuk kembali ke menu utama.`;
          response.nextMenu = 'main';
          setChatState(prev => ({
            ...prev,
            sessionData: { ...prev.sessionData, totalVisits: prev.sessionData.totalVisits + 1 }
          }));
        } else if (input === 'edit') {
          response.message = menus.visit_start.message!;
          response.nextMenu = 'visit_start';
        } else {
          response.message = `Pilihan tidak valid. Balas 'ya' atau 'edit'.`;
        }
        break;

      case 'stock_start':
        if (input.toLowerCase().startsWith('stok:') || input.toLowerCase() === 'batal') {
          if (input.toLowerCase() === 'batal') {
            response.message = menus.main.message!;
            response.nextMenu = 'main';
          } else {
            const parts = input.split(',').map(part => part.trim());
            let order = 0;
            parts.forEach(part => {
              if (part.toLowerCase().startsWith('beli:')) {
                order = parseInt(part.split(':')[1]?.trim() || '0') || 0;
              }
            });
            setChatState(prev => ({
              ...prev,
              sessionData: { ...prev.sessionData, totalOrder: prev.sessionData.totalOrder + order }
            }));
            response.message = menus.stock_confirm.message!;
            response.nextMenu = 'stock_confirm';
          }
        } else {
          response.message = `Format salah. Silakan gunakan format:<br>${menus.stock_start.message}`;
        }
        break;

      case 'stock_confirm':
        if (input === 'ya') {
          response.message = menus.stock_finish.message!;
          response.nextMenu = 'main';
        } else if (input === 'edit') {
          response.message = menus.stock_start.message!;
          response.nextMenu = 'stock_start';
        } else {
          response.message = `Pilihan tidak valid. Balas 'ya' atau 'edit'.`;
        }
        break;

      case 'posm_start':
        if (input.toLowerCase().startsWith('jenis:') || input.toLowerCase() === 'batal') {
          if (input.toLowerCase() === 'batal') {
            response.message = menus.main.message!;
            response.nextMenu = 'main';
          } else {
            setChatState(prev => ({
              ...prev,
              sessionData: { ...prev.sessionData, posmCount: prev.sessionData.posmCount + 1 }
            }));
            response.message = menus.posm_confirm.message!;
            response.nextMenu = 'posm_confirm';
          }
        } else {
          response.message = `Format salah. Silakan gunakan format:<br>${menus.posm_start.message}`;
        }
        break;

      case 'posm_confirm':
        if (input === 'ya') {
          response.message = menus.posm_finish.message!;
          response.nextMenu = 'main';
        } else if (input === 'edit') {
          response.message = menus.posm_start.message!;
          response.nextMenu = 'posm_start';
        } else {
          response.message = `Pilihan tidak valid. Balas 'ya' atau 'edit'.`;
        }
        break;

      case 'report':
        if (input === '0') {
          response.message = menus.main.message!;
          response.nextMenu = 'main';
        } else {
          response.message = `Pilihan tidak valid. Ketik '0' untuk kembali.`;
        }
        break;
    }

    if (input === '0' && chatState.currentMenu !== 'main') {
      response.message = menus.main.message!;
      response.nextMenu = 'main';
    }

    return response;
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userInput = inputValue.trim();
    addMessage(userInput, 'user');
    setInputValue('');

    const response = getBotResponse(userInput.toLowerCase());

    setTimeout(() => {
      addMessage(response.message, 'bot');
      setChatState(prev => ({ ...prev, currentMenu: response.nextMenu }));
    }, 500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  useEffect(() => {
    // Initialize with main menu
    addMessage(menus.main.message!, 'bot');
  }, []);

  const { t } = useI18n();
  return (
    <section id="demo" className="py-20 px-4 bg-background text-center">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4 animate-fade-in">
          {t('demo_heading')}
        </h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
          {t('demo_subtitle')}
        </p>
        
        <div className="flex items-center justify-center">
          <div 
            className="w-full max-w-md h-[90vh] max-h-[600px] bg-gray-100 rounded-3xl shadow-float flex flex-col overflow-hidden animate-float"
            role="region" 
            aria-label="Simulasi chat Rodaya"
          >
            {/* Chat Header */}
            <div className="whatsapp-header text-white px-4 py-4 rounded-t-3xl flex items-center">
              <div className="flex flex-col text-left">
                <span className="font-semibold text-lg">Field Sales Bot</span>
                <span className="text-xs opacity-90">FMCG Assistant</span>
              </div>
            </div>

            {/* Chat Body */}
            <div 
              ref={chatBodyRef}
              className="flex-1 p-4 overflow-y-auto whatsapp-body flex flex-col gap-3"
            >
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`max-w-[80%] p-3 rounded-2xl text-sm animate-fade-in ${
                    message.type === 'bot' 
                      ? 'whatsapp-bubble-bot self-start rounded-bl-sm shadow-sm' 
                      : 'whatsapp-bubble-user self-end rounded-br-sm shadow-sm'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div 
                    dangerouslySetInnerHTML={{ __html: message.text }} 
                    className="leading-relaxed"
                  />
                  <div className="text-xs opacity-70 mt-2 text-right">
                    {message.time}
                  </div>
                </div>
              ))}
            </div>

            {/* Chat Input */}
            <div className="p-3 bg-gray-200 rounded-b-3xl flex gap-2">
              <Input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ketik pesan..."
                className="flex-1 rounded-full border-gray-300 focus:border-primary focus:ring-primary"
                aria-label="Ketik pesan"
              />
              <Button
                onClick={handleSendMessage}
                size="sm"
                className="rounded-full w-11 h-11 bg-whatsapp-dark hover:opacity-90 p-0"
                aria-label="Kirim pesan"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                  <path d="M3.478 2.375A.75.75 0 014.25 2.25h15.5a.75.75 0 01.815.79l-1.55 12.875a.75.75 0 01-1.496.074l-4.793-1.611a.75.75 0 00-.738 0L8.761 15.5a.75.75 0 01-1.496-.074L3.478 3.165a.75.75 0 01.0-.79z" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatDemo;