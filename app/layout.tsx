import type React from "react"
import type { Metadata } from "next"
import { Italiana, DM_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const italiana = Italiana({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-italiana",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-dm-sans",
})

export const metadata: Metadata = {
  title: "Aruna Jaya Capital | Empowering Your Investments",
  description:
    "Aruna Jaya (AJ) Capital adalah perusahaan yang bergerak di bidang pasar modal dan manajemen investasi. Kami menghadirkan solusi finansial profesional, strategi portofolio yang terukur, serta pendampingan untuk membantu Anda meraih pertumbuhan, profitabilitas, dan kemenangan di pasar modal.",
  keywords: [
    "Aruna Jaya Capital",
    "AJ Capital",
    "investment management",
    "capital market services",
    "financial advisory",
    "portfolio management",
    "strategic investments",
    "asset management",
    "wealth growth",
    "trusted investment firm Indonesia",
  ],
  authors: [{ name: "Aruna Jaya Capital" }],
  creator: "Aruna Jaya Capital",
  publisher: "Aruna Jaya Capital",
  generator: "Next.js",
  applicationName: "Aruna Jaya Capital",
  openGraph: {
    title: "Aruna Jaya Capital | Empowering Your Investments",
    description:
      "Profesional dalam layanan pasar modal & manajemen investasi. Percayakan portofolio Anda pada AJ Capital untuk pertumbuhan dan keberhasilan finansial.",
    url: "https://ajcapital.com", // ganti dengan domain perusahaan
    siteName: "Aruna Jaya Capital",
    images: [
      {
        url: "/og-image.png", // ganti dengan gambar OG
        width: 1200,
        height: 630,
        alt: "Aruna Jaya Capital Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aruna Jaya Capital | Empowering Your Investments",
    description:
      "Solusi profesional pasar modal & manajemen investasi. Wujudkan pertumbuhan finansial bersama AJ Capital.",
    images: ["/og-image.png"], // ganti dengan path logo/banner
    creator: "@ajcapital", // ganti jika ada akun Twitter
  },
  category: "Finance",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${italiana.variable} font-sans antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
