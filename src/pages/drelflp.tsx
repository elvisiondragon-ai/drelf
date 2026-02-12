import { useState } from "react";
import { ChevronRight, Play, Star, Shield, Heart, Sparkles, Clock, Award, MessageCircle, Languages } from "lucide-react";

const translations = {
  id: {
    hero: {
      badge: "✨ Pertama di Indonesia",
      title1: "Rahasia yang Mereka",
      title2: "Sembunyikan dari Kamu",
      subtitle: "Kenapa jutaan rupiah skincare kamu sia-sia?",
      desc: "Karena 70% kecantikan sejati bukan dari luar... tapi dari ketenangan pikiran yang tidak pernah mereka beritahu",
      cta: "Dapatkan Sekarang",
      stats: {
        transformed: "Wanita Bertransformasi",
        rating: "Rating Pelanggan",
        reorder: "Reorder Rate"
      }
    },
    pain: {
      title: "Merasa Familiar?",
      subtitle: "Ini yang terjadi pada ribuan wanita Indonesia setiap hari...",
      items: [
        {
          title: "Habis Jutaan untuk Skincare",
          desc: "Sudah pakai serum mahal, cream import, treatment spa... tapi kulit masih kusam dan lelah. Kenapa?",
          icon: "💸"
        },
        {
          title: "Kantung Mata & Wajah Lelah",
          desc: "Tidur sudah cukup, tapi bangun tetap terlihat capek. Mata bengkak, wajah kusam. Foto selfie harus edit dulu.",
          icon: "😫"
        },
        {
          title: "Stress Membunuh Kecantikan",
          desc: "Tekanan kerja, rumah tangga, sosial media... kortisol naik, kolagen turun 40%. Kulit jadi korban.",
          icon: "😰"
        },
        {
          title: "Percaya Diri Menurun",
          desc: "Lihat cermin jadi insecure. Foto teman-teman glowing, kamu kok beda? Padahal umur sama...",
          icon: "😔"
        }
      ],
      realProblem: {
        title: "Tahukah Kamu Masalah Sebenarnya?",
        p1: "70% kecantikan sejati bukan dari produk yang kamu oles di kulit...",
        p2: "Tapi dari KETENANGAN PIKIRAN yang tidak pernah ada dalam bottle mahal itu."
      }
    }
  },
  en: {
    hero: {
      badge: "✨ First in Indonesia",
      title1: "The Secret They Are",
      title2: "Hiding From You",
      subtitle: "Why is your multi-million rupiah skincare wasted?",
      desc: "Because 70% of true beauty is not from the outside... but from the peace of mind they never told you about",
      cta: "Get Now",
      stats: {
        transformed: "Women Transformed",
        rating: "Customer Rating",
        reorder: "Reorder Rate"
      }
    },
    pain: {
      title: "Feel Familiar?",
      subtitle: "This is what happens to thousands of women every day...",
      items: [
        {
          title: "Spent Millions on Skincare",
          desc: "Expensive serums, imported creams, spa treatments... but skin still looks dull and tired. Why?",
          icon: "💸"
        },
        {
          title: "Dark Circles & Tired Face",
          desc: "Enough sleep, but still wake up looking tired. Puffy eyes, dull skin. Selfies need filters first.",
          icon: "😫"
        },
        {
          title: "Stress Kills Beauty",
          desc: "Work pressure, household, social media... cortisol rises, collagen drops 40%. Skin becomes the victim.",
          icon: "😰"
        },
        {
          title: "Declining Confidence",
          desc: "Looking in the mirror makes you insecure. Friends are glowing, why not you? Even though the age is the same...",
          icon: "😔"
        }
      ],
      realProblem: {
        title: "Do You Know the Real Problem?",
        p1: "70% of true beauty is not from the products you apply to your skin...",
        p2: "But from the PEACE OF MIND that is never found in those expensive bottles."
      }
    },
    products: {
      title: "Our Products",
      subtitle: "DRELF Ultimate Collagen, premium formulation for your holistic beauty.",
      items: [
        {
          title: "DRELF Collagen Sachet",
          desc: "Practical packaging for daily consumption."
        },
        {
          title: "DRELF Collagen Box",
          desc: "Complete package for 30-day transformation."
        },
        {
          title: "DRELF Collagen Bottle",
          desc: "Exclusive bottle for a luxury lifestyle."
        }
      ]
    },
    why: {
      title: "Why Choose DRELF?",
      subtitle: "More than just collagen, a holistic beauty revolution.",
      items: [
        {
          title: "Holistic Approach",
          desc: "Touches the root of beauty problems from within."
        },
        {
          title: "Scientific & Proven",
          desc: "Formulation based on research and clinical studies."
        },
        {
          title: "Premium Quality",
          desc: "Selected raw materials with the highest standards."
        }
      ]
    },
    testimonial: {
      badge: "💬 From Users Who Have Tried Dozens of Collagen Brands",
      title: "\"For the First Time... I Really Feel the Difference\"",
      intro: "I want to be honest...",
      p1: "I've been drinking collagen for ",
      p1_bold: "years",
      p1_end: ". Many brands, many claims.",
      p2: "But this time… I really feel the difference.",
      p3: "DRELF is not just collagen. ",
      p3_bold: "There's audio",
      p3_end: ". And the effect is… ",
      p3_highlight: " waking up feeling fresh, face not tired",
      p3_end2: ", it feels different.",
      p4: "Usually collagen takes a long time, sometimes not felt. But this… ",
      p4_bold: " felt from the body, not just from the mind.",
      gameChanging: "Honestly, this is game changing in the world of collagen.",
      footer: "If you're curious, don't believe me. ",
      footer_bold: "Try it yourself.",
      user: {
        name: "Sarah M.",
        desc: "Has tried 10+ premium collagen brands"
      },
      transformTitle: "Our Customers' Real Transformations"
    },
    solution: {
      title: "Why is DRELF Different from",
      title_accent: "All Collagen on the Market?",
      subtitle: "This is the holistic beauty revolution that changes everything",
      items: [
        {
          title: "Premium Collagen 5000mg",
          desc: "Pure marine collagen from deep sea fish, 98% bioavailability, directly absorbed by the body.",
          benefits: ["Firmer & more elastic skin", "Reduce wrinkles by 40%", "Natural glow from within"]
        },
        {
          title: "Exclusive Meditation Audio",
          desc: "Special meditation guidance to lower cortisol, increase natural collagen production.",
          benefits: ["Stress down 60%", "Quality sleep", "Collagen production up 35%"]
        }
      ],
      stats: [
        { title: "2-4 Weeks", desc: "Real results visible" },
        { title: "BPOM", desc: "Certified & Safe" },
        { title: "1000+", desc: "Real Testimonials" }
      ]
    },
    difference: {
      title: "Feel the DRELF Difference",
      subtitle: "True beauty comes from the balance of mind and body.",
      items: [
        {
          title: "Inner Peace",
          desc: "Drelf helps calm your mind."
        },
        {
          title: "Natural Radiance",
          desc: "Beauty that radiates from within."
        }
      ]
    },
    timeline: {
      title: "Your Transformation Journey",
      items: [
        {
          week: "Week 1-2",
          title: "Foundation Phase",
          desc: "The body starts absorbing collagen, the mind is calmer with morning meditation",
          results: ["Better sleep", "Stable mood", "Skin feels more moist"]
        },
        {
          week: "Week 3-6",
          title: "Transformation Phase",
          desc: "Real changes start to show, compliments start coming in",
          results: ["Natural glowing skin", "Reduced fine lines", "Increased energy", "Boosted confidence"]
        },
        {
          week: "Week 7-12",
          title: "Mastery Phase",
          desc: "Holistic beauty becomes a lifestyle, no longer an effort",
          results: ["Youthful from within", "Natural stress management", "Inner beauty radiates"]
        }
      ]
    },
    checkout: {
      badge: "🎁 Limited Offer",
      title: "Start Transformation Today",
      subtitle: "1 Box = 10 Premium Collagen Sachets + Exclusive Meditation Audio Access",
      price_was: "Rp 750.000",
      price_now: "Rp 600.000",
      save: "Save Rp 150.000",
      features: [
        "10 Premium Collagen Sachets 5000mg",
        "6 Exclusive Meditation Audios",
        "FREE Shipping Across Indonesia",
        "Beauty Consultation via WhatsApp",
        "VIP Beauty Guide Booklet"
      ],
      cta: "Order Now",
      guarantees: [
        "✓ Safe & Trusted Payment",
        "✓ 30-Day Money Back Guarantee",
        "✓ Fast & Neat Shipping"
      ],
      question: "Any Questions? Chat Our CS"
    },
    final: {
      title: "Beauty is a Choice.",
      title_accent: "Which One Do You Choose?",
      without: {
        title: "Without DRELF",
        items: ["❌ Spend millions, minimal results", "❌ Always stressed, dull skin", "❌ Insecure every day", "❌ Looking older than your age"]
      },
      with: {
        title: "With DRELF",
        items: ["✓ Natural glowing from within", "✓ Calm, happy, confident", "✓ Compliments keep coming", "✓ Holistic youthfulness"]
      },
      investment: "The best investment is in yourself.",
      investment_bold: "Start today, see the results in 2-4 weeks.",
      cta: "Yes, I Want Holistic Beauty Now!"
    },
    footer: {
      tagline: "The first holistic beauty revolution in Indonesia. Mind, Body, Skin.",
      contact: "Contact",
      whatsapp: "WhatsApp CS: 0895-3256-33487",
      email: "Email: support@drelf.id",
      hours: "Operating Hours: 09.00-21.00 WIB",
      guarantees_title: "Our Guarantees",
      guarantees: ["✓ BPOM Certified", "✓ 30-Day Money Back Guarantee", "✓ FREE Shipping Across Indonesia", "✓ Safe Payment"],
      rights: "© 2024 DRELF.ID - All Rights Reserved. This product is BPOM registered and safe for consumption.",
      disclaimer: "Results may vary depending on individual conditions. Consult a doctor if you have certain medical conditions."
    }
  },
  id: {
    hero: {
      badge: "✨ Pertama di Indonesia",
      title1: "Rahasia yang Mereka",
      title2: "Sembunyikan dari Kamu",
      subtitle: "Kenapa jutaan rupiah skincare kamu sia-sia?",
      desc: "Karena 70% kecantikan sejati bukan dari luar... tapi dari ketenangan pikiran yang tidak pernah mereka beritahu",
      cta: "Dapatkan Sekarang",
      stats: {
        transformed: "Wanita Bertransformasi",
        rating: "Rating Pelanggan",
        reorder: "Reorder Rate"
      }
    },
    pain: {
      title: "Merasa Familiar?",
      subtitle: "Ini yang terjadi pada ribuan wanita Indonesia setiap hari...",
      items: [
        {
          title: "Habis Jutaan untuk Skincare",
          desc: "Sudah pakai serum mahal, cream import, treatment spa... tapi kulit masih kusam dan lelah. Kenapa?",
          icon: "💸"
        },
        {
          title: "Kantung Mata & Wajah Lelah",
          desc: "Tidur sudah cukup, tapi bangun tetap terlihat capek. Mata bengkak, wajah kusam. Foto selfie harus edit dulu.",
          icon: "😫"
        },
        {
          title: "Stress Membunuh Kecantikan",
          desc: "Tekanan kerja, rumah tangga, sosial media... kortisol naik, kolagen turun 40%. Kulit jadi korban.",
          icon: "😰"
        },
        {
          title: "Percaya Diri Menurun",
          desc: "Lihat cermin jadi insecure. Foto teman-teman glowing, kamu kok beda? Padahal umur sama...",
          icon: "😔"
        }
      ],
      realProblem: {
        title: "Tahukah Kamu Masalah Sebenarnya?",
        p1: "70% kecantikan sejati bukan dari produk yang kamu oles di kulit...",
        p2: "Tapi dari KETENANGAN PIKIRAN yang tidak pernah ada dalam bottle mahal itu."
      }
    },
    products: {
      title: "Produk Kami",
      subtitle: "DRELF Ultimate Collagen, formulasi premium untuk kecantikan holistik Anda.",
      items: [
        {
          title: "DRELF Collagen Sachet",
          desc: "Kemasan praktis untuk konsumsi harian."
        },
        {
          title: "DRELF Collagen Box",
          desc: "Paket lengkap untuk transformasi 30 hari."
        },
        {
          title: "DRELF Collagen Bottle",
          desc: "Botol eksklusif untuk gaya hidup mewah."
        }
      ]
    },
    why: {
      title: "Mengapa Memilih DRELF?",
      subtitle: "Lebih dari sekadar kolagen, sebuah revolusi kecantikan holistik.",
      items: [
        {
          title: "Pendekatan Holistik",
          desc: "Menyentuh akar permasalahan kecantikan dari dalam."
        },
        {
          title: "Ilmiah & Terbukti",
          desc: "Formulasi berdasarkan riset dan studi klinis."
        },
        {
          title: "Kualitas Premium",
          desc: "Bahan baku pilihan dengan standar tertinggi."
        }
      ]
    },
    testimonial: {
      badge: "💬 Dari Pengguna yang Sudah Coba Puluhan Merek Kolagen",
      title: "\"Baru Kali Ini... Beneran Kerasa Bedanya\"",
      intro: "Aku mau jujur ya...",
      p1: "Aku sudah minum kolagen ",
      p1_bold: "bertahun-tahun",
      p1_end: ". Banyak merek, banyak klaim.",
      p2: "Tapi baru kali ini… aku benar-benar kerasa bedanya.",
      p3: "DRELF ini bukan cuma kolagen. ",
      p3_bold: "Ada audionya",
      p3_end: ". Dan efeknya itu… ",
      p3_highlight: " bangun tidur badan terasa segar, wajah nggak lelah",
      p3_end2: ", feel-nya beda.",
      p4: "Biasanya kolagen itu nunggu lama, kadang nggak kerasa. Tapi ini… ",
      p4_bold: " kerasa dari tubuh, bukan cuma dari pikiran.",
      gameChanging: "Jujur, ini game changing di dunia kolagen.",
      footer: "Kalau penasaran, jangan percaya aku. ",
      footer_bold: "Coba sendiri.",
      user: {
        name: "Sarah M.",
        desc: "Sudah coba 10+ merek kolagen premium"
      },
      transformTitle: "Transformasi Nyata Pelanggan Kami"
    },
    solution: {
      title: "Kenapa DRELF Berbeda dari",
      title_accent: "Semua Kolagen di Pasaran?",
      subtitle: "Inilah revolusi kecantikan holistik yang mengubah segalanya",
      items: [
        {
          title: "Kolagen Premium 5000mg",
          desc: "Marine collagen murni dari deep sea fish, bioavailability 98%, langsung diserap tubuh.",
          benefits: ["Kulit lebih kencang & elastis", "Mengurangi kerutan 40%", "Glow alami dari dalam"]
        },
        {
          title: "Audio Meditasi Eksklusif",
          desc: "Panduan meditasi khusus untuk menurunkan kortisol, meningkatkan produksi kolagen alami.",
          benefits: ["Stress turun 60%", "Tidur berkualitas", "Produksi kolagen naik 35%"]
        }
      ],
      stats: [
        { title: "2-4 Minggu", desc: "Hasil terlihat nyata" },
        { title: "BPOM", desc: "Certified & Aman" },
        { title: "1000+", desc: "Testimoni Nyata" }
      ]
    },
    difference: {
      title: "Rasakan Perbedaan DRELF",
      subtitle: "Kecantikan sejati datang dari keseimbangan pikiran dan tubuh.",
      items: [
        {
          title: "Ketenangan Batin",
          desc: "Drelf membantu menenangkan pikiran Anda."
        },
        {
          title: "Pancaran Alami",
          desc: "Kecantikan yang memancar dari dalam."
        }
      ]
    },
    timeline: {
      title: "Perjalanan Transformasi Kamu",
      items: [
        {
          week: "Minggu 1-2",
          title: "Foundation Phase",
          desc: "Tubuh mulai menyerap kolagen, pikiran lebih tenang dengan meditasi pagi",
          results: ["Tidur lebih nyenyak", "Mood stabil", "Kulit terasa lebih lembab"]
        },
        {
          week: "Minggu 3-6",
          title: "Transformation Phase",
          desc: "Perubahan nyata mulai terlihat, komplimen mulai berdatangan",
          results: ["Kulit glowing alami", "Fine lines berkurang", "Energi meningkat", "Percaya diri naik"]
        },
        {
          week: "Minggu 7-12",
          title: "Mastery Phase",
          desc: "Kecantikan holistik jadi lifestyle, bukan lagi effort",
          results: ["Awet muda dari dalam", "Stress management natural", "Inner beauty radiates"]
        }
      ]
    },
    checkout: {
      badge: "🎁 Penawaran Terbatas",
      title: "Mulai Transformasi Hari Ini",
      subtitle: "1 Box = 10 Sachet Premium Collagen + Akses Audio Meditasi Eksklusif",
      price_was: "Rp 750.000",
      price_now: "Rp 600.000",
      save: "Hemat Rp 150.000",
      features: [
        "10 Sachet Kolagen Premium 5000mg",
        "6 Audio Meditasi Eksklusif",
        "FREE Ongkir Se-Indonesia",
        "Konsultasi Beauty via WhatsApp",
        "Buklet Panduan Kecantikan VIP"
      ],
      cta: "Pesan Sekarang",
      guarantees: [
        "✓ Pembayaran Aman & Terpercaya",
        "✓ Garansi Uang Kembali 30 Hari",
        "✓ Pengiriman Cepat & Rapi"
      ],
      question: "Ada Pertanyaan? Chat CS Kami"
    },
    final: {
      title: "Cantik itu Pilihan.",
      title_accent: "Kamu Pilih yang Mana?",
      without: {
        title: "Tanpa DRELF",
        items: ["❌ Habis jutaan, hasil minimal", "❌ Stress terus, kulit kusam", "❌ Insecure setiap hari", "❌ Umur terlihat lebih tua"]
      },
      with: {
        title: "Dengan DRELF",
        items: ["✓ Glowing natural dari dalam", "✓ Tenang, bahagia, percaya diri", "✓ Komplimen terus datang", "✓ Awet muda holistik"]
      },
      investment: "Investasi terbaik adalah untuk dirimu sendiri.",
      investment_bold: "Mulai hari ini, lihat hasilnya dalam 2-4 minggu.",
      cta: "Ya, Saya Mau Cantik Holistik Sekarang!"
    },
    footer: {
      tagline: "Revolusi kecantikan holistik pertama di Indonesia. Mind, Body, Skin.",
      contact: "Kontak",
      whatsapp: "WhatsApp CS: 0895-3256-33487",
      email: "Email: support@drelf.id",
      hours: "Jam Operasional: 09.00-21.00 WIB",
      guarantees_title: "Jaminan Kami",
      guarantees: ["✓ BPOM Certified", "✓ Garansi Uang Kembali 30 Hari", "✓ FREE Ongkir Se-Indonesia", "✓ Pembayaran Aman"],
      rights: "© 2024 DRELF.ID - All Rights Reserved. Produk ini telah terdaftar BPOM dan aman dikonsumsi.",
      disclaimer: "Hasil dapat bervariasi tergantung kondisi individu. Konsultasikan dengan dokter jika memiliki kondisi medis tertentu."
    }
  }
};

