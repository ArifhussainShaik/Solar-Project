import Image from "next/image"
import Link from "next/link"
import { Building, Calendar, MapPin, Users, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import WhatsAppButton from "@/components/whatsapp-button"

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-green-800 text-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Our Solar Projects
              </h1>
              <p className="max-w-[700px] text-gray-200 md:text-xl mx-auto">
                Explore our portfolio of successful solar installations across Andhra Pradesh
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Tabs */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="all">All Projects</TabsTrigger>
                <TabsTrigger value="residential">Residential</TabsTrigger>
                <TabsTrigger value="commercial">Commercial</TabsTrigger>
                <TabsTrigger value="agricultural">Agricultural</TabsTrigger>
              </TabsList>
            </div>

            {/* All Projects Tab */}
            <TabsContent value="all" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Project 1 */}
                <Card>
                  <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                    <Image
                      src="/images/residential-rooftop-solar.jpg"
                      alt="Residential solar installation"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>5kW Residential Rooftop System</CardTitle>
                    <CardDescription className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" /> Nandyal, Andhra Pradesh
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                      <Calendar className="h-4 w-4" />
                      <span>Completed: March 2023</span>
                    </div>
                    <p className="text-gray-500">
                      A 5kW grid-tied solar system installed on a residential rooftop, providing 80% of the household's
                      electricity needs.
                    </p>
                  </CardContent>
                </Card>

                {/* Project 2 */}
                <Card>
                  <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                    <Image
                      src="/images/commercial-solar-building.jpg"
                      alt="Commercial solar installation"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>25kW Commercial Installation</CardTitle>
                    <CardDescription className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" /> Kurnool, Andhra Pradesh
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                      <Calendar className="h-4 w-4" />
                      <span>Completed: January 2023</span>
                    </div>
                    <p className="text-gray-500">
                      A 25kW solar system for a manufacturing facility, reducing their electricity costs by 60% and
                      providing backup power.
                    </p>
                  </CardContent>
                </Card>

                {/* Project 3 */}
                <Card>
                  <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                    <Image
                      src="/images/agricultural-solar-irrigation.jpg"
                      alt="Agricultural solar installation"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>10kW Solar Irrigation System</CardTitle>
                    <CardDescription className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" /> Nandyal District, Andhra Pradesh
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                      <Calendar className="h-4 w-4" />
                      <span>Completed: November 2022</span>
                    </div>
                    <p className="text-gray-500">
                      A 10kW solar-powered irrigation system for a 15-acre farm, eliminating diesel generator costs and
                      providing reliable water supply.
                    </p>
                  </CardContent>
                </Card>

                {/* Project 4 */}
                <Card>
                  <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                    <Image
                      src="/images/off-grid-home.jpg"
                      alt="Residential solar with battery backup"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>7kW Off-Grid Home System</CardTitle>
                    <CardDescription className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" /> Kurnool District, Andhra Pradesh
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                      <Calendar className="h-4 w-4" />
                      <span>Completed: February 2023</span>
                    </div>
                    <p className="text-gray-500">
                      A 7kW off-grid solar system with battery storage for a rural home, providing 24/7 power
                      independence from the grid.
                    </p>
                  </CardContent>
                </Card>

                {/* Project 5 */}
                <Card>
                  <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                    <Image
                      src="/images/school-solar.jpg"
                      alt="School solar installation"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>15kW School Installation</CardTitle>
                    <CardDescription className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" /> Nandyal, Andhra Pradesh
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                      <Calendar className="h-4 w-4" />
                      <span>Completed: April 2023</span>
                    </div>
                    <p className="text-gray-500">
                      A 15kW solar system for a local school, reducing electricity costs and providing educational
                      opportunities about renewable energy.
                    </p>
                  </CardContent>
                </Card>

                {/* Project 6 */}
                <Card>
                  <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                    <Image
                      src="/images/hospital-solar.jpg"
                      alt="Hospital solar installation"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>30kW Hospital System</CardTitle>
                    <CardDescription className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" /> Kurnool, Andhra Pradesh
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                      <Calendar className="h-4 w-4" />
                      <span>Completed: May 2023</span>
                    </div>
                    <p className="text-gray-500">
                      A 30kW solar system with battery backup for a hospital, ensuring critical equipment remains
                      operational during power outages.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Residential Tab */}
            <TabsContent value="residential" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Residential Project 1 */}
                <Card>
                  <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                    <Image
                      src="/images/residential-rooftop-solar.jpg"
                      alt="Residential solar installation"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>5kW Residential Rooftop System</CardTitle>
                    <CardDescription className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" /> Nandyal, Andhra Pradesh
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                      <Calendar className="h-4 w-4" />
                      <span>Completed: March 2023</span>
                    </div>
                    <p className="text-gray-500">
                      A 5kW grid-tied solar system installed on a residential rooftop, providing 80% of the household's
                      electricity needs.
                    </p>
                  </CardContent>
                </Card>

                {/* Residential Project 2 */}
                <Card>
                  <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                    <Image
                      src="/images/off-grid-home.jpg"
                      alt="Residential solar with battery backup"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>7kW Off-Grid Home System</CardTitle>
                    <CardDescription className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" /> Kurnool District, Andhra Pradesh
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                      <Calendar className="h-4 w-4" />
                      <span>Completed: February 2023</span>
                    </div>
                    <p className="text-gray-500">
                      A 7kW off-grid solar system with battery storage for a rural home, providing 24/7 power
                      independence from the grid.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Commercial Tab */}
            <TabsContent value="commercial" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Commercial Project 1 */}
                <Card>
                  <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                    <Image
                      src="/images/commercial-solar-building.jpg"
                      alt="Commercial solar installation"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>25kW Commercial Installation</CardTitle>
                    <CardDescription className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" /> Kurnool, Andhra Pradesh
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                      <Calendar className="h-4 w-4" />
                      <span>Completed: January 2023</span>
                    </div>
                    <p className="text-gray-500">
                      A 25kW solar system for a manufacturing facility, reducing their electricity costs by 60% and
                      providing backup power.
                    </p>
                  </CardContent>
                </Card>

                {/* Commercial Project 2 */}
                <Card>
                  <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                    <Image
                      src="/images/school-solar.jpg"
                      alt="School solar installation"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>15kW School Installation</CardTitle>
                    <CardDescription className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" /> Nandyal, Andhra Pradesh
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                      <Calendar className="h-4 w-4" />
                      <span>Completed: April 2023</span>
                    </div>
                    <p className="text-gray-500">
                      A 15kW solar system for a local school, reducing electricity costs and providing educational
                      opportunities about renewable energy.
                    </p>
                  </CardContent>
                </Card>

                {/* Commercial Project 3 */}
                <Card>
                  <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                    <Image
                      src="/images/hospital-solar.jpg"
                      alt="Hospital solar installation"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>30kW Hospital System</CardTitle>
                    <CardDescription className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" /> Kurnool, Andhra Pradesh
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                      <Calendar className="h-4 w-4" />
                      <span>Completed: May 2023</span>
                    </div>
                    <p className="text-gray-500">
                      A 30kW solar system with battery backup for a hospital, ensuring critical equipment remains
                      operational during power outages.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Agricultural Tab */}
            <TabsContent value="agricultural" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Agricultural Project 1 */}
                <Card>
                  <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                    <Image
                      src="/images/agricultural-solar-irrigation.jpg"
                      alt="Agricultural solar installation"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>10kW Solar Irrigation System</CardTitle>
                    <CardDescription className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" /> Nandyal District, Andhra Pradesh
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                      <Calendar className="h-4 w-4" />
                      <span>Completed: November 2022</span>
                    </div>
                    <p className="text-gray-500">
                      A 10kW solar-powered irrigation system for a 15-acre farm, eliminating diesel generator costs and
                      providing reliable water supply.
                    </p>
                  </CardContent>
                </Card>

                {/* Agricultural Project 2 */}
                <Card>
                  <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                    <Image
                      src="/images/cold-storage-solar.jpg"
                      alt="Cold storage solar system"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>12kW Cold Storage System</CardTitle>
                    <CardDescription className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" /> Kurnool District, Andhra Pradesh
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                      <Calendar className="h-4 w-4" />
                      <span>Completed: March 2023</span>
                    </div>
                    <p className="text-gray-500">
                      A 12kW solar system powering a cold storage facility for agricultural produce, ensuring consistent
                      temperature control.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-green-800">
                Customer Success Stories
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                Real results from our solar installations
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Case Study 1 */}
            <Card>
              <CardHeader>
                <CardTitle>90% Reduction in Electricity Bills</CardTitle>
                <CardDescription className="flex items-center gap-1">
                  <Users className="h-4 w-4" /> Residential Customer, Nandyal
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative h-48 w-full overflow-hidden rounded-lg mb-4">
                  <Image
                    src="/images/residential-solar-home.jpg"
                    alt="Residential solar installation"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-gray-500">
                  "After installing a 5kW solar system from Kohinoor Solar, our monthly electricity bill dropped from
                  ₹5,000 to just ₹500. The system has been running flawlessly for over a year now, and we couldn't be
                  happier with the results."
                </p>
                <div className="mt-4 p-4 bg-green-50 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Results:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>90% reduction in monthly electricity bills</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>ROI achieved in less than 4 years</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Reliable power during grid outages</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Case Study 2 */}
            <Card>
              <CardHeader>
                <CardTitle>Powering Business Growth</CardTitle>
                <CardDescription className="flex items-center gap-1">
                  <Building className="h-4 w-4" /> Commercial Customer, Kurnool
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative h-48 w-full overflow-hidden rounded-lg mb-4">
                  <Image
                    src="/images/commercial-solar-building.jpg"
                    alt="Commercial solar installation"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-gray-500">
                  "Our manufacturing facility was facing frequent power outages and high electricity costs. Kohinoor
                  Solar installed a 25kW system that has not only reduced our operating costs but also ensured
                  continuous production. The system paid for itself in just 3 years."
                </p>
                <div className="mt-4 p-4 bg-green-50 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Results:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>60% reduction in energy costs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Eliminated production losses due to power outages</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Enhanced green credentials for the business</span>
                    </li>
                  </ul>
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
                Ready to Start Your Solar Journey?
              </h2>
              <p className="max-w-[900px] text-green-900 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                Join our growing list of satisfied customers
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
                <Link href="/services">Explore Our Services</Link>
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
