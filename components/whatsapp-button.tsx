"use client"

import { useState } from "react"
import Link from "next/link"
import { MessageCircle, X } from "lucide-react"

import { Button } from "@/components/ui/button"

interface WhatsAppButtonProps {
  phoneNumber: string
}

export default function WhatsAppButton({ phoneNumber }: WhatsAppButtonProps) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => setIsOpen(!isOpen)

  const formattedPhoneNumber = phoneNumber.startsWith("+") ? phoneNumber : `+${phoneNumber}`
  const whatsappUrl = `https://wa.me/${formattedPhoneNumber.replace(/\+/g, "")}`

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="absolute bottom-16 right-0 mb-2 w-72 rounded-lg bg-white p-4 shadow-lg">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-green-800">Chat with us</h3>
            <Button variant="ghost" size="icon" onClick={toggleOpen} className="h-8 w-8">
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button>
          </div>
          <p className="mb-4 text-gray-600">
            Have questions about solar energy? Chat with our experts on WhatsApp for quick assistance.
          </p>
          <Button asChild className="w-full bg-green-600 hover:bg-green-700">
            <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-4 w-4" /> Start Chat
            </Link>
          </Button>
        </div>
      )}
      <Button
        onClick={toggleOpen}
        className="h-14 w-14 rounded-full bg-green-600 hover:bg-green-700 shadow-lg"
        size="icon"
      >
        <MessageCircle className="h-6 w-6 text-white" />
        <span className="sr-only">Open WhatsApp chat</span>
      </Button>
    </div>
  )
}
