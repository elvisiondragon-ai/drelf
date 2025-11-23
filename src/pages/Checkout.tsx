import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input"; // Still needed for customer info if shown
import { Label } from "@/components/ui/label"; // Still needed for customer info if shown
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"; // Still needed for payment if shown
import { MessageCircle, Users, Play, Gift } from "lucide-react";
import { toast } from "sonner";
import { Toaster as Sonner } from "@/components/ui/sonner";

import checkout1Image from "@/assets/checkout1.png";

const selectedPackage = {
  name: "Drelf Collagen Ultimate",
  productId: "drelf_collagen_ultimate", // A clean ID for the product
  subtitle: "Beauty Journey Complete Package",
  price: 600000,
  originalPrice: 750000,
  discount: 20,
  duration: "1 box supply",
  includes: [
    "Drelf Collagen 1 Box 10 Sachet",
    "Exclusive Beauty Meditation Audio",
    "Personal Beauty Consultation (WhatsApp)",
    "Buklet Kecantikan VIP"
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
  // Remove all state related to user info and payment method
  // const [userName, setUserName] = useState("");
  // const [userEmail, setUserEmail] = useState("");
  // const [phoneNumber, setPhoneNumber] = useState("");
  // const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string | null>(null);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleRedirectToElvisionPayment = () => {
    const baseUrl = "https://app.elvisiongroup.com/drelf"; // Redirect to the elvisiongroup payment page

    // Meta Pixel AddToCart event
    if (window.fbq) {
      window.fbq('track', 'AddToCart', {
        content_ids: [selectedPackage.productId],
        content_type: 'product',
        value: selectedPackage.price,
        currency: 'IDR'
      });
    }

    const redirectUrl = baseUrl;
    console.log("Redirecting to Elvision payment page:", redirectUrl);
    window.location.href = redirectUrl;
  };

  return (
    <div className="min-h-screen pb-32">
      <Sonner />
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
          <div className="text-center mb-6">
            <img
              src={checkout1Image}
              alt="Drelf Collagen Ultimate Product"
              className="w-full max-w-md mx-auto rounded-lg shadow-lg"
            />
          </div>

          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-lg font-bold text-warm-gray mb-1">{selectedPackage.name}</h2>
              <p className="text-sm text-warm-gray-light mb-2">{selectedPackage.subtitle}</p>
              <Badge variant="secondary" className="rose-gradient text-pearl-white">
                Save {selectedPackage.discount}%
              </Badge>
            </div>
            {/* Price is removed as per new instructions */}
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

        {/* Final CTA - Moved */}
        <div className="space-y-4 mt-6">
          <Button
            variant="hero"
            size="xl"
            className="w-full"
            onClick={handleRedirectToElvisionPayment}
          >
            Bayar Sekarang
          </Button>
          <p className="text-center text-xs text-warm-gray-light">
            Secure checkout • 30-day money back guarantee • Free shipping
          </p>
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
        </Card>

        {/* Removed Customer Info and Payment Options cards */}
        {/* <Card className="luxury-card p-6 mb-6">
          <h3 className="font-semibold text-warm-gray mb-4">Your Contact Information</h3>
          <div className="space-y-4">
            <div>
              <Label htmlFor="userName" className="text-sm text-warm-gray">Nama Lengkap</Label>
              <Input id="userName" placeholder="Masukkan nama lengkap" className="mt-1" value={userName} onChange={(e) => setUserName(e.target.value)} />
            </div>
            <div>
              <Label htmlFor="userEmail" className="text-sm text-warm-gray">Email</Label>
              <Input id="userEmail" type="email" placeholder="your@example.com" className="mt-1" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} />
            </div>
            <div>
              <Label htmlFor="phoneNumber" className="text-sm text-warm-gray">WhatsApp (Phone Number)</Label>
              <Input id="phoneNumber" placeholder="08xxx untuk konsultasi beauty" className="mt-1" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
            </div>
          </div>
        </Card>

        <Card className="luxury-card p-6 mb-6">
          <h3 className="font-semibold text-warm-gray mb-4">Pilihan Pembayaran</h3>
          <RadioGroup
            onValueChange={setSelectedPaymentMethod}
            value={selectedPaymentMethod || ""}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {paymentMethods.map((method) => (
              <div key={method.id}>
                <RadioGroupItem value={method.method} id={method.id} className="sr-only" />
                <Label
                  htmlFor={method.id}
                  className={`flex items-center justify-center rounded-lg border-2 p-4 cursor-pointer transition-all ${
                    selectedPaymentMethod === method.method ? 'border-rose-gold bg-rose-gold/10' : 'border-gray-200'
                  }`}
                >
                  <span className="font-medium text-warm-gray">{method.label}</span>
                </Label>
              </div>
            ))}
          </RadioGroup>
        </Card> */}


        {/* Support & Community */}
        <Card className="luxury-card p-6 mb-6">
          <h3 className="font-semibold text-warm-gray mb-4">Support & Community</h3>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-pearl-cream rounded-lg p-4 text-center">
              <MessageCircle size={24} className="mx-auto text-rose-gold mb-2" />
              <p className="font-medium text-warm-gray text-sm mb-1">Beauty Consultation</p>
              <p className="text-xs text-warm-gray-light">WhatsApp CS 24/7</p>
              <Button
                variant="pearl"
                size="sm"
                className="mt-2 w-full"
                onClick={() => window.open('https://wa.me/628980040002?text=Kak%20mau%20tanya%20Drelf', '_blank')}
              >
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

      </section>
    </div>
  );
}
