import type React from "react"
import "@/app/globals.css"
import type { Metadata } from "next"
import Script from "next/script"

import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import ErrorBoundary from "@/components/ui/error-boundary"

export const metadata: Metadata = {
  title: "Kohinoor Enterprises - Cut Your Electricity Bills by 95%",
  description:
    "Leading solar energy solutions provider in Andhra Pradesh. Professional solar panel installation for homes and businesses in Nandyal, Kurnool. Save up to 95% on electricity bills. MNRE approved, 30-year warranty. Get free consultation today.",
  keywords:
    "solar panels Andhra Pradesh, solar installation Nandyal, solar energy Kurnool, residential solar systems, commercial solar solutions, solar panel cost, electricity bill savings",
  openGraph: {
    title: "Kohinoor Enterprises - Solar Solutions in Andhra Pradesh",
    description:
      "Professional solar installations in Andhra Pradesh. Join 500+ satisfied customers. MNRE approved with 30-year warranty.",
    type: "website",
    locale: "en_IN",
    siteName: "Kohinoor Enterprises",
    images: [
      {
        url: "https://kohinoorsolar.com/images/hero-solar-panels.jpg",
        width: 1200,
        height: 630,
        alt: "Solar panels installed on residential rooftop in Nandyal, Andhra Pradesh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kohinoor Enterprises - Solar Solutions in Andhra Pradesh",
    description: "Professional solar installations in Andhra Pradesh. Join 500+ satisfied customers. MNRE approved with 30-year warranty.",
    images: ["https://kohinoorsolar.com/images/hero-solar-panels.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
  alternates: {
    canonical: "https://kohinoorsolar.com",
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
        <meta name="geo.position" content="15.482116;78.466344" />
        <meta name="ICBM" content="15.482116, 78.466344" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-WN498XD271"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WN498XD271');
          `}
        </Script>
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Kohinoor Enterprises",
              "image": "https://kohinoorsolar.com/images/hero-solar-panels.jpg",
              "description": "Leading solar energy solutions provider in Andhra Pradesh. Professional solar panel installation for homes and businesses in Nandyal, Kurnool. Save up to 95% on electricity bills.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Shop no.26-1-1, Chamakaluva, RS Road, Opp: Sowjanya Hero Show Room",
                "addressLocality": "Nandyal",
                "addressRegion": "Andhra Pradesh",
                "postalCode": "518501",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 15.482116,
                "longitude": 78.466344
              },
              "url": "https://kohinoorsolar.com",
              "telephone": "+919985690350",
              "email": "info@kohinoorsolar.com",
              "priceRange": "₹₹",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday"
                  ],
                  "opens": "09:00",
                  "closes": "19:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Sunday",
                  "opens": "10:00",
                  "closes": "14:00"
                }
              ],
              "areaServed": {
                "@type": "State",
                "name": "Andhra Pradesh",
                "address": {
                  "@type": "PostalAddress",
                  "addressRegion": "AP",
                  "addressCountry": "IN"
                }
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Solar Solutions",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Residential Solar Solutions"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Commercial Solar Solutions"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Agricultural Solar Solutions"
                    }
                  }
                ]
              },
              "award": [
                "MNRE Approved",
                "ISO 9001:2015",
                "MSME Registered",
                "KREDL Empaneled"
              ]
            })
          }}
        />
      </head>
      <body suppressHydrationWarning={true}>
        <ErrorBoundary>
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </ErrorBoundary>
      </body>
    </html>
  )
}
