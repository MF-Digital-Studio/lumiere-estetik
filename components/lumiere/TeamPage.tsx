"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const experts = [
    {
        name: "Dr. Aylin Kara",
        title: "Medikal Estetik Uzmanı",
        specialties: ["Botoks & Dolgu", "PRP Tedavisi", "Cilt Gençleştirme"],
        img: "/images/expert-1.jpg",
        slug: "dr-aylin-kara",
    },
    {
        name: "Dr. Selin Yıldız",
        title: "Dermatoloji Uzmanı",
        specialties: ["Medikal Cilt Bakımı", "Lazer Tedavileri", "Akne & Skar"],
        img: "/images/expert-2.jpg",
        slug: "dr-selin-yildiz",
    },
    {
        name: "Dr. Mert Özdemir",
        title: "Plastik Cerrahi Uzmanı",
        specialties: ["Estetik Danışmanlık", "Non-cerrahi Prosedürler", "Yüz Analizi"],
        img: "/images/expert-3.jpg",
        slug: "dr-mert-ozdemir",
    },
];

export default function TeamPage() {
    return (
        <div className="min-h-screen bg-background">
            <section className="pt-36 pb-20">
                <div className="max-w-5xl mx-auto px-6 lg:px-10 text-center">
                    <p className="text-xs tracking-[0.3em] uppercase font-sans text-primary mb-4">
                        Uzman Kadromuz
                    </p>
                    <h1 className="font-serif text-5xl lg:text-7xl text-foreground text-balance mb-6">
                        Sanat ve Bilimin Ustaları
                    </h1>
                    <p className="text-muted-foreground font-sans leading-relaxed text-lg max-w-3xl mx-auto">
                        Her biri kendi alanında referans kabul edilen, uluslararası deneyime sahip hekim kadromuz.
                    </p>
                </div>
            </section>

            <section className="pb-24">
                <div className="max-w-7xl mx-auto px-6 lg:px-10">
                    <div className="grid md:grid-cols-3 gap-8 items-start">
                        {experts.map((expert) => (
                            <article
                                key={expert.name}
                                className="group rounded-3xl bg-card border border-border overflow-hidden shadow-[0_0_15px_rgba(0,0,0,0.03)] hover:border-primary/40 transition-all duration-500 flex flex-col"
                            >
                                <div className="relative h-84 overflow-hidden">
                                    <Image
                                        src={expert.img}
                                        alt={expert.name}
                                        fill
                                        className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-[oklch(0.18_0.01_55/0.25)] to-transparent" />
                                </div>

                                <div className="p-6 flex flex-col">
                                    <h3 className="font-serif text-2xl text-foreground mb-1">{expert.name}</h3>
                                    <p className="text-xs tracking-wider uppercase font-sans text-primary mb-4">
                                        {expert.title}
                                    </p>

                                    <ul className="space-y-2">
                                        {expert.specialties.map((s) => (
                                            <li key={s} className="flex items-center gap-2 text-sm font-sans text-muted-foreground">
                                                <span className="w-1 h-1 rounded-full bg-primary shrink-0" />
                                                {s}
                                            </li>
                                        ))}
                                    </ul>

                                    <Link
                                        href={`/uzman-kadromuz/${expert.slug}`}
                                        className="text-sm uppercase tracking-wider text-amber-700 hover:text-amber-900 mt-4 block border-t border-stone-100 pt-3"
                                    >
                                        Profili İncele →
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <h2 className="font-serif text-4xl text-foreground mb-6 text-balance">
                        Uzmanlarımızla Tanışmak İster misiniz?
                    </h2>
                    <p className="text-muted-foreground font-sans leading-relaxed mb-10">
                        Ücretsiz ön görüşme için randevu oluşturun. Size en uygun uzmanımız sizi bilgilendirsin.
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
