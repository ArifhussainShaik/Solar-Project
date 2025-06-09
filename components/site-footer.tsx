import Link from "next/link"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Sun, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function SiteFooter() {
  return (
    <footer className="bg-green-900 text-white">
      <div className="container px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Sun className="h-6 w-6 text-yellow-500" />
              <span className="text-xl font-bold">Kohinoor Enterprises</span>
            </div>
            <p className="text-gray-300">
              Providing sustainable solar energy solutions for homes and businesses across Andhra Pradesh since 2015.
            </p>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 text-gray-300 hover:text-white hover:bg-green-800"
                >
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Button>
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 text-gray-300 hover:text-white hover:bg-green-800"
                >
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Button>
              </Link>
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 text-gray-300 hover:text-white hover:bg-green-800"
                >
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Button>
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 text-gray-300 hover:text-white hover:bg-green-800"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-300 hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                  Residential Solar
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                  Commercial Solar
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                  Solar Battery Storage
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                  Agricultural Solutions
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                  Maintenance & Support
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">
                  Shop no.26-1-1, Chamakaluva, RS Road
                  <br />
                  Opp: Sowjanya Hero Show Room
                  <br />
                  Nandyala, Andhra Pradesh 518501
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                <Link href="tel:+919985690350" className="text-gray-300 hover:text-white transition-colors">
                  +91 99856 90350
                </Link>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                <Link href="mailto:info@kohinoorsolar.com" className="text-gray-300 hover:text-white transition-colors">
                  info@kohinoorsolar.com
                </Link>
              </li>
            </ul>
            <div className="pt-2">
              <h4 className="text-sm font-semibold mb-1">Business Hours</h4>
              <p className="text-gray-300 text-sm">
                Monday - Saturday: 9:00 AM - 7:00 PM
                <br />
                Sunday: 10:00 AM - 2:00 PM
              </p>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-green-800 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Kohinoor Enterprises. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
