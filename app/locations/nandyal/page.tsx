import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, MapPin, Phone, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import WhatsAppButton from "@/components/whatsapp-button"
import SolarCalculator from "@/components/solar-calculator"

export default function NandyalPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-green-900 to-green-700 text-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Solar Solutions in Nandyal
                </h1>
                <p className="max-w-[600px] text-gray-200 md:text-xl">
                  Specialized solar energy systems designed for the unique climate and energy needs of Nandyal
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black">
                  <Link href="/contact">Get a Free Quote</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-green-800"
                >
                  <Link href="/projects">View Nandyal Projects</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] lg:h-[500px]">
              <Image
                src="/images/nandyal-location.jpg"
                alt="Solar installation in Nandyal"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Nandyal Section */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-green-800">
                Why Solar Energy in Nandyal?
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                Nandyal's climate makes it an ideal location for solar energy
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Sun className="h-8 w-8 text-yellow-500" />
                <CardTitle>Abundant Sunshine</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  Nandyal receives an average of 300+ sunny days per year, making it one of the best locations in Andhra
                  Pradesh for solar energy generation.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <CheckCircle className="h-8 w-8 text-yellow-500" />
                <CardTitle>High Energy Yield</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  The region's climate allows for optimal solar panel performance, resulting in higher energy production
                  and faster return on investment.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <MapPin className="h-8 w-8 text-yellow-500" />
                <CardTitle>Local Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  Our headquarters is located in Nandyal, giving us unparalleled understanding of local conditions and
                  requirements for solar installations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Nandyal Projects Showcase */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-green-800">Our Nandyal Projects</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                Successful solar installations across Nandyal district
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project 1 */}
            <Card>
              <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                <Image
                  src="/images/residential-rooftop-solar.jpg"
                  alt="Residential solar installation in Nandyal"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>5kW Residential System</CardTitle>
                <CardDescription>Nandyal Town</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  A 5kW rooftop solar system for a family home in Nandyal town, reducing their electricity bills by 85%.
                </p>
              </CardContent>
            </Card>

            {/* Project 2 */}
            <Card>
              <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                <Image
                  src="/images/school-solar.jpg"
                  alt="School solar installation in Nandyal"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>15kW School Installation</CardTitle>
                <CardDescription>Nandyal District</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  A 15kW solar system for a local school, providing reliable power for classrooms and computer labs.
                </p>
              </CardContent>
            </Card>

            {/* Project 3 */}
            <Card>
              <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                <Image
                  src="/images/agricultural-solar-irrigation.jpg"
                  alt="Agricultural solar installation in Nandyal"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>10kW Agricultural System</CardTitle>
                <CardDescription>Rural Nandyal</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  A 10kW solar-powered irrigation system for a farm in rural Nandyal, eliminating diesel costs.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="flex justify-center mt-8">
            <Button asChild className="bg-green-700 hover:bg-green-800">
              <Link href="/projects">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Nandyal-specific Calculator */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-green-800">
                Calculate Your Solar Savings in Nandyal
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                Our calculator is optimized with Nandyal-specific solar data for accurate estimates
              </p>
            </div>
          </div>
          <div className="max-w-3xl mx-auto">
            <SolarCalculator location="Nandyal" />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-green-800">
                What Nandyal Customers Say
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                Hear from our satisfied customers in Nandyal
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-green-50 border-green-100">
              <CardContent className="pt-6">
                <div className="flex flex-col gap-4">
                  <p className="italic text-gray-600">
                    "Kohinoor Solar installed a 5kW system on my home in Nandyal last year. The installation was quick
                    and professional, and my electricity bills have dropped by more than 80%. Their local team provides
                    excellent support whenever needed."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden">
                      <Image src="/images/customer-testimonial-3.jpg" alt="Customer" fill className="object-cover" />
                    </div>
                    <div>
                      <p className="font-semibold text-green-800">Ramesh Kumar</p>
                      <p className="text-sm text-gray-500">Nandyal Town</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-green-50 border-green-100">
              <CardContent className="pt-6">
                <div className="flex flex-col gap-4">
                  <p className="italic text-gray-600">
                    "As a farmer in Nandyal district, I was spending a fortune on diesel for irrigation. Kohinoor Solar
                    installed a solar-powered irrigation system that has completely eliminated my fuel costs. The system
                    has been running flawlessly for over a year now."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden">
                      <Image src="/images/customer-testimonial-4.jpg" alt="Customer" fill className="object-cover" />
                    </div>
                    <div>
                      <p className="font-semibold text-green-800">Venkat Reddy</p>
                      <p className="text-sm text-gray-500">Rural Nandyal</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 bg-yellow-500">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-green-900">
                Ready to Go Solar in Nandyal?
              </h2>
              <p className="max-w-[900px] text-green-900 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                Contact our Nandyal office for a free consultation and quote
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" className="bg-green-800 hover:bg-green-900 text-white">
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-green-900 text-green-900 hover:bg-green-900 hover:text-white"
              >
                <Link href="tel:+919985690350">
                  <Phone className="mr-2 h-4 w-4" /> Call Our Nandyal Office
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Button */}
      <WhatsAppButton phoneNumber="919985690350" />
    </div>
  )
}
