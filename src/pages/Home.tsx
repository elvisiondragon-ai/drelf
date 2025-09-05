import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sparkles, Heart, Zap } from "lucide-react";
import heroImage from "@/assets/hero-zen-garden.jpg";
import home1Image from "@/assets/home1.png";
import siteIcon from "@/assets/siteicon.png";

export default function Home() {
  return (
    <div className="min-h-screen pb-32">
      {/* Header */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-90"></div>
        <div className="container mx-auto px-4 py-8 relative z-10">
          <div className="text-center mb-8">
            <img 
              src={siteIcon} 
              alt="Drelf Site Logo" 
              className="w-16 h-16 mx-auto mb-4 rounded-lg shadow-lg"
            />
            <h1 className="text-3xl font-bold text-warm-gray mb-2">DRELF.ID</h1>
            <div className="space-y-2">
              <p className="text-xl font-bold text-warm-gray">Claimable</p>
              <p className="text-lg font-semibold text-warm-gray">Pertama di Dunia</p>
              <p className="text-lg text-warm-gray-light">Minuman Kolagen Holistik</p>
              <p className="text-sm text-warm-gray-light">Garansi Kepuasan</p>
              <p className="text-lg font-semibold text-warm-gray mt-4">Rahasia Kecantikan Sejati Yang mereka sembunyikan</p>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative -mt-4">
        <div className="relative h-96 overflow-hidden rounded-t-3xl">
          <img 
            src={home1Image} 
            alt="Drelf Beauty Products" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent">
          </div>
        </div>
      </section>

      {/* Skin Health Message */}
      <section className="container mx-auto px-4 py-8">
        <Card className="luxury-card p-6 text-center">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-warm-gray">
              Kesehatan Kulit tidak bisa dianggap remeh
            </h3>
            <p className="text-warm-gray-light leading-relaxed">
              Faktanya kesehatan penampilan adalah sebuah privilege
            </p>
            <p className="text-warm-gray-light leading-relaxed">
              Semua orang mendambakan kulit yang indah
            </p>
            <p className="text-warm-gray-light leading-relaxed">
              Saat kulitmu cantik dan tampan semua terasa begitu baik padamu
            </p>
            <p className="text-warm-gray-light leading-relaxed">
              Selain cantik harus juga sehat
            </p>
            <p className="text-lg font-semibold text-warm-gray mt-4">
              Drelf solusinya
            </p>
          </div>
        </Card>
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