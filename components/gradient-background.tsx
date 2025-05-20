"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"

export default function GradientBackground() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const { theme } = useTheme()

  // Initialize dimensions
  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    updateDimensions()
    window.addEventListener("resize", updateDimensions)
    return () => window.removeEventListener("resize", updateDimensions)
  }, [])

  // Handle mouse movement with throttling
  useEffect(() => {
    let throttleTimeout: NodeJS.Timeout | null = null

    const handleMouseMove = (event: MouseEvent) => {
      if (throttleTimeout) return

      throttleTimeout = setTimeout(() => {
        setPosition({ x: event.clientX, y: event.clientY })
        throttleTimeout = null
      }, 16) // ~60fps
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      if (throttleTimeout) clearTimeout(throttleTimeout)
    }
  }, [])

  // Calculate normalized position (0 to 1)
  const normalizedX = dimensions.width ? position.x / dimensions.width : 0.5
  const normalizedY = dimensions.height ? position.y / dimensions.height : 0.5

  // Create the gradient background
  const lightGradient = `radial-gradient(circle at ${normalizedX * 100}% ${normalizedY * 100}%, 
    rgba(236, 246, 255, 0.8), 
    rgba(230, 230, 250, 0.8), 
    rgba(255, 240, 245, 0.8))`

  const darkGradient = `radial-gradient(circle at ${normalizedX * 100}% ${normalizedY * 100}%, 
    rgba(111, 66, 193, 0.8), 
    rgba(34, 34, 80, 0.8), 
    rgba(21, 101, 192, 0.8))`

  return (
    <div
      className="fixed inset-0 -z-10 transition-all duration-300"
      style={{
        background: theme === "dark" ? darkGradient : lightGradient,
        pointerEvents: "none",
      }}
    />
  )
}
