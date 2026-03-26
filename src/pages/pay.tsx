// @ts-nocheck
/* eslint-disable */
import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandInput as CommandInputBase, CommandItem, CommandList } from '@/components/ui/command';
import { cn } from '@/lib/utils';
import { ArrowLeft, Copy, CreditCard, User, Plus, Minus, MapPin, Check, ChevronsUpDown, ShoppingCart } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/supabase';
import { Toaster } from '@/components/ui/toaster';
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
  const { toast } = useToast();
  
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

  const formatCurrency = (amount: number) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(amount);
  const copyToClipboard = (text: string) => { navigator.clipboard.writeText(text); toast({ title: "Berhasil Disalin" }); };

  const handleCreatePayment = async () => {
    if (!userName || !phoneNumber || !userAddress || !selectedProvince || !kota || !kecamatan || !kodePos) {
      toast({ title: "Data Tidak Lengkap", description: "Mohon isi semua data pengiriman", variant: "destructive" });
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
      else { toast({ title: "Error", description: data?.error || error?.message || "Gagal", variant: "destructive" }); }
    } catch (error) { console.error(error); } finally { setLoading(false); }
  };

  const paymentMethods = [
    { code: 'BCA_MANUAL', name: 'Transfer BCA Manual', description: 'Konfirmasi via WhatsApp' },
    { code: 'QRIS', name: 'QRIS / E-Wallet', description: 'Otomatis' },
    { code: 'BCAVA', name: 'BCA Virtual Account', description: 'Otomatis' },
    { code: 'SHOPEEPAY', name: 'ShopeePay', description: 'Otomatis' },
    { code: 'COD', name: 'Bayar di Tempat (COD)', description: 'Bayar saat barang sampai' },
  ];

  if (showPaymentInstructions && paymentData) {
    return (
      <div className="min-h-screen bg-slate-50 p-5 flex flex-col items-center">
        <Toaster />
        <div className="w-full max-w-lg space-y-8">
          <Button variant="ghost" onClick={() => setShowPaymentInstructions(false)} className="w-fit p-0 hover:bg-transparent font-semibold text-slate-500 text-[13px]">
            <ArrowLeft className="w-6 h-6 mr-2" /> Kembali
          </Button>
          
          <div className="text-center space-y-3">
            <h1 className="text-base font-semibold text-slate-900 tracking-normal">Menunggu Pembayaran</h1>
            <p className="text-slate-600 text-[13px] font-medium">Selesaikan pembayaran untuk memproses pesanan Anda.</p>
          </div>

          <Card className="border border-slate-200 shadow-xl shadow-slate-200/50 rounded-3xl">
            <CardContent className="pt-8 space-y-6 px-8 pb-10">
              <div className="flex justify-between items-center text-[13px]">
                <span className="text-slate-500 font-semibold uppercase tracking-wider text-[13px]">Reference ID</span>
                <span className="font-sans font-semibold text-rose-600 text-[13px]">{paymentData.tripay_reference}</span>
              </div>
              <Separator className="bg-slate-100" />
              <div className="flex justify-between items-center">
                <span className="text-slate-500 font-semibold uppercase tracking-wider text-[13px]">Total Tagihan</span>
                <span className="text-base font-semibold text-slate-900">{formatCurrency(paymentData.amount)}</span>
              </div>
            </CardContent>
          </Card>

          {paymentData.paymentMethod === 'BCA_MANUAL' && (
            <Card className="border border-slate-200 shadow-xl shadow-slate-200/50 overflow-hidden rounded-3xl">
              <div className="bg-rose-600 p-6 text-white flex justify-between items-center">
                <span className="font-semibold text-base uppercase tracking-normal">BCA TRANSFER MANUAL</span>
                <div className="bg-white/20 px-4 py-1.5 rounded-full text-[12px] font-semibold uppercase tracking-normal">KONFIRMASI WA</div>
              </div>
              <CardContent className="space-y-8 pt-10 text-center px-8 pb-12">
                <div className="space-y-3">
                  <p className="text-[13px] font-semibold text-slate-400 uppercase tracking-normal">Nomor Rekening</p>
                  <div className="flex items-center justify-center gap-4">
                    <span className="text-base font-sans font-semibold text-slate-900 tracking-normal">775 114 6578</span>
                    <Button variant="ghost" size="icon" onClick={() => copyToClipboard('7751146578')} className="h-14 w-14 text-rose-600 bg-slate-50 rounded-2xl"><Copy className="w-7 h-7" /></Button>
                  </div>
                  <p className="text-[13px] font-semibold text-slate-700">an Delia Mutia</p>
                </div>
                <Button className="w-full bg-[#25D366] hover:bg-[#128C7E] h-20 text-base font-semibold rounded-3xl shadow-xl shadow-green-100" onClick={() => window.open(`https://wa.me/62895325633487?text=${encodeURIComponent(`Halo saya sudah transfer BCA.\nRef: ${paymentData.tripay_reference}\nTotal: ${paymentData.amount}`)}`)}>
                  <FaWhatsapp className="mr-3 w-8 h-8" /> Konfirmasi WhatsApp
                </Button>
              </CardContent>
            </Card>
          )}

          {paymentData.paymentMethod === 'COD' && (
            <Card className="border border-slate-200 shadow-xl shadow-slate-200/50 p-12 text-center space-y-8 rounded-[40px]">
              <div className="w-28 h-24 bg-green-50 rounded-full flex items-center justify-center text-green-600 mx-auto border border-green-100">
                <Check className="w-16 h-16" />
              </div>
              <h3 className="text-base font-semibold text-slate-900">Pesanan COD Berhasil!</h3>
              <p className="text-[13px] text-slate-600 leading-relaxed font-medium">Tim kami akan menghubungi Anda via WhatsApp untuk konfirmasi pengiriman. Bayar saat barang sampai.</p>
              <Button className="w-full bg-[#25D366] hover:bg-[#128C7E] h-20 font-semibold text-base rounded-3xl" onClick={() => window.open(`https://wa.me/62895325633487?text=${encodeURIComponent(`Halo Kak, saya sudah order ${brandName} COD.\nRef: ${paymentData.tripay_reference}`)}`)}>
                Chat Admin Sekarang
              </Button>
            </Card>
          )}

          {(paymentData.payCode || paymentData.qrUrl) && (
            <Card className="border border-slate-200 shadow-xl shadow-slate-200/50 overflow-hidden rounded-[40px]">
               <div className="bg-slate-900 p-6 text-white flex justify-between items-center">
                <span className="font-semibold text-base uppercase tracking-normal">{paymentData.paymentMethod}</span>
                <span className="text-[12px] font-semibold opacity-60 uppercase tracking-normal">OTOMATIS</span>
              </div>
              <CardContent className="pt-10 space-y-10 text-center px-8 pb-14">
                {paymentData.payCode && (
                  <div className="space-y-4">
                    <p className="text-[13px] font-semibold text-slate-400 uppercase tracking-normal">KODE BAYAR / VA</p>
                    <div className="flex items-center justify-center gap-5">
                      <span className="text-2xl font-sans font-semibold text-rose-600 tracking-wider">{paymentData.payCode}</span>
                      <Button variant="ghost" size="icon" onClick={() => copyToClipboard(paymentData.payCode)} className="h-16 w-16 bg-slate-50 rounded-2xl"><Copy className="w-8 h-8" /></Button>
                    </div>
                  </div>
                )}
                {paymentData.qrUrl && (
                  <div className="flex flex-col items-center gap-8">
                    <div className="p-8 bg-white rounded-[50px] border-4 border-slate-50 shadow-2xl">
                      <img src={paymentData.qrUrl} alt="QR" className="w-72 h-72" />
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          )}
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
            <RadioGroup value={selectedPaymentMethod} onValueChange={setSelectedPaymentMethod} className="grid grid-cols-1 gap-4">
              {paymentMethods.map((method) => (
                <Label 
                  key={method.code} 
                  htmlFor={method.code} 
                  className={`flex items-center justify-between p-6 rounded-3xl border-2 cursor-pointer transition-all active:scale-[0.98] shadow-sm ${selectedPaymentMethod === method.code ? 'bg-rose-50/50 border-rose-500 shadow-rose-100 shadow-xl scale-[1.02]' : 'bg-white border-slate-100'}`}
                >
                  <div className="flex items-center gap-5">
                    <div>
                      <p className={`text-[13px] font-semibold ${selectedPaymentMethod === method.code ? 'text-rose-900' : 'text-slate-700'}`}>{method.name}</p>
                      <p className="text-[13px] text-slate-400 font-semibold uppercase tracking-normal mt-0.5">{method.description}</p>
                    </div>
                  </div>
                  <RadioGroupItem value={method.code} id={method.code} className="hidden" />
                </Label>
              ))}
            </RadioGroup>
            <Button className="w-full bg-rose-600 hover:bg-rose-700 h-20 text-base font-semibold rounded-3xl mt-10 shadow-xl" onClick={handleCreatePayment} disabled={loading}>
              {loading ? "Memproses..." : "Bayar Sekarang"}
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
