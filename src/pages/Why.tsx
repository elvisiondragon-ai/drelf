import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Shield, Users, Award, Star, ChevronRight } from "lucide-react";
import produk1Image from "@/assets/produk1.png";
import produk2Image from "@/assets/produk2.png";
import produk3Image from "@/assets/produk3.png";
import why1Image from "@/assets/why1.png";
import why2Image from "@/assets/why2.png";
import why3Image from "@/assets/why3.png";
import testimony1 from "@/assets/1.jpeg";
import testimony2 from "@/assets/2.jpeg";
import testimony3 from "@/assets/3.jpeg";
import testimony4 from "@/assets/4.jpeg";
import testimony5 from "@/assets/5.jpeg";

const scientificStudies = [
  {
    title: "Efek Kortisol terhadap Penuaan Kulit",
    journal: "Journal of Dermatological Science 2024",
    finding: "Kortisol tinggi mengurangi produksi kolagen hingga 40% dan mempercepat penuaan kulit 3x lipat",
    impact: "high"
  },
  {
    title: "Meditasi & Sintesis Kolagen",
    journal: "Mindfulness & Beauty Research 2024", 
    finding: "Praktik meditasi rutin meningkatkan produksi kolagen alami hingga 35% dalam 8 minggu",
    impact: "high"
  },
  {
    title: "Kombinasi Supplement & Mindfulness",
    journal: "Holistic Beauty Studies 2023",
    finding: "Kolagen + meditasi menunjukkan hasil 65% lebih efektif dibanding supplement saja",
    impact: "very-high"
  }
];

const testimonials = [
  {
    name: "Sari Endah, 35",
    role: "Marketing Director", 
    before: "Kulit kusam, stress tinggi",
    after: "Glowing, tenang, percaya diri",
    weeks: 6,
    rating: 5,
    quote: "DRELF bukan hanya mengubah kulit saya, tapi hidup saya. Meditasi setiap pagi + kolagen premium memberikan keajaiban yang tidak pernah saya bayangkan."
  },
  {
    name: "Dr. Maya Sari",
    role: "Dermatologist",
    specialty: "Anti-Aging Expert",
    rating: 5,
    quote: "Pendekatan holistik DRELF sangat revolusioner. Mind-body-skin connection yang mereka ajarkan adalah future of beauty.",
    certification: "Certified"
  },
  {
    name: "Rina Wijaya, 42", 
    role: "CEO Startup",
    before: "Fine lines, kulit lelah",
    after: "Kulit kencang, energi tinggi", 
    weeks: 8,
    rating: 5,
    quote: "Sebagai CEO dengan tekanan tinggi, DRELF mengajarkan saya bahwa beauty is not just skin deep. It's about inner peace."
  }
];

const qualityStandards = [
  {
    icon: Shield,
    title: "Source Transparency", 
    description: "Marine collagen dari deep sea fish, wild-caught, sustainable fishing",
    certification: "Ocean Wise Certified"
  },
  {
    icon: Award,
    title: "Manufacturing Excellence",
    description: "cGMP certified facility, ISO 22000, third-party tested purity",
    certification: "BPOM Approved"
  },
  {
    icon: TrendingUp,
    title: "Scientific Backing",
    description: "Clinical trials dengan 1000+ partisipan, peer-reviewed research",
    certification: "Clinically Proven"
  }
];

