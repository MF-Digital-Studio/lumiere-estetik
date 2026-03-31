"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

interface DoctorProfilePageProps {
    doctor: {
        name: string;
        title: string;
        image: string;
        bio: string;
        experience: string;
        education: string[];
        expertise: string[];
    };
}

export default function DoctorProfilePage({ doctor }: DoctorProfilePageProps) {
    const profileSignature = {
        "Dr. Aylin Kara": {
            quote: "Doğallığı koruyarak yüzün en iyi versiyonunu ortaya çıkarmak, estetiğin en rafine halidir.",
            focus: ["Yüz harmonisi analizi", "Mimik çizgileri optimizasyonu", "Kişisel anti-aging protokolleri"],
        },
        "Dr. Selin Yıldız": {
            quote: "Sağlıklı cilt bariyeri, uzun ömürlü güzelliğin temelidir.",
            focus: ["Leke ve ton eşitsizliği yönetimi", "Akne & skar tedavi planı", "Lazer tabanlı yenileme"],
        },
        "Dr. Mert Özdemir": {
            quote: "Estetik planlama, anatomi bilgisi ile sanatsal denge arasında hassas bir köprüdür.",
            focus: ["Yüz oran analizi", "Non-cerrahi yüz modelleme", "Uzun dönem bakım stratejisi"],
        },
    } as const;

    const signature = profileSignature[doctor.name as keyof typeof profileSignature];

    return (
        <div className="min-h-screen bg-background pt-32 pb-24">
            <div className="max-w-6xl mx-auto px-6 lg:px-10">
                <Link
                    href="/uzman-kadromuz"
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary hover:text-primary/80 transition-colors mb-10"
                >
                    <ArrowLeft size={14} /> Uzman Kadromuza Dön
                </Link>

                <div className="grid lg:grid-cols-[380px_1fr] gap-10 items-start">
                    <div className="rounded-3xl border border-border bg-card overflow-hidden shadow-[0_0_15px_rgba(0,0,0,0.03)]">
                        <div className="relative h-115">
                            <Image src={doctor.image} alt={doctor.name} fill className="object-cover object-top" />
                            <div className="absolute inset-0 bg-linear-to-t from-[oklch(0.18_0.01_55/0.28)] to-transparent" />
                        </div>
                    </div>

                    <div>
                        <p className="text-xs tracking-[0.3em] uppercase font-sans text-primary mb-3">Doktor Profili</p>
                        <h1 className="font-serif text-4xl lg:text-5xl text-foreground mb-2">{doctor.name}</h1>
                        <p className="text-sm uppercase tracking-wider text-primary mb-8">{doctor.title}</p>

                        <p className="text-muted-foreground leading-relaxed mb-6">{doctor.bio}</p>

                        <blockquote className="mb-8 p-5 rounded-2xl border border-border bg-card shadow-[0_0_15px_rgba(0,0,0,0.03)]">
                            <p className="font-serif italic text-lg text-foreground leading-relaxed">
                                “{signature?.quote}”
                            </p>
                        </blockquote>

                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            <div className="p-6 rounded-2xl border border-border bg-card shadow-[0_0_15px_rgba(0,0,0,0.03)]">
                                <h3 className="font-serif text-xl text-foreground mb-3">Deneyim</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">{doctor.experience}</p>
                            </div>

                            <div className="p-6 rounded-2xl border border-border bg-card shadow-[0_0_15px_rgba(0,0,0,0.03)]">
                                <h3 className="font-serif text-xl text-foreground mb-3">Uzmanlık Alanları</h3>
                                <ul className="space-y-2">
                                    {doctor.expertise.map((item) => (
                                        <li key={item} className="text-sm text-muted-foreground flex items-center gap-2">
                                            <span className="w-1 h-1 rounded-full bg-primary shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="p-6 rounded-2xl border border-border bg-card shadow-[0_0_15px_rgba(0,0,0,0.03)] mb-8">
                            <h3 className="font-serif text-xl text-foreground mb-4">Klinik Yaklaşım</h3>
                            <ul className="space-y-2">
                                {signature?.focus.map((item) => (
                                    <li key={item} className="text-sm text-muted-foreground flex items-center gap-2">
                                        <span className="w-1 h-1 rounded-full bg-primary shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="p-6 rounded-2xl border border-border bg-card shadow-[0_0_15px_rgba(0,0,0,0.03)] mb-10">
                            <h3 className="font-serif text-xl text-foreground mb-4">Eğitim ve Sertifikalar</h3>
                            <ul className="space-y-2">
                                {doctor.education.map((item) => (
                                    <li key={item} className="text-sm text-muted-foreground flex items-center gap-2">
                                        <span className="w-1 h-1 rounded-full bg-primary shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <Link
                            href="/iletisim"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-sans font-medium tracking-wider uppercase text-sm hover:brightness-105 hover:scale-105 transition-all duration-300"
                        >
                            Bu Doktorla Randevu Al <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
