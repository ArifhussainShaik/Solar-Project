"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

// Sample case studies data
const caseStudies = [
  {
    id: 1,
    title: "Residential Success: 90% Reduction in Electricity Bills",
    location: "Nandyal, Andhra Pradesh",
    image: "/images/residential-solar-home.jpg",
    description:
      "A family home in Nandyal installed a 5kW solar system and saw their monthly electricity bill drop from ₹5,000 to just ₹500, resulting in a 90% reduction in energy costs.",
    results: [
      "90% reduction in monthly electricity bills",
      "System paid for itself in less than 4 years",
      "Reliable power during frequent grid outages",
    ],
    customerName: "Ramesh Kumar",
    customerType: "Homeowner",
  },
  {
    id: 2,
    title: "Commercial Success: Manufacturing Facility Cuts Costs by 60%",
    location: "Kurnool, Andhra Pradesh",
    image: "/images/commercial-solar-building.jpg",
    description:
      "A manufacturing facility in Kurnool installed a 25kW solar system that reduced their operating costs by 60% and eliminated production losses due to power outages.",
    results: [
      "60% reduction in energy costs",
      "Eliminated production losses due to power outages",
      "Enhanced green credentials for the business",
    ],
    customerName: "Suresh Reddy",
    customerType: "Business Owner",
  },
  {
    id: 3,
    title: "Agricultural Success: Solar-Powered Irrigation",
    location: "Nandyal District, Andhra Pradesh",
    image: "/images/agricultural-solar-irrigation.jpg",
    description:
      "A farmer in Nandyal district installed a 10kW solar-powered irrigation system, eliminating diesel generator costs and ensuring reliable water supply for crops.",
    results: [
      "100% elimination of diesel costs for irrigation",
      "Increased crop yield due to consistent irrigation",
      "Zero maintenance costs in the first year",
    ],
    customerName: "Venkat Reddy",
    customerType: "Farmer",
  },
]

export default function CaseStudyCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextSlide = () => {
    setActiveIndex((current) => (current === caseStudies.length - 1 ? 0 : current + 1))
  }

  const prevSlide = () => {
    setActiveIndex((current) => (current === 0 ? caseStudies.length - 1 : current - 1))
  }

  const activeCase = caseStudies[activeIndex]

  return (
    <div className="relative">
      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative h-64 md:h-auto">
              <Image
                src={activeCase.image || "/placeholder.svg"}
                alt={activeCase.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 md:p-8">
              <div className="mb-2 text-sm font-medium text-green-600">{activeCase.location}</div>
              <h3 className="mb-4 text-xl font-bold text-green-800">{activeCase.title}</h3>
              <p className="mb-6 text-gray-600">{activeCase.description}</p>

              <div className="mb-6">
                <h4 className="mb-2 font-semibold text-green-800">Results:</h4>
                <ul className="space-y-2">
                  {activeCase.results.map((result, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-600" />
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 overflow-hidden rounded-full">
                  <Image
                    src="/images/customer-testimonial-1.jpg"
                    alt={activeCase.customerName}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium text-green-800">{activeCase.customerName}</p>
                  <p className="text-sm text-gray-500">{activeCase.customerType}</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="absolute left-0 right-0 top-1/2 flex -translate-y-1/2 justify-between px-4">
        <Button
          variant="outline"
          size="icon"
          onClick={prevSlide}
          className="h-10 w-10 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white"
        >
          <ArrowLeft className="h-5 w-5" />
          <span className="sr-only">Previous case study</span>
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={nextSlide}
          className="h-10 w-10 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white"
        >
          <ArrowRight className="h-5 w-5" />
          <span className="sr-only">Next case study</span>
        </Button>
      </div>

      <div className="mt-4 flex justify-center gap-2">
        {caseStudies.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`h-2 w-8 rounded-full transition-colors ${
              index === activeIndex ? "bg-green-600" : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to case study ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