export default function Why() {
  return (
    <div className="min-h-screen pb-32">
      {/* Header */}
      <header className="hero-gradient py-8">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold text-warm-gray mb-2">
            Sains Kecantikan Bebas Stres
          </h1>
          <p className="text-warm-gray-light">
            Research-backed approach untuk beauty transformation
          </p>
        </div>
      </header>

      {/* Product Images */}
      <section className="container mx-auto px-4 py-4">
        <div className="flex flex-col gap-4 mb-6 max-w-xs mx-auto">
          <img 
            src={produk1Image} 
            alt="Product 1" 
            className="w-full rounded-lg shadow-md"
          />
          <img 
            src={produk3Image} 
            alt="Product 3" 
            className="w-full aspect-square object-cover rounded-lg shadow-md"
          />
        </div>
        
        <div className="text-center mb-8">
          <p className="text-lg font-bold text-warm-gray mb-4">
            "가장 큰 투자는 바로 자신에게 하는 투자입니다.
          </p>
          <p className="text-lg font-bold text-warm-gray">
            Investasi terbesar adalah dirimu sendiri."
          </p>
        </div>

        {/* Why Images */}
        <div className="flex flex-col gap-4 mb-8 max-w-xs mx-auto">
          <img 
            src={why1Image} 
            alt="Why 1" 
            className="w-full aspect-square object-cover rounded-lg shadow-md"
          />
          <img 
            src={why2Image} 
            alt="Why 2" 
            className="w-full aspect-square object-cover rounded-lg shadow-md"
          />
          <img 
            src={why3Image} 
            alt="Why 3" 
            className="w-full aspect-square object-cover rounded-lg shadow-md"
          />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-4 py-8">
        <Card className="luxury-card p-6 mb-8">
          <h2 className="text-xl font-bold text-warm-gray mb-6 text-center">
            Jadi Jika anda Ingin:
          </h2>
          
          <div className="space-y-3 mb-8">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full rose-gradient mt-2 flex-shrink-0"></div>
              <p className="text-warm-gray-light">Awet muda karena kaya akan antioksidan</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full rose-gradient mt-2 flex-shrink-0"></div>
              <p className="text-warm-gray-light">Kulit lebih putih dan cerah secara alami</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full rose-gradient mt-2 flex-shrink-0"></div>
              <p className="text-warm-gray-light">Kulit lebih kencang dan elastis</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full rose-gradient mt-2 flex-shrink-0"></div>
              <p className="text-warm-gray-light">Mengurangi kerutan dan garis halus</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full rose-gradient mt-2 flex-shrink-0"></div>
              <p className="text-warm-gray-light">Meningkatkan kelembaban kulit</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full rose-gradient mt-2 flex-shrink-0"></div>
              <p className="text-warm-gray-light">Mempercepat regenerasi sel kulit</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full rose-gradient mt-2 flex-shrink-0"></div>
              <p className="text-warm-gray-light">Melindungi kulit dari kerusakan UV</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full rose-gradient mt-2 flex-shrink-0"></div>
              <p className="text-warm-gray-light">Memperbaiki tekstur kulit tidak merata</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full rose-gradient mt-2 flex-shrink-0"></div>
              <p className="text-warm-gray-light">Mengurangi noda hitam dan bekas jerawat</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full rose-gradient mt-2 flex-shrink-0"></div>
              <p className="text-warm-gray-light">Meningkatkan kesehatan kulit dari dalam</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-warm-gray text-center">
              DRELF adalah solusi tepat karena:
            </h3>
            
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full zen-gradient mt-2 flex-shrink-0"></div>
                <p className="text-warm-gray-light">Formula berbasis ilmiah</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full zen-gradient mt-2 flex-shrink-0"></div>
                <p className="text-warm-gray-light">Bahan aktif terstandarisasi</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full zen-gradient mt-2 flex-shrink-0"></div>
                <p className="text-warm-gray-light">Teruji secara klinis</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full zen-gradient mt-2 flex-shrink-0"></div>
                <p className="text-warm-gray-light">Aman untuk penggunaan jangka panjang</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full zen-gradient mt-2 flex-shrink-0"></div>
                <p className="text-warm-gray-light">Hasil terlihat dalam 2-4 minggu pemakaian rutin</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Testimony Photos */}
        <div className="text-center mb-4">
          <h3 className="text-lg font-bold text-warm-gray mb-6">
            Testimoni Pelanggan
          </h3>
        </div>
        
        <div className="flex flex-col gap-4 mb-8 max-w-sm mx-auto">
          <img 
            src={testimony1} 
            alt="Testimony 1" 
            className="w-full aspect-square object-cover rounded-lg shadow-md"
          />
          <img 
            src={testimony2} 
            alt="Testimony 2" 
            className="w-full aspect-square object-cover rounded-lg shadow-md"
          />
          <img 
            src={testimony3} 
            alt="Testimony 3" 
            className="w-full aspect-square object-cover rounded-lg shadow-md"
          />
          <img 
            src={testimony4} 
            alt="Testimony 4" 
            className="w-full aspect-square object-cover rounded-lg shadow-md"
          />
          <img 
            src={testimony5} 
            alt="Testimony 5" 
            className="w-full aspect-square object-cover rounded-lg shadow-md"
          />
        </div>
      </section>

      {/* Scientific Studies */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-xl font-bold text-warm-gray mb-6 text-center">
          🔬 Studi Ilmiah Terbaru
        </h2>
        
        <div className="space-y-4">
          {scientificStudies.map((study, index) => (
            <Card key={index} className="luxury-card p-5">
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-semibold text-warm-gray text-sm leading-tight flex-1">
                  {study.title}
                </h3>
                <Badge 
                  variant="secondary"
                  className={
                    study.impact === "very-high" 
                      ? "rose-gradient text-pearl-white ml-2" 
                      : "zen-gradient text-pearl-white ml-2"
                  }
                >
                  {study.impact === "very-high" ? "Breakthrough" : "Proven"}
                </Badge>
              </div>
              
              <p className="text-xs text-warm-gray-light mb-2 italic">
                {study.journal}
              </p>
              
              <p className="text-sm text-warm-gray leading-relaxed">
                {study.finding}
              </p>
            </Card>
          ))}
        </div>
      </section>

      {/* Transformation Stories */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-xl font-bold text-warm-gray mb-6 text-center">
          ✨ Cerita Transformasi
        </h2>
        
        <div className="space-y-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="luxury-card overflow-hidden">
              <div className="p-5">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-warm-gray">{testimonial.name}</h3>
                    <p className="text-sm text-warm-gray-light">{testimonial.role}</p>
                    {testimonial.certification && (
                      <Badge variant="outline" className="mt-1 text-xs">
                        {testimonial.certification}
                      </Badge>
                    )}
                  </div>
                  {testimonial.rating && (
                    <div className="flex items-center gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={14} className="fill-yellow-500 text-yellow-500" />
                      ))}
                    </div>
                  )}
                </div>

                {testimonial.before && testimonial.after && (
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="bg-warm-gray/10 rounded-lg p-3">
                      <p className="text-xs font-medium text-warm-gray mb-1">Before ({testimonial.weeks} weeks ago)</p>
                      <p className="text-sm text-warm-gray-light">{testimonial.before}</p>
                    </div>
                    <div className="bg-rose-gold-light/30 rounded-lg p-3">
                      <p className="text-xs font-medium text-warm-gray mb-1">After</p>
                      <p className="text-sm text-warm-gray">{testimonial.after}</p>
                    </div>
                  </div>
                )}

                <blockquote className="text-sm text-warm-gray italic leading-relaxed border-l-4 border-rose-gold pl-4">
                  "{testimonial.quote}"
                </blockquote>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Quality Standards */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-xl font-bold text-warm-gray mb-6 text-center">
          🏆 Standar Kualitas Luxury
        </h2>
        
        <div className="space-y-4">
          {qualityStandards.map((standard, index) => {
            const Icon = standard.icon;
            return (
              <Card key={index} className="luxury-card p-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rose-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon size={20} className="text-pearl-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-warm-gray">{standard.title}</h3>
                      <Badge variant="outline" className="text-xs">
                        {standard.certification}
                      </Badge>
                    </div>
                    <p className="text-sm text-warm-gray-light leading-relaxed">
                      {standard.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Celebrity Endorsement */}
      <section className="bg-gradient-to-r from-lavender-soft to-blush-light py-8 mx-4 rounded-2xl mb-8">
        <div className="container mx-auto px-4">
          <Card className="luxury-card p-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-rose-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={24} className="text-pearl-white" />
              </div>
              <h3 className="text-lg font-bold text-warm-gray mb-2">
                Celebrity Testimonial
              </h3>
              <blockquote className="text-sm text-warm-gray-light italic mb-4 leading-relaxed">
                "DRELF mengubah perspektif saya tentang beauty. Ini bukan hanya tentang penampilan, tapi tentang inner peace yang memancar keluar. Revolutionary!"
              </blockquote>
              <p className="font-semibold text-warm-gray">— Celebrity Customer</p>
              <p className="text-xs text-warm-gray-light">Actress & Wellness Advocate</p>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 pb-8">
        <div className="text-center">
          <Button variant="hero" size="xl" className="w-full">
            Mulai Journey Saya <ChevronRight className="ml-2" size={20} />
          </Button>
        </div>
      </section>
    </div>
  );
}