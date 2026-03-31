"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  BodyContourIcon,
  HandCareIcon,
  LeafLaserIcon,
  MicroGridIcon,
  NeedleGlowIcon,
  RippleIcon,
  SilkFlowIcon,
  VortexIcon,
} from "./LineArtIcons";

interface Service {
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface Category {
  title: string;
  image: string;
  services: Service[];
}

const servicesData: Category[] = [
  {
    title: "Yüz Uygulamaları",
    image:
      "https://images.unsplash.com/photo-1556228578-8c89e6adf883?q=80&w=900&auto=format&fit=crop",
    services: [
      {
        name: "Hydrafacial",
        description:
          "Vakum teknolojisiyle cilt temizleme, peeling ve yoğun nemlendirme. Anında ışıltılı sonuç.",
        icon: VortexIcon,
      },
      {
        name: "Dermapen Mikro-İğneleme",
        description:
          "Kolajen üretimini artıran minimal invaziv yöntem. Kırışıklık, gözenek ve skar tedavisi.",
        icon: NeedleGlowIcon,
      },
      {
        name: "Kimyasal Peeling",
        description:
          "Medikal konsantrasyonda asit uygulaması ile cildi yenileme ve leke giderme.",
        icon: RippleIcon,
      },
      {
        name: "Oksijen Terapi",
        description:
          "Yüksek basınçlı oksijen ve serum infüzyonu ile hücresel canlanma ve anti-aging.",
        icon: SilkFlowIcon,
      },
    ],
  },
  {
    title: "Vücut Uygulamaları",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=900&auto=format&fit=crop",
    services: [
      {
        name: "G5 Vibrasyonlu Masaj",
        description:
          "Lenfatik drenaj destekli masaj ile selülit giderme ve bölgesel incelme.",
        icon: HandCareIcon,
      },
      {
        name: "Lazer Epilasyon",
        description:
          "FDA onaylı Alexandrite lazer ile kalıcı, ağrısız ve hızlı tüy azaltma. Tüm cilt tipleri için güvenli.",
        icon: LeafLaserIcon,
      },
      {
        name: "Radyofrekans (RF) Sıkılaştırma",
        description:
          "Kolajen yenilenmesi ve cilt elastikiyeti kazandırmak için noninvaziv RF tedavisi.",
        icon: MicroGridIcon,
      },
      {
        name: "Kavitasyon ve Lipo Lazer",
        description:
          "Ultrasonik dalgalarla yağ hücrelerinin parçalanması ve bölgesel yağ eritme.",
        icon: BodyContourIcon,
      },
    ],
  },
  {
    title: "Medikal Estetik",
    image:
      "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=900&auto=format&fit=crop",
    services: [
      {
        name: "Botoks (Botulinum Toksin)",
        description:
          "Mimik kaslarını gevşeterek kırışıklık azaltma. Uzman doktor kontrolünde güvenli uygulama.",
        icon: NeedleGlowIcon,
      },
      {
        name: "Dermal Dolgu",
        description:
          "Hyalüronik asit bazlı dolgularla hacim kaybını giderme, dudak dolgusu ve yüz kontürü belirginleştirme.",
        icon: NeedleGlowIcon,
      },
      {
        name: "PRP (Platelet-Rich Plasma)",
        description:
          "Kanınızdan elde edilen zenginleştirilmiş plazmayı cilde enjekte ederek doğal gençleşme.",
        icon: VortexIcon,
      },
      {
        name: "Mezoterapı",
        description:
          "Mikro enjeksiyonlarla cilde vitamin, mineral ve hücre yenileyici aktif maddelerin verilmesi.",
        icon: NeedleGlowIcon,
      },
    ],
  },
];

const faqItems = [
  {
    question: "İşlemleriniz ne kadar sürüyor ve günlük hayata hemen dönebilir miyim?",
    answer:
      'Çoğu medikal estetik işlemimiz (botoks, dolgu, medikal cilt bakımı) "lunch-time" (öğle arası) prosedürleri olarak bilinir ve 15-45 dakika sürer. İşlem sonrası genellikle günlük rutininize hemen dönebilirsiniz. Lazer veya derin peeling gibi uygulamalarda ise uzmanlarımız size iyileşme süreci hakkında detaylı bilgi verecektir.',
  },
  {
    question: "Ücretsiz ön görüşme veya cilt analizi yapıyor musunuz?",
    answer:
      "Evet, kliniğimizde her tedavi planı kişiye özeldir. Hangi uygulamanın size en uygun olduğunu belirlemek için uzman hekimlerimiz ve estetisyenlerimiz eşliğinde kapsamlı ve ücretsiz bir cilt analizi gerçekleştiriyoruz.",
  },
  {
    question: "Kullanılan cihazlar ve ürünler güvenilir mi?",
    answer:
      "Lumière Estetik olarak sadece uluslararası alanda altın standart kabul edilen, FDA onaylı ve Sağlık Bakanlığı onaylı birinci sınıf medikal cihazlar ve dermokozmetik ürünler kullanmaktayız. Sağlığınız ve güvenliğiniz birinci önceliğimizdir.",
  },
  {
    question: "İşlemler sırasında ağrı veya acı hisseder miyim?",
    answer:
      "Uygulamalarımızın büyük bir çoğunluğu ağrısız veya minimal düzeyde hissedilen işlemlerdir. Gerekli durumlarda konforunuzu en üst düzeye çıkarmak için işlem öncesi lokal anestezik kremler veya gelişmiş soğutma sistemleri kullanıyoruz.",
  },
  {
    question: "Lazer epilasyon her cilt tipine uygun mu?",
    answer:
      "Kliniğimizde bulunan Q-Switch ve gelişmiş Alexandrite/Nd:YAG lazer teknolojileri sayesinde, en açık tenlilerden en esmer cilt tiplerine ve farklı kıl yapılarına kadar dört mevsim boyunca güvenli ve etkili epilasyon yapılabilmektedir.",
  },
  {
    question: "Medikal cilt bakımı ile standart cilt bakımı arasındaki fark nedir?",
    answer:
      "Standart cilt bakımları cildin sadece üst yüzeyini temizlerken, medikal cilt bakımı uzman kontrolünde dermatolojik ürünler ve yüksek teknolojili vakum/ultrason cihazları kullanılarak cildin alt katmanlarına inerek tedavi edici sonuçlar (akne, leke, anti-aging) sunar.",
  },
  {
    question: "Hangi işlemin bana uygun olduğuna nasıl karar vereceğim?",
    answer:
      "Endişelenmenize gerek yok. Tek yapmanız gereken kliniğimizden bir danışmanlık randevusu almak. Uzmanlarımız beklentilerinizi dinleyecek, yüz anatominizi ve cilt yapınızı inceleyerek sadece ihtiyacınız olan işlemleri içeren size özel bir protokol hazırlayacaktır.",
  },
];

export default function ServicesPage() {
  const [openCategory, setOpenCategory] = useState<number | null>(0);
  const [openFaqIndexes, setOpenFaqIndexes] = useState<number[]>([]);

  const toggleCategory = (index: number) => {
    setOpenCategory(openCategory === index ? null : index);
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndexes((prev) =>
      prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index],
    );
  };

