import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Headphones, Clock, Heart, Brain, Sparkles } from "lucide-react";

const meditationPractices = [
  {
    title: "Morning Glow Meditation",
    duration: "10 menit",
    level: "Pemula",
    focus: "Aktivasi kolagen pagi",
    description: "Meditasi pagi yang mengaktifkan sirkulasi darah dan mempersiapkan kulit untuk produksi kolagen optimal sepanjang hari.",
    audio: "preview-morning.mp3"
  },
  {
    title: "Stress-Release Breathing", 
    duration: "15 menit",
    level: "Menengah",
    focus: "Penurunan kortisol",
    description: "Teknik pernapasan khusus untuk menurunkan hormon stress kortisol yang menghambat produksi kolagen alami.",
    audio: "preview-breathing.mp3"
  },
  {
    title: "Beauty Sleep Meditation",
    duration: "20 menit", 
    level: "Advanced",
    focus: "Regenerasi malam",
    description: "Meditasi malam yang memaksimalkan proses regenerasi sel kulit dan produksi kolagen selama tidur.",
    audio: "preview-sleep.mp3"
  }
];

const transformationStories = [
  {
    name: "Anita Rahma, 38",
    profession: "Busy Mom & Entrepreneur",
    journey: "Dari stress overwhelm menuju inner radiance",
    before: "Kulit kusam, kantung mata, stress kronis dari mengelola bisnis sambil mengurus 2 anak.",
    after: "Kulit glowing, energi stabil, mental tenang. Bisa handle pressure dengan grace.",
    timeline: "3 bulan rutin meditasi + kolagen",
    key_practice: "Morning Glow Meditation setiap hari jam 5 pagi",
    quote: "Meditasi bukan luxury, tapi necessity. DRELF mengajarkan saya bahwa me-time 10 menit sehari bisa mengubah segalanya."
  },
  {
    name: "Dr. Lina Sari",
    profession: "Dermatologist & Meditation Teacher", 
    journey: "Expert perspective on mind-skin connection",
    insight: "Selama 15 tahun praktek dermatologi, saya melihat pasien dengan produk skincare mahal tapi hasil minimal karena stress tinggi.",
    discovery: "Setelah integrating meditation dalam treatment plan, patient results improved dramatically - 70% better skin quality.",
    recommendation: "DRELF approach adalah exactly what beauty industry needs - holistic healing from inside out.",
    quote: "Skin is the mirror of your inner state. Heal the mind, heal the skin."
  }
];

const stressTechniques = [
  {
    icon: Brain,
    technique: "Mindful Beauty Affirmations",
    description: "Afirmasi khusus untuk self-love dan confidence building",
    benefit: "Meningkatkan self-esteem dan inner glow"
  },
  {
    icon: Heart, 
    technique: "Heart Coherence Breathing",
    description: "Sinkronisasi detak jantung dengan pernapasan untuk ketenangan",
    benefit: "Mengurangi anxiety dan stress hormones"
  },
  {
    icon: Sparkles,
    technique: "Visualization Meditation",
    description: "Visualisasi kulit sehat dan tubuh yang vital",
    benefit: "Mind-body connection untuk healing acceleration"
  }
];

