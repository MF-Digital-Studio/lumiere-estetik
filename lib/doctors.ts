export interface DoctorProfile {
    slug: string;
    name: string;
    title: string;
    image: string;
    bio: string;
    experience: string;
    education: string[];
    expertise: string[];
}

export const doctorProfiles: Record<string, DoctorProfile> = {
    "dr-aylin-kara": {
        slug: "dr-aylin-kara",
        name: "Dr. Aylin Kara",
        title: "Medikal Estetik Uzmanı",
        image: "/images/expert-1.jpg",
        bio: "Doğal sonuç odaklı yaklaşımıyla yüz harmonisi, anti-aging ve enjeksiyon tekniklerinde kişiye özel protokoller geliştiren Dr. Aylin Kara, medikal estetikte güvenli ve rafine uygulamalarıyla öne çıkar.",
        experience:
            "12+ yıllık klinik deneyim. Yıllık 1.500+ medikal estetik prosedür uygulama tecrübesi.",
        education: [
            "İstanbul Üniversitesi Cerrahpaşa Tıp Fakültesi",
            "Medikal Estetik Uygulamalar Sertifikasyonu",
            "Uluslararası Yüz Anatomisi ve Enjeksiyon Teknikleri Eğitimi",
        ],
        expertise: ["Botoks & Dolgu", "PRP Tedavisi", "Cilt Gençleştirme"],
    },
    "dr-selin-yildiz": {
        slug: "dr-selin-yildiz",
        name: "Dr. Selin Yıldız",
        title: "Dermatoloji Uzmanı",
        image: "/images/expert-2.jpg",
        bio: "Klinik dermatoloji ve ileri cilt tedavilerinde uzmanlaşan Dr. Selin Yıldız, cilt bariyeri odaklı yaklaşımıyla akne, leke ve doku düzensizliklerinde uzun vadeli sonuç hedefler.",
        experience:
            "10+ yıllık dermatoloji deneyimi. Lazer ve medikal cilt uygulamalarında ileri seviye klinik uzmanlık.",
        education: [
            "Hacettepe Üniversitesi Tıp Fakültesi",
            "Dermatoloji Uzmanlık Programı",
            "Lazer Sistemleri ve Cilt Yenileme Protokolleri Sertifikası",
        ],
        expertise: ["Medikal Cilt Bakımı", "Lazer Tedavileri", "Akne & Skar"],
    },
    "dr-mert-ozdemir": {
        slug: "dr-mert-ozdemir",
        name: "Dr. Mert Özdemir",
        title: "Plastik Cerrahi Uzmanı",
        image: "/images/expert-3.jpg",
        bio: "Yüz estetiğinde oran, denge ve doğal görünüm prensipleriyle çalışan Dr. Mert Özdemir, cerrahi dışı estetik planlamalarda detaylı analiz ve kişiselleştirilmiş yaklaşımı benimser.",
        experience:
            "14+ yıllık estetik cerrahi deneyimi. Non-cerrahi yüz modelleme ve danışmanlık alanında kapsamlı vaka tecrübesi.",
        education: [
            "Ege Üniversitesi Tıp Fakültesi",
            "Plastik, Rekonstrüktif ve Estetik Cerrahi Uzmanlığı",
            "Uluslararası Yüz Estetiği ve Anatomik Planlama Workshopları",
        ],
        expertise: ["Estetik Danışmanlık", "Non-cerrahi Prosedürler", "Yüz Analizi"],
    },
};

export const doctorSlugs = Object.keys(doctorProfiles);

export function getDoctorBySlug(slug: string): DoctorProfile | undefined {
    return doctorProfiles[slug];
}
