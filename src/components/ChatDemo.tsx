import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Message {
  text: string | (() => string);
  type: 'bot' | 'user';
  delay: number;
}

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

const ChatDemo = () => {
  const [messages, setMessages] = useState<Array<{ text: string; type: 'bot' | 'user'; time: string }>>([]);
  const [inputValue, setInputValue] = useState("");
  const [isDemoPlaying, setIsDemoPlaying] = useState(true);
  const [demoIndex, setDemoIndex] = useState(0);
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
  const demoTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const mainMenuText = "👋 Selamat datang, Motoris!<br><br>Silakan pilih menu:<br>1. Kunjungan Outlet<br>2. Input Stok & Order<br>3. Update Display POSM<br>4. Laporan Harian<br>0. Kembali<br><br><i>Ketik angka menu yang Anda pilih</i>";

  const demoFlow: Message[] = [
    { text: mainMenuText, type: 'bot', delay: 800 },
    { text: '1', type: 'user', delay: 1000 },
    { text: 'toko joni', type: 'user', delay: 1100 },
    { text: "Toko ditemukan: <b>toko joni</b><br>Alamat: Jl. Joni No. 5, Bekasi<br><br>Ketik 'ya' untuk melanjutkan kunjungan atau 'batal' untuk kembali.", type: 'bot', delay: 1200 },
    { text: 'ya', type: 'user', delay: 900 },
    { text: "✅ Kunjungan ke outlet berhasil dicatat.<br><br>Ketik '0' untuk kembali ke menu utama.", type: 'bot', delay: 900 },
    { text: '0', type: 'user', delay: 700 },
    { text: mainMenuText, type: 'bot', delay: 900 },
    { text: '2', type: 'user', delay: 1000 },
    { text: 'Stok:10, Beli:5, Catatan: kosong', type: 'user', delay: 1000 },
    { text: "Data stok & order diterima. Apakah sudah benar?<br><br>Balas 'ya' untuk simpan atau 'edit' untuk perbaikan.", type: 'bot', delay: 1100 },
    { text: 'ya', type: 'user', delay: 800 },
    { text: '✅ Data stok & order disimpan.<br><br>Ketik "0" untuk kembali ke menu utama.', type: 'bot', delay: 900 },
    { text: '0', type: 'user', delay: 700 },
    { text: mainMenuText, type: 'bot', delay: 900 },
    { text: '4', type: 'user', delay: 1000 },
    { text: () => `Ringkasan kunjungan hari ini:<br>- Total kunjungan: ${chatState.sessionData.totalVisits} outlet<br>- Total order: ${chatState.sessionData.totalOrder} pack<br>- Total POSM dipasang: ${chatState.sessionData.posmCount} item<br><br>Ketik '0' untuk kembali ke menu utama.`, type: 'bot', delay: 1200 },
    { text: '0', type: 'user', delay: 800 },
    { text: '👋 Demo selesai. Percakapan akan diulang otomatis.', type: 'bot', delay: 1200 }
  ];

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

  const playDemo = () => {
    if (!isDemoPlaying || demoIndex >= demoFlow.length) {
      if (demoIndex >= demoFlow.length) {
        // Reset demo
        setTimeout(() => {
          if (isDemoPlaying) {
            setMessages([]);
            setDemoIndex(0);
            playDemo();
          }
        }, 2500);
      }
      return;
    }

    const currentMessage = demoFlow[demoIndex];
    const messageText = typeof currentMessage.text === 'function' ? currentMessage.text() : currentMessage.text;

    demoTimeoutRef.current = setTimeout(() => {
      addMessage(messageText, currentMessage.type);
      setDemoIndex(prev => prev + 1);
      playDemo();
    }, currentMessage.delay);
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    
    // Stop demo on user interaction
    setIsDemoPlaying(false);
    if (demoTimeoutRef.current) {
      clearTimeout(demoTimeoutRef.current);
    }

    const userInput = inputValue.trim();
    addMessage(userInput, 'user');
    setInputValue('');

    // Simple bot response for interactive mode
    setTimeout(() => {
      addMessage("Terima kasih! Ini adalah demo interaktif. Dalam versi sebenarnya, bot akan merespons sesuai input Anda.", 'bot');
    }, 500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  useEffect(() => {
    // Start demo on component mount
    playDemo();
    
    return () => {
      if (demoTimeoutRef.current) {
        clearTimeout(demoTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isDemoPlaying && demoIndex < demoFlow.length) {
      playDemo();
    }
  }, [demoIndex, isDemoPlaying]);

  return (
    <section id="demo" className="py-20 px-4 bg-background text-center">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4 animate-fade-in">
          Mockup Interaktif
        </h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
          Simulasi alur kerja Motoris—bisa diketik untuk mencoba. Jika tidak ada input, percakapan berjalan otomatis.
        </p>
        
        <div className="flex items-center justify-center">
          <div 
            className="w-full max-w-sm h-[640px] bg-gray-100 rounded-3xl shadow-float flex flex-direction-column overflow-hidden animate-float"
            role="region" 
            aria-label="Simulasi chat Rodaya"
          >
            {/* Chat Header */}
            <div className="whatsapp-header text-white px-4 py-3 rounded-t-3xl flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/20" aria-hidden="true"></div>
                <div className="flex flex-col text-left">
                  <span className="font-semibold text-lg">Rodaya</span>
                  <span className="text-xs opacity-90 flex items-center gap-1">
                    <span className="inline-block w-2 h-2 rounded-full bg-green-400"></span>
                    online
                  </span>
                </div>
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
                  className={`max-w-[85%] p-3 rounded-2xl text-sm animate-fade-in ${
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
                  <div className="text-xs opacity-70 mt-1 text-right">
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
                  <path d="M2.516 2.148a.75.75 0 01.83-.112l18 9a.75.75 0 010 1.348l-18 9A.75.75 0 011.5 20.25l2.54-8.466a.75.75 0 01.516-.516L13.022 8.75a.25.25 0 000-.5L4.556 5.71a.75.75 0 01-.516-.516L1.61 2.3a.75.75 0 01.906-.152z"/>
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