import type { Metadata } from 'next'
import { DM_Sans, Lora } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Navbar from '@/components/lumiere/Navbar'
import Footer from '@/components/lumiere/Footer'
import { WhatsAppLineIcon } from '@/components/lumiere/LineArtIcons'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});

export const metadata: Metadata = {
  title: 'Lumière Estetik | Güzellik Merkezi & Medikal Estetik',
  description: 'Lumière Estetik — Nişantaşı İstanbul\'da premium güzellik merkezi ve medikal estetik kliniği. Uzman doktor kadrosu, FDA onaylı cihazlar ile doğal güzelliğinizi ortaya çıkarıyoruz.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr" className={`${dmSans.variable} ${lora.variable}`}>
      <body className="font-sans antialiased">
        <div className="min-h-screen bg-background text-foreground">
          <Navbar />
          {children}
          <Footer />

          <a
            href="https://wa.me/902121234567"
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp ile hızlı randevu"
            className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-14 h-14 bg-white rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:-translate-y-1 transition-all cursor-pointer group border border-stone-50"
          >
            <span className="absolute right-16 bg-stone-900 text-white text-xs py-2 px-4 rounded-full whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              Hızlı Randevu
            </span>
            <WhatsAppLineIcon className="w-6 h-6 text-[#25D366]" />
          </a>
        </div>
        <Analytics />
      </body>
    </html>
  )
}
