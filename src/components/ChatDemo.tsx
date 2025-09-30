import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";

interface Message {
  text: string;
  type: 'bot' | 'user';
  time: string;
}

const ChatDemo = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const chatBodyRef = useRef<HTMLDivElement>(null);

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
    
    setTimeout(() => {
      if (chatBodyRef.current) {
        chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
      }
    }, 100);
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    
    addMessage(inputValue, 'user');
    setInputValue('');
    
    // Simple bot responses
    setTimeout(() => {
      addMessage("✅ Data diterima. Ketik '0' untuk menu utama.", 'bot');
    }, 500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  useEffect(() => {
    // Initial message
    addMessage(
      "👋 Selamat datang, Motoris!\n\nKetik angka menu yang Anda pilih:\n1. Kunjungan Outlet\n2. Input Stok & Order\n3. Update Display POSM\n4. Laporan Harian\n0. Kembali",
      'bot'
    );
  }, []);

  return (
    <section id="demo" className="py-20 px-4 bg-gradient-hero-dark">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-primary text-sm font-medium mb-4 bg-primary/10 px-4 py-2 rounded-full">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            Langkah 2
          </div>
          <h2 className="text-3xl font-bold mb-4 text-white">
            Simulasi Percakapan Rodaya di WhatsApp
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Contoh percakapan ini menunjukkan bagaimana Motoris berinteraksi dengan bot Rodaya. 
            Pilih menu, isi stok & order, hingga mendapatkan laporan harian secara otomatis pada dashboard di bawah.
          </p>
        </div>
        
        <div className="flex items-center justify-center">
          <div 
            className="w-full max-w-md bg-card rounded-3xl shadow-float flex flex-col overflow-hidden"
            style={{ height: '600px' }}
          >
            {/* WhatsApp Header */}
            <div className="bg-primary px-4 py-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white font-semibold">
                R
              </div>
              <div className="flex-1 text-left">
                <div className="font-semibold text-white">Rodaya</div>
                <div className="text-xs text-white/80">Bot Motoris FMCG</div>
              </div>
            </div>

            {/* Chat Body */}
            <div 
              ref={chatBodyRef}
              className="flex-1 p-4 overflow-y-auto bg-[#e5ddd5] flex flex-col gap-2"
            >
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[75%] px-4 py-2 rounded-lg shadow-sm ${
                      message.type === 'bot' 
                        ? 'bg-white text-gray-900' 
                        : 'bg-[#dcf8c6] text-gray-900'
                    }`}
                  >
                    <div className="text-sm whitespace-pre-line leading-relaxed">
                      {message.text}
                    </div>
                    <div className="text-[10px] text-gray-600 mt-1 text-right">
                      {message.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Chat Input */}
            <div className="p-3 bg-gray-100 flex gap-2 items-center">
              <Input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ketik pesan..."
                className="flex-1 rounded-full bg-white border-0"
              />
              <Button
                onClick={handleSendMessage}
                size="icon"
                className="rounded-full bg-primary hover:bg-primary-light w-10 h-10"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 text-center">
          <p className="text-white/60 text-sm mb-4">Gunakan tombol cepat untuk mengisi chat:</p>
          <div className="flex flex-wrap gap-2 justify-center max-w-2xl mx-auto">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setInputValue("1")}
              className="bg-white/5 border-white/20 text-white hover:bg-white/10"
            >
              Menu Utama
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setInputValue("Kunjungan Outlet")}
              className="bg-white/5 border-white/20 text-white hover:bg-white/10"
            >
              Kunjungan Outlet
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setInputValue("Stok:10, Beli:5")}
              className="bg-white/5 border-white/20 text-white hover:bg-white/10"
            >
              Input Stok
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setInputValue("Daftar Outlet Baru")}
              className="bg-white/5 border-white/20 text-white hover:bg-white/10"
            >
              Daftar Outlet Baru
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setInputValue("Input POSM")}
              className="bg-white/5 border-white/20 text-white hover:bg-white/10"
            >
              Input POSM
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatDemo;
