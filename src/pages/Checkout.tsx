import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { QrCode, MessageCircle, Users, Calendar, Play, Gift } from "lucide-react";
import { useState } from "react";

const selectedPackage = {
  name: "Drelf Collagen Zen Master",
  subtitle: "Beauty Journey Complete Package",
  price: 989000,
  originalPrice: 1200000,
  discount: 18,
  duration: "3 bulan supply",
  includes: [
    "Drelf Collagen Zen Master (3 bottles)",
    "Exclusive Beauty Meditation Audio Guide (12 sessions)", 
    "Personal Beauty Consultation (WhatsApp)",
    "Mindful Beauty Circle Community Access",
    "Beauty Timeline Tracker App"
  ]
};

const meditationAudioAccess = [
  "Morning Glow Meditation (10 min)",
  "Stress-Release Breathing (15 min)", 
  "Beauty Sleep Meditation (20 min)",
  "Confidence Affirmations (8 min)",
  "Heart Coherence Practice (12 min)",
  "Inner Radiance Visualization (18 min)"
];

export default function Checkout() {
  const [selectedPayment, setSelectedPayment] = useState<string>("");

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <header className="hero-gradient py-6">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold text-warm-gray mb-2">
            Beauty Journey Package
          </h1>
          <p className="text-warm-gray-light">
            Complete holistic beauty transformation
          </p>
        </div>
      </header>

      {/* Package Summary */}
      <section className="container mx-auto px-4 py-6">
        <Card className="luxury-card p-6 mb-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-lg font-bold text-warm-gray mb-1">{selectedPackage.name}</h2>
              <p className="text-sm text-warm-gray-light mb-2">{selectedPackage.subtitle}</p>
              <Badge variant="secondary" className="rose-gradient text-pearl-white">
                Save {selectedPackage.discount}%
              </Badge>
            </div>
            <div className="text-right">
              <p className="text-sm text-warm-gray-light line-through">
                {formatPrice(selectedPackage.originalPrice)}
              </p>
              <p className="text-xl font-bold text-rose-gold">
                {formatPrice(selectedPackage.price)}
              </p>
            </div>
          </div>

          <Separator className="my-4" />

          <div className="space-y-3">
            <h3 className="font-semibold text-warm-gray text-sm">Yang Anda Dapatkan:</h3>
            {selectedPackage.includes.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full rose-gradient mt-2 flex-shrink-0"></div>
                <p className="text-sm text-warm-gray-light">{item}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Mindful Beauty Audio Access */}
        <Card className="luxury-card p-6 mb-6">
          <div className="text-center mb-4">
            <div className="w-12 h-12 zen-gradient rounded-full flex items-center justify-center mx-auto mb-3">
              <Play size={20} className="text-pearl-white" />
            </div>
            <h3 className="text-lg font-bold text-warm-gray mb-2">
              🧘 Unlock Your Beauty Meditation Audio Guide
            </h3>
            <p className="text-sm text-warm-gray-light">
              Exclusive content untuk transformasi holistik
            </p>
          </div>

          <div className="bg-teal-light/20 rounded-lg p-4 mb-4">
            <h4 className="font-semibold text-warm-gray mb-3 text-sm">Audio Library Includes:</h4>
            <div className="grid grid-cols-1 gap-2">
              {meditationAudioAccess.map((audio, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-teal-meditation"></div>
                  <p className="text-sm text-warm-gray-light">{audio}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-pearl-cream rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-warm-gray text-sm">Preview Sample:</p>
                <p className="text-xs text-warm-gray-light">Inner Radiance Meditation - 2 min sample</p>
              </div>
              <Button variant="zen" size="sm">
                <Play size={14} className="mr-1" />
                Play
              </Button>
            </div>
          </div>
        </Card>

        {/* Payment Options */}
        <Card className="luxury-card p-6 mb-6">
          <h3 className="font-semibold text-warm-gray mb-4">Pilihan Pembayaran</h3>
          
          <div className="space-y-3">
            <div 
              className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                selectedPayment === 'qris' ? 'border-rose-gold bg-rose-gold/10' : 'border-gray-200'
              }`}
              onClick={() => setSelectedPayment('qris')}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <QrCode size={24} className="text-warm-gray" />
                  <div>
                    <p className="font-medium text-warm-gray">QRIS</p>
                    <p className="text-xs text-warm-gray-light">Scan & Pay - Instant</p>
                  </div>
                </div>
                <Badge variant="outline" className="text-xs">Recommended</Badge>
              </div>
            </div>

            <div 
              className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                selectedPayment === 'transfer' ? 'border-rose-gold bg-rose-gold/10' : 'border-gray-200'
              }`}
              onClick={() => setSelectedPayment('transfer')}
            >
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-warm-gray rounded flex items-center justify-center">
                  <span className="text-xs text-white">B</span>
                </div>
                <div>
                  <p className="font-medium text-warm-gray">Bank Transfer</p>
                  <p className="text-xs text-warm-gray-light">BCA, Mandiri, BRI, BNI</p>
                </div>
              </div>
            </div>

            <div 
              className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                selectedPayment === 'installment' ? 'border-rose-gold bg-rose-gold/10' : 'border-gray-200'
              }`}
              onClick={() => setSelectedPayment('installment')}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Calendar size={24} className="text-warm-gray" />
                  <div>
                    <p className="font-medium text-warm-gray">Cicilan 3x</p>
                    <p className="text-xs text-warm-gray-light">{formatPrice(selectedPackage.price / 3)}/bulan</p>
                  </div>
                </div>
                <Badge variant="secondary" className="text-xs">0% Interest</Badge>
              </div>
            </div>
          </div>
        </Card>

        {/* Customer Info */}
        <Card className="luxury-card p-6 mb-6">
          <h3 className="font-semibold text-warm-gray mb-4">Informasi Pengiriman</h3>
          
          <div className="space-y-4">
            <div>
              <Label htmlFor="name" className="text-sm text-warm-gray">Nama Lengkap</Label>
              <Input id="name" placeholder="Masukkan nama lengkap" className="mt-1" />
            </div>
            
            <div>
              <Label htmlFor="phone" className="text-sm text-warm-gray">WhatsApp</Label>
              <Input id="phone" placeholder="08xxx untuk konsultasi beauty" className="mt-1" />
            </div>
            
            <div>
              <Label htmlFor="address" className="text-sm text-warm-gray">Alamat Lengkap</Label>
              <Input id="address" placeholder="Alamat pengiriman" className="mt-1" />
            </div>
          </div>
        </Card>

        {/* Support & Community */}
        <Card className="luxury-card p-6 mb-6">
          <h3 className="font-semibold text-warm-gray mb-4">Support & Community</h3>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-pearl-cream rounded-lg p-4 text-center">
              <MessageCircle size={24} className="mx-auto text-rose-gold mb-2" />
              <p className="font-medium text-warm-gray text-sm mb-1">Beauty Consultation</p>
              <p className="text-xs text-warm-gray-light">WhatsApp CS 24/7</p>
              <Button variant="pearl" size="sm" className="mt-2 w-full">
                Chat Now
              </Button>
            </div>
            
            <div className="bg-pearl-cream rounded-lg p-4 text-center">
              <Users size={24} className="mx-auto text-teal-meditation mb-2" />
              <p className="font-medium text-warm-gray text-sm mb-1">Mindful Beauty Circle</p>
              <p className="text-xs text-warm-gray-light">Community Support</p>
              <Button variant="zen" size="sm" className="mt-2 w-full">
                Join Circle
              </Button>
            </div>
          </div>
        </Card>

        {/* Beauty Timeline */}
        <Card className="luxury-card p-6 mb-8">
          <div className="text-center mb-4">
            <Gift size={24} className="mx-auto text-rose-gold mb-2" />
            <h3 className="font-semibold text-warm-gray">Stress-Free Beauty Timeline</h3>
            <p className="text-sm text-warm-gray-light">Personalized routine builder</p>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center gap-3 bg-pearl-cream rounded-lg p-3">
              <div className="w-8 h-8 bg-rose-gold rounded-full flex items-center justify-center text-xs text-white font-bold">1</div>
              <div>
                <p className="text-sm font-medium text-warm-gray">Week 1-2: Foundation</p>
                <p className="text-xs text-warm-gray-light">Daily collagen + morning meditation</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 bg-pearl-cream rounded-lg p-3">
              <div className="w-8 h-8 bg-teal-meditation rounded-full flex items-center justify-center text-xs text-white font-bold">2</div>
              <div>
                <p className="text-sm font-medium text-warm-gray">Week 3-6: Transformation</p>
                <p className="text-xs text-warm-gray-light">Visible glow + stress reduction</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 bg-pearl-cream rounded-lg p-3">
              <div className="w-8 h-8 bg-blush rounded-full flex items-center justify-center text-xs text-white font-bold">3</div>
              <div>
                <p className="text-sm font-medium text-warm-gray">Week 7-12: Mastery</p>
                <p className="text-xs text-warm-gray-light">Holistic beauty lifestyle</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Final CTA */}
        <div className="space-y-4">
          <Button 
            variant="hero" 
            size="xl" 
            className="w-full"
            disabled={!selectedPayment}
          >
            {selectedPayment === 'qris' && 'Scan QRIS & Complete Order'}
            {selectedPayment === 'transfer' && 'Proceed to Bank Transfer'}
            {selectedPayment === 'installment' && 'Setup Installment Plan'}
            {!selectedPayment && 'Pilih Metode Pembayaran'}
          </Button>
          
          <p className="text-center text-xs text-warm-gray-light">
            Secure checkout • 30-day money back guarantee • Free shipping
          </p>
        </div>
      </section>
    </div>
  );
}