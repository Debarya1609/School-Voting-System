import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "SchoolVote | Narayana School - Bally",
  description: "A secure and transparent platform for school elections",
  icons: {
    icon: "/favicon.ico",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body className="mx-auto max-w-screen-2xl">{children}</body>
    </html>
  )
}
