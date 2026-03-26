// @ts-nocheck
/* eslint-disable */
import { useState, useEffect, useRef } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { supabase } from '@/supabase';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandInput as CommandInputBase, CommandItem, CommandList } from '@/components/ui/command';
import { cn } from '@/lib/utils';
import { ArrowLeft, Copy, CreditCard, User, Plus, Minus, MapPin, Check, ChevronsUpDown, ShoppingCart } from 'lucide-react';
import { Toaster as Sonner, toast } from 'sonner';
import { Separator } from '@/components/ui/separator';
import { getFbcFbpCookies, getClientIp } from '@/utils';

// --- Embedded Adress Component ---
const ApiCombobox = ({
  options, value, onSelect, placeholder, searchPlaceholder, disabled, isOpen, setOpen
}: any) => (
  <Popover open={isOpen} onOpenChange={setOpen}>
    <PopoverTrigger asChild>
      <Button
        variant="outline"
        role="combobox"
        aria-expanded={isOpen}
        className="w-full justify-between font-semibold text-left h-16 bg-slate-50 border-slate-200 text-[13px]"
        disabled={disabled}
      >
        <span className="truncate">{value ? options.find((opt: any) => opt.name === value)?.name : placeholder}</span>
        <ChevronsUpDown className="ml-2 h-6 w-6 shrink-0 opacity-50" />
      </Button>
    </PopoverTrigger>
    <PopoverContent className="w-[--radix-popover-trigger-width] p-0" align="start">
      <Command>
        <CommandInput placeholder={searchPlaceholder} className="text-[13px] h-14" />
        <CommandList>
          <CommandEmpty className="text-[13px] p-5">Tidak ditemukan.</CommandEmpty>
          <CommandGroup>
            {options.map((opt: any) => (
              <CommandItem
                key={opt.id}
                value={opt.name}
                onSelect={() => {
                  onSelect(opt);
                  setOpen(false);
                }}
                className="text-[13px] py-4"
              >
                <Check className={cn("mr-3 h-6 w-6", value === opt.name ? "opacity-100" : "opacity-0")} />
                {opt.name}
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </Command>
    </PopoverContent>
  </Popover>
);

const AdressID = ({
  selectedProvince, setSelectedProvince, userAddress, setUserAddress,
  kota, setKota, kecamatan, setKecamatan, kodePos, setKodePos
}: any) => {
  const [provincesData, setProvincesData] = useState<any[]>([]);
  const [citiesData, setCitiesData] = useState<any[]>([]);
  const [selectedProvId, setSelectedProvId] = useState('');
  
  const [openProv, setOpenProv] = useState(false);
  const [openCity, setOpenCity] = useState(false);

  const [search, setSearch] = useState('');
  const goApiKey = 'd1880b4e-671b-58f8-b099-8321ac33';

  useEffect(() => {
    fetch(`https://api.goapi.io/regional/provinsi?api_key=${goApiKey}`)
      .then(res => res.json())
      .then(data => {
        if (data.status === 'success') setProvincesData(data.data);
      })
      .catch(err => console.error('[GoAPI] Fetch provinces error:', err));
  }, []);

  useEffect(() => {
    if (selectedProvId) {
      fetch(`https://api.goapi.io/regional/kota?provinsi_id=${selectedProvId}&api_key=${goApiKey}`)
        .then(res => res.json())
        .then(data => {
          if (data.status === 'success') setCitiesData(data.data);
        })
        .catch(err => console.error('[GoAPI] Fetch cities error:', err));
    } else {
      setCitiesData([]);
    }
  }, [selectedProvId]);

  return (
    <div className="space-y-6 pt-2">
      <div className="grid grid-cols-1 gap-6">
        <div className="space-y-2.5">
          <Label className="text-[13px] font-semibold uppercase tracking-wider text-slate-600 ml-1">Provinsi</Label>
          <ApiCombobox
            options={provincesData} value={selectedProvince}
            onSelect={(opt: any) => {
              setSelectedProvince(opt.name); setSelectedProvId(opt.id);
              setKota(''); setSearch(''); setKecamatan(''); setKodePos(''); setUserAddress('');
            }}
            placeholder="Pilih Provinsi..." searchPlaceholder="Cari provinsi..."
            isOpen={openProv} setOpen={setOpenProv}
          />
        </div>
        <div className="space-y-2.5">
          <Label className="text-[13px] font-semibold uppercase tracking-wider text-slate-600 ml-1">Kota / Kabupaten</Label>
          <ApiCombobox
            options={citiesData} value={kota} disabled={!selectedProvId}
            onSelect={(opt: any) => {
              setKota(opt.name);
              setSearch(''); setKecamatan(''); setKodePos(''); setUserAddress('');
            }}
            placeholder="Pilih Kota..." searchPlaceholder="Cari kota..."
            isOpen={openCity} setOpen={setOpenCity}
          />
        </div>
      </div>

      <div className="space-y-2.5">
        <Label className="text-[13px] font-semibold uppercase tracking-wider text-slate-600 ml-1">Alamat Lengkap</Label>
        <Input
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setUserAddress(e.target.value);
          }}
          placeholder="Ketikan alamat rumah anda (Nama Jalan, No Rumah, Blok)"
          className="h-16 bg-slate-50 border-slate-200 text-[13px] font-medium rounded-2xl px-6"
          required
        />
      </div>

      <div className="grid grid-cols-2 gap-5">
        <div className="space-y-2.5">
          <Label className="text-[13px] font-semibold uppercase tracking-wider text-slate-600 ml-1">Kecamatan</Label>
          <Input value={kecamatan} onChange={(e) => setKecamatan(e.target.value)} placeholder="Kecamatan" className="h-16 bg-slate-50 border-slate-200 text-[13px] font-medium rounded-2xl" required />
        </div>
        <div className="space-y-2.5">
          <Label className="text-[13px] font-semibold uppercase tracking-wider text-slate-600 ml-1">Kode Pos</Label>
          <Input value={kodePos} onChange={(e) => setKodePos(e.target.value)} placeholder="00000" className="h-16 bg-slate-50 border-slate-200 text-[13px] font-medium rounded-2xl" required />
        </div>
      </div>
    </div>
  );
};

const SectionTitle = ({ children, icon: Icon }: any) => (
  <div className="flex items-center gap-4 mb-5">
    <div className="w-12 h-12 rounded-2xl bg-rose-50 flex items-center justify-center text-rose-600 shadow-sm border border-rose-100">
      {Icon && <Icon className="w-6 h-6" />}
    </div>
    <h3 className="text-[13px] font-semibold text-slate-800 uppercase tracking-normal leading-none">{children}</h3>
  </div>
);

export default function DrelfPaymentPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const affiliateRef = searchParams.get('id');
  const ctwaId = searchParams.get('ctwa_id');
  const purchaseFiredRef = useRef(false);
  
  const PIXEL_ID = '1749197952320359';
  const brandName = 'DRELF Collagen';

  const products = [
    { id: 'box', name: 'DRELF Ultimate Box (10 Sachets)', price: 600000, currency: 'IDR', img: '' },
  ];

  const [selectedProductId] = useState(products[0].id);
  const [quantity, setQuantity] = useState(1);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [userAddress, setUserAddress] = useState('');
  const [selectedProvince, setSelectedProvince] = useState('');
  const [kota, setKota] = useState('');
  const [kecamatan, setKecamatan] = useState('');
  const [kodePos, setKodePos] = useState('');

  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('BCA_MANUAL');
  const [loading, setLoading] = useState(false);
  const [paymentData, setPaymentData] = useState<any>(null);
  const [showPaymentInstructions, setShowPaymentInstructions] = useState(false);
  const [retailOpen, setRetailOpen] = useState(false);

  const selectedProduct = products.find(p => p.id === selectedProductId) || products[0];
  const totalAmount = selectedProduct.price * quantity;

  const sendCapiEvent = async (eventName: string, eventData: any = {}) => {
    try {
      const { fbc, fbp } = getFbcFbpCookies();
      const clientIp = await getClientIp();
      const userData: any = { 
        client_user_agent: navigator.userAgent, 
        fbc, fbp, 
        client_ip_address: clientIp,
        country: 'id'
      };
      
      if (userEmail) userData.email = userEmail;
      if (userName) userData.fn = userName.trim().split(/\s+/)[0];
      if (phoneNumber) userData.phone = phoneNumber.replace(/\D/g, '');
      if (affiliateRef) userData.external_id = affiliateRef;

      await supabase.functions.invoke('capi-universal', {
        body: { pixelId: PIXEL_ID, eventName, eventSourceUrl: window.location.href, customData: eventData, userData }
      });
    } catch (err) {
      console.error('CAPI Error:', err);
    }
  };

  useEffect(() => {
    sendCapiEvent('InitiateCheckout', {
      content_name: `Checkout ${brandName}`,
      value: totalAmount,
      currency: 'IDR'
    });
  }, []);

  useEffect(() => {
    if (!paymentData?.tripay_reference) return;

    const channel = supabase
        .channel(`payment-status-drelf-${paymentData.tripay_reference}`)
        .on(
            'postgres_changes',
            {
                event: 'UPDATE',
                schema: 'public',
                table: 'orders',
                filter: `tripay_reference=eq.${paymentData.tripay_reference}`
            },
            (payload) => {
                if (payload.new?.status === 'PAID') {
                    if (purchaseFiredRef.current) return;
                    purchaseFiredRef.current = true;
                    
                    // Auto-register as verified buyer in drelf_reviews
                    supabase.from('drelf_reviews').insert([{ 
                        user_name: userName, 
                        user_email: userEmail, 
                        is_verified: true,
                        isi_review: null, 
                        rating: null
                    }]).then(({ error }) => {
                        if (error) console.error('Review pre-registration error:', error);
                    });

                    toast.success("🎉 Pembayaran Berhasil!", { 
                        description: "Terima kasih! Pembayaran Anda telah kami terima. Pesanan Anda akan segera kami proses.", 
                        duration: 10000 
                    });
                    
                    sendCapiEvent('Purchase', {
                        content_name: selectedProduct.name,
                        value: totalAmount,
                        currency: 'IDR',
                        payment_method: selectedPaymentMethod
                    });
                }
            }
        )
        .subscribe();

    return () => {
        supabase.removeChannel(channel);
    };
  }, [paymentData?.tripay_reference]);

  const formatCurrency = (amount: number) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(amount);
  const copyToClipboard = (text: string) => { navigator.clipboard.writeText(text); toast.success("Berhasil Disalin"); };

  const handleCreatePayment = async () => {
    if (!userName || !phoneNumber || !userAddress || !selectedProvince || !kota || !kecamatan || !kodePos || !userEmail) {
      toast.error("Data Tidak Lengkap", { description: "Mohon isi semua data pengiriman & Email" });
      return;
    }
    setLoading(true);
    const fullAddress = `${userAddress}, ${kecamatan}, ${kota}, ${selectedProvince}, ${kodePos}`;
    const { fbc, fbp } = getFbcFbpCookies();
    const clientIp = await getClientIp();

    await sendCapiEvent('AddPaymentInfo', {
      content_name: selectedProduct.name,
      value: totalAmount,
      currency: 'IDR',
      payment_method: selectedPaymentMethod
    });

    try {
      const { data, error } = await supabase.functions.invoke('tripay-create-payment', {
        body: {
          subscriptionType: 'drelf', paymentMethod: selectedPaymentMethod, userName, userEmail: userEmail || `${phoneNumber}@drelf.id`, phoneNumber,
          address: fullAddress, province: selectedProvince, kota, kecamatan, kodePos, amount: totalAmount, quantity: quantity,
          productName: `${selectedProduct.name} (x${quantity})`, affiliateRef, ctwa_id: ctwaId, fbc, fbp, clientIp
        }
      });
      if (data?.success) { 
        if (data.message === "Transaction already processed.") {
          toast.success("🎉 Pembayaran Sudah Terverifikasi!", {
            description: "Pesanan Anda sedang dalam proses pengiriman.",
            duration: 5000
          });
          return;
        }
        setPaymentData(data); 
        const redirectMethods = ['DANA', 'OVO', 'SHOPEEPAY', 'LINKAJA', 'SAKUKU'];
        if (data.checkoutUrl && redirectMethods.includes(selectedPaymentMethod)) {
            window.location.href = data.checkoutUrl;
            return;
        }
        setShowPaymentInstructions(true); 
      }
      else if (selectedPaymentMethod === 'BCA_MANUAL' || selectedPaymentMethod === 'COD') { 
        setPaymentData({ paymentMethod: selectedPaymentMethod, amount: totalAmount, status: 'UNPAID', tripay_reference: `DR-${Date.now()}` }); 
        setShowPaymentInstructions(true); 
      }
      else { toast.error(data?.error || error?.message || "Gagal memproses pembayaran"); }
    } catch (error) { console.error(error); } finally { setLoading(false); }
  };

  const paymentMethods = [
    { code: 'QRIS', name: 'QRIS', description: 'Otomatis' },
    { code: 'BCAVA', name: 'BCA Virtual Account', description: 'Otomatis' },
    { code: 'BNIVA', name: 'BNI Virtual Account', description: 'Otomatis' },
    { code: 'BRIVA', name: 'BRI Virtual Account', description: 'Otomatis' },
    { code: 'MANDIRIVA', name: 'Mandiri Virtual Account', description: 'Otomatis' },
    { code: 'PERMATAVA', name: 'Permata Virtual Account', description: 'Otomatis' },
    { code: 'SMSVA', name: 'Sinarmas Virtual Account', description: 'Otomatis' },
    { code: 'MYBVA', name: 'Maybank Virtual Account', description: 'Otomatis' },
    { code: 'OVO', name: 'OVO', description: 'Otomatis' },
    { code: 'SHOPEEPAY', name: 'ShopeePay', description: 'Otomatis' },
    { code: 'BCA_MANUAL', name: 'Transfer BCA Manual', description: '1-5 Menit Verifikasi' },
    { code: 'COD', name: 'Bayar di Tempat (COD)', description: 'Bayar saat sampai' },
  ];

  if (showPaymentInstructions && paymentData) {
    return (
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyCenter: 'center', zIndex: 9999, padding: '20px' }}>
        <div style={{ backgroundColor: 'white', borderRadius: '24px', width: '100%', maxWidth: '500px', overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)' }}>
            <div style={{ padding: '32px', textAlign: 'center', borderBottom: '1px solid #f1f5f9' }}>
                <div style={{ width: '64px', height: '64px', backgroundColor: '#f0fdf4', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', color: '#16a34a' }}>
                    <Check size={32} />
                </div>
                <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>Tagihan Berhasil Dibuat</h2>
                <p style={{ fontSize: '14px', color: '#64748b', fontWeight: 500 }}>Selesaikan pembayaran Anda sekarang</p>
            </div>

            <div style={{ padding: '32px', backgroundColor: '#f8fafc' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
                    <span style={{ fontSize: '13px', fontWeight: 600, color: '#94a3b8', textTransform: 'uppercase' }}>Metode</span>
                    <span style={{ fontSize: '13px', fontWeight: 700, color: '#334155' }}>{paymentData.paymentMethod}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
                    <span style={{ fontSize: '13px', fontWeight: 600, color: '#94a3b8', textTransform: 'uppercase' }}>Ref ID</span>
                    <span style={{ fontSize: '13px', fontWeight: 700, color: '#334155', fontFamily: 'monospace' }}>{paymentData.tripay_reference}</span>
                </div>
                <div style={{ height: '1px', backgroundColor: '#e2e8f0', margin: '16px 0' }} />
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '13px', fontWeight: 600, color: '#94a3b8', textTransform: 'uppercase' }}>Total</span>
                    <span style={{ fontSize: '24px', fontWeight: 900, color: '#e11d48' }}>{formatCurrency(paymentData.amount)}</span>
                </div>
            </div>

            <div style={{ padding: '32px' }}>
                {paymentData.payCode && (
                   <div style={{ marginBottom: '24px', textAlign: 'center' }}>
                      <p style={{ fontSize: '12px', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', marginBottom: '12px' }}>Kode Bayar / VA</p>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
                         <span style={{ fontSize: '28px', fontWeight: 900, color: '#0f172a', letterSpacing: '1px' }}>{paymentData.payCode}</span>
                         <button onClick={() => copyToClipboard(paymentData.payCode)} style={{ padding: '8px', backgroundColor: '#f1f5f9', border: 'none', borderRadius: '12px', cursor: 'pointer', color: '#64748b' }}>
                            <Copy size={20} />
                         </button>
                      </div>
                   </div>
                )}

                {paymentData.qrUrl && (
                    <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                        <div style={{ display: 'inline-block', padding: '16px', backgroundColor: 'white', border: '2px solid #f1f5f9', borderRadius: '24px' }}>
                            <img src={paymentData.qrUrl} alt="QR Code" style={{ width: '200px', height: '200px' }} />
                        </div>
                        <p style={{ marginTop: '12px', fontSize: '12px', color: '#94a3b8', fontWeight: 600 }}>Scan QR di atas dengan aplikasi pembayaran Anda</p>
                    </div>
                )}

                {paymentData.paymentMethod === 'BCA_MANUAL' && (
                    <div style={{ marginBottom: '24px', textAlign: 'center' }}>
                        <p style={{ fontSize: '12px', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', marginBottom: '12px' }}>Rekening BCA</p>
                        <p style={{ fontSize: '24px', fontWeight: 900, color: '#0f172a' }}>775 114 6578</p>
                        <p style={{ fontSize: '14px', fontWeight: 600, color: '#64748b' }}>an Delia Mutia</p>
                        <button 
                            onClick={() => window.open(`https://wa.me/62895325633487?text=${encodeURIComponent(`Halo saya sudah transfer BCA.\nRef: ${paymentData.tripay_reference}\nTotal: ${paymentData.amount}`)}`)}
                            style={{ width: '100%', marginTop: '20px', padding: '16px', backgroundColor: '#25D366', color: 'white', border: 'none', borderRadius: '16px', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
                        >
                            Konfirmasi via WhatsApp
                        </button>
                    </div>
                )}

                <button 
                    onClick={() => setShowPaymentInstructions(false)}
                    style={{ width: '100%', padding: '16px', backgroundColor: 'transparent', border: 'none', color: '#94a3b8', fontWeight: 700, cursor: 'pointer' }}
                >
                    Tutup
                </button>
            </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50/50 pb-40">
      <Toaster />
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 px-5 h-20 flex items-center justify-between shadow-sm">
        <button onClick={() => navigate('/')} className="flex items-center text-slate-600 font-semibold text-[16px]">
          <ArrowLeft className="w-7 h-7 mr-2 text-rose-600" /> {brandName}
        </button>
        <div className="bg-rose-50 text-rose-600 text-[13px] font-medium tracking-wider px-5 py-2 rounded-full border border-rose-100 uppercase">
          Safe Checkout
        </div>
      </div>

      <div className="px-4 pt-10 space-y-8 max-w-lg mx-auto">
        <Card className="border border-slate-200 shadow-2xl shadow-slate-200/40 overflow-hidden rounded-[40px]">
          <CardHeader className="bg-slate-50/50 border-b border-slate-100 py-6 px-8">
             <SectionTitle icon={ShoppingCart}>Produk Pesanan</SectionTitle>
          </CardHeader>
          <CardContent className="space-y-8 pt-8 px-8 pb-10">
            <div className="flex justify-between items-center">
                <div className="flex flex-col">
                    <span className="font-semibold text-[13px]">{selectedProduct.name}</span>
                    <span className="text-[12px] text-slate-500">{formatCurrency(selectedProduct.price)}</span>
                </div>
            </div>

            <Separator className="bg-slate-100" />
            
            <div className="flex justify-between items-center">
              <Label className="text-slate-500 font-semibold uppercase tracking-normal text-[13px]">Beli Berapa?</Label>
              <div className="flex items-center gap-4 bg-slate-100 p-2 rounded-2xl border border-slate-200 shadow-inner">
                <Button variant="ghost" size="icon" onClick={() => setQuantity(q => Math.max(1, q - 1))} className="h-14 w-14 rounded-xl bg-white shadow-md hover:text-rose-600 border border-slate-200"><Minus className="h-6 w-6" /></Button>
                <span className="font-semibold text-base w-12 text-center tabular-nums">{quantity}</span>
                <Button variant="ghost" size="icon" onClick={() => setQuantity(q => Math.min(20, q + 1))} className="h-14 w-14 rounded-xl bg-white shadow-md hover:text-rose-600 border border-slate-200"><Plus className="h-6 w-6" /></Button>
              </div>
            </div>

            <div className="space-y-4 pt-4">
              <div className="flex justify-between text-[13px] font-semibold">
                <span className="text-slate-400 uppercase">SUBTOTAL</span>
                <span className="text-slate-600">{formatCurrency(totalAmount)}</span>
              </div>
              <div className="flex justify-between text-[13px] font-semibold text-green-600">
                <span className="uppercase">ONGKOS KIRIM</span>
                <span className="uppercase tracking-normal italic">Gratis</span>
              </div>
              <Separator className="bg-slate-100 my-6" />
              <div className="flex justify-between items-center">
                <span className="font-semibold text-slate-900 text-[13px] tracking-normal uppercase">TOTAL BAYAR</span>
                <span className="text-base font-semibold text-rose-600 tabular-nums tracking-normal">{formatCurrency(totalAmount)}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border border-slate-200 shadow-2xl shadow-slate-200/40 rounded-[40px]">
           <CardHeader className="bg-slate-50/50 border-b border-slate-100 py-6 px-8">
             <SectionTitle icon={User}>Data Pengiriman</SectionTitle>
          </CardHeader>
          <CardContent className="space-y-6 pt-8 px-8 pb-10">
            <div className="space-y-2.5">
              <Label className="text-[13px] font-semibold uppercase tracking-wider text-slate-600 ml-1">Nama Lengkap</Label>
              <Input placeholder="Isi nama anda" value={userName} onChange={e => setUserName(e.target.value)} className="h-16 bg-slate-50 border-slate-200 rounded-2xl text-[13px] font-semibold shadow-inner px-6" />
            </div>
            <div className="space-y-2.5">
              <Label className="text-[13px] font-semibold uppercase tracking-wider text-slate-600 ml-1">Email Aktif</Label>
              <Input type="email" placeholder="email@anda.com" value={userEmail} onChange={e => setUserEmail(e.target.value)} className="h-16 bg-slate-50 border-slate-200 rounded-2xl text-[13px] font-semibold shadow-inner px-6" />
            </div>
            <div className="space-y-2.5">
              <Label className="text-[13px] font-semibold uppercase tracking-wider text-slate-600 ml-1">Nomor WhatsApp</Label>
              <Input type="tel" placeholder="0812..." value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} className="h-16 bg-slate-50 border-slate-200 rounded-2xl text-[13px] font-semibold shadow-inner px-6" />
            </div>
            <AdressID selectedProvince={selectedProvince} setSelectedProvince={setSelectedProvince} userAddress={userAddress} setUserAddress={setUserAddress} kota={kota} setKota={setKota} kecamatan={kecamatan} setKecamatan={setKecamatan} kodePos={kodePos} setKodePos={setKodePos} />
          </CardContent>
        </Card>

        <Card className="border border-slate-200 shadow-2xl shadow-slate-200/40 rounded-[40px]">
          <CardHeader className="bg-slate-50/50 border-b border-slate-100 py-6 px-8">
             <SectionTitle icon={CreditCard}>Metode Pembayaran</SectionTitle>
          </CardHeader>
          <CardContent className="pt-8 px-8 pb-10">
            <div style={{ padding: '4px 0 16px', color: '#e11d48', fontSize: '13px', fontWeight: 700, lineHeight: '1.5' }}>
                QRIS, Virtual, Ovo 3 detik, manual 5 menit setelah pembayaran langsung konfirmasi, dikirim di hari yang sama
            </div>
            <div className="payment-pmgrid">
                {paymentMethods.slice(0, 9).map((method) => (
                    <div key={method.code} className={`payment-pmopt ${selectedPaymentMethod === method.code ? "sel" : ""}`} onClick={() => { setSelectedPaymentMethod(method.code); setRetailOpen(false); }}>
                        <div className="payment-pmname">{method.name}</div>
                    </div>
                ))}
                
                <div className={`payment-pmopt ${['INDOMARET', 'ALFAMART', 'ALFAMIDI'].includes(selectedPaymentMethod) ? "sel" : ""}`} onClick={() => setRetailOpen(!retailOpen)}>
                    <div className="payment-pmname">Retail / Indomart ▾</div>
                    <div className="payment-pmsub">Indomaret, Alfamart, Alfamidi</div>
                </div>
            </div>

            {retailOpen && (
                <div className="payment-pmgrid" style={{ marginTop: '10px', padding: '12px', background: 'rgba(225,29,72,0.05)', borderRadius: '12px', border: '1px solid rgba(225,29,72,0.1)' }}>
                    {[{code: 'INDOMARET', name: 'Indomaret'}, {code: 'ALFAMART', name: 'Alfamart'}, {code: 'ALFAMIDI', name: 'Alfamidi'}].map((method) => (
                        <div key={method.code} className={`payment-pmopt ${selectedPaymentMethod === method.code ? "sel" : ""}`} onClick={() => setSelectedPaymentMethod(method.code)}>
                            <div className="payment-pmname">{method.name}</div>
                        </div>
                    ))}
                </div>
            )}
            
            <div className="payment-pmgrid" style={{ marginTop: '10px' }}>
                 <div className={`payment-pmopt ${selectedPaymentMethod === 'BCA_MANUAL' ? "sel" : ""}`} onClick={() => { setSelectedPaymentMethod('BCA_MANUAL'); setRetailOpen(false); }}>
                    <div className="payment-pmname">Transfer BCA Manual</div>
                </div>
                 <div className={`payment-pmopt ${selectedPaymentMethod === 'COD' ? "sel" : ""}`} onClick={() => { setSelectedPaymentMethod('COD'); setRetailOpen(false); }}>
                    <div className="payment-pmname">Bayar di Tempat (COD)</div>
                </div>
            </div>
            <Button className="w-full bg-rose-600 hover:bg-rose-700 h-20 text-base font-semibold rounded-3xl mt-10 shadow-xl" onClick={handleCreatePayment} disabled={loading}>
              {loading ? "Memproses..." : "Bayar Sekarang"}
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
