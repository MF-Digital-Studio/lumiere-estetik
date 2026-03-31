"use client";

import { ArrowRight, Award, CheckCircle } from "lucide-react";
import Image from "next/image";

interface AboutPageProps {
  onNavigate: (page: "home" | "services" | "about" | "contact") => void;
}

const experts = [
  {
    name: "Dr. Aylin Kara",
    title: "Medikal Estetik Uzmanı",
    specialties: ["Botoks & Dolgu", "PRP Tedavisi", "Cilt Gençleştirme"],
    img: "/images/expert-1.jpg",
  },
  {
    name: "Dr. Selin Yıldız",
    title: "Dermatoloji Uzmanı",
    specialties: ["Medikal Cilt Bakımı", "Lazer Tedavileri", "Akne & Skar"],
    img: "/images/expert-2.jpg",
  },
  {
    name: "Dr. Mert Özdemir",
    title: "Plastik Cerrahi Uzmanı",
    specialties: ["Estetik Danışmanlık", "Non-cerrahi Prosedürler", "Yüz Analizi"],
    img: "/images/expert-3.jpg",
  },
];

const values = [
  {
    title: "Güvenlik Önce",
    desc: "Tüm uygulamalarımız FDA onaylı cihazlar ve steril protokollerle gerçekleştirilir.",
  },
  {
    title: "Doğal Sonuçlar",
    desc: "Amacımız sizi değiştirmek değil; en iyi versiyonunuzu ortaya çıkarmak.",
  },
  {
    title: "Kişiselleştirilmiş Bakım",
    desc: "Her danışan için özel tedavi protokolü belirlenir, tek tip yaklaşım kullanılmaz.",
  },
  {
    title: "Gizlilik",
    desc: "Danışanlarımızın mahremiyeti en üst düzeyde korunur; bilgileriniz paylaşılmaz.",
  },
];

export default function AboutPage({ onNavigate }: AboutPageProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* ── Page Header ── */}
      <section className="relative py-40 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/about-bg.jpg')" }}
        >
          <div className="absolute inset-0 bg-[oklch(0.98_0.005_60/0.65)]" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.3em] uppercase font-sans text-primary mb-4">
            Hakkımızda
          </p>
          <h1 className="font-serif text-5xl lg:text-6xl text-foreground text-balance mb-6">
            Güzelliğe Adanmış
            <br />
            <em className="text-primary not-italic">10 Yıllık Deneyim</em>
          </h1>
          <p className="text-muted-foreground font-sans leading-relaxed text-lg">
            2014 yılında Nişantaşı&apos;nda kapılarını açan Lumière Estetik, bilim ve estetiği
            buluşturan premium hizmet anlayışıyla Türkiye&apos;nin en prestijli klinikleri arasına girdi.
          </p>
        </div>
      </section>

      {/* ── Story ── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative rounded-3xl overflow-hidden h-[500px] shadow-2xl">
            <Image
              src="/images/about-bg.jpg"
              alt="Lumière Estetik klinik içi"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-[oklch(0.98_0.005_60/0.9)] backdrop-blur-sm border border-border">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Award size={22} className="text-primary" />
                </div>
                <div>
                  <p className="font-sans font-semibold text-foreground text-sm">ISO 9001 Sertifikalı</p>
                  <p className="text-xs text-muted-foreground font-sans">Uluslararası Kalite Standardı</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase font-sans text-primary mb-3">
                Hikayemiz
              </p>
              <h2 className="font-serif text-4xl text-foreground text-balance mb-4">
                Bilim ve Sanatın
                <br />Buluşma Noktası
              </h2>
              <p className="text-muted-foreground font-sans leading-relaxed mb-4">
                Lumière Estetik, dermatoloji ve medikal estetik alanındaki uzmanların bir araya gelerek
                kurduğu; güzellik anlayışını bilimsel temellere oturtmayı hedefleyen bir klinik olarak doğdu.
              </p>
              <p className="text-muted-foreground font-sans leading-relaxed">
                10 yıl içinde 5.000&apos;den fazla danışana hizmet vererek, her birinin kendi doğal güzelliğini
                keşfetmesine yardımcı olduk. Alanında uzman, kalite odaklı kadromuzla her geçen gün büyümeye devam ediyoruz.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="p-5 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors duration-300"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle size={16} className="text-primary flex-shrink-0" />
                    <h4 className="font-sans font-semibold text-foreground text-sm">{v.title}</h4>
                  </div>
                  <p className="text-xs text-muted-foreground font-sans leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Experts ── */}
      <section className="py-24 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase font-sans text-primary mb-4">
              Uzman Kadromuz
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl text-foreground text-balance">
              Sizin İçin En İyisi
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {experts.map((expert) => (
              <div
                key={expert.name}
                className="group rounded-3xl bg-background border border-border overflow-hidden hover:border-primary/40 hover:shadow-[0_12px_48px_oklch(0.62_0.06_65/0.10)] transition-all duration-500"
              >
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={expert.img}
                    alt={expert.name}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.18_0.01_55/0.4)] to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl text-foreground mb-1">{expert.name}</h3>
                  <p className="text-xs tracking-wider uppercase font-sans text-primary mb-4">
                    {expert.title}
                  </p>
                  <ul className="space-y-1.5">
                    {expert.specialties.map((s) => (
                      <li
                        key={s}
                        className="flex items-center gap-2 text-sm font-sans text-muted-foreground"
                      >
                        <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl text-foreground mb-6 text-balance">
            Uzmanlarımızla Tanışmak İster misiniz?
          </h2>
          <p className="text-muted-foreground font-sans leading-relaxed mb-10">
            Ücretsiz ön görüşme için randevu oluşturun. Size en uygun uzmanımız
            sizi bilgilendirsin.
          </p>
          <button
            onClick={() => onNavigate("contact")}
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-primary text-primary-foreground font-sans font-medium tracking-wider uppercase text-sm hover:brightness-105 hover:scale-105 transition-all duration-300 shadow-md"
          >
            Randevu Oluştur <ArrowRight size={16} />
          </button>
        </div>
      </section>
    </div>
  );
}
