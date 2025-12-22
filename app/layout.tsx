import type React from "react"
import type { Metadata } from "next"
// import { Geist, Geist_Mono } from "next/font/google"
import { hobostd } from "@/lib/fonts";
import { Analytics } from "@vercel/analytics/next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import StoreProvider from "@/lib/store/store-provider"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css"

// const _geist = Geist({ subsets: ["latin"] })
// const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Danetto - Freelance Video Creator",
  description: "Professional video portfolio showcasing cinematic reels, commercials, and music videos by Danetto",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${hobostd.variable} antialiased`}>
        <StoreProvider>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
          <Analytics />
        </StoreProvider>
      </body>
    </html>
  )
}
