"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Check, Clock, MapPin, Phone, Send, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import WhatsAppButton from "@/components/whatsapp-button"

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setFormSubmitted(true)
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-green-800 text-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">Contact Us</h1>
              <p className="max-w-[700px] text-gray-200 md:text-xl mx-auto">
                Get in touch with our solar experts to start your journey towards energy independence
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-green-800">Send Us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you within 24 hours with a personalized quote.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {formSubmitted ? (
                    <div className="flex flex-col items-center justify-center py-10 space-y-4 text-center">
                      <div className="rounded-full bg-green-100 p-3">
                        <Check className="h-6 w-6 text-green-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-green-800">Thank You!</h3>
                      <p className="text-gray-500 max-w-md">
                        Your message has been received. One of our solar experts will contact you within 24 hours to
                        discuss your requirements and provide a personalized quote.
                      </p>
                      <Button onClick={() => setFormSubmitted(false)} variant="outline" className="mt-4">
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="first-name">First name *</Label>
                          <Input id="first-name" placeholder="Enter your first name" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="last-name">Last name *</Label>
                          <Input id="last-name" placeholder="Enter your last name" required />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input id="email" type="email" placeholder="Enter your email address" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input id="phone" type="tel" placeholder="+91 99999 99999" required />
                      </div>
                      <div className="space-y-2">
                        <Label>I'm interested in: *</Label>
                        <RadioGroup defaultValue="residential" required>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="residential" id="residential" />
                            <Label htmlFor="residential">Residential Solar (Home)</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="commercial" id="commercial" />
                            <Label htmlFor="commercial">Commercial Solar (Business)</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="agricultural" id="agricultural" />
                            <Label htmlFor="agricultural">Agricultural Solar (Farm)</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="maintenance" id="maintenance" />
                            <Label htmlFor="maintenance">Maintenance & Support</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="other" id="other" />
                            <Label htmlFor="other">Other</Label>
                          </div>
                        </RadioGroup>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="monthly-bill">Monthly Electricity Bill (₹)</Label>
                        <Input id="monthly-bill" type="number" placeholder="e.g., 5000" min="500" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          placeholder="Please provide details about your requirements, roof area, location, and any specific questions you have"
                          className="min-h-[120px]"
                          required
                        />
                      </div>
                      <Button type="submit" className="w-full bg-green-700 hover:bg-green-800" disabled={isSubmitting}>
                        {isSubmitting ? (
                          <>Sending...</>
                        ) : (
                          <>
                            <Send className="mr-2 h-4 w-4" /> Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold tracking-tighter text-green-800 mb-4">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <h3 className="font-semibold">Our Showroom Address</h3>
                      <p className="text-gray-500">
                        Shop no.26-1-1, Chamakaluva, RS Road
                        <br />
                        Opp: Sowjanya Hero Show Room
                        <br />
                        Nandyala, Andhra Pradesh 518501
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Phone className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <h3 className="font-semibold">Phone Number</h3>
                      <p className="text-gray-500">
                        <Link href="tel:+919985690350" className="hover:text-green-600">
                          +91 99856 90350
                        </Link>
                      </p>
                      <p className="text-sm text-gray-400">Available 24/7 for emergencies</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Mail className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <h3 className="font-semibold">Email Address</h3>
                      <p className="text-gray-500">
                        <Link href="mailto:info@kohinoorsolar.com" className="hover:text-green-600">
                          info@kohinoorsolar.com
                        </Link>
                      </p>
                      <p className="text-sm text-gray-400">We respond within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <h3 className="font-semibold">Business Hours</h3>
                      <p className="text-gray-500">
                        Monday - Saturday: 9:00 AM - 7:00 PM
                        <br />
                        Sunday: 10:00 AM - 2:00 PM
                      </p>
                      <p className="text-sm text-gray-400">Emergency support available 24/7</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Embedded Map */}
              <div className="relative w-full overflow-hidden rounded-lg">
                <div className="w-full h-[300px] rounded-lg overflow-hidden bg-gray-200">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.8234567890123!2d78.4803!3d15.4781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDI4JzQxLjIiTiA3OMKwMjgnNDkuMSJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Kohinoor Enterprises Location"
                  ></iframe>
                </div>
                <div className="mt-4 text-center">
                  <Button asChild variant="outline" className="bg-white hover:bg-gray-100">
                    <Link
                      href="https://www.google.com/maps/search/?api=1&query=Shop+no.26-1-1+chamakaluva+rs+road+Nandyala+Andhra+Pradesh+518501"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MapPin className="mr-2 h-4 w-4" /> View on Google Maps
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Call to Action */}
              <Card className="bg-green-50 border-green-200">
                <CardHeader>
                  <CardTitle className="text-green-800">Visit Our Showroom</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Visit our showroom to see solar panels and equipment in person. Our experts will be happy to answer
                    all your questions and provide personalized advice for your specific needs.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Button asChild className="bg-green-700 hover:bg-green-800 text-white">
                      <Link href="tel:+919985690350">
                        <Phone className="mr-2 h-4 w-4" /> Call for Directions
                      </Link>
                    </Button>
                    <Button asChild variant="outline">
                      <Link
                        href="https://wa.me/919985690350?text=Hi, I would like to visit your showroom. Can you provide directions?"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        WhatsApp for Directions
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-green-800">
                Frequently Asked Questions
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                Find answers to common questions about solar energy and our services
              </p>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:gap-12">
            <Card>
              <CardHeader>
                <CardTitle>How much does a solar system cost?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  The cost of a solar system depends on various factors including system size, type of equipment, and
                  installation requirements. For a typical residential installation, prices can range from ₹2.5 lakhs to
                  ₹5 lakhs after government subsidies. We provide free consultations and detailed quotes based on your
                  specific needs.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>How long does installation take?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  Most residential installations can be completed in 2-3 days, while commercial projects may take 1-2
                  weeks depending on the system size. We work efficiently to minimize disruption to your home or
                  business and handle all paperwork and permits.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>What maintenance is required?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  Solar systems require minimal maintenance. We recommend cleaning the panels 2-4 times a year and
                  having a professional inspection annually. We offer comprehensive maintenance packages starting at
                  ₹2,500/year to ensure your system performs optimally throughout its lifespan.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>What happens during power outages?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  Standard grid-tied systems will shut down during power outages for safety reasons. If you want power
                  during outages, we can install hybrid systems with battery backup that provide electricity even when
                  the grid is down. We offer various battery storage options to meet your needs.
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-green-900">Ready to Go Solar?</h2>
              <p className="max-w-[900px] text-green-900 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                Contact us today for a free consultation and personalized quote. Join 500+ satisfied customers across
                Andhra Pradesh.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" className="bg-green-800 hover:bg-green-900 text-white">
                <Link href="tel:+919985690350">
                  <Phone className="mr-2 h-4 w-4" /> Call Now: +91 99856 90350
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-green-900 text-green-900 hover:bg-green-900 hover:text-white"
              >
                <Link
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }}
                >
                  Send a Message
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
