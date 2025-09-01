// Company Information
export const COMPANY = {
  name: "Kohinoor Enterprises",
  tagline: "(The Solar Hub)",
  phone: "+919985690350",
  whatsappNumber: "919985690350",
  email: "info@kohinoorsolar.com",
  website: "https://kohinoorsolar.com",
  address: {
    street: "Shop no.26-1-1, Chamakaluva, RS Road",
    landmark: "Opp: Sowjanya Hero Show Room",
    city: "Nandyal",
    state: "Andhra Pradesh",
    pincode: "518501",
    coordinates: {
      lat: 15.482116,
      lng: 78.466344
    }
  }
} as const

// Business Hours
export const BUSINESS_HOURS = {
  weekdays: {
    open: "09:00",
    close: "19:00",
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  },
  sunday: {
    open: "10:00",
    close: "14:00"
  }
} as const

// Solar Calculator Constants
export const SOLAR_CALC = {
  costPerWatt: {
    gridTied: 60,
    hybrid: 75,
    offGrid: 90
  },
  avgKwhPerRupee: 8,
  avgKwhPerMonthPerKw: 120,
  co2ReductionPerKwh: 0.82,
  locationMultipliers: {
    Nandyal: 1.05,
    Kurnool: 1.03,
    "Andhra Pradesh": 1.0
  }
} as const

// Navigation Links
export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
] as const

// Social Media Links
export const SOCIAL_LINKS = {
  whatsapp: `https://wa.me/${COMPANY.whatsappNumber}`,
  googleMaps: "https://maps.app.goo.gl/zYB62xYcLtNChixbA"
} as const

// Analytics
export const ANALYTICS = {
  googleAnalyticsId: "G-WN498XD271"
} as const
