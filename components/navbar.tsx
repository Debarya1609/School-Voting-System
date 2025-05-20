"use client"

import Link from "next/link"
import NextImage from "next/image"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeLink, setActiveLink] = useState("/")

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    // Set active link based on current path
    setActiveLink(window.location.pathname)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-white border-b"
      }`}
    >
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="overflow-hidden rounded-full transition-transform duration-300 group-hover:scale-110">
            <NextImage src="/logo.png" alt="Narayana School Logo" width={32} height={32} className="rounded-full" />
          </div>
          <span className="text-xl font-bold transition-colors duration-300 group-hover:text-blue-600">SchoolVote</span>
        </Link>
        <nav className="hidden md:flex md:gap-8">
          {[
            { href: "/", label: "Home" },
            { href: "/register", label: "Register" },
            { href: "/vote", label: "Vote" },
            { href: "/nominees", label: "Nominees" },
            { href: "/results", label: "Results" },
            { href: "/admin", label: "Admin" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link text-sm font-medium ${
                activeLink === link.href ? "text-blue-600" : "text-gray-900 hover:text-blue-600"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex md:gap-4">
          <Button asChild variant="outline" className="hover-lift">
            <Link href="/register">Register</Link>
          </Button>
          <Button asChild className="button-primary">
            <Link href="/vote">Vote Now</Link>
          </Button>
        </div>
        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-gray-900 transition-colors hover:bg-gray-100 md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle menu</span>
        </button>
      </div>
      {isMenuOpen && (
        <div className="container animate-fade-in px-4 pb-6 md:hidden md:px-6">
          <nav className="flex flex-col gap-4">
            {[
              { href: "/", label: "Home" },
              { href: "/register", label: "Register" },
              { href: "/vote", label: "Vote" },
              { href: "/nominees", label: "Nominees" },
              { href: "/results", label: "Results" },
              { href: "/admin", label: "Admin" },
            ].map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-all duration-300 ${
                  activeLink === link.href ? "text-blue-600" : "text-gray-900 hover:text-blue-600"
                }`}
                style={{ animationDelay: `${index * 0.05}s` }}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-6 flex flex-col gap-4">
            <Button asChild variant="outline" className="w-full hover-lift">
              <Link href="/register" onClick={() => setIsMenuOpen(false)}>
                Register
              </Link>
            </Button>
            <Button asChild className="w-full button-primary">
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
