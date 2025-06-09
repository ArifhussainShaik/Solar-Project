"use client"

import { useEffect, useState, useRef } from "react"

interface AnimatedCounterProps {
  end: number
  duration?: number
  prefix?: string
  suffix?: string
  decimalPlaces?: number
}

export default function AnimatedCounter({
  end,
  duration = 2000,
  prefix = "",
  suffix = "",
  decimalPlaces = 0,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const countRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    if (countRef.current) {
      observer.observe(countRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    if (!isVisible) return

    let startTime: number | null = null
    const startValue = 0
    const endValue = end

    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const currentCount = Math.floor(progress * (endValue - startValue) + startValue)

      setCount(currentCount)

      if (progress < 1) {
        requestAnimationFrame(animateCount)
      }
    }

    requestAnimationFrame(animateCount)
  }, [end, duration, isVisible])

  const formattedCount = count.toLocaleString(undefined, {
    minimumFractionDigits: decimalPlaces,
    maximumFractionDigits: decimalPlaces,
  })

  return (
    <div ref={countRef} className="font-bold">
      {prefix}
      {formattedCount}
      {suffix}
    </div>
  )
}
