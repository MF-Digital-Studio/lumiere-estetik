"use client";

import Link from "next/link";
import { ArrowRight, Award } from "lucide-react";
import Image from "next/image";
import {
    ArchWindowIcon,
    LeafLaserIcon,
    MicroGridIcon,
    SilkFlowIcon,
    SnowContourIcon,
    SterileLeafIcon,
    SunBeamIcon,
    UltrasoundWaveIcon,
    VortexIcon,
} from "./LineArtIcons";

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

const techDevices = [
    {
        title: "Ultherapy®",
        desc: "Ameliyatsız yüz germede FDA onaylı tek altın standart. Odaklanmış ultrason dalgaları ile derin doku liftingi.",
        icon: UltrasoundWaveIcon,
    },
    {
        title: "Morpheus8",
        desc: "Altın iğne ve fraksiyonel radyofrekansın en güçlü birleşimi. Cilt yenileme ve derin skar tedavisinde maksimum etkinlik.",
        icon: MicroGridIcon,
    },
    {
        title: "HydraFacial MD®",
        desc: "Patentli Vortex teknolojisi. Tek seansta derinlemesine temizlik, peeling, ekstraksiyon ve antioksidan infüzyonu.",
        icon: VortexIcon,
    },
    {
        title: "BBL Hero & Moxi",
        desc: "Dünyanın en güçlü geniş bant ışık tedavisi. Genetik yaşlanmayı durdurma, leke ve rosacea protokollerinde kesin çözüm.",
        icon: SunBeamIcon,
    },
    {
        title: "Candela GentleMax Pro",
        desc: "Dört mevsim, tüm cilt tiplerinde güvenli ve acısız lazer epilasyon. Alexandrite ve Nd:YAG sistemlerinin kusursuz entegrasyonu.",
        icon: LeafLaserIcon,
    },
    {
        title: "CoolSculpting®",
        desc: "Kriyolipoliz (soğuk lipoliz) teknolojisi ile inatçı yağ hücrelerinin dondurularak vücuttan atılmasını sağlayan kalıcı incelme.",
        icon: SnowContourIcon,
    },
];

const detailIcons = [SterileLeafIcon, SilkFlowIcon, ArchWindowIcon, SterileLeafIcon];

