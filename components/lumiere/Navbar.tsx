"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Instagram, Linkedin } from "lucide-react";

const navLinks = [
  { label: "Anasayfa", href: "/" },
  { label: "Uygulamalar", href: "/hizmetlerimiz" },
  { label: "Klinik", href: "/klinik" },
  { label: "Uzman Kadromuz", href: "/uzman-kadromuz" },
  { label: "İletişim", href: "/iletisim" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* ── Minimal Header (Closed State) ── */}
      <header className="fixed top-0 left-0 w-full z-50 px-6 lg:px-8 py-6 bg-transparent">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="font-serif text-sm lg:text-base tracking-[0.3em] text-foreground hover:text-primary transition-colors duration-300"
            aria-label="Anasayfa"
          >
            LUMIÈRE
          </Link>

          {/* Right Elements */}
          <div className="flex items-center gap-8 lg:gap-12">
            {/* CTA Link */}
            <Link
              href="/iletisim"
              className="hidden sm:inline text-xs lg:text-sm tracking-widest uppercase font-medium text-foreground hover:text-primary transition-all duration-300 relative group"
            >
              Randevu Al
              <span className="absolute bottom-0 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
            </Link>

            {/* Hamburger Menu */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="p-2 text-foreground hover:text-primary transition-colors duration-300"
              aria-label="Menü Aç"
            >
              <Menu size={24} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      {/* ── Side Drawer Menu (Open State) ── */}
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-md transition-opacity duration-500 ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        onClick={handleMenuClose}
      />

      {/* Drawer Panel */}
      <div
        className={`fixed top-0 right-0 h-screen w-full md:w-[45vw] lg:w-[35vw] z-50 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] overflow-hidden ${isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center">
          <img
            src="/images/hero-bg.jpg"
            alt="Navigation background"
            className="w-full h-full object-cover opacity-55"
          />
          {/* Elegant Dark Overlay */}
          <div className="absolute inset-0 bg-stone-900/70 backdrop-blur-3xl" />
        </div>

        {/* Content Wrapper */}
        <div className="relative z-10 h-full flex flex-col px-8 py-8">
          {/* Close Button */}
          <div className="flex justify-end mb-12">
            <button
              onClick={handleMenuClose}
              className="p-2 text-white hover:text-stone-200 transition-colors duration-300"
              aria-label="Menü Kapat"
            >
              <X size={28} strokeWidth={1.5} />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-8 flex-1 pt-4">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={handleMenuClose}
                className={`text-4xl md:text-5xl font-serif font-light text-stone-100 hover:text-amber-200 hover:translate-x-2 transition-all duration-300 text-left ${isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  } ${pathname === link.href ? "text-amber-200" : ""}`}
                style={{
                  transitionDelay: `${100 + index * 100}ms`,
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Footer Section */}
          <div className="border-t border-white/20 pt-8 mt-8">
            <p className="text-xs tracking-[0.22em] uppercase text-amber-200/80 mb-5">
              Uzm. Estetisyen
            </p>
            {/* Contact Info */}
            <div className="flex items-center gap-3 mb-8">
              <Phone size={18} className="text-white/70" />
              <a
                href="tel:+905551234567"
                className="text-sm text-white/80 hover:text-white transition-colors duration-300"
              >
                +90 555 123 4567
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex gap-6">
              <a
                href="#instagram"
                className="p-2 rounded-full border border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#linkedin"
                className="p-2 rounded-full border border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
