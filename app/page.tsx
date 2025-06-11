import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle, MapPin, Phone, Sun, Zap, Shield, Award, Star, Leaf, Trees, Recycle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import WhatsAppButton from "@/components/whatsapp-button"
import SolarCalculator from "@/components/solar-calculator"
import CaseStudyCarousel from "@/components/case-study-carousel"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-12 md:py-24 lg:py-32 bg-theme-primary text-theme-accent theme-transition">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <Badge className="mb-2 bg-yellow-500 text-black hover:bg-yellow-600">
                  Join 500+ Satisfied Customers in Andhra Pradesh
                </Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Cut Your Electricity Bills by 95% with Solar Energy
                </h1>
                <p className="max-w-[600px] text-gray-200 md:text-xl">
                  Professional solar installations for homes and businesses in Nandyal, Kurnool, and across Andhra
                  Pradesh. Start saving up to 95% on your electricity bills from day one with our premium solar solutions.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" className="bg-theme-secondary hover:bg-theme-secondary text-theme-text">
                  <Link href="/contact">Get Free Site Survey Within 24 Hours</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-theme-accent text-theme-accent hover:bg-theme-accent hover:text-theme-primary bg-transparent"
                >
                  <Link href="/services">View Our Services</Link>
                </Button>
              </div>
            </div>
            {/* Hero Image - Replace with your actual solar panel image */}
            <div className="relative h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/images/hero-solar-panels.jpg"
                alt="Solar panels installed on residential rooftop in Nandyal, Andhra Pradesh"
                fill
                className="object-cover"
                priority
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              />
              {/* Optional overlay for better text contrast */}
              <div className="absolute inset-0 bg-black/20 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 bg-theme-background theme-transition">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-theme-primary">
                Why Choose Kohinoor Enterprises?
              </h2>
              <p className="max-w-[900px] text-theme-muted md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We provide end-to-end solar solutions with quality products, expert installation, and exceptional
                service across Andhra Pradesh
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <Card className="bg-theme-card border-theme-border theme-transition">
              <CardHeader className="flex flex-row items-center gap-4">
                <Sun className="h-8 w-8 text-theme-secondary" />
                <CardTitle className="text-theme-text">Premium Solar Panels</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-theme-muted">
                  High-efficiency Tier-1 solar panels from top manufacturers with 30-year performance warranties and
                  proven track record
                </p>
              </CardContent>
            </Card>
            <Card className="bg-theme-card border-theme-border theme-transition">
              <CardHeader className="flex flex-row items-center gap-4">
                <Zap className="h-8 w-8 text-theme-secondary" />
                <CardTitle className="text-theme-text">Guaranteed Savings</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-theme-muted">
                  Reduce your electricity bills by up to 95% with our custom solar solutions. Money-back guarantee if
                  system doesn't perform as promised
                </p>
              </CardContent>
            </Card>
            <Card className="bg-theme-card border-theme-border theme-transition">
              <CardHeader className="flex flex-row items-center gap-4">
                <CheckCircle className="h-8 w-8 text-theme-secondary" />
                <CardTitle className="text-theme-text">Expert Installation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-theme-muted">
                  Professional installation by MNRE-certified technicians with 5-year workmanship warranty and minimal
                  disruption to your routine
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="w-full py-12 md:py-24 bg-gray-50 theme-transition">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-theme-primary">
                Calculate Your Solar Savings
              </h2>
              <p className="max-w-[900px] text-theme-muted md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Get an instant estimate of your solar system size, cost, and potential savings based on your location
                and energy usage
              </p>
            </div>
          </div>
          <div className="mt-12 max-w-3xl mx-auto">
            <SolarCalculator />
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="w-full py-12 md:py-24 bg-theme-background theme-transition">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-theme-primary">
                Real Customer Success Stories
              </h2>
              <p className="max-w-[900px] text-theme-muted md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                See how our customers across Andhra Pradesh are saving money and reducing their carbon footprint with
                solar energy
              </p>
            </div>
          </div>
          <div className="mt-12">
            <CaseStudyCarousel />
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="w-full py-12 md:py-16 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center space-y-4 text-center mb-8">
            <h2 className="text-2xl font-bold text-theme-primary">Our Certifications & Credentials</h2>
            <p className="text-theme-muted max-w-[600px]">
              We're recognized and certified by leading industry authorities, ensuring quality and compliance
            </p>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-4 md:gap-8">
            <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg w-[140px]">
              <Award className="h-8 w-8 text-yellow-500 mb-2" />
              <p className="font-semibold text-sm">MNRE Approved</p>
              <p className="text-xs text-gray-500">Ministry of New and Renewable Energy</p>
            </div>
            <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg w-[140px]">
              <Shield className="h-8 w-8 text-yellow-500 mb-2" />
              <p className="font-semibold text-sm">ISO 9001:2015</p>
              <p className="text-xs text-gray-500">Quality Management</p>
            </div>
            <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg w-[140px]">
              <CheckCircle className="h-8 w-8 text-yellow-500 mb-2" />
              <p className="font-semibold text-sm">MSME Registered</p>
              <p className="text-xs text-gray-500">Government Recognized</p>
            </div>
            <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg w-[140px]">
              <Sun className="h-8 w-8 text-yellow-500 mb-2" />
              <p className="font-semibold text-sm">KREDL Empaneled</p>
              <p className="text-xs text-gray-500">Approved Vendor</p>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="w-full py-12 md:py-24 bg-theme-primary text-theme-accent theme-transition">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Serving Andhra Pradesh</h2>
              <p className="max-w-[900px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We provide solar solutions throughout Andhra Pradesh with special focus on Nandyal and Kurnool districts
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <Card className="bg-theme-primary/80 text-theme-accent border-none theme-transition">
              <CardHeader className="flex flex-row items-center gap-4">
                <MapPin className="h-8 w-8 text-theme-secondary" />
                <CardTitle>Nandyal District</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-200 mb-4">
                  Specialized solar solutions for homes and businesses in Nandyal district with local expertise and
                  support
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="border-theme-accent text-theme-accent hover:bg-theme-accent hover:text-theme-primary bg-transparent"
                >
                  <Link href="/locations/nandyal">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-theme-primary/80 text-theme-accent border-none theme-transition">
              <CardHeader className="flex flex-row items-center gap-4">
                <MapPin className="h-8 w-8 text-theme-secondary" />
                <CardTitle>Kurnool District</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-200 mb-4">
                  Custom solar installations for the unique needs of Kurnool district residents and businesses
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="border-theme-accent text-theme-accent hover:bg-theme-accent hover:text-theme-primary bg-transparent"
                >
                  <Link href="/locations/nandyal">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-16 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center space-y-4 text-center mb-8">
            <h2 className="text-2xl font-bold text-theme-primary">Frequently Asked Questions</h2>
            <p className="text-theme-muted max-w-[600px]">
              Get answers to common questions about solar energy and our services
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 md:gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">How much does a solar system cost?</h3>
              <p className="text-sm text-gray-600">
                Costs vary based on system size and type. A typical 5kW residential system ranges from ₹2.5-3.5 lakhs
                after government subsidies. We offer flexible financing options with EMIs as low as ₹3,000/month.
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">How long does installation take?</h3>
              <p className="text-sm text-gray-600">
                Most residential installations are completed within 2-3 days. We handle all paperwork, permits, and grid
                connection requirements for a hassle-free experience.
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">What maintenance is required?</h3>
              <p className="text-sm text-gray-600">
                Our solar systems require zero maintenance. We use high-quality components that are designed to work efficiently without any regular upkeep.
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Do you offer warranties?</h3>
              <p className="text-sm text-gray-600">
                Yes! We provide a 5-year workmanship warranty on installation and 30-year performance warranty on
                solar panels. Our comprehensive warranty coverage ensures your investment is protected.
              </p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Button asChild className="bg-theme-primary hover:bg-theme-primary text-theme-accent">
              <Link href="/contact">Ask Us a Question</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-12 md:py-24 bg-theme-background theme-transition">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-theme-primary">
                What Our Customers Say
              </h2>
              <p className="max-w-[900px] text-theme-muted md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join hundreds of satisfied customers who have made the switch to solar energy
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <Card className="bg-theme-card border-theme-border theme-transition">
              <CardContent className="pt-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-theme-muted mb-4">
                  "Switching to solar with Kohinoor Enterprises was the best decision for our home. Our electricity bills have reduced by 90% and the installation was completed professionally."
                </p>
                <div>
                  <p className="font-medium text-theme-text">Ravi Kumar</p>
                  <p className="text-sm text-theme-muted">Nandyal, Andhra Pradesh</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-theme-card border-theme-border theme-transition">
              <CardContent className="pt-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-theme-muted mb-4">
                  "The team at Kohinoor Enterprises provided excellent service from start to finish. They helped us understand the process and made the transition to solar seamless."
                </p>
                <div>
                  <p className="font-medium text-theme-text">Priya Sharma</p>
                  <p className="text-sm text-theme-muted">Kurnool, Andhra Pradesh</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-theme-card border-theme-border theme-transition">
              <CardContent className="pt-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-theme-muted mb-4">
                  "The solar calculator helped us understand our potential savings accurately. The installation was quick and the after-sales support has been exceptional."
                </p>
                <div>
                  <p className="font-medium text-theme-text">Suresh Reddy</p>
                  <p className="text-sm text-theme-muted">Guntur, Andhra Pradesh</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Environmental Impact Section */}
      <section className="w-full py-12 md:py-24 bg-green-50 theme-transition">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-green-800">
                Environmental Impact
              </h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Make a positive impact on the environment while saving money
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <Card className="bg-white border-green-100 theme-transition">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-800">
                  <Leaf className="h-5 w-5" />
                  Carbon Reduction
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Each kilowatt of solar power installed reduces carbon emissions by approximately 1,500 kg per year
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-green-100 theme-transition">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-800">
                  <Trees className="h-5 w-5" />
                  Tree Equivalent
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  A 5kW solar system is equivalent to planting 100 trees in terms of carbon reduction
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white border-green-100 theme-transition">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-800">
                  <Recycle className="h-5 w-5" />
                  Sustainable Energy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Solar energy is 100% renewable and helps reduce dependence on fossil fuels
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* WhatsApp Button */}
      <WhatsAppButton phoneNumber="919985690350" />
    </div>
  )
}
