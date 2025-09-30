import { useState, useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';

interface Message {
  text: string;
  type: 'bot' | 'user';
  time: string;
}

interface KPIs {
  kunjungan: number;
  order: number;
  posm: number;
  outlets: Set<string>;
}

interface HistoryItem {
  outlet: string;
  address: string;
  time: string;
}

type FlowState = 
  | 'menu'
  | 'kunjungan_outlet_await'
  | 'kunjungan_address_await'
  | 'stok_produk_await'
  | 'stok_qty_await'
  | 'outletbaru_nama_await'
  | 'outletbaru_alamat_await'
  | 'posm_jenis_await'
  | 'posm_outlet_await'
  | 'confirm';

const InteractiveDemo = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [flow, setFlow] = useState<FlowState>('menu');
  const [kpis, setKpis] = useState<KPIs>({ kunjungan: 0, order: 0, posm: 0, outlets: new Set() });
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [chartData, setChartData] = useState([0, 0, 0, 0, 0, 0, 0]);
  const [tempData, setTempData] = useState<any>({});
  const [lastOutlet, setLastOutlet] = useState<string | null>(null);
  const chatRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const getCurrentTime = () => {
    const now = new Date();
    return now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
  };

  const addMessage = (text: string, type: 'bot' | 'user' = 'bot') => {
    setMessages(prev => [...prev, { text, type, time: getCurrentTime() }]);
    setTimeout(() => {
      if (chatRef.current) {
        chatRef.current.scrollTop = chatRef.current.scrollHeight;
      }
    }, 100);
  };

  const showMenu = () => {
    addMessage("Halo, saya <b>Rodaya</b> 👋<br>Pilih menu dengan <b>angka</b>:<br>1. Kunjungan Outlet<br>2. Input Stok / Order<br>3. Daftar Outlet Baru<br>4. Input POSM<br><i>Ketik '0' kapan saja untuk kembali ke Menu.</i>");
    setFlow('menu');
    setTempData({});
  };

  const updateKPIs = (updates: Partial<KPIs>) => {
    setKpis(prev => ({ ...prev, ...updates }));
  };

  const handleUserInput = (text: string) => {
    if (!text.trim()) return;
    addMessage(text, 'user');

    // Global back to menu
    if (text === '0') {
      showMenu();
      return;
    }

    switch (flow) {
      case 'menu':
        if (!/^[1-4]$/.test(text)) {
          addMessage("Masukkan angka 1, 2, 3, atau 4 untuk memilih menu, atau 0 untuk kembali.");
          return;
        }
        setTempData({});
        if (text === '1') {
          setFlow('kunjungan_outlet_await');
          addMessage("<b>Kunjungan Outlet</b><br>Silakan masukkan <b>Nama Outlet</b>:");
        } else if (text === '2') {
          setFlow('stok_produk_await');
          addMessage("<b>Input Stok / Order</b><br>Silakan masukkan <b>Nama Produk</b>:");
        } else if (text === '3') {
          setFlow('outletbaru_nama_await');
          addMessage("<b>Daftar Outlet Baru</b><br>Silakan masukkan <b>Nama Outlet</b>:");
        } else if (text === '4') {
          setFlow('posm_jenis_await');
          addMessage("<b>Input POSM</b><br>Silakan masukkan <b>Jenis POSM</b> (e.g., Wobbler, Spanduk):");
        }
        break;

      case 'kunjungan_outlet_await':
        setTempData({ outlet: text });
        setFlow('kunjungan_address_await');
        addMessage(`Nama Outlet: <b>${text}</b>.<br>Sekarang masukkan <b>Alamat</b>:`);
        break;

      case 'kunjungan_address_await':
        setKpis(prev => ({
          ...prev,
          kunjungan: prev.kunjungan + 1,
          outlets: new Set([...prev.outlets, tempData.outlet])
        }));
        setHistory(prev => [...prev, { outlet: tempData.outlet, address: text, time: getCurrentTime() }]);
        setLastOutlet(tempData.outlet);
        addMessage(`✅ Kunjungan tersimpan untuk <b>${tempData.outlet}</b>. Ketik <b>0</b> untuk kembali ke Menu.`);
        setFlow('confirm');
        break;

      case 'stok_produk_await':
        setTempData({ produk: text });
        setFlow('stok_qty_await');
        addMessage(`Nama Produk: <b>${text}</b>.<br>Sekarang masukkan <b>Jumlah (Qty)</b> dalam pack:`);
        break;

      case 'stok_qty_await':
        const qty = parseInt(text, 10);
        if (isNaN(qty) || qty < 0) {
          addMessage("❌ Jumlah tidak valid. Harap masukkan angka saja.");
          return;
        }
        setKpis(prev => ({ ...prev, order: prev.order + qty }));
        const dow = new Date().getDay();
        const idx = (dow + 6) % 7;
        setChartData(prev => {
          const newData = [...prev];
          newData[idx] += qty;
          return newData;
        });
        addMessage(`✅ Order tercatat: <b>${tempData.produk}</b> = <b>${qty}</b> pack. ${lastOutlet ? `(Outlet: <b>${lastOutlet}</b>)` : ''} Ketik <b>0</b> untuk Menu.`);
        setFlow('confirm');
        break;

      case 'outletbaru_nama_await':
        setTempData({ outlet: text });
        setFlow('outletbaru_alamat_await');
        addMessage(`Nama Outlet: <b>${text}</b>.<br>Sekarang masukkan <b>Alamat Lengkap</b>:`);
        break;

      case 'outletbaru_alamat_await':
        setKpis(prev => ({
          ...prev,
          outlets: new Set([...prev.outlets, tempData.outlet])
        }));
        setHistory(prev => [...prev, { outlet: tempData.outlet, address: text, time: getCurrentTime() }]);
        setLastOutlet(tempData.outlet);
        addMessage(`✅ Outlet baru <b>${tempData.outlet}</b> ditambahkan. Ketik <b>0</b> untuk Menu.`);
        setFlow('confirm');
        break;

      case 'posm_jenis_await':
        setTempData({ jenis: text });
        setFlow('posm_outlet_await');
        addMessage(`Jenis POSM: <b>${text}</b>.<br>Sekarang masukkan <b>Nama Outlet</b> tempat POSM dipasang:`);
        break;

      case 'posm_outlet_await':
        setKpis(prev => ({
          ...prev,
          posm: prev.posm + 1,
          outlets: new Set([...prev.outlets, text])
        }));
        setLastOutlet(text);
        addMessage(`✅ POSM <b>${tempData.jenis}</b> tercatat di <b>${text}</b>. Ketik <b>0</b> untuk Menu.`);
        setFlow('confirm');
        break;

      case 'confirm':
        addMessage("Sesi selesai. Ketik <b>0</b> untuk kembali ke Menu Utama.");
        break;
    }
  };

  const handleSend = () => {
    handleUserInput(inputValue);
    setInputValue('');
  };

  const handleReset = () => {
    setKpis({ kunjungan: 0, order: 0, posm: 0, outlets: new Set() });
    setHistory([]);
    setChartData([0, 0, 0, 0, 0, 0, 0]);
    setMessages([]);
    addMessage('Demo direset.');
    showMenu();
  };

  useEffect(() => {
    showMenu();
  }, []);

  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d');
      if (!ctx) return;

      const canvas = canvasRef.current;
      const w = canvas.width;
      const h = canvas.height;
      const pad = 30;
      const bars = chartData;
      const max = Math.max(1, ...bars);
      const bw = ((w - pad * 2) / bars.length) * 0.7;
      const labels = ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'];

      ctx.clearRect(0, 0, w, h);
      ctx.strokeStyle = '#334';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(pad, h - pad);
      ctx.lineTo(w - pad, h - pad);
      ctx.stroke();

      bars.forEach((v, i) => {
        const x = pad + (i + 0.15) * ((w - pad * 2) / bars.length);
        const hh = ((h - pad * 2) * v) / max;
        ctx.fillStyle = '#ff9b5e';
        ctx.fillRect(x, h - pad - hh, bw, hh);
        ctx.fillStyle = '#bcd6ff';
        ctx.font = '12px sans-serif';
        ctx.fillText(labels[i], x, h - 10);
      });
    }
  }, [chartData]);

  return (
    <section id="demo" className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <header className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Demo Aplikasi Rodaya</h1>
          <p className="text-muted-foreground">
            Gunakan chatbot di sebelah kiri untuk memasukkan data. Dashboard akan diperbarui secara otomatis.
          </p>
        </header>

        <div className="grid lg:grid-cols-[360px_1fr] gap-6 items-start">
          {/* Phone Mockup */}
          <div className="lg:sticky lg:top-7 space-y-4">
            <Card className="bg-white w-full max-w-[360px] mx-auto h-[720px] rounded-[36px] p-3 border-[6px] border-[#0b0b0b] flex flex-col overflow-hidden shadow-2xl">
              {/* Status Bar */}
              <div className="h-5 flex items-center justify-between px-2 text-[#0b0b0b] font-semibold text-xs">
                <span>{getCurrentTime()}</span>
                <span>4G ●●● ◥︎</span>
              </div>

              {/* Chat Header */}
              <div className="flex items-center gap-2 bg-[#075e54] text-white rounded-t-2xl p-3">
                <div className="w-7 h-7 rounded-full bg-primary grid place-items-center font-bold text-sm">R</div>
                <div>
                  <div className="font-bold text-sm">Rodaya</div>
                  <div className="text-xs opacity-85">Bot Motoris FMCG</div>
                </div>
              </div>

              {/* Chat Window */}
              <div ref={chatRef} className="flex-1 bg-[#e5ddd5] p-3 overflow-y-auto">
                {messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`max-w-[78%] p-2.5 rounded-lg my-1.5 text-sm relative shadow-sm ${
                      msg.type === 'bot'
                        ? 'bg-white border border-black/5 text-[#0b0b0b]'
                        : 'bg-[#dcf8c6] ml-auto text-[#0b0b0b]'
                    }`}
                  >
                    <div dangerouslySetInnerHTML={{ __html: msg.text }} />
                    <span className="block text-[11px] opacity-60 mt-1 text-right">{msg.time}</span>
                  </div>
                ))}
              </div>

              {/* Input Area */}
              <div className="flex gap-1.5 p-2 bg-[#f0f0f0] rounded-b-2xl items-center">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ketik angka/menu… (Enter)"
                  className="flex-1 px-3 py-2.5 rounded-2xl border border-gray-300 outline-none text-sm"
                />
                <button
                  onClick={handleSend}
                  className="bg-[#25d366] text-white px-3 py-2.5 rounded-full font-bold text-sm hover:bg-[#20ba5a] transition-colors"
                >
                  ➤
                </button>
              </div>
            </Card>

            <button
              onClick={handleReset}
              className="w-full max-w-[360px] mx-auto bg-transparent border border-dashed border-primary/40 text-primary px-4 py-2 rounded-xl hover:bg-primary/5 transition-colors"
            >
              🔁 Reset Demo
            </button>
          </div>

          {/* Right Panel */}
          <div className="space-y-6">
            {/* Instructions */}
            <Card className="bg-card border-border p-6 shadow-float">
              <h2 className="text-xl font-bold text-primary mb-2">Instruksi Kerja Agent Rodaya</h2>
              <span className="inline-block text-xs px-2 py-1 bg-primary/15 text-primary/90 border border-primary/35 rounded-full mb-3">
                Demo Interaktif
              </span>
              <p className="text-muted-foreground text-sm mb-4">
                Selamat datang di demo interaktif Rodaya. Ikuti langkah-langkah di bawah ini untuk mengoperasikan
                chatbot dan melihat pembaruan data secara real-time di dashboard.
              </p>
              <ol className="pl-5 space-y-2 text-muted-foreground text-sm list-decimal">
                <li>Pilih menu utama dengan mengetik angka dari <strong>1</strong> hingga <strong>4</strong> di chat.</li>
                <li>Setelah memilih menu, bot akan memandu Anda untuk mengisi data langkah demi langkah.</li>
                <li>Jawab setiap pertanyaan dari bot untuk melengkapi data.</li>
                <li>Jika ingin kembali ke menu utama, cukup ketik <code className="bg-muted px-1 rounded">0</code> kapan saja.</li>
                <li>Setiap data yang valid akan langsung tersimpan dan KPI di dashboard akan diperbarui secara otomatis.</li>
              </ol>
            </Card>

            {/* KPI Dashboard */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              <Card className="bg-card border-border p-4">
                <div className="text-muted-foreground text-xs mb-1">Total Kunjungan</div>
                <div className="text-3xl font-extrabold">{kpis.kunjungan}</div>
              </Card>
              <Card className="bg-card border-border p-4">
                <div className="text-muted-foreground text-xs mb-1">Total Order (pack)</div>
                <div className="text-3xl font-extrabold">{kpis.order}</div>
              </Card>
              <Card className="bg-card border-border p-4">
                <div className="text-muted-foreground text-xs mb-1">POSM Terpasang</div>
                <div className="text-3xl font-extrabold">{kpis.posm}</div>
              </Card>
              <Card className="bg-card border-border p-4">
                <div className="text-muted-foreground text-xs mb-1">Outlet Aktif</div>
                <div className="text-3xl font-extrabold">{kpis.outlets.size}</div>
              </Card>
            </div>

            {/* History */}
            <Card className="bg-card border-border p-4">
              <h3 className="text-base font-bold text-[#ffd099] mb-3">Riwayat Outlet (terbaru)</h3>
              <ul className="space-y-0">
                {history.slice(-6).reverse().map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 py-2 border-b border-dashed border-border last:border-0">
                    <span>📍</span>
                    <span className="font-bold">{item.outlet}</span>
                    <span className="text-muted-foreground text-sm">— {item.address}</span>
                    <span className="text-muted-foreground text-sm ml-auto">{item.time}</span>
                  </li>
                ))}
                {history.length === 0 && (
                  <li className="text-muted-foreground text-sm py-2">Belum ada riwayat</li>
                )}
              </ul>
            </Card>

            {/* Chart */}
            <Card className="bg-card border-border p-4">
              <canvas ref={canvasRef} width="900" height="200" className="w-full" />
              <p className="text-muted-foreground text-xs mt-2">
                Grafik dummy: setiap input <strong>Stok/Order</strong> menambah bar hari ini.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveDemo;
