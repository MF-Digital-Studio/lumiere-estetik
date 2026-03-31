"use client";

import Link from "next/link";
import { Instagram, Facebook, Phone } from "lucide-react";

const footerLinks = [
  { label: "Anasayfa", href: "/" },
  { label: "Hizmetlerimiz", href: "/hizmetlerimiz" },
  { label: "Klinik", href: "/klinik" },
  { label: "Uzman Kadromuz", href: "/uzman-kadromuz" },
  { label: "Randevu Al", href: "/iletisim" },
];

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link
              href="/"
              className="flex flex-col items-start mb-4"
              aria-label="Anasayfa"
            >
              <span className="font-serif text-2xl tracking-widest text-foreground">LUMIÈRE</span>
              <span className="text-[10px] tracking-[0.35em] text-muted-foreground uppercase font-sans">
                Estetik
              </span>
            </Link>
            <p className="text-sm text-muted-foreground font-sans leading-relaxed max-w-xs">
              Nişantaşı&apos;nın kalbinde, bilim ve estetik anlayışıyla doğal güzelliğinizi
              ortaya çıkaran premium klinik.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
              >
                <Instagram size={16} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
              >
                <Facebook size={16} />
              </a>
              <a
                href="tel:+902121234567"
                aria-label="Telefon"
                className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
              >
                <Phone size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase font-sans text-foreground font-semibold mb-5">
              Hızlı Linkler
            </h4>
            <ul className="space-y-3">
              {footerLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm font-sans text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase font-sans text-foreground font-semibold mb-5">
              İletişim
            </h4>
            <ul className="space-y-3 text-sm font-sans text-muted-foreground">
              <li>
                <a href="tel:+902121234567" className="hover:text-primary transition-colors">
                  +90 (212) 123 45 67
                </a>
              </li>
              <li>
                <a href="mailto:info@lumiereestetik.com" className="hover:text-primary transition-colors">
                  info@lumiereestetik.com
                </a>
              </li>
              <li className="leading-relaxed">
                Abdi İpekçi Cad. No: 24/3<br />
                Nişantaşı, İstanbul
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-sans text-muted-foreground">
            &copy; {new Date().getFullYear()} Lumière Estetik. Tüm hakları saklıdır.
          </p>
          <p className="text-xs font-sans text-muted-foreground">
            Nişantaşı, İstanbul — Türkiye
          </p>
        </div>
      </div>
    </footer>
  );
}
