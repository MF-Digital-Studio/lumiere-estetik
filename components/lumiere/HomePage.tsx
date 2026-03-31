"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, Shield, Users } from "lucide-react";
import TestimonialsSection from "./TestimonialsSection";
import { EnvelopeQuillIcon, WhatsAppLineIcon } from "./LineArtIcons";

const featuredServices = [
  {
    icon: "✦",
    title: "Lazer Epilasyon",
    desc: "FDA onaylı teknoloji ile kalıcı ve ağrısız tüy azaltma.",
  },
  {
    icon: "◈",
    title: "Medikal Cilt Bakımı",
    desc: "Dermatoloji destekli kişiselleştirilmiş cilt yenileme protokolleri.",
  },
  {
    icon: "◎",
    title: "Bölgesel İncelme",
    desc: "Noninvaziv yöntemlerle hedeflenmiş vücut şekillendirme.",
  },
];

const stats = [
  { icon: Shield, value: "10+", label: "Yıllık Tecrübe" },
  { icon: Sparkles, value: "FDA", label: "Onaylı Cihazlar" },
  { icon: Users, value: "Uzman", label: "Doktor Kadrosu" },
];

const byTheNumbers = [
  { value: "10+", label: "YILLIK DENEYİM" },
  { value: "10.000+", label: "MUTLU DANIŞAN" },
  { value: "15+", label: "UZMAN KADRO" },
  { value: "%98", label: "MEMNUNİYET ORANI" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* ── Editorial Split Hero ── */}
      <section className="relative min-h-screen grid grid-cols-1 lg:grid-cols-12 overflow-hidden gap-0 p-0 m-0">
        {/* Left Column: Typography Focus (7 columns) */}
        <div className="lg:col-span-7 bg-[#FAF9F6] flex flex-col justify-center pl-12 lg:pl-24 pr-6 lg:pr-12 py-24 lg:py-0 m-0">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-12 w-fit">
            <span className="w-1 h-1 rounded-full bg-primary" />
            <span className="text-xs tracking-[0.25em] uppercase font-sans text-stone-600">
              Nişantaşı, İstanbul
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-6xl lg:text-7xl xl:text-8xl leading-tight text-foreground mb-8 space-y-2">
            <div>Doğal.</div>
            <div className="italic text-stone-500">Kusursuz.</div>
          </h1>

          {/* Sub-headline */}
          <p className="text-lg text-stone-600 font-sans leading-relaxed max-w-md mb-12 font-light">
            Sadece size özel tasarlanmış medikal dokunuşlarla, kendi güzelliğinizin en saf halini keşfedin.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6">
            <Link
              href="/iletisim"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[oklch(0.62_0.06_65)] text-white font-sans font-medium tracking-wider uppercase text-sm hover:brightness-110 transition-all duration-300 shadow-lg hover:shadow-xl w-fit"
            >
              Randevu Al
            </Link>
            <Link
              href="/hizmetlerimiz"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-stone-300 bg-transparent text-foreground font-sans font-medium tracking-wider uppercase text-sm hover:border-stone-400 hover:bg-stone-50 transition-all duration-300 w-fit"
            >
              Hizmetleri İncele
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Right Column: Visual Focus (5 columns) */}
        <div className="lg:col-span-5 h-screen overflow-hidden relative p-0 m-0">
          <img
            src="/images/hero-bg.jpg"
            alt="Lumière Estetik Premium Beauty"
            className="w-full h-full object-cover object-center"
          />
          {/* Subtle gradient overlay (bottom) */}
          <div className="absolute inset-0 bg-linear-to-t from-black/5 via-transparent to-transparent" />
        </div>
      </section>

      {/* ── By The Numbers ── */}
      <section className="w-full bg-stone-50 py-16 md:py-20 border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-0">
            {byTheNumbers.map((item, index) => (
              <div
                key={item.label}
                className={`flex flex-col items-center justify-center text-center px-4 ${index < 3 ? "lg:border-r lg:border-stone-200" : ""
                  }`}
              >
                <span className="font-serif text-5xl lg:text-6xl font-light text-stone-900 mb-3">
                  {item.value}
                </span>
                <span className="text-xs uppercase tracking-[0.2em] text-amber-700/80 font-medium">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Services ── */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase font-sans text-primary mb-3">
              Öne Çıkan Hizmetler
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl text-foreground text-balance">
              Size Özel Bakım Protokolleri
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
              <div
                key={service.title}
                className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/40 hover:shadow-[0_8px_40px_oklch(0.62_0.06_65/0.12)] transition-all duration-500 cursor-pointer"
              >
                <div className="text-3xl text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="font-serif text-2xl text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground font-sans text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>
                <Link
                  href="/hizmetlerimiz"
                  className="inline-flex items-center gap-1.5 text-sm font-sans text-primary hover:gap-3 transition-all duration-300 uppercase tracking-wider"
                >
                  Detaylı Bilgi <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trust Stats ── */}
      <section className="py-16 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-3 gap-8">
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex flex-col items-center text-center gap-3">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                  <Icon size={20} className="text-primary" />
                </div>
                <span className="font-serif text-3xl text-foreground">{value}</span>
                <span className="text-xs tracking-[0.2em] uppercase font-sans text-muted-foreground">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Philosophy / The Art of Beauty ── */}
      <section className="bg-[#F8F5F0]">
        <div className="max-w-7xl mx-auto px-6 py-24 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=800&auto=format&fit=crop"
                alt="Lumiere Estetik felsefesi"
                className="w-full aspect-[4/5] object-cover rounded-[40px] shadow-[0_20px_60px_rgba(120,95,70,0.18)]"
              />
            </div>

            <div>
              <p className="text-sm uppercase tracking-widest text-amber-700/80 mb-4">FELSEFEMİZ</p>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-tight text-balance">
                Kendi Güzelliğinize Bir Adım Daha Yaklaşın
              </h2>
              <p className="text-stone-600 mt-6 leading-relaxed text-lg">
                Lumière Estetik olarak, amacımız sizi değiştirmek değil; en iyi versiyonunuzu ortaya
                çıkarmaktır. Doğal hatlarınızı koruyarak, bilimin ve sanatın kusursuz uyumuyla size
                özel dokunuşlar tasarlıyoruz.
              </p>
              <Link
                href="/klinik"
                className="mt-8 inline-flex items-center text-amber-700 hover:text-amber-800 transition-colors duration-300 tracking-wide"
              >
                Hakkımızda Daha Fazla →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Advanced Technology / Zig-Zag Editorial ── */}
      <section className="bg-background">
        <div className="max-w-7xl mx-auto px-6 py-24 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm uppercase tracking-widest text-amber-700/80 mb-4">İLERİ TEKNOLOJİ</p>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-tight text-balance">
                Dünya Standartlarında Medikal Donanım
              </h2>
              <p className="text-stone-600 mt-6 leading-relaxed text-lg">
                Güzellik yolculuğunuzda şansa yer bırakmıyoruz. Uluslararası otoritelerce onaylanmış,
                en güncel FDA onaylı lazer ve cilt yenileme sistemleriyle, minimum sürede maksimum ve
                kalıcı sonuçlar elde ediyoruz.
              </p>
              <Link
                href="/hizmetlerimiz"
                className="mt-8 inline-flex items-center text-amber-700 hover:text-amber-900 transition-colors duration-300 tracking-wide"
              >
                Teknolojilerimizi Keşfedin →
              </Link>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop"
                alt="Lumiere Estetik ileri teknoloji uygulamaları"
                className="w-full aspect-[4/5] object-cover rounded-[40px] shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Patient Testimonials ── */}
      <TestimonialsSection />

      {/* ── Atmosphere Banner ── */}
      <section className="relative w-full h-[40vh] md:h-[46vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center md:bg-fixed"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1600&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-stone-900/30" />
        <div className="relative h-full flex items-center justify-center px-6">
          <p className="font-serif text-white text-3xl md:text-5xl italic text-center max-w-3xl mx-auto leading-snug text-balance">
            Güzellik bir varış noktası değil, kendinize yaptığınız bitmeyen bir yolculuktur.
          </p>
        </div>
      </section>

      {/* ── Our Clinics / Branches Grid ── */}
      <section className="bg-[#F8F5F0]">
        <div className="max-w-7xl mx-auto px-6 py-24 lg:px-10">
          <div className="text-center">
            <p className="text-xs tracking-[0.3em] uppercase font-sans text-amber-700/80 mb-3">
              LOKASYONLAR
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl text-foreground text-balance">
              Size En Yakın Lumière
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <article className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop"
                alt="Nişantaşı Merkez"
                className="h-56 w-full object-cover"
              />
              <div className="p-8">
                <h3 className="text-xl font-medium text-stone-900 mb-2">Nişantaşı Merkez</h3>
                <p className="text-sm text-stone-500 mb-6 leading-relaxed">
                  Abdi İpekçi Cad. No:24/3, Nişantaşı, Şişli, İstanbul
                </p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm uppercase tracking-wider text-amber-700 hover:text-amber-900 transition-colors"
                >
                  Yol Tarifi Al →
                </a>
              </div>
            </article>

            <article className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <img
                src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=600&auto=format&fit=crop"
                alt="Levent Klinik"
                className="h-56 w-full object-cover"
              />
              <div className="p-8">
                <h3 className="text-xl font-medium text-stone-900 mb-2">Levent Klinik</h3>
                <p className="text-sm text-stone-500 mb-6 leading-relaxed">
                  Büyükdere Cad. No:189, Levent, Beşiktaş, İstanbul
                </p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm uppercase tracking-wider text-amber-700 hover:text-amber-900 transition-colors"
                >
                  Yol Tarifi Al →
                </a>
              </div>
            </article>

            <article className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <img
                src="https://images.unsplash.com/photo-1519642918688-7e43b19245d8?q=80&w=600&auto=format&fit=crop"
                alt="Bağdat Caddesi"
                className="h-56 w-full object-cover"
              />
              <div className="p-8">
                <h3 className="text-xl font-medium text-stone-900 mb-2">Bağdat Caddesi</h3>
                <p className="text-sm text-stone-500 mb-6 leading-relaxed">
                  Bağdat Cad. No:312, Caddebostan, Kadıköy, İstanbul
                </p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm uppercase tracking-wider text-amber-700 hover:text-amber-900 transition-colors"
                >
                  Yol Tarifi Al →
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ── Mini CTA ── */}
      <section className="py-24 bg-background">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl lg:text-5xl text-foreground mb-6 text-balance">
            Güzelliğiniz İçin <em className="text-primary not-italic">İlk Adımı</em> Atın
          </h2>
          <p className="text-muted-foreground font-sans leading-relaxed mb-10">
            Ücretsiz danışmanlık için bizi arayın veya online randevu formunu doldurun.
            Uzmanlarımız sizin için en uygun protokolü belirlesin.
          </p>
          <Link
            href="/iletisim"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-primary text-primary-foreground font-sans font-medium tracking-wider uppercase text-sm hover:brightness-105 hover:scale-105 transition-all duration-300 shadow-md"
          >
            Ücretsiz Danışmanlık <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* ── Concierge / Contact Pre-Footer ── */}
      <section className="w-full bg-[#F9F8F6] border-y border-stone-200 py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-sm uppercase tracking-[0.2em] text-amber-700/80 mb-6 block">
            KİŞİSEL ASİSTANINIZ
          </span>

          <a
            href="tel:+902121234567"
            className="font-serif text-5xl md:text-7xl text-stone-900 mb-8 inline-block hover:text-amber-700 transition-colors duration-300"
          >
            +90 (212) 123 45 67
          </a>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-8">
            <a
              href="https://wa.me/902121234567"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-8 py-4 bg-white text-stone-900 rounded-full shadow-sm hover:shadow-md transition-all border border-stone-100"
            >
              <WhatsAppLineIcon className="w-5 h-5 text-[#25D366]" />
              WhatsApp'tan Yazın
            </a>

            <a
              href="mailto:info@lumiereestetik.com"
              className="flex items-center gap-2 px-8 py-4 bg-transparent text-stone-600 hover:text-stone-900 transition-all"
            >
              <EnvelopeQuillIcon className="w-5 h-5 text-amber-700/80" />
              info@lumiereestetik.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
