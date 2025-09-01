import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Kohinoor Enterprises - Get Free Solar Quote in 24 Hours",
  description: "Contact Kohinoor Enterprises for free solar consultation in Andhra Pradesh. Get personalized quote within 24 hours. Call +91 99856 90350 or visit our Nandyal showroom.",
  keywords: "contact kohinoor solar, free solar quote andhra pradesh, solar consultation nandyal, solar installer contact kurnool, get solar quote, solar company phone number",
  openGraph: {
    title: "Contact Kohinoor Enterprises - Free Solar Consultation",
    description: "Get your free solar consultation and personalized quote within 24 hours. Expert solar solutions in Andhra Pradesh.",
    type: "website",
    locale: "en_IN",
    siteName: "Kohinoor Enterprises",
    url: "https://kohinoorsolar.com/contact",
    images: [
      {
        url: "https://kohinoorsolar.com/images/contact-solar-expert.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Kohinoor Enterprises solar experts for free consultation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Kohinoor Enterprises - Free Solar Consultation",
    description: "Get your free solar consultation and personalized quote within 24 hours. Expert solar solutions in Andhra Pradesh.",
    images: ["https://kohinoorsolar.com/images/contact-solar-expert.jpg"],
  },
  alternates: {
    canonical: "https://kohinoorsolar.com/contact",
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
