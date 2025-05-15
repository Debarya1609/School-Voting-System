"use client"

import Link from "next/link"
import NextImage from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <NextImage src="/logo.png" alt="Narayana School Logo" width={32} height={32} className="rounded-full" />
          <span className="text-xl font-bold">SchoolVote</span>
        </Link>
        <nav className="hidden md:flex md:gap-6">
          <Link href="/" className="text-sm font-medium text-gray-900 transition-colors hover:text-blue-600">
            Home
          </Link>
          <Link href="/register" className="text-sm font-medium text-gray-900 transition-colors hover:text-blue-600">
            Register
          </Link>
          <Link href="/vote" className="text-sm font-medium text-gray-900 transition-colors hover:text-blue-600">
            Vote
          </Link>
          <Link href="/nominees" className="text-sm font-medium text-gray-900 transition-colors hover:text-blue-600">
            Nominees
          </Link>
          <Link href="/results" className="text-sm font-medium text-gray-900 transition-colors hover:text-blue-600">
            Results
          </Link>
          <Link href="/admin" className="text-sm font-medium text-gray-900 transition-colors hover:text-blue-600">
            Admin
          </Link>
        </nav>
        <div className="hidden md:flex md:gap-4">
          <Button asChild variant="outline">
            <Link href="/register">Register</Link>
          </Button>
          <Button asChild>
            <Link href="/vote">Vote Now</Link>
          </Button>
        </div>
        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-gray-900 md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle menu</span>
        </button>
      </div>
      {isMenuOpen && (
        <div className="container px-4 pb-6 md:hidden md:px-6">
          <nav className="flex flex-col gap-4">
            <Link
              href="/"
              className="text-sm font-medium text-gray-900 transition-colors hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/register"
              className="text-sm font-medium text-gray-900 transition-colors hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Register
            </Link>
            <Link
              href="/vote"
              className="text-sm font-medium text-gray-900 transition-colors hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Vote
            </Link>
            <Link
              href="/nominees"
              className="text-sm font-medium text-gray-900 transition-colors hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Nominees
            </Link>
            <Link
              href="/results"
              className="text-sm font-medium text-gray-900 transition-colors hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Results
            </Link>
            <Link
              href="/admin"
              className="text-sm font-medium text-gray-900 transition-colors hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Admin
            </Link>
          </nav>
          <div className="mt-6 flex flex-col gap-4">
            <Button asChild variant="outline" className="w-full">
              <Link href="/register" onClick={() => setIsMenuOpen(false)}>
                Register
              </Link>
            </Button>
            <Button asChild className="w-full">
              <Link href="/vote" onClick={() => setIsMenuOpen(false)}>
                Vote Now
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
