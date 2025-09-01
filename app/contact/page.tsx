"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { MapPin, Phone, Mail, Clock, CheckCircle, AlertCircle, Send } from "lucide-react"
import ContactForm from "@/components/contact-form"
import { COMPANY } from "@/lib/constants"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 md:px-6 bg-gradient-to-r from-green-700 to-green-800 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get Your Free Solar Consultation
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-green-100">
            Ready to cut your electricity bills by 95%? Let's discuss your solar needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2">
              Free Site Survey
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2">
              Custom Quote
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2">
              24/7 Support
            </Badge>
          </div>
        </div>
      </section>

      <div className="container mx-auto max-w-7xl px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg border-0">
              <CardHeader className="bg-gradient-to-r from-green-50 to-blue-50 rounded-t-lg">
                <CardTitle className="text-2xl text-gray-900">Send us a Message</CardTitle>
                <CardDescription className="text-gray-600">
                  Fill out the form below and we'll get back to you within 24 hours with a personalized solar solution.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <ContactForm />
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details Card */}
            <Card className="shadow-lg border-0">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-green-50 rounded-t-lg">
                <CardTitle className="text-xl text-gray-900">Contact Information</CardTitle>
                <CardDescription className="text-gray-600">
                  Get in touch with our solar experts
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <MapPin className="h-6 w-6 text-green-600 mt-1" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {COMPANY.address.street}<br />
                      {COMPANY.address.city}, {COMPANY.address.state}<br />
                      {COMPANY.address.pincode}
                    </p>
                  </div>
                </div>

                <Separator />

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Phone className="h-6 w-6 text-green-600 mt-1" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <a 
                      href={`tel:${COMPANY.phone}`}
                      className="text-green-600 hover:text-green-700 font-medium transition-colors"
                    >
                      {COMPANY.phone}
                    </a>
                  </div>
                </div>

                <Separator />

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Mail className="h-6 w-6 text-green-600 mt-1" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <a 
                      href={`mailto:${COMPANY.email}`}
                      className="text-green-600 hover:text-green-700 font-medium transition-colors"
                    >
                      {COMPANY.email}
                    </a>
                  </div>
                </div>

                <Separator />

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Clock className="h-6 w-6 text-green-600 mt-1" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Business Hours</h3>
                    <div className="space-y-1 text-sm text-gray-600">
                      <div className="flex justify-between">
                        <span>Monday - Saturday:</span>
                        <span className="font-medium">9:00 AM - 7:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday:</span>
                        <span className="font-medium">10:00 AM - 2:00 PM</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Contact Card */}
            <Card className="shadow-lg border-0 bg-gradient-to-br from-green-700 to-green-800 text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Need Immediate Assistance?</h3>
                <p className="text-green-100 mb-6">
                  Call us now for urgent solar inquiries or emergency support.
                </p>
                <Button 
                  asChild
                  variant="secondary" 
                  className="w-full bg-white text-green-800 hover:bg-green-50"
                >
                  <a href={`tel:${COMPANY.phone}`}>
                    <Phone className="mr-2 h-4 w-4" />
                    Call Now: {COMPANY.phone}
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Service Areas Card */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-lg text-gray-900">Service Areas</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="text-gray-600">• Nandyal</div>
                  <div className="text-gray-600">• Kurnool</div>
                  <div className="text-gray-600">• Kadapa</div>
                  <div className="text-gray-600">• Anantapur</div>
                  <div className="text-gray-600">• Bellary</div>
                  <div className="text-gray-600">• Raichur</div>
                </div>
                <p className="text-xs text-gray-500 mt-4">
                  * We serve all of Andhra Pradesh and surrounding areas
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Visit Our Office
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Located in the heart of Nandyal, we're easily accessible for consultations and support.
            </p>
          </div>
          
          <Card className="shadow-lg border-0 overflow-hidden">
            <div className="w-full h-[450px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9121.96046748597!2d78.471217!3d15.482199!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb5b3a0cba350eb%3A0x6d5cfea3bdca9f15!2sKOHINOOR%20ENTERPRISES!5e1!3m2!1sen!2sin!4v1756704624371!5m2!1sen!2sin" 
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Kohinoor Enterprises Location"
              />
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-700 to-green-800 text-white">
        <div className="container mx-auto max-w-4xl px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Go Solar?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join 500+ satisfied customers who have already made the switch to clean, affordable solar energy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg" 
              variant="secondary"
              className="bg-white text-green-800 hover:bg-green-50"
            >
              <a href={`tel:${COMPANY.phone}`}>
                <Phone className="mr-2 h-5 w-5" />
                Call for Free Quote
              </a>
            </Button>
            <Button 
              asChild
              size="lg" 
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-green-800"
            >
              <a href={`mailto:${COMPANY.email}`}>
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