  return (
    <div className="min-h-screen bg-background py-32">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-xs tracking-[0.3em] uppercase font-sans text-primary mb-4">
            Tüm Hizmetlerimiz
          </p>
          <h1 className="font-serif text-5xl lg:text-6xl text-foreground text-balance mb-6">
            Güzelliğe Adanmış
            <br />
            <em className="text-primary not-italic">Bilimsel Çözümler</em>
          </h1>
          <p className="text-muted-foreground font-sans leading-relaxed max-w-2xl mx-auto">
            Her tedavi, uzman doktorlarımız tarafından özenle tasarlanmış,
            FDA onaylı cihazlarla uygulanan ve uluslararası standartlara uygun protokollerdir.
          </p>
        </div>

        {/* Accordion-style Categories */}
        <div className="space-y-4">
          {servicesData.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="rounded-2xl border border-border bg-card overflow-hidden transition-all duration-300 hover:border-primary/30"
            >
              {/* Category Header (Clickable) */}
              <button
                onClick={() => toggleCategory(categoryIndex)}
                className="w-full flex items-center justify-between px-8 py-6 text-left group transition-colors duration-300"
              >
                <div className="flex items-center gap-5">
                  <div className="hidden sm:block w-20 h-14 rounded-xl overflow-hidden border border-border/70">
                    <Image
                      src={category.image}
                      alt={`${category.title} görseli`}
                      width={320}
                      height={224}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h2 className="font-serif text-2xl lg:text-3xl text-foreground group-hover:text-primary transition-colors">
                    {category.title}
                  </h2>
                </div>
                <div
                  className={`transition-transform duration-300 ${openCategory === categoryIndex ? "rotate-45" : "rotate-0"
                    }`}
                >
                  <div className="w-8 h-8 rounded-full border border-primary/50 flex items-center justify-center text-primary">
                    <span className="text-xl">+</span>
                  </div>
                </div>
              </button>

              {/* Category Content (Expandable) */}
              <div
                className={`transition-all duration-500 overflow-hidden ${openCategory === categoryIndex
                  ? "max-h-500 opacity-100"
                  : "max-h-0 opacity-0"
                  }`}
              >
                <div className="px-8 pb-8 pt-2 grid sm:grid-cols-2 gap-6">
                  {category.services.map((service) => {
                    const IconComponent = service.icon;
                    return (
                      <div
                        key={service.name}
                        className="p-6 rounded-xl bg-secondary/30 border border-border hover:border-primary/40 hover:shadow-md transition-all duration-300 group/card"
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover/card:bg-primary/20 transition-colors">
                            <IconComponent className="w-[18px] h-[18px] text-amber-700/80" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-sans font-semibold text-foreground mb-2">
                              {service.name}
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {service.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <section className="max-w-4xl mx-auto py-24">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-widest text-amber-700/80 mb-4">
              MERAK EDİLENLER
            </p>
            <h2 className="font-serif text-4xl text-foreground">Sıkça Sorulan Sorular</h2>
          </div>

          <div>
            {faqItems.map((item, index) => {
              const isOpen = openFaqIndexes.includes(index);

              return (
                <div key={item.question} className="border-b border-stone-200">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full py-6 flex justify-between items-center cursor-pointer text-left"
                  >
                    <span className="text-lg font-medium text-stone-800 pr-6">{item.question}</span>
                    <span className="text-amber-700 text-2xl leading-none min-w-6 text-center">
                      {isOpen ? "-" : "+"}
                    </span>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
                      }`}
                  >
                    <p className="text-stone-600 leading-relaxed pb-6 pt-2">{item.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <div className="mt-20 text-center p-12 rounded-3xl bg-card border border-border">
          <h3 className="font-serif text-3xl text-foreground mb-4">
            Hangi Hizmet Sizin İçin Uygun?
          </h3>
          <p className="text-muted-foreground font-sans mb-8 max-w-xl mx-auto leading-relaxed">
            Uzman kadromuz, cilt analiziyle size en uygun tedavi protokolünü belirleyecek.
            Ücretsiz danışmanlık için randevu oluşturun.
          </p>
          <Link
            href="/iletisim"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-sans font-medium tracking-wider uppercase text-sm hover:brightness-105 hover:scale-105 transition-all duration-300 shadow-md"
          >
            Hemen Randevu Al
          </Link>
        </div>
      </div>
    </div>
  );
}
