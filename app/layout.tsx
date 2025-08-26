import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "IT xizmat sifatida: yollash va saqlash yechimi",
  description:
    "Maktablar uchun kompleks IT-xizmat: metodik dasturlar, sertifikatlangan o‘qituvchilar, zaxira tizimi (SLA), robototexnika jihozlari va IT-tadbirlar orqali sifatli ta'limni kafolatlaymiz.",
  keywords:
    "IT xizmat, maktab, ta'lim, sertifikatlangan o‘qituvchi, robototexnika, dasturlash, metodika, hakaton, qo‘shimcha daromad, IT kurs",
  authors: [{ name: "TolipovJS" }],
  generator: "TolipovJS",
  openGraph: {
    title: "IT xizmat sifatida",
    description:
      "Yangi o‘quvchilarni jalb qilish va saqlash uchun kompleks IT yechim: metodika, SLA, media, robototexnika va IT tadbirlar.",
    url: "https://it--ubwgr0t.gamma.site/",
    siteName: "IT xizmat sifatida",
    images: [
      {
        url: "https://it--ubwgr0t.gamma.site/preview.png", // agar preview rasmi bo‘lsa qo‘shing
        width: 1200,
        height: 630,
        alt: "IT xizmat sifatida",
      },
    ],
    locale: "uz_UZ",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="uz">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link href="https://fonts.googleapis.com/css2?family=Saira:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
      <body className={inter.className} style={{ background: 'url("https://images.unsplash.com/photo-1569470451072-68314f596aec?ixid=MnwxOTgwNzN8MHwxfHNlYXJjaHwxMXx8Z3JhZGllbnQlMjBibGFja3xlbnwxfHx8fDE2ODE4NTM1MTQ&ixlib=rb-4.0.3&w=2400&q=25&auto=format) no-repeat center center fixed' }}>
        <main className="max-w-5xl mx-auto overflow-auto">{children}</main>
      </body>
    </html>
  )
}
