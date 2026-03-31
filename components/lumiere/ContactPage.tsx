"use client";

import { useState } from "react";
import {
  CheckSealIcon,
  ChevronLineIcon,
  ClockLineIcon,
  PhoneLineIcon,
  PinLineIcon,
} from "./LineArtIcons";

const services = [
  "Lazer Epilasyon",
  "Hydrafacial",
  "Botoks",
  "Dermal Dolgu",
  "PRP Tedavisi",
  "Dermapen",
  "Radyofrekans Sıkılaştırma",
  "Kimyasal Peeling",
  "Mezoterapi",
  "Kavitasyon & Lipo Lazer",
  "Oksijen Terapi",
  "G5 Masaj",
  "Diğer / Bilgi Almak İstiyorum",
];

const timeSlots = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "13:00", "13:30", "14:00", "14:30", "15:00", "15:30",
  "16:00", "16:30", "17:00", "17:30",
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    time: "",
    note: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-xs tracking-[0.3em] uppercase font-sans text-primary mb-4">
            Randevu & İletişim
          </p>
          <h1 className="font-serif text-5xl lg:text-6xl text-foreground text-balance mb-6">
            Size En Yakın Zamanda
            <br />
            <em className="text-primary not-italic">Yer Ayırtın</em>
          </h1>
          <p className="text-muted-foreground font-sans leading-relaxed max-w-xl mx-auto">
            Formu doldurun, kliniğimiz en kısa sürede sizi arayarak randevunuzu onaylasın.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* ── Form ── */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-24 text-center gap-6">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                  <CheckSealIcon className="w-10 h-10 text-amber-700/80" />
                </div>
                <h3 className="font-serif text-3xl text-foreground">Randevunuz Alındı!</h3>
                <p className="text-muted-foreground font-sans leading-relaxed max-w-sm">
                  Teşekkürler {form.name ? form.name.split(" ")[0] : ""}, kliniğimiz en kısa sürede{" "}
                  <strong className="text-foreground">{form.phone}</strong> numaranızdan sizi arayarak
                  randevunuzu onaylayacaktır.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: "", phone: "", email: "", service: "", date: "", time: "", note: "" });
                  }}
                  className="mt-4 px-8 py-3 rounded-full border border-primary text-primary font-sans text-sm tracking-wider uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  Yeni Randevu
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name & Phone */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-xs tracking-wider uppercase font-sans text-muted-foreground">
                      Ad Soyad *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Adınız Soyadınız"
                      value={form.name}
                      onChange={handleChange}
                      className="px-4 py-3.5 rounded-xl bg-card border border-border text-foreground font-sans text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all duration-200"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="text-xs tracking-wider uppercase font-sans text-muted-foreground">
                      Telefon *
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="0 (5xx) xxx xx xx"
                      value={form.phone}
                      onChange={handleChange}
                      className="px-4 py-3.5 rounded-xl bg-card border border-border text-foreground font-sans text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all duration-200"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs tracking-wider uppercase font-sans text-muted-foreground">
                    E-posta
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="ornek@email.com"
                    value={form.email}
                    onChange={handleChange}
                    className="px-4 py-3.5 rounded-xl bg-card border border-border text-foreground font-sans text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all duration-200"
                  />
                </div>

                {/* Service Select */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="service" className="text-xs tracking-wider uppercase font-sans text-muted-foreground">
                    İlgilendiğiniz Hizmet *
                  </label>
                  <div className="relative">
                    <select
                      id="service"
                      name="service"
                      required
                      value={form.service}
                      onChange={handleChange}
                      className="w-full appearance-none px-4 py-3.5 rounded-xl bg-card border border-border text-foreground font-sans text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all duration-200 cursor-pointer"
                    >
                      <option value="" disabled>Hizmet seçin...</option>
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                    <ChevronLineIcon className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                  </div>
                </div>

                {/* Date & Time */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="date" className="text-xs tracking-wider uppercase font-sans text-muted-foreground">
                      Tercih Ettiğiniz Tarih
                    </label>
                    <input
                      id="date"
                      name="date"
                      type="date"
                      value={form.date}
                      onChange={handleChange}
                      min={new Date().toISOString().split("T")[0]}
                      className="px-4 py-3.5 rounded-xl bg-card border border-border text-foreground font-sans text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all duration-200 cursor-pointer"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="time" className="text-xs tracking-wider uppercase font-sans text-muted-foreground">
                      Tercih Ettiğiniz Saat
                    </label>
                    <div className="relative">
                      <select
                        id="time"
                        name="time"
                        value={form.time}
                        onChange={handleChange}
                        className="w-full appearance-none px-4 py-3.5 rounded-xl bg-card border border-border text-foreground font-sans text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all duration-200 cursor-pointer"
                      >
                        <option value="">Saat seçin...</option>
                        {timeSlots.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                      <ChevronLineIcon className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Note */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="note" className="text-xs tracking-wider uppercase font-sans text-muted-foreground">
                    Notunuz
                  </label>
                  <textarea
                    id="note"
                    name="note"
                    rows={4}
                    placeholder="Cilt tipiniz, beklentileriniz veya sormak istedikleriniz..."
                    value={form.note}
                    onChange={handleChange}
                    className="px-4 py-3.5 rounded-xl bg-card border border-border text-foreground font-sans text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-full bg-primary text-primary-foreground font-sans font-medium tracking-wider uppercase text-sm hover:brightness-105 hover:scale-[1.01] transition-all duration-300 shadow-md disabled:opacity-60 disabled:pointer-events-none flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <span className="w-4 h-4 border-2 border-primary-foreground/40 border-t-primary-foreground rounded-full animate-spin" />
                      Gönderiliyor...
                    </>
                  ) : (
                    "Randevu Talebini Gönder"
                  )}
                </button>

                <p className="text-xs text-muted-foreground font-sans text-center">
                  Gönderdiğiniz bilgiler yalnızca randevu işlemleri için kullanılır ve üçüncü şahıslarla paylaşılmaz.
                </p>
              </form>
            )}
          </div>

          {/* ── Contact Info ── */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Info Card */}
            <div className="p-8 rounded-3xl bg-card border border-border space-y-6">
              <h3 className="font-serif text-2xl text-foreground">İletişim Bilgileri</h3>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <PhoneLineIcon className="w-[18px] h-[18px] text-amber-700/80" />
                </div>
                <div>
                  <p className="text-xs tracking-wider uppercase font-sans text-muted-foreground mb-1">Telefon</p>
                  <a href="tel:+902121234567" className="text-foreground font-sans font-medium hover:text-primary transition-colors">
                    +90 (212) 123 45 67
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <PinLineIcon className="w-[18px] h-[18px] text-amber-700/80" />
                </div>
                <div>
                  <p className="text-xs tracking-wider uppercase font-sans text-muted-foreground mb-1">Adres</p>
                  <p className="text-foreground font-sans text-sm leading-relaxed">
                    Abdi İpekçi Cad. No: 24/3<br />
                    Nişantaşı, Şişli<br />
                    İstanbul, 34367
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <ClockLineIcon className="w-[18px] h-[18px] text-amber-700/80" />
                </div>
                <div>
                  <p className="text-xs tracking-wider uppercase font-sans text-muted-foreground mb-1">
                    Çalışma Saatleri
                  </p>
                  <div className="space-y-1 text-sm font-sans text-foreground">
                    <p><span className="text-muted-foreground">Pzt – Cum:</span> 09:00 – 19:00</p>
                    <p><span className="text-muted-foreground">Cumartesi:</span> 10:00 – 17:00</p>
                    <p><span className="text-muted-foreground">Pazar:</span> Kapalı</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="flex-1 rounded-3xl overflow-hidden border border-border min-h-64">
              <iframe
                title="Lumière Estetik Konumu"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.0!2d28.9996!3d41.0484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDAyJzU0LjMiTiAyOMKwNTknNTguNiJF!5e0!3m2!1str!2str!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "260px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale opacity-90 hover:opacity-100 hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
