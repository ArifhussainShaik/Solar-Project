export interface ThemeColors {
  primary: string
  secondary: string
  accent: string
  background: string
  text: string
  muted: string
  border: string
  card: string
  cardForeground: string
  popover: string
  popoverForeground: string
  destructive: string
  destructiveForeground: string
  ring: string
}

export interface Theme {
  id: string
  name: string
  description: string
  colors: ThemeColors
}

export const themes: Theme[] = [
  {
    id: "solar-professional",
    name: "Solar Professional",
    description: "Electric blue and bright yellow for professional trust",
    colors: {
      primary: "#1092CF",
      secondary: "#FFE205",
      accent: "#FFFFFF",
      background: "#F8F9FA",
      text: "#2C3E50",
      muted: "#6C757D",
      border: "#DEE2E6",
      card: "#FFFFFF",
      cardForeground: "#2C3E50",
      popover: "#FFFFFF",
      popoverForeground: "#2C3E50",
      destructive: "#DC3545",
      destructiveForeground: "#FFFFFF",
      ring: "#1092CF",
    },
  },
  {
    id: "eco-green-solar",
    name: "Eco Green Solar",
    description: "Forest green and sky blue for environmental focus",
    colors: {
      primary: "#27AE60",
      secondary: "#3498DB",
      accent: "#FFFFFF",
      background: "#ECF0F1",
      text: "#2C3E50",
      muted: "#7F8C8D",
      border: "#BDC3C7",
      card: "#FFFFFF",
      cardForeground: "#2C3E50",
      popover: "#FFFFFF",
      popoverForeground: "#2C3E50",
      destructive: "#E74C3C",
      destructiveForeground: "#FFFFFF",
      ring: "#27AE60",
    },
  },
  {
    id: "bold-solar-energy",
    name: "Bold Solar Energy",
    description: "Bright yellow and charcoal for bold energy appeal",
    colors: {
      primary: "#FFE205",
      secondary: "#2C3E50",
      accent: "#FFFFFF",
      background: "#F7F7F7",
      text: "#2C3E50",
      muted: "#6C757D",
      border: "#E9ECEF",
      card: "#FFFFFF",
      cardForeground: "#2C3E50",
      popover: "#FFFFFF",
      popoverForeground: "#2C3E50",
      destructive: "#DC3545",
      destructiveForeground: "#FFFFFF",
      ring: "#FFE205",
    },
  },
  {
    id: "current-design",
    name: "Current Design",
    description: "Original green and yellow solar theme",
    colors: {
      primary: "#16A34A",
      secondary: "#EAB308",
      accent: "#FFFFFF",
      background: "#FFFFFF",
      text: "#1F2937",
      muted: "#6B7280",
      border: "#E5E7EB",
      card: "#FFFFFF",
      cardForeground: "#1F2937",
      popover: "#FFFFFF",
      popoverForeground: "#1F2937",
      destructive: "#EF4444",
      destructiveForeground: "#FFFFFF",
      ring: "#16A34A",
    },
  },
]

export const defaultTheme = themes[3] // Current Design as default
