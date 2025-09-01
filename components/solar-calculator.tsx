"use client"

import { useState } from "react"
import { Calculator, Info } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Slider } from "@/components/ui/slider"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import { SOLAR_CALC } from "@/lib/constants"

interface SolarCalculatorProps {
  location?: string
}

export default function SolarCalculator({ location = "Andhra Pradesh" }: SolarCalculatorProps) {
  const [monthlyBill, setMonthlyBill] = useState(5000)
  const [systemType, setSystemType] = useState("grid-tied")
  const [selectedLocation, setSelectedLocation] = useState("Nandyal")
  const [calculationDone, setCalculationDone] = useState(false)

  // Calculation results
  const [recommendedSize, setRecommendedSize] = useState(0)
  const [estimatedCost, setEstimatedCost] = useState(0)
  const [monthlySavings, setMonthlySavings] = useState(0)
  const [annualSavings, setAnnualSavings] = useState(0)
  const [paybackPeriod, setPaybackPeriod] = useState(0)
  const [co2Reduction, setCo2Reduction] = useState(0)

  const handleCalculate = () => {
    // Estimate system size based on monthly bill
    const avgKwhPerMonth = monthlyBill / SOLAR_CALC.avgKwhPerRupee
    const estimatedSystemSizeKw = avgKwhPerMonth / SOLAR_CALC.avgKwhPerMonthPerKw
    const recommendedSizeKw = estimatedSystemSizeKw

    // Cost calculation using constants
    const costPerWatt = SOLAR_CALC.costPerWatt[systemType as keyof typeof SOLAR_CALC.costPerWatt] || SOLAR_CALC.costPerWatt.gridTied

    // Location-based adjustments
    const locationMultiplier = SOLAR_CALC.locationMultipliers[selectedLocation as keyof typeof SOLAR_CALC.locationMultipliers] || 1.0

    const totalCost = recommendedSizeKw * 1000 * costPerWatt

    // Savings calculation with location adjustment
    const monthlyKwhGeneration = recommendedSizeKw * SOLAR_CALC.avgKwhPerMonthPerKw * locationMultiplier
    const monthlySavingsAmount = monthlyKwhGeneration * SOLAR_CALC.avgKwhPerRupee
    const annualSavingsAmount = monthlySavingsAmount * 12

    // Payback period
    const paybackYears = totalCost / annualSavingsAmount

    // CO2 reduction
    const co2ReductionKg = monthlyKwhGeneration * SOLAR_CALC.co2ReductionPerKwh * 12

    // Update state with calculated values
    setRecommendedSize(Number.parseFloat(recommendedSizeKw.toFixed(2)))
    setEstimatedCost(Math.round(totalCost))
    setMonthlySavings(Math.round(monthlySavingsAmount))
    setAnnualSavings(Math.round(annualSavingsAmount))
    setPaybackPeriod(Number.parseFloat(paybackYears.toFixed(1)))
    setCo2Reduction(Math.round(co2ReductionKg))

    setCalculationDone(true)
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-green-800">
          <Calculator className="h-5 w-5" />
          Solar Investment Calculator
          {selectedLocation && ` for ${selectedLocation}`}
        </CardTitle>
        <CardDescription>Estimate your solar system size, cost, and savings based on your energy usage</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="monthly-bill">Monthly Electricity Bill (₹)</Label>
            <span className="text-sm font-medium">₹{monthlyBill.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-2">
            <Input
              id="monthly-bill"
              type="number"
              value={monthlyBill}
              onChange={(e) => setMonthlyBill(Number.parseInt(e.target.value) || 0)}
              className="w-full"
              min={500}
              max={50000}
            />
          </div>
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>₹2,000</span>
            <span>₹5,000</span>
            <span>₹10,000+</span>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="location">Location</Label>
          <Select value={selectedLocation} onValueChange={setSelectedLocation}>
            <SelectTrigger>
              <SelectValue placeholder="Select location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Nandyal">Nandyal</SelectItem>
              <SelectItem value="Kurnool">Kurnool</SelectItem>
              <SelectItem value="Andhra Pradesh">Other areas in Andhra Pradesh</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="system-type">System Type</Label>
          <RadioGroup
            id="system-type"
            value={systemType}
            onValueChange={setSystemType}
            className="flex flex-col space-y-1"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="grid-tied" id="grid-tied" />
              <Label htmlFor="grid-tied" className="flex items-center gap-1">
                Grid-Tied
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info className="h-4 w-4 text-gray-400" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="max-w-xs">
                        Connected to the utility grid. No battery backup. Most affordable option.
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="hybrid" id="hybrid" />
              <Label htmlFor="hybrid" className="flex items-center gap-1">
                Hybrid
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info className="h-4 w-4 text-gray-400" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="max-w-xs">
                        Connected to the grid with battery backup for power outages. Mid-range cost.
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="off-grid" id="off-grid" />
              <Label htmlFor="off-grid" className="flex items-center gap-1">
                Off-Grid
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info className="h-4 w-4 text-gray-400" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="max-w-xs">
                        Completely independent from the utility grid. Includes battery storage. Most expensive option.
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Label>
            </div>
          </RadioGroup>
        </div>

        <Button onClick={handleCalculate} className="w-full bg-green-700 hover:bg-green-800">
          Calculate Savings
        </Button>

        {calculationDone && (
          <div className="mt-6 rounded-lg bg-green-50 p-4">
            <h3 className="mb-4 text-lg font-semibold text-green-800">Your Solar Estimate</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <p className="text-sm text-gray-500">Recommended System Size</p>
                <p className="text-xl font-bold text-green-800">{recommendedSize} kW</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Estimated Cost</p>
                <p className="text-xl font-bold text-green-800">₹{estimatedCost.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Monthly Savings</p>
                <p className="text-xl font-bold text-green-800">₹{monthlySavings.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Annual Savings</p>
                <p className="text-xl font-bold text-green-800">₹{annualSavings.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Payback Period</p>
                <p className="text-xl font-bold text-green-800">{paybackPeriod} years</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">CO₂ Reduction</p>
                <p className="text-xl font-bold text-green-800">{co2Reduction} kg/year</p>
              </div>
            </div>
            <div className="mt-6">
              <Button asChild className="w-full bg-green-700 hover:bg-green-800">
                <Link href={`/contact?source=calculator&system_size=${recommendedSize}&estimated_cost=${estimatedCost}`}>
                  Get Detailed Quote
                </Link>
              </Button>
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-center border-t px-6 py-4">
        <p className="text-center text-sm text-gray-500">
          This is an estimate based on average solar production in {selectedLocation}. Actual results may vary based on
          specific site conditions.
        </p>
      </CardFooter>
    </Card>
  )
}
