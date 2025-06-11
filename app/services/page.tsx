import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Battery, Building, CheckCircle, Home, Settings, Sun } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import WhatsAppButton from "@/components/whatsapp-button"

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-green-800 text-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Our Solar Services
              </h1>
              <p className="max-w-[700px] text-gray-200 md:text-xl mx-auto">
                Comprehensive solar solutions for homes and businesses in Andhra Pradesh
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-green-800">
                  Complete Solar Solutions
                </h2>
                <p className="text-gray-500 md:text-lg">
                  At Kohinoor Enterprises, we provide end-to-end solar solutions tailored to your specific needs. From
                  initial consultation and system design to installation and ongoing maintenance, our team of experts
                  handles every aspect of your solar journey. Our systems are designed to reduce your electricity bills by up to 95%.
                </p>
                <p className="text-gray-500 md:text-lg">
                  We work with top-quality solar panels, inverters, and batteries to ensure optimal performance and
                  longevity of your solar system. Our goal is to maximize your energy production and savings while
                  providing reliable, clean energy for years to come.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild className="bg-green-700 hover:bg-green-800 text-white">
                  <Link href="/contact">Request a Consultation</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px]">
              <Image
                src="/images/solar-installation-team.jpg"
                alt="Solar installation team at work"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Residential Services */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-green-800">
                Residential Solar Solutions
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                Power your home with clean, renewable solar energy
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Home className="h-8 w-8 text-yellow-500" />
                <CardTitle>Rooftop Solar Systems</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  Custom-designed rooftop solar panel systems that maximize energy production based on your roof's
                  orientation and available space. Achieve up to 95% reduction in your electricity bills with our optimized solutions.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Grid-tied systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Off-grid solutions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Hybrid systems with battery backup</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/contact">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Battery className="h-8 w-8 text-yellow-500" />
                <CardTitle>Solar Battery Storage</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  Store excess solar energy for use during nighttime or power outages with our high-capacity battery
                  solutions.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Lithium-ion battery systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Backup power during outages</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Smart energy management</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/contact">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Commercial Services */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-green-800">
                Commercial Solar Solutions
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                Reduce operating costs and enhance your business's sustainability
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Building className="h-8 w-8 text-yellow-500" />
                <CardTitle>Commercial Installations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  Large-scale solar installations for businesses, factories, and commercial buildings designed to
                  significantly reduce electricity costs by up to 95%.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Rooftop commercial systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Ground-mounted arrays</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Carport solar installations</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/contact">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Sun className="h-8 w-8 text-yellow-500" />
                <CardTitle>Agricultural Solar Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  Solar-powered irrigation systems and energy solutions specifically designed for farms and agricultural
                  operations.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Solar water pumps</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Off-grid farm solutions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Cold storage power systems</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/contact">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Settings className="h-8 w-8 text-yellow-500" />
                <CardTitle>Industrial Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  Custom solar solutions for industrial facilities with high energy demands, designed to reduce
                  operational costs.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>High-capacity systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Load management solutions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Integration with existing systems</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/contact">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Maintenance Services */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="relative h-[300px] md:h-[400px] order-2 lg:order-1">
              <Image
                src="/images/solar-panel-maintenance.jpg"
                alt="Solar panel maintenance"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="flex flex-col justify-center space-y-4 order-1 lg:order-2">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-green-800">
                  Maintenance & Support
                </h2>
                <p className="text-gray-500 md:text-lg">
                  Our commitment to you doesn't end after installation. We provide comprehensive maintenance and support
                  services to ensure your solar system performs optimally for years to come.
                </p>
                <ul className="mt-4 space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-500">Regular system inspections and cleaning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-500">Performance monitoring and optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-500">Prompt troubleshooting and repairs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-500">Warranty management and support</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild className="bg-green-700 hover:bg-green-800 text-white">
                  <Link href="/contact">Schedule Maintenance</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Process */}
      <section className="w-full py-12 md:py-24 bg-green-800 text-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Process</h2>
              <p className="max-w-[900px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                How we bring solar energy to your home or business
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-green-700 border-none text-white">
              <CardHeader>
                <CardTitle className="flex flex-col items-center">
                  <div className="rounded-full bg-yellow-500 text-green-900 w-10 h-10 flex items-center justify-center text-xl font-bold mb-4">
                    1
                  </div>
                  Consultation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-200">
                  We assess your energy needs, site conditions, and budget to design the perfect solar solution for you.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-green-700 border-none text-white">
              <CardHeader>
                <CardTitle className="flex flex-col items-center">
                  <div className="rounded-full bg-yellow-500 text-green-900 w-10 h-10 flex items-center justify-center text-xl font-bold mb-4">
                    2
                  </div>
                  Design
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-200">
                  Our engineers create a custom system design optimized for your specific requirements and location.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-green-700 border-none text-white">
              <CardHeader>
                <CardTitle className="flex flex-col items-center">
                  <div className="rounded-full bg-yellow-500 text-green-900 w-10 h-10 flex items-center justify-center text-xl font-bold mb-4">
                    3
                  </div>
                  Installation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-200">
                  Our experienced technicians install your solar system with minimal disruption to your daily routine.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-green-700 border-none text-white">
              <CardHeader>
                <CardTitle className="flex flex-col items-center">
                  <div className="rounded-full bg-yellow-500 text-green-900 w-10 h-10 flex items-center justify-center text-xl font-bold mb-4">
                    4
                  </div>
                  Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-200">
                  We provide ongoing maintenance and support to ensure your system performs optimally for years.
                </p>
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
                Ready to Harness Solar Power?
              </h2>
              <p className="max-w-[900px] text-green-900 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                Contact us today for a free consultation and quote
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" className="bg-green-800 hover:bg-green-900 text-white">
                <Link href="/contact">Get Started</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-green-900 text-green-900 hover:bg-green-900 hover:text-white"
              >
                <Link href="/projects">View Our Projects</Link>
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
