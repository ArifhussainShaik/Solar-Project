import Image from "next/image"
import Link from "next/link"
import { Award, CheckCircle, Clock, MapPin, Phone, Shield, Sun, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import WhatsAppButton from "@/components/whatsapp-button"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-green-800 text-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                About Kohinoor Enterprises
              </h1>
              <p className="max-w-[700px] text-gray-200 md:text-xl mx-auto">
                Bringing sustainable energy solutions to Andhra Pradesh since 2015
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="relative h-[300px] md:h-[400px] lg:h-[500px]">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Kohinoor Enterprises team installing solar panels on a residential rooftop in Nandyal"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-green-800">Our Story</h2>
                <p className="text-gray-500 md:text-lg">
                  Kohinoor Enterprises was established in 2015 with a vision to bring clean, renewable energy to homes
                  and businesses across Andhra Pradesh. What started as a dedicated operation in Nandyal has grown into
                  one of the region's most trusted solar solution providers.
                </p>
                <p className="text-gray-500 md:text-lg">
                  Our journey began when our founder, Rajesh Kumar, recognized the immense potential for solar energy in
                  our sun-rich region and the opportunity to help people reduce their dependence on the grid while
                  saving money and contributing to a greener planet.
                </p>
                <p className="text-gray-500 md:text-lg">
                  Today, we're proud to have installed solar systems for over 500 satisfied customers throughout
                  Nandyal, Kurnool, and surrounding areas, helping them achieve energy independence and significant cost
                  savings totaling over ₹2 crores annually.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Sun className="h-8 w-8 text-yellow-500" />
                <CardTitle className="text-2xl text-green-800">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  To accelerate the adoption of solar energy in Andhra Pradesh by providing high-quality, affordable
                  solar solutions that reduce electricity costs and environmental impact while empowering communities
                  with sustainable energy independence and creating local employment opportunities.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Sun className="h-8 w-8 text-yellow-500" />
                <CardTitle className="text-2xl text-green-800">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  To be the leading solar energy provider in Andhra Pradesh by 2030, known for excellence in service,
                  quality installations, and customer satisfaction, while contributing to India's renewable energy goals
                  and creating a sustainable future for generations to come.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-green-800">
                Our Core Values
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                The principles that guide everything we do and define our commitment to customers
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <CheckCircle className="h-8 w-8 text-yellow-500" />
                <CardTitle>Quality First</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  We never compromise on the quality of our products or installations, using only Tier-1 solar panels
                  and certified components to ensure long-lasting performance and maximum return on investment.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Users className="h-8 w-8 text-yellow-500" />
                <CardTitle>Customer-Centric Approach</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  We put our customers first, listening to their needs and providing personalized solutions that exceed
                  expectations and deliver real value. Our 24/7 support ensures you're never alone.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Shield className="h-8 w-8 text-yellow-500" />
                <CardTitle>Integrity & Transparency</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  We operate with honesty and transparency in all our dealings with customers, partners, and employees,
                  building trust through consistent actions and clear communication about costs and timelines.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Award className="h-8 w-8 text-yellow-500" />
                <CardTitle>Excellence in Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  We strive for excellence in every aspect of our business, from customer service to technical
                  expertise, continuously improving our offerings and staying updated with latest solar technologies.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Clock className="h-8 w-8 text-yellow-500" />
                <CardTitle>Reliability & Trust</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  We deliver on our promises, meeting deadlines and providing dependable after-sales support throughout
                  the 25+ year lifetime of your solar system with regular maintenance and monitoring.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Sun className="h-8 w-8 text-yellow-500" />
                <CardTitle>Environmental Responsibility</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  We are committed to promoting sustainable practices and reducing carbon footprints, contributing to a
                  cleaner environment for future generations while supporting India's renewable energy mission.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-green-800">
                Our Leadership Team
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                Meet the dedicated professionals behind Kohinoor Enterprises who bring decades of experience in
                renewable energy
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {/* Team Member 1 */}
            <div className="flex flex-col items-center space-y-4">
              <div className="relative h-40 w-40 rounded-full overflow-hidden">
                <Image
                  src="/placeholder.svg?height=160&width=160"
                  alt="Rajesh Kumar - Founder & Managing Director of Kohinoor Enterprises"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-green-800">Rajesh Kumar</h3>
                <p className="text-gray-500 mb-2">Founder & Managing Director</p>
                <p className="text-sm text-gray-600 max-w-xs">
                  15+ years in renewable energy sector. B.Tech in Electrical Engineering from JNTU. Passionate about
                  sustainable energy solutions.
                </p>
              </div>
            </div>
            {/* Team Member 2 */}
            <div className="flex flex-col items-center space-y-4">
              <div className="relative h-40 w-40 rounded-full overflow-hidden">
                <Image
                  src="/placeholder.svg?height=160&width=160"
                  alt="Priya Sharma - Technical Director at Kohinoor Enterprises"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-green-800">Priya Sharma</h3>
                <p className="text-gray-500 mb-2">Technical Director</p>
                <p className="text-sm text-gray-600 max-w-xs">
                  M.Tech in Power Systems. 12+ years experience in solar system design and grid integration. MNRE
                  certified solar engineer.
                </p>
              </div>
            </div>
            {/* Team Member 3 */}
            <div className="flex flex-col items-center space-y-4">
              <div className="relative h-40 w-40 rounded-full overflow-hidden">
                <Image
                  src="/placeholder.svg?height=160&width=160"
                  alt="Venkat Reddy - Installation Manager at Kohinoor Enterprises"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-green-800">Venkat Reddy</h3>
                <p className="text-gray-500 mb-2">Installation Manager</p>
                <p className="text-sm text-gray-600 max-w-xs">
                  10+ years in solar installations. Leads our certified installation team. Expert in rooftop and
                  ground-mounted systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="w-full py-12 md:py-16 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center space-y-4 text-center mb-8">
            <h2 className="text-2xl font-bold text-green-800">Our Achievements</h2>
            <p className="text-gray-500 max-w-[600px]">
              Milestones that reflect our commitment to excellence and customer satisfaction
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-800 mb-2">500+</div>
              <p className="text-sm text-gray-500">Happy Customers</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-800 mb-2">5MW+</div>
              <p className="text-sm text-gray-500">Solar Capacity Installed</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-800 mb-2">₹2Cr+</div>
              <p className="text-sm text-gray-500">Customer Savings Annually</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-800 mb-2">8+</div>
              <p className="text-sm text-gray-500">Years of Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="w-full py-12 md:py-24 bg-green-800 text-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Visit Our Showroom</h2>
                <div className="flex items-start space-x-2 text-gray-200">
                  <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  <p>
                    Shop no.26-1-1, Chamakaluva, RS Road
                    <br />
                    Opp: Sowjanya Hero Show Room
                    <br />
                    Nandyala, Andhra Pradesh 518501
                  </p>
                </div>
                <div className="flex items-center space-x-2 text-gray-200">
                  <Phone className="h-5 w-5 flex-shrink-0" />
                  <p>+91 99856 90350</p>
                </div>
                <div className="flex items-center space-x-2 text-gray-200">
                  <Clock className="h-5 w-5 flex-shrink-0" />
                  <p>Mon-Sat: 9:00 AM - 7:00 PM | Sun: 10:00 AM - 2:00 PM</p>
                </div>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black">
                  <Link href="/contact">Contact Us</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-green-800 bg-transparent"
                >
                  <Link
                    href="https://maps.google.com/maps?q=Shop+no.26-1-1+chamakaluva+rs+road+Nandyala+Andhra+Pradesh+518501"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Directions
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px]">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Kohinoor Enterprises showroom and office in Nandyal, Andhra Pradesh"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Button */}
      <WhatsAppButton phoneNumber="919985690350" />
    </div>
  )
}