export default function DrelfLanding() {
  const [activeTab, setActiveTab] = useState("home");
  const [lang, setLang] = useState<"id" | "en">("id");

  const t = translations[lang];

  const scrollToCheckout = () => {
    document.getElementById("checkout")?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleLang = () => {
    setLang(lang === "id" ? "en" : "id");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-rose-50">
      {/* Language Switcher */}
      <div className="fixed top-6 right-6 z-50">
        <button
          onClick={toggleLang}
          className="bg-white/80 backdrop-blur-md border border-amber-200 px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 text-amber-900 font-semibold"
        >
          <Languages size={18} />
          {lang === "id" ? "ID" : "EN"}
        </button>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-100 via-champagne to-rose-100 pt-12 pb-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-amber-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-rose-300 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block mb-6 px-6 py-2 bg-gradient-to-r from-amber-400 to-amber-500 rounded-full text-sm font-semibold text-amber-900 shadow-lg">
              {t.hero.badge}
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {t.hero.title1}
              <span className="block bg-gradient-to-r from-amber-600 via-amber-500 to-rose-500 bg-clip-text text-transparent">
                {t.hero.title2}
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 mb-4 font-medium">
              {t.hero.subtitle}
            </p>
            
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              {t.hero.desc}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button 
                onClick={scrollToCheckout}
                className="px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                {t.hero.cta} <ChevronRight size={20} />
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600">1000+</div>
                <div className="text-sm text-gray-600">{t.hero.stats.transformed}</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <div className="text-sm text-gray-600">{t.hero.stats.rating}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600">98%</div>
                <div className="text-sm text-gray-600">{t.hero.stats.reorder}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="relative w-full overflow-hidden py-8">
        <div className="container mx-auto px-6 max-w-sm">
          <div className="aspect-[9/16] w-full rounded-lg overflow-hidden shadow-xl">
            <video
              src="https://nlrgdhpmsittuwiiindq.supabase.co/storage/v1/object/public/drelf/rus.mp4"
              poster={"https://nlrgdhpmsittuwiiindq.supabase.co/storage/v1/object/public/drelf/produk2.png"}
              loop
              playsInline
              controls
              className="w-full h-full object-cover"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Pain Point Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
              {lang === "id" ? "Merasa " : "Feel "}
              <span className="text-rose-500">{lang === "id" ? "Familiar" : "Familiar"}?</span>
            </h2>
            <p className="text-center text-gray-600 mb-16 text-lg">
              {t.pain.subtitle}
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {t.pain.items.map((pain, i) => (
                <div key={i} className="bg-gradient-to-br from-rose-50 to-amber-50 p-8 rounded-2xl border-2 border-rose-100 hover:border-rose-300 transition-all duration-300 hover:shadow-xl">
                  <div className="text-4xl mb-4">{pain.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{pain.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{pain.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-amber-500 to-rose-500 p-1 rounded-3xl">
              <div className="bg-white p-10 rounded-3xl text-center">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  {t.pain.realProblem.title}
                </h3>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  <span className="font-bold text-rose-600">{t.pain.realProblem.p1}</span>
                </p>
                <p className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent">
                  {t.pain.realProblem.p2}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Products Section */}
      <section className="py-20 bg-gradient-to-br from-white to-amber-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t.products.title}
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              {t.products.subtitle}
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {t.products.items.map((item, i) => (
                <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-amber-100 p-6">
                  <img src={`https://nlrgdhpmsittuwiiindq.supabase.co/storage/v1/object/public/drelf/produk${i+1}.png`} alt={`Drelf Product ${i+1}`} className="w-full h-auto rounded-lg mb-4"/>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-700">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why DRELF Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t.why.title}
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              {t.why.subtitle}
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {t.why.items.map((item, i) => (
                <div key={i} className="bg-gradient-to-br from-amber-50 to-rose-50 p-8 rounded-2xl border-2 border-amber-100 shadow-lg">
                  <img src={`https://nlrgdhpmsittuwiiindq.supabase.co/storage/v1/object/public/drelf/why${i+1}.png`} alt={`Why Drelf ${i+1}`} className="w-full h-48 object-cover rounded-lg mb-4"/>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-700">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Unique Point - Testimonial Style */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-rose-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block px-6 py-2 bg-amber-100 rounded-full text-amber-800 font-semibold mb-4">
                {t.testimonial.badge}
              </div>
              <h2 className="text-4xl font-bold text-gray-900">
                {t.testimonial.title}
              </h2>
            </div>

            <div className="bg-white rounded-3xl shadow-2xl p-10 md:p-16 relative">
              <div className="absolute -top-6 -left-6 text-8xl text-amber-200 font-serif">"</div>
              <div className="absolute -bottom-6 -right-6 text-8xl text-amber-200 font-serif">"</div>
              
              <div className="relative z-10 space-y-6 text-lg text-gray-700 leading-relaxed">
                <p className="font-medium text-xl text-gray-900">
                  {t.testimonial.intro}
                </p>
                
                <p>
                  {t.testimonial.p1} <span className="font-bold text-amber-600">{t.testimonial.p1_bold}</span>{t.testimonial.p1_end}
                </p>
                
                <p className="text-xl font-bold text-rose-600">
                  {t.testimonial.p2}
                </p>
                
                <p>
                  {t.testimonial.p3} <span className="font-bold">{t.testimonial.p3_bold}</span>{t.testimonial.p3_end}
                  <span className="bg-amber-100 px-2 py-1 rounded font-semibold">{t.testimonial.p3_highlight}</span> 
                  {t.testimonial.p3_end2}
                </p>
                
                <p>
                  {t.testimonial.p4} 
                  <span className="font-bold text-amber-700">{t.testimonial.p4_bold}</span>
                </p>
                
                <div className="bg-gradient-to-r from-amber-50 to-rose-50 p-6 rounded-2xl border-2 border-amber-200 mt-8">
                  <p className="text-2xl font-bold text-gray-900 text-center">
                    {t.testimonial.gameChanging}
                  </p>
                </div>
                
                <p className="text-center text-gray-600 italic pt-4">
                  {t.testimonial.footer} <span className="font-bold text-amber-600 not-italic">{t.testimonial.footer_bold}</span>
                </p>
              </div>

              <div className="flex items-center gap-4 mt-10 pt-8 border-t-2 border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-rose-400 rounded-full flex items-center justify-center text-2xl">
                  👩
                </div>
                <div>
                  <div className="font-bold text-gray-900">{t.testimonial.user.name}</div>
                  <div className="text-gray-600 text-sm">{t.testimonial.user.desc}</div>
                  <div className="flex mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-12 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {t.testimonial.transformTitle}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <img key={i} src={`https://nlrgdhpmsittuwiiindq.supabase.co/storage/v1/object/public/drelf/${i}.jpeg`} alt={`Testimony ${i}`} className="w-full h-auto rounded-lg shadow-md object-cover"/>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {t.solution.title}
                <span className="block bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent">
                  {t.solution.title_accent}
                </span>
              </h2>
              <p className="text-xl text-gray-600">
                {t.solution.subtitle}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {t.solution.items.map((item, i) => (
                <div key={i} className={`bg-gradient-to-br from-${i === 0 ? 'rose' : 'amber'}-50 to-white p-8 rounded-2xl border-2 border-${i === 0 ? 'rose' : 'amber'}-100`}>
                  <div className={`w-16 h-16 bg-gradient-to-br from-${i === 0 ? 'rose' : 'amber'}-400 to-${i === 0 ? 'rose' : 'amber'}-600 rounded-2xl flex items-center justify-center mb-6`}>
                    {i === 0 ? <Heart className="text-white" size={32} /> : <Sparkles className="text-white" size={32} />}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {item.desc}
                  </p>
                  <ul className="space-y-2">
                    {item.benefits.map((benefit, j) => (
                      <li key={j} className="flex items-center gap-2 text-gray-700">
                        <div className={`w-2 h-2 bg-${i === 0 ? 'rose' : 'amber'}-500 rounded-full`}></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-amber-400 via-amber-500 to-rose-500 p-1 rounded-3xl">
              <div className="bg-white p-10 rounded-3xl">
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  {t.solution.stats.map((stat, i) => (
                    <div key={i}>
                      <div className={`w-20 h-20 bg-gradient-to-br from-${i === 1 ? 'rose' : 'amber'}-100 to-${i === 2 ? 'rose' : 'amber'}-200 rounded-full flex items-center justify-center mx-auto mb-4`}>
                        {i === 0 ? <Clock className="text-amber-600" size={32} /> : i === 1 ? <Shield className="text-rose-600" size={32} /> : <Award className="text-amber-600" size={32} />}
                      </div>
                      <div className="text-3xl font-bold text-gray-900 mb-2">{stat.title}</div>
                      <div className="text-gray-600">{stat.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The DRELF Difference Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-rose-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t.difference.title}
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              {t.difference.subtitle}
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {t.difference.items.map((item, i) => (
                <div key={i} className={`bg-white p-6 rounded-2xl shadow-lg border-2 border-${i === 0 ? 'amber' : 'rose'}-100`}>
                  <img src={`https://nlrgdhpmsittuwiiindq.supabase.co/storage/v1/object/public/drelf/drelf${i+4}.png`} alt={item.title} className="w-full h-auto rounded-lg mb-4"/>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-700">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Before After Timeline */}
      <section className="py-20 bg-gradient-to-br from-rose-50 via-amber-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              {t.timeline.title}
            </h2>

            <div className="space-y-8">
              {t.timeline.items.map((phase, i) => (
                <div key={i} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-rose-500 rounded-full flex items-center justify-center text-white font-bold">
                      {i + 1}
                    </div>
                    {i < 2 && <div className="w-1 h-full bg-gradient-to-b from-amber-400 to-rose-500 rounded-full"></div>}
                  </div>
                  <div className="flex-1 pb-8">
                    <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-amber-100">
                      <div className="text-sm font-semibold text-amber-600 mb-1">{phase.week}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{phase.title}</h3>
                      <p className="text-gray-600 mb-4">{phase.desc}</p>
                      <div className="space-y-2">
                        {phase.results.map((result, j) => (
                          <div key={j} className="flex items-center gap-2 text-gray-700">
                            <div className="w-1.5 h-1.5 bg-gradient-to-r from-amber-500 to-rose-500 rounded-full"></div>
                            <span className="text-sm">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Checkout Section */}
      <section id="checkout" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block px-6 py-2 bg-rose-100 rounded-full text-rose-800 font-semibold mb-4">
                {t.checkout.badge}
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                {t.checkout.title}
              </h2>
              <p className="text-gray-600 text-lg">
                {t.checkout.subtitle}
              </p>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-rose-50 rounded-3xl p-8 border-2 border-amber-200 shadow-2xl">
              <div className="text-center mb-8">
                <img src={"https://nlrgdhpmsittuwiiindq.supabase.co/storage/v1/object/public/drelf/checkout1.png"} alt="Drelf Checkout Product" className="mx-auto max-w-xs mb-8 rounded-lg shadow-lg"/>
                <div className="inline-block">
                  <div className="text-gray-500 line-through text-xl mb-2">{t.checkout.price_was}</div>
                  <div className="text-5xl font-bold bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent mb-2">
                    {t.checkout.price_now}
                  </div>
                  <div className="inline-block px-4 py-1 bg-rose-500 text-white rounded-full text-sm font-semibold">
                    {t.checkout.save}
                  </div>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {t.checkout.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-700">
                    <div className="w-6 h-6 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => window.location.href = 'https://export.elvisiongroup.com/drelf'}
                className="w-full py-5 bg-gradient-to-r from-amber-500 via-amber-600 to-rose-500 text-white rounded-full font-bold text-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 mb-4"
              >
                {t.checkout.cta} <ChevronRight size={24} />
              </button>

              <div className="text-center space-y-2 text-sm text-gray-600">
                {t.checkout.guarantees.map((g, i) => (
                  <p key={i}>{g}</p>
                ))}
              </div>
            </div>

            <div className="mt-8 text-center">
              <a 
                href="https://wa.me/628980040002?text=Kak%20mau%20tanya%20Drelf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-full font-semibold hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <MessageCircle size={20} />
                {t.checkout.question}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-br from-amber-100 via-rose-100 to-amber-100">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t.final.title}
              <span className="block text-amber-600">{t.final.title_accent}</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-gray-200">
                <div className="text-4xl mb-4">😔</div>
                <h3 className="font-bold text-gray-900 mb-3">{t.final.without.title}</h3>
                <ul className="space-y-2 text-left text-gray-600 text-sm">
                  {t.final.without.items.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-amber-50 to-rose-50 p-6 rounded-2xl shadow-xl border-2 border-amber-300">
                <div className="text-4xl mb-4">✨</div>
                <h3 className="font-bold text-gray-900 mb-3">{t.final.with.title}</h3>
                <ul className="space-y-2 text-left text-gray-700 text-sm">
                  {t.final.with.items.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </div>
            </div>

            <p className="text-xl text-gray-700 mb-8">
              {t.final.investment} 
              <span className="block font-bold text-amber-600 mt-2">{t.final.investment_bold}</span>
            </p>

            <button 
              onClick={() => window.location.href = 'https://export.elvisiongroup.com/drelf'}
              className="px-12 py-5 bg-gradient-to-r from-amber-500 via-amber-600 to-rose-500 text-white rounded-full font-bold text-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              {t.final.cta}
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="font-bold text-xl mb-4 bg-gradient-to-r from-amber-400 to-rose-400 bg-clip-text text-transparent">
                  DRELF.ID
                </h3>
                <p className="text-gray-400 text-sm">
                  {t.footer.tagline}
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">{t.footer.contact}</h4>
                <div className="space-y-2 text-sm text-gray-400">
                  <p>{t.footer.whatsapp}</p>
                  <p>{t.footer.email}</p>
                  <p>{t.footer.hours}</p>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">{t.footer.guarantees_title}</h4>
                <div className="space-y-2 text-sm text-gray-400">
                  {t.footer.guarantees.map((g, i) => <p key={i}>{g}</p>)}
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-800 pt-8 text-center">
              <p className="text-gray-500 text-sm">
                {t.footer.rights}
              </p>
              <p className="text-gray-600 text-xs mt-2">
                {t.footer.disclaimer}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

/*
 * Extracted URLs, Links, Images, and Video Paths from src/pages/drelflp.tsx:
 *
 * Image Assets (local paths):
 * - @/assets/checkout1.png
 * - @/assets/home1.png
 * - @/assets/siteicon.png
 * - @/assets/drelf4.png
 * - @/assets/drelf5.png
 * - @/assets/produk1.png
 * - @/assets/produk2.png
 * - @/assets/produk3.png
 * - @/assets/why1.png
 * - @/assets/why2.png
 * - @/assets/why3.png
 * - @/assets/1.jpeg
 * - @/assets/2.jpeg
 * - @/assets/3.jpeg
 * - @/assets/4.jpeg
 * - @/assets/5.jpeg
 *
 * Video Paths:
 * - https://nlrgdhpmsittuwiiindq.supabase.co/storage/v1/object/public/drelf/rus.mp4
 * - /rus.jpg (poster image for video)
 *
 * External Links/URLs:
 * - https://export.elvisiongroup.com/drelf
 * - https://wa.me/628980040002?text=Kak%20mau%20tanya%20Drelf
 */
