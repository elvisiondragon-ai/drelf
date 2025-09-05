import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Star, Shield, Award, Clock } from "lucide-react";

const products = [
  {
    name: "Drelf Collagen Radiance",
    subtitle: "Untuk Stres Ringan",
    price: "Rp 589.000",
    purity: 98,
    potency: "10,000mg",
    timeline: "2-4 minggu",
    benefits: ["Kulit lebih halus", "Hidrasi optimal", "Glow alami"],
    stress_level: "ringan",
    badge: "Best Seller"
  },
  {
    name: "Drelf Collagen Serenity",
    subtitle: "Untuk Stres Menengah", 
    price: "Rp 789.000",
    purity: 99,
    potency: "15,000mg",
    timeline: "3-6 minggu",
    benefits: ["Elastisitas kulit", "Mengurangi fine lines", "Inner calm"],
    stress_level: "menengah",
    badge: "Premium"
  },
  {
    name: "Drelf Collagen Zen Master",
    subtitle: "Untuk Stres Tinggi",
    price: "Rp 989.000", 
    purity: 99.5,
    potency: "20,000mg",
    timeline: "4-8 minggu",
    benefits: ["Regenerasi sel kulit", "Anti-aging maksimal", "Deep meditation"],
    stress_level: "tinggi",
    badge: "Luxury"
  }
];

export default function Product() {
  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <header className="hero-gradient py-8">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold text-warm-gray mb-2">
            Premium Collagen Collection
          </h1>
          <p className="text-warm-gray-light">
            Formulasi berbeda untuk level stress yang berbeda
          </p>
        </div>
      </header>

      {/* Products Grid */}
      <section className="container mx-auto px-4 py-8">
        <div className="space-y-6">
          {products.map((product, index) => (
            <Card key={index} className="luxury-card overflow-hidden">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold text-warm-gray">{product.name}</h3>
                      <Badge 
                        variant="secondary"
                        className={
                          product.badge === "Luxury" 
                            ? "rose-gradient text-pearl-white" 
                            : product.badge === "Premium"
                            ? "zen-gradient text-pearl-white"
                            : "bg-blush text-pearl-white"
                        }
                      >
                        {product.badge}
                      </Badge>
                    </div>
                    <p className="text-warm-gray-light text-sm">{product.subtitle}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-lg text-rose-gold">{product.price}</p>
                    <div className="flex items-center gap-1 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} className="fill-rose-gold text-rose-gold" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Purity & Potency */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-pearl-cream rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-2">
                      <Shield size={16} className="text-teal-meditation" />
                      <span className="text-xs font-medium text-warm-gray">Kemurnian</span>
                    </div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-bold text-warm-gray">{product.purity}%</span>
                      <span className="text-xs text-warm-gray-light">Pure</span>
                    </div>
                    <Progress value={product.purity} className="h-1" />
                  </div>

                  <div className="bg-pearl-cream rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-2">
                      <Award size={16} className="text-rose-gold" />
                      <span className="text-xs font-medium text-warm-gray">Potensi</span>
                    </div>
                    <p className="text-sm font-bold text-warm-gray">{product.potency}</p>
                    <p className="text-xs text-warm-gray-light">Per serving</p>
                  </div>
                </div>

                {/* Timeline */}
                <div className="bg-lavender-soft rounded-lg p-3 mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock size={16} className="text-warm-gray" />
                    <span className="text-xs font-medium text-warm-gray">Timeline Hasil</span>
                  </div>
                  <p className="text-sm font-semibold text-warm-gray">{product.timeline}</p>
                  <p className="text-xs text-warm-gray-light">Hasil terlihat dengan penggunaan rutin</p>
                </div>

                {/* Benefits */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-warm-gray mb-3">Manfaat Utama:</h4>
                  <div className="space-y-2">
                    {product.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full rose-gradient"></div>
                        <span className="text-sm text-warm-gray-light">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="flex gap-2">
                  <Button 
                    variant={product.badge === "Luxury" ? "hero" : "luxury"} 
                    className="flex-1"
                    size="lg"
                  >
                    Pilih Paket Ini
                  </Button>
                  <Button variant="pearl" size="lg">
                    Detail
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Meditation Integration Preview */}
        <Card className="luxury-card p-6 mt-8">
          <h3 className="text-lg font-bold text-warm-gray mb-4 text-center">
            🧘 Integrasi Meditasi Premium
          </h3>
          
          <div className="space-y-4">
            <div className="bg-teal-light/30 rounded-lg p-4">
              <h4 className="font-semibold text-warm-gray mb-2">Bagaimana Stres Mempengaruhi Produksi Kolagen?</h4>
              <p className="text-sm text-warm-gray-light">
                Kortisol tinggi menghambat sintesis kolagen hingga 40%. Meditasi terbukti menurunkan kortisol dan meningkatkan produksi kolagen alami.
              </p>
            </div>

            <div className="bg-rose-gold-light/30 rounded-lg p-4">
              <h4 className="font-semibold text-warm-gray mb-2">Sinergi Meditasi + Kolagen</h4>
              <p className="text-sm text-warm-gray-light">
                Kombinasi supplement kolagen dengan praktik meditasi meningkatkan efektivitas hingga 65% untuk kecantikan holistik.
              </p>
            </div>
          </div>

          <div className="text-center mt-6">
            <Button variant="zen" size="lg">
              Akses Panduan Meditasi
            </Button>
          </div>
        </Card>
      </section>
    </div>
  );
}