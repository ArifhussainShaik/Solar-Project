"use client"

import Link from "next/link"
import Image from "next/image"
import { Menu, Phone, } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white border-gray-200">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3">
    
            {/* Desktop Logo - Larger and more visible */}
            <div className="hidden md:flex items-center">
              <Image 
                src="/images/mainlogo.jpg" 
                alt="Kohinoor Enterprises Logo" 
                width={40}
                height={40}
                className="h-10 w-auto rounded-sm shadow-sm" 
                priority
              />
              <span className="ml-2 text-lg font-semibold text-gray-900 flex flex-col">
                Kohinoor Enterprises
                <span className="text-[0.65rem] font-bold">(The Solar Hub)</span>
              </span>
            </div>
            {/* Mobile Logo - Larger for better visibility */}
            <div className="md:hidden flex items-center">
              <Image 
                src="/images/mainlogo.jpg" 
                alt="Kohinoor Enterprises Logo" 
                width={36}
                height={36}
                className="h-9 w-auto rounded-sm shadow-sm" 
                priority
              />
              <span className="ml-2 text-base font-semibold text-gray-900 flex flex-col">
                Kohinoor Enterprises
                <span className="text-[0.65rem] font-bold">(The Solar Hub)</span>
              </span>
            </div>
          </Link>
        </div>
        <nav className="hidden items-center gap-4 md:flex">
          <NavLinks className="flex gap-6" />
          
          <Button
            asChild
            variant="outline"
            size="sm"
            className="border-gray-200 text-gray-900 hover:bg-green-700 hover:text-white"
          >
            <Link href="tel:+919985690350">
              <Phone className="mr-2 h-4 w-4" /> +91 99856 90350
            </Link>
          </Button>
          <Button asChild size="sm" className="bg-green-700 hover:bg-green-800 text-white">
            <Link href="/contact">Get a Free Quote</Link>
          </Button>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden border-gray-200 text-gray-900">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white">
            <SheetHeader className="mb-4">
              <SheetTitle className="flex items-center gap-3">

                <Image 
                  src="/images/mainlogo.jpg" 
                  alt="Kohinoor Enterprises Logo" 
                  width={32}
                  height={32}
                  className="h-8 w-auto rounded-sm shadow-sm" 
                  priority
                />
                <span className="text-base font-semibold text-gray-900 flex flex-col">
                  Kohinoor Solar
                  <span className="text-[0.65rem] font-bold">(The Solar Hub)</span>
                </span>
              </SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-4">
              <NavLinks className="flex flex-col gap-4" isMobile />
              <div className="pt-4 border-t border-gray-200">
                
              </div>
              <Button
                asChild
                variant="outline"
                size="sm"
                className="border-gray-200 text-gray-900 hover:bg-green-700 hover:text-white"
              >
                <Link href="tel:+919985690350">
                  <Phone className="mr-2 h-4 w-4" /> +91 99856 90350
                </Link>
              </Button>
              <Button asChild size="sm" className="bg-green-700 hover:bg-green-800 text-white">
                <Link href="/contact">Get a Free Quote</Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

function NavLinks({ className, isMobile = false }: { className?: string; isMobile?: boolean }) {
  const pathname = usePathname()

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projects" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ] as const

  return (
    <div className={className}>
      {links.map((link) => {
        const isActive = pathname === link.href

        return isMobile ? (
          <SheetClose asChild key={link.href}>
            <Link
              href={link.href}
              className={cn(
                "text-base transition-colors hover:text-green-800",
                isActive ? "font-medium text-green-800" : "text-gray-500",
              )}
            >
              {link.label}
            </Link>
          </SheetClose>
        ) : (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "text-sm font-medium transition-colors hover:text-green-800",
              isActive ? "text-green-800" : "text-gray-500",
            )}
          >
            {link.label}
          </Link>
        )
      })}
    </div>
  )
}