export default function ClinicPage() {
    const heroImage =
        "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1400&auto=format&fit=crop";
    const galleryImageOne =
        "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1600&auto=format&fit=crop";
    const galleryImageTwo =
        "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=1400&auto=format&fit=crop";
    const galleryImageThree =
        "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1400&auto=format&fit=crop";
    const galleryImageFour =
        "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=1400&auto=format&fit=crop";
    const galleryImageFive =
        "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=1400&auto=format&fit=crop";

    return (
        <div className="min-h-screen bg-background">
            <section className="pt-32 pb-20">
                <div className="max-w-5xl mx-auto px-6 lg:px-10 text-center">
                    <p className="text-xs tracking-[0.3em] uppercase font-sans text-primary mb-4">
                        Klinik
                    </p>
                    <h1 className="font-serif text-5xl lg:text-6xl text-foreground text-balance mb-6">
                        Sessiz Lüksün
                        <br />
                        <em className="text-primary not-italic">Bilimle Buluştuğu Yer</em>
                    </h1>
                    <p className="text-muted-foreground font-sans leading-relaxed text-lg max-w-3xl mx-auto">
                        Lumiere Estetik, Nişantaşı'nda ileri teknoloji, rafine mekan tasarımı ve kişiselleştirilmiş bakım
                        anlayışını aynı çatı altında sunar.
                    </p>
                </div>
            </section>

            <section className="pb-24">
                <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
                    <div className="relative h-130 overflow-hidden rounded-t-[10rem] rounded-b-3xl">
                        <Image src={heroImage} alt="Lumiere Estetik klinik iç mekan" fill className="object-cover" />

                        <div className="absolute top-6 left-1/2 -translate-x-1/2 p-4 rounded-2xl bg-[oklch(0.98_0.005_60/0.92)] border border-border shadow-[0_0_15px_rgba(0,0,0,0.03)]">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                    <Award size={18} className="text-primary" />
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
                            <p className="text-xs tracking-[0.3em] uppercase font-sans text-primary mb-3">Hikayemiz</p>
                            <h2 className="font-serif text-4xl text-foreground text-balance mb-4">
                                Bilim ve Sanatın
                                <br />
                                Buluşma Noktası
                            </h2>
                            <p className="text-muted-foreground font-sans leading-relaxed mb-4">
                                Lumiere Estetik, dermatoloji ve medikal estetik alanındaki uzmanların bir araya gelerek
                                kurduğu; güzellik anlayışını bilimsel temellere oturtmayı hedefleyen bir klinik olarak doğdu.
                            </p>
                            <p className="text-muted-foreground font-sans leading-relaxed">
                                10 yıl içinde 5.000'den fazla danışana hizmet vererek, her birinin kendi doğal güzelliğini
                                keşfetmesine yardımcı olduk. Alanında uzman, kalite odaklı kadromuzla büyümeye devam ediyoruz.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {values.map((v, index) => {
                                const ValueIcon = detailIcons[index] ?? SterileLeafIcon;

                                return (
                                    <div
                                        key={v.title}
                                        className="p-5 rounded-2xl bg-card border border-border shadow-[0_0_15px_rgba(0,0,0,0.03)]"
                                    >
                                        <div className="flex items-center gap-2 mb-2">
                                            <ValueIcon className="w-4 h-4 text-amber-700/80 shrink-0" />
                                            <h4 className="font-sans font-semibold text-foreground text-sm">{v.title}</h4>
                                        </div>
                                        <p className="text-xs text-muted-foreground font-sans leading-relaxed">{v.desc}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            <section className="pb-24">
                <div className="max-w-7xl mx-auto px-6 lg:px-10">
                    <div className="mb-10">
                        <p className="text-xs tracking-[0.3em] uppercase font-sans text-primary mb-3">Atmosferimiz</p>
                        <h2 className="font-serif text-4xl text-foreground">Klinik Galerisi</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[220px] md:auto-rows-[220px]">
                        <div className="md:col-span-7 md:row-span-2 rounded-2xl overflow-hidden">
                            <Image
                                src={galleryImageOne}
                                alt="Lüks klinik iç mekan"
                                width={1600}
                                height={1600}
                                className="w-full h-full object-cover rounded-2xl transition-transform duration-700 hover:scale-105"
                            />
                        </div>
                        <div className="md:col-span-5 rounded-2xl overflow-hidden">
                            <Image
                                src={galleryImageTwo}
                                alt="Minimal cilt bakım ürünleri"
                                width={1200}
                                height={900}
                                className="w-full h-full object-cover rounded-2xl transition-transform duration-700 hover:scale-105"
                            />
                        </div>
                        <div className="md:col-span-5 rounded-2xl overflow-hidden">
                            <Image
                                src={galleryImageThree}
                                alt="Modern estetik klinik odası"
                                width={1200}
                                height={900}
                                className="w-full h-full object-cover rounded-2xl transition-transform duration-700 hover:scale-105"
                            />
                        </div>
                        <div className="md:col-span-6 rounded-2xl overflow-hidden">
                            <Image
                                src={galleryImageFour}
                                alt="Spa bakım odası atmosferi"
                                width={1200}
                                height={900}
                                className="w-full h-full object-cover rounded-2xl transition-transform duration-700 hover:scale-105"
                            />
                        </div>
                        <div className="md:col-span-6 rounded-2xl overflow-hidden">
                            <Image
                                src={galleryImageFive}
                                alt="Lüks klinik bekleme alanı"
                                width={1200}
                                height={900}
                                className="w-full h-full object-cover rounded-2xl transition-transform duration-700 hover:scale-105"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="pb-24">
                <div className="max-w-7xl mx-auto px-6 lg:px-10">
                    <div className="text-center mb-12">
                        <p className="text-xs tracking-[0.3em] uppercase font-sans text-primary mb-3">Ileri Teknoloji</p>
                        <h2 className="font-serif text-4xl lg:text-5xl text-foreground">Cihaz Parkurumuz</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {techDevices.map(({ title, desc, icon: Icon }) => (
                            <article
                                key={title}
                                className="p-8 rounded-2xl bg-secondary/35 border border-border shadow-[0_0_15px_rgba(0,0,0,0.03)]"
                            >
                                <div className="w-12 h-12 rounded-full border border-primary/40 flex items-center justify-center mb-5">
                                    <Icon className="w-5 h-5 text-amber-700/80" />
                                </div>
                                <h3 className="font-serif text-2xl text-foreground mb-3">{title}</h3>
                                <p className="text-sm font-sans text-muted-foreground leading-relaxed">{desc}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-stone-50">
                <div className="max-w-7xl mx-auto py-20 px-6 lg:px-10">
                    <div className="text-center">
                        <p className="text-xs tracking-[0.3em] uppercase font-sans text-primary mb-3">DENEYİM</p>
                        <h2 className="font-serif text-4xl lg:text-5xl text-foreground">Size Özel Bir Dünya</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
                        <div className="lg:border-r border-stone-200 lg:pr-8">
                            <h3 className="font-serif text-2xl text-foreground mb-4">Tam Mahremiyet</h3>
                            <p className="text-muted-foreground font-sans leading-relaxed">
                                Kliniğimizde bekleme sürenizi VIP süitlerimizde geçirir, diğer danışanlarla
                                karşılaşmadan tedavinizi en üst düzey gizlilik içinde tamamlarsınız.
                            </p>
                        </div>

                        <div className="lg:border-r border-stone-200 lg:px-8">
                            <h3 className="font-serif text-2xl text-foreground mb-4">Kişisel Sağlık Asistanı</h3>
                            <p className="text-muted-foreground font-sans leading-relaxed">
                                Randevu planlamanızdan, işlem sonrası iyileşme sürecinizin takibine kadar size 7/24
                                eşlik edecek özel bir sağlık asistanı atanır.
                            </p>
                        </div>

                        <div className="lg:pl-8">
                            <h3 className="font-serif text-2xl text-foreground mb-4">Bütünsel Yaklaşım</h3>
                            <p className="text-muted-foreground font-sans leading-relaxed">
                                İşlemleriniz öncesi ve sonrası, cildinizi içeriden de desteklemek için uzman
                                diyetisyenimiz tarafından hazırlanan detoks içecekleri ikram edilir.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pb-24">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <h2 className="font-serif text-4xl text-foreground mb-6 text-balance">
                        Kliniğimizi Yakından Deneyimlemek İster misiniz?
                    </h2>
                    <p className="text-muted-foreground font-sans leading-relaxed mb-10">
                        Uzman ekibimizle size özel değerlendirme için online randevu oluşturabilirsiniz.
                    </p>
                    <Link
                        href="/iletisim"
                        className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-primary text-primary-foreground font-sans font-medium tracking-wider uppercase text-sm hover:brightness-105 hover:scale-105 transition-all duration-300"
                    >
                        Randevu Oluştur <ArrowRight size={16} />
                    </Link>
                </div>
            </section>
        </div>
    );
}
