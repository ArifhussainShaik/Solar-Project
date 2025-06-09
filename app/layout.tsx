import type React from "react"
import "@/app/globals.css"
import type { Metadata } from "next"

import { ThemeProvider as NextThemeProvider } from "@/components/theme-provider"
import { ThemeProvider } from "@/contexts/theme-context"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Kohinoor Enterprises - Cut Your Electricity Bills by 90%",
  description:
    "Leading solar energy solutions provider in Andhra Pradesh. Professional solar panel installation for homes and businesses in Nandyal, Kurnool. Save up to 90% on electricity bills. MNRE approved, 25-year warranty. Get free consultation today.",
  keywords:
    "solar panels Andhra Pradesh, solar installation Nandyal, solar energy Kurnool, residential solar systems, commercial solar solutions, solar panel cost, electricity bill savings",
  openGraph: {
    title: "Kohinoor Enterprises - Cut Your Electricity Bills by 90%",
    description:
      "Professional solar installations in Andhra Pradesh. Join 500+ satisfied customers. MNRE approved with 25-year warranty.",
    type: "website",
    locale: "en_IN",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://kohinoorsolar.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="geo.region" content="IN-AP" />
        <meta name="geo.placename" content="Nandyal, Andhra Pradesh" />
        <meta name="geo.position" content="15.4781;78.4803" />
        <meta name="ICBM" content="15.4781, 78.4803" />
      </head>
      <body>
        <ThemeProvider>
          <NextThemeProvider attribute="class" defaultTheme="light">
            <div className="relative flex min-h-screen flex-col bg-theme-background">
              <SiteHeader />
              <main className="flex-1">{children}</main>
              <SiteFooter />
            </div>
          </NextThemeProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
