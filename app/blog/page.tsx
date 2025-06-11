import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, Clock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import WhatsAppButton from "@/components/whatsapp-button"

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-green-800 text-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Our Solar Blog
              </h1>
              <p className="max-w-[700px] text-gray-200 md:text-xl mx-auto">
                Stay updated with the latest news, tips, and insights about solar energy
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="w-full py-6 md:py-12 bg-white border-b">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <h2 className="text-2xl font-bold tracking-tighter text-green-800">Latest Articles</h2>
            <div className="w-full md:w-auto flex items-center gap-2">
              <Input type="search" placeholder="Search articles..." className="w-full md:w-[300px]" />
              <Button className="bg-green-700 hover:bg-green-800">Search</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
            <div className="relative h-[300px] md:h-[400px] lg:h-full">
              <Image
                src="/images/Future-blog.jpg"
                alt="Solar panels on a rooftop"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Calendar className="h-4 w-4" />
                  <span>December 15, 2024</span>
                  <span className="mx-2">•</span>
                  <Clock className="h-4 w-4" />
                  <span>5 min read</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-green-800">
                  The Future of Solar Energy in Andhra Pradesh
                </h2>
                <p className="text-gray-500 md:text-lg">
                  Andhra Pradesh is emerging as a solar powerhouse in India. With abundant sunshine and supportive
                  government policies, the state is witnessing a solar revolution. In this article, we explore the
                  future of solar energy in Andhra Pradesh and how it's transforming the energy landscape.
                </p>
              </div>
              <div>
                <Button asChild className="bg-green-700 hover:bg-green-800">
                  <Link href="/blog/future-of-solar-energy-in-andhra-pradesh">
                    Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Blog Post 1 */}
            <Card>
              <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                <Image
                  src="/images/blog-panel-types.jpg"
                  alt="Solar panels installation"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                  <Calendar className="h-4 w-4" />
                  <span>November 28, 2024</span>
                  <span className="mx-2">•</span>
                  <Clock className="h-4 w-4" />
                  <span>4 min read</span>
                </div>
                <CardTitle>How to Choose the Right Solar Panels for Your Home</CardTitle>
                <CardDescription>
                  A comprehensive guide to selecting the best solar panels based on efficiency, durability, and budget
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  Selecting the right solar panels for your home can be overwhelming with so many options available.
                  This guide breaks down the key factors to consider, including panel types, efficiency ratings,
                  warranties, and more.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/blog/choose-right-solar-panels">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Blog Post 2 */}
            <Card>
              <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                <Image
                  src="/images/Solar-battery.jpg"
                  alt="Solar battery storage"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                  <Calendar className="h-4 w-4" />
                  <span>November 10, 2024</span>
                  <span className="mx-2">•</span>
                  <Clock className="h-4 w-4" />
                  <span>6 min read</span>
                </div>
                <CardTitle>The Benefits of Solar Battery Storage Systems</CardTitle>
                <CardDescription>
                  Discover how battery storage can maximize your solar investment and provide energy security
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  Solar battery storage systems are becoming increasingly popular as prices drop and technology
                  improves. Learn how adding battery storage to your solar system can provide backup power during
                  outages and help you maximize self-consumption.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/blog/solar-battery-storage-benefits">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Blog Post 3 */}
            <Card>
              <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                <Image
                  src="/images/blog-maintenance-cleaning.jpg"
                  alt="Solar panel maintenance"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                  <Calendar className="h-4 w-4" />
                  <span>October 22, 2024</span>
                  <span className="mx-2">•</span>
                  <Clock className="h-4 w-4" />
                  <span>3 min read</span>
                </div>
                <CardTitle>Maintaining Your Solar Panels: Essential Tips</CardTitle>
                <CardDescription>
                  Simple maintenance practices to ensure optimal performance of your solar system
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  Proper maintenance is key to ensuring your solar panels operate at peak efficiency for decades. This
                  article covers essential maintenance tips, including cleaning methods, inspection schedules, and when
                  to call a professional.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/blog/solar-panel-maintenance">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="w-full py-12 md:py-24 bg-green-800 text-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Subscribe to Our Newsletter</h2>
                <p className="text-gray-200 md:text-lg">
                  Stay updated with the latest solar news, tips, and exclusive offers. We promise not to spam your
                  inbox!
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <Input type="email" placeholder="Enter your email" className="bg-white text-gray-900" />
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Button */}
      <WhatsAppButton phoneNumber="919985690350" />
    </div>
  )
}
