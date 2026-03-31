"use client";

import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";

interface Testimonial {
    id: number;
    stars: number;
    quote: string;
    name: string;
    procedure: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        stars: 5,
        quote:
            "Kliniğe adım attığım ilk andan itibaren hissettiğim profesyonellik ve sıcaklık olağanüstüydü. Lazer epilasyon sürecim o kadar konforlu geçti ki, sanki bir spa deneyimi yaşıyor gibi hissettim. Sonuçlar beklentilerimi hayli aştı.",
        name: "Ayşe Y.",
        procedure: "Lazer Epilasyon",
    },
    {
        id: 2,
        stars: 5,
        quote:
            "Medikal cilt bakımı protokolü, benim sorunlu derim için gerçekten bir dönüm noktası oldu. Dermatolog danışmanlığıyla hazırlanan tedavi planı, her seansda görünen ilerleme göstermesi beni çok mutlu etti.",
        name: "Melike K.",
        procedure: "Medikal Cilt Bakımı",
    },
    {
        id: 3,
        stars: 5,
        quote:
            "Bölgesel incelme hizmetiyle ilgili merak ve endişelerim tamamen giderildi. Uzmanların verdiği detaylı bilgiler, kullanılan teknoloji hakkında tam bir güven oluşturdu. Şu anda sonuçlar harikulade ve doğal görünüyor.",
        name: "Zeynep D.",
        procedure: "Bölgesel İncelme",
    },
    {
        id: 4,
        stars: 5,
        quote:
            "HydraFacial tedavisi ile cildi derinlemesine temizlenmesi ve beslenmiş hissini aldım. Uygulama esnasında rahattım, hatta biraz uyumak istemeye başladım! Cildin parlaklığı ve yumuşaklığı gerçekten inanılmaz.",
        name: "Fatma T.",
        procedure: "HydraFacial",
    },
    {
        id: 5,
        stars: 5,
        quote:
            "Dermapen ile cilt yenileme seanslarından sonra gözeneklеrim küçüldü ve cilt sıklığı arttı. Uzmanlar bana tam olarak ne yapılacağını anlatıp tüm süreç boyunca rahatlatıcı konuşmalar yaptılar. Sonuç beklediğimden çok daha iyi.",
        name: "Selin V.",
        procedure: "Dermapen Tedavisi",
    },
    {
        id: 6,
        stars: 5,
        quote:
            "Bölgesel incelme ve vücut şekillendirme noninvazif tedavisiyle kilo vermeden istenmeyen yağlardan kurtuldum. Sonuçlar 4 ay içinde çok belirgin hale geldi. Büyük ameliyat olmadan doğal görünen sonuçlar almak harika bir deneyim oldu.",
        name: "Gül Ş.",
        procedure: "Vücut Şekillendirme",
    },
];

