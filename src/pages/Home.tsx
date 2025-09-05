import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sparkles, Heart, Zap } from "lucide-react";
import heroImage from "@/assets/hero-zen-garden.jpg";

export default function Home() {
  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-90"></div>
        <div className="container mx-auto px-4 py-8 relative z-10">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-warm-gray mb-2">DRELF.ID</h1>
            <p className="text-warm-gray-light">Kolagen Luxury with Meditation Guide</p>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative -mt-4">
        <div className="relative h-96 overflow-hidden rounded-t-3xl">
          <img 
            src={heroImage} 
            alt="Zen Garden with Collagen Particles" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent">
            <div className="container mx-auto px-4 h-full flex flex-col justify-end pb-8">
              <div className="text-center text-white">
                <h2 className="text-2xl font-bold mb-2">
                  Kecantikan Dimulai dari Dalam
                </h2>
                <p className="text-lg mb-4 opacity-90">
                  Kecantikan Bebas Stres
                </p>
                <p className="text-sm opacity-75">
                  Inner Peace = Outer Glow
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beauty Philosophy */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-warm-gray mb-4">
            Filosofi Kecantikan Holistik
          </h3>
          <p className="text-warm-gray-light leading-relaxed">
            Koneksi pikiran-tubuh-kulit untuk perjalanan kecantikan bebas stres
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="luxury-card p-6 text-center">
            <div className="w-12 h-12 rose-gradient rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="text-pearl-white" size={24} />
            </div>
            <h4 className="font-semibold text-warm-gray mb-2">Mind Connection</h4>
            <p className="text-sm text-warm-gray-light">
              Meditasi untuk ketenangan pikiran dan pengurangan stres
            </p>
          </Card>

          <Card className="luxury-card p-6 text-center">
            <div className="w-12 h-12 zen-gradient rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="text-pearl-white" size={24} />
            </div>
            <h4 className="font-semibold text-warm-gray mb-2">Body Wellness</h4>
            <p className="text-sm text-warm-gray-light">
              Kolagen premium untuk nutrisi tubuh dari dalam
            </p>
          </Card>

          <Card className="luxury-card p-6 text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-blush-light to-blush rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles className="text-pearl-white" size={24} />
            </div>
            <h4 className="font-semibold text-warm-gray mb-2">Skin Radiance</h4>
            <p className="text-sm text-warm-gray-light">
              Kecantikan alami yang memancar dari keseimbangan holistik
            </p>
          </Card>
        </div>

        <div className="text-center mt-8">
          <Button variant="hero" size="lg">
            Mulai Perjalanan Kecantikan
          </Button>
        </div>
      </section>

      {/* Beauty Benefits Preview */}
      <section className="bg-gradient-to-r from-lavender-soft to-blush-light py-12 mx-4 rounded-2xl mb-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-warm-gray mb-2">
              Luxury Meets Mindfulness
            </h3>
            <p className="text-warm-gray-light">
              Pengalaman kecantikan yang lebih dari sekadar produk
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between bg-pearl-white/80 rounded-lg p-4">
              <span className="text-warm-gray font-medium">Kolagen Premium</span>
              <span className="text-rose-gold text-sm">✨ Kualitas Terbaik</span>
            </div>
            
            <div className="flex items-center justify-between bg-pearl-white/80 rounded-lg p-4">
              <span className="text-warm-gray font-medium">Panduan Meditasi</span>
              <span className="text-teal-meditation text-sm">🧘 Audio Eksklusif</span>
            </div>
            
            <div className="flex items-center justify-between bg-pearl-white/80 rounded-lg p-4">
              <span className="text-warm-gray font-medium">Komunitas Supportif</span>
              <span className="text-blush text-sm">💕 Mindful Beauty Circle</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}