export default function Meditate() {
  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <header className="hero-gradient py-8">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold text-warm-gray mb-2">
            Beauty is Meditate
          </h1>
          <p className="text-warm-gray-light">
            Filosofi Mindful Beauty untuk kecantikan holistik
          </p>
        </div>
      </header>

      {/* Mind-Skin Connection */}
      <section className="container mx-auto px-4 py-8">
        <Card className="luxury-card p-6 mb-8">
          <h2 className="text-lg font-bold text-warm-gray mb-4 text-center">
            🧠✨ Koneksi Pikiran & Kesehatan Kulit
          </h2>
          
          <div className="space-y-4">
            <div className="bg-teal-light/20 rounded-lg p-4">
              <h3 className="font-semibold text-warm-gray mb-2">Saat Stress Tinggi:</h3>
              <ul className="text-sm text-warm-gray-light space-y-1">
                <li>• Kortisol meningkat hingga 300%</li>
                <li>• Produksi kolagen menurun 40-60%</li>
                <li>• Sirkulasi darah ke kulit berkurang</li>
                <li>• Proses regenerasi sel terhambat</li>
              </ul>
            </div>
            
            <div className="bg-rose-gold-light/20 rounded-lg p-4">
              <h3 className="font-semibold text-warm-gray mb-2">Saat Mind Tenang:</h3>
              <ul className="text-sm text-warm-gray space-y-1">
                <li>• Kortisol normal, growth hormone optimal</li>
                <li>• Kolagen diproduksi maksimal</li>
                <li>• Sirkulasi darah lancar = nutrisi tersalur</li>
                <li>• Skin barrier function improved</li>
              </ul>
            </div>
          </div>
        </Card>

        <h2 className="text-xl font-bold text-warm-gray mb-6 text-center">
          🧘‍♀️ Praktik Meditasi Harian
        </h2>
        
        <div className="space-y-4">
          {meditationPractices.map((practice, index) => (
            <Card key={index} className="luxury-card p-5">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-semibold text-warm-gray mb-1">{practice.title}</h3>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline" className="text-xs">
                      <Clock size={10} className="mr-1" />
                      {practice.duration}
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      {practice.level}
                    </Badge>
                  </div>
                </div>
                <Button variant="zen" size="sm">
                  <Play size={14} className="mr-1" />
                  Preview
                </Button>
              </div>
              
              <div className="bg-lavender-soft/50 rounded-lg p-3 mb-3">
                <p className="text-xs font-medium text-teal-meditation mb-1">Focus Area:</p>
                <p className="text-sm text-warm-gray">{practice.focus}</p>
              </div>
              
              <p className="text-sm text-warm-gray-light leading-relaxed">
                {practice.description}
              </p>
            </Card>
          ))}
        </div>
      </section>

      {/* Stress Reduction Techniques */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-xl font-bold text-warm-gray mb-6 text-center">
          🌸 Teknik Pengurangan Stress
        </h2>
        
        <div className="space-y-4">
          {stressTechniques.map((technique, index) => {
            const Icon = technique.icon;
            return (
              <Card key={index} className="luxury-card p-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 zen-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon size={20} className="text-pearl-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-warm-gray mb-2">{technique.technique}</h3>
                    <p className="text-sm text-warm-gray-light mb-2">{technique.description}</p>
                    <p className="text-xs text-teal-meditation font-medium">💫 {technique.benefit}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Audio Preview */}
      <section className="bg-gradient-to-r from-teal-light/30 to-lavender-soft py-8 mx-4 rounded-2xl mb-8">
        <div className="container mx-auto px-4">
          <Card className="luxury-card p-6">
            <div className="text-center mb-6">
              <div className="w-16 h-16 zen-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <Headphones size={24} className="text-pearl-white" />
              </div>
              <h3 className="text-lg font-bold text-warm-gray mb-2">
                Audio Preview: "Beauty from Within Meditation"
              </h3>
              <p className="text-sm text-warm-gray-light">
                Sample dari exclusive meditation guide hanya untuk member DRELF
              </p>
            </div>
            
            <div className="bg-pearl-white/80 rounded-lg p-4 mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-warm-gray text-sm">Inner Radiance Meditation</p>
                  <p className="text-xs text-warm-gray-light">Guided by Master Yuli, 12 min</p>
                </div>
                <Button variant="zen" size="sm">
                  <Play size={16} className="mr-1" />
                  Play Sample
                </Button>
              </div>
            </div>
            
            <div className="text-center">
              <Button variant="hero" size="lg" className="w-full">
                Akses Full Audio Library
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Transformation Stories */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-xl font-bold text-warm-gray mb-6 text-center">
          🌟 Cerita Transformasi Holistik
        </h2>
        
        <div className="space-y-6">
          {transformationStories.map((story, index) => (
            <Card key={index} className="luxury-card p-6">
              <div className="mb-4">
                <h3 className="font-bold text-warm-gray mb-1">{story.name}</h3>
                <p className="text-sm text-warm-gray-light mb-2">{story.profession}</p>
                <Badge variant="secondary" className="text-xs rose-gradient text-pearl-white">
                  {story.journey}
                </Badge>
              </div>

              {story.before && story.after && (
                <div className="space-y-3 mb-4">
                  <div className="bg-warm-gray/10 rounded-lg p-3">
                    <p className="text-xs font-medium text-warm-gray mb-1">Before Journey:</p>
                    <p className="text-sm text-warm-gray-light">{story.before}</p>
                  </div>
                  
                  <div className="bg-rose-gold-light/30 rounded-lg p-3">
                    <p className="text-xs font-medium text-warm-gray mb-1">After {story.timeline}:</p>
                    <p className="text-sm text-warm-gray">{story.after}</p>
                  </div>

                  {story.key_practice && (
                    <div className="bg-teal-light/30 rounded-lg p-3">
                      <p className="text-xs font-medium text-teal-meditation mb-1">Key Practice:</p>
                      <p className="text-sm text-warm-gray">{story.key_practice}</p>
                    </div>
                  )}
                </div>
              )}

              {story.insight && (
                <div className="space-y-3 mb-4">
                  <div className="bg-lavender-soft rounded-lg p-3">
                    <p className="text-xs font-medium text-warm-gray mb-1">Professional Insight:</p>
                    <p className="text-sm text-warm-gray-light">{story.insight}</p>
                  </div>
                  
                  <div className="bg-blush-light/50 rounded-lg p-3">
                    <p className="text-xs font-medium text-warm-gray mb-1">Clinical Discovery:</p>
                    <p className="text-sm text-warm-gray">{story.discovery}</p>
                  </div>
                </div>
              )}

              <blockquote className="text-sm text-warm-gray italic leading-relaxed border-l-4 border-teal-meditation pl-4">
                "{story.quote}"
              </blockquote>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}