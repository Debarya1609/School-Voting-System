"use client"

import { useEffect } from "react"

export default function NoisePattern() {
  useEffect(() => {
    // Create a noise pattern using canvas
    const canvas = document.createElement("canvas")
    const ctx = canvas.getContext("2d")

    if (!ctx) return

    // Set canvas size
    const size = 200
    canvas.width = size
    canvas.height = size

    // Create noise
    const imageData = ctx.createImageData(size, size)
    const data = imageData.data

    for (let i = 0; i < data.length; i += 4) {
      // Random grayscale value
      const value = Math.floor(Math.random() * 255)

      // Set RGBA values
      data[i] = value
      data[i + 1] = value
      data[i + 2] = value
      data[i + 3] = Math.floor(Math.random() * 20) // Low alpha for subtle effect
    }

    ctx.putImageData(imageData, 0, 0)

    // Convert canvas to data URL and set as CSS variable
    const noisePattern = canvas.toDataURL("image/png")
    document.documentElement.style.setProperty("--noise-pattern", `url(${noisePattern})`)
  }, [])

  return null
}