export default function TestimonialsSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsPerView, setCardsPerView] = useState(3);
    const touchStartX = useRef<number | null>(null);
    const touchEndX = useRef<number | null>(null);

    useEffect(() => {
        const handleResize = () => {
            if (typeof window !== "undefined") {
                if (window.innerWidth < 640) {
                    setCardsPerView(1);
                } else if (window.innerWidth < 1024) {
                    setCardsPerView(2);
                } else {
                    setCardsPerView(3);
                }
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const slides = Array.from(
        { length: Math.ceil(testimonials.length / cardsPerView) },
        (_, index) =>
            testimonials.slice(
                index * cardsPerView,
                index * cardsPerView + cardsPerView,
            ),
    );

    const maxIndex = Math.max(0, slides.length - 1);
    const isAtStart = currentIndex === 0;
    const isAtEnd = currentIndex === maxIndex;

    useEffect(() => {
        setCurrentIndex((prev) => Math.min(prev, maxIndex));
    }, [maxIndex]);

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const handleNext = () => {
        if (currentIndex < maxIndex) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(Math.min(index, maxIndex));
    };

    const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
        touchStartX.current = event.touches[0]?.clientX ?? null;
        touchEndX.current = null;
    };

    const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
        touchEndX.current = event.touches[0]?.clientX ?? null;
    };

    const handleTouchEnd = () => {
        if (touchStartX.current === null || touchEndX.current === null) {
            return;
        }

        const swipeDistance = touchStartX.current - touchEndX.current;
        const swipeThreshold = 50;

        if (swipeDistance > swipeThreshold && currentIndex < maxIndex) {
            setCurrentIndex((prev) => prev + 1);
        } else if (swipeDistance < -swipeThreshold && currentIndex > 0) {
            setCurrentIndex((prev) => prev - 1);
        }

        touchStartX.current = null;
        touchEndX.current = null;
    };

    return (
        <section className="py-14 bg-[#FAF9F6]">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                {/* Section Header */}
                <div className="text-center mb-10">
                    <p className="text-[10px] tracking-[0.28em] uppercase font-sans text-[oklch(0.62_0.06_65)] mb-3">
                        Mutlu Danışanlarımız
                    </p>
                    <h2 className="font-serif text-3xl lg:text-4xl text-foreground text-balance">
                        Güzelliğe Uzanan Yolculuklar
                    </h2>
                </div>

                {/* Carousel Container */}
                <div className="relative">
                    {/* Carousel Viewport */}
                    <div
                        className="overflow-hidden"
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                    >
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{
                                transform: `translateX(-${currentIndex * 100}%)`,
                            }}
                        >
                            {slides.map((slide, slideIndex) => (
                                <div key={slideIndex} className="w-full shrink-0">
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {slide.map((testimonial) => (
                                            <div
                                                key={testimonial.id}
                                                className="group min-h-65 overflow-hidden px-8 pt-8 pb-8 flex flex-col justify-between rounded-2xl bg-white shadow-[0_0_15px_rgba(0,0,0,0.04)] border border-stone-100 hover:shadow-[0_0_25px_rgba(0,0,0,0.08)] hover:-translate-y-2 hover:scale-105 transition-all duration-300 cursor-pointer"
                                            >
                                                <div>
                                                    {/* Stars */}
                                                    <div className="flex gap-1.5">
                                                        {Array.from({ length: testimonial.stars }).map((_, i) => (
                                                            <Star
                                                                key={i}
                                                                className="w-4 h-4 fill-amber-600/70 text-amber-600/70"
                                                            />
                                                        ))}
                                                    </div>

                                                    {/* Quote */}
                                                    <p className="mt-5 font-serif italic text-base leading-relaxed text-stone-600 overflow-hidden [display:-webkit-box] [-webkit-line-clamp:4] [-webkit-box-orient:vertical]">
                                                        "{testimonial.quote}"
                                                    </p>
                                                </div>

                                                <div>
                                                    {/* Divider */}
                                                    <div className="w-12 border-t border-stone-200 my-5" />

                                                    {/* Patient Info */}
                                                    <div>
                                                        <p className="font-sans text-base font-bold text-stone-900">
                                                            {testimonial.name}
                                                        </p>
                                                        <p className="mt-1 mb-0 pb-0 font-sans text-xs uppercase tracking-wider text-stone-400">
                                                            {testimonial.procedure}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Arrows */}
                    <button
                        onClick={handlePrev}
                        disabled={isAtStart}
                        className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-8 lg:-translate-x-10 p-1.5 rounded-full border border-stone-200 hover:border-amber-600/70 text-amber-600/70 hover:text-amber-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-300"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft size={16} />
                    </button>

                    <button
                        onClick={handleNext}
                        disabled={isAtEnd}
                        className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-8 lg:translate-x-10 p-1.5 rounded-full border border-stone-200 hover:border-amber-600/70 text-amber-600/70 hover:text-amber-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-300"
                        aria-label="Next testimonial"
                    >
                        <ChevronRight size={16} />
                    </button>
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center gap-1.5 mt-7">
                    {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`h-2 rounded-full transition-all duration-300 ${currentIndex === index
                                ? "bg-amber-600 w-6"
                                : "bg-stone-200 hover:bg-stone-300"
                                }`}
                            style={{ width: currentIndex === index ? undefined : "0.45rem" }}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
