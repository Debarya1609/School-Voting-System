import Link from "next/link"
import NextImage from "next/image"
import { Mail, Phone, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full border-t bg-white py-8">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Logo & About Section */}
          <div className="flex flex-col gap-2">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="overflow-hidden rounded-full transition-transform duration-300 group-hover:scale-110">
                <NextImage src="/logo.png" alt="Narayana School Logo" width={32} height={32} className="rounded-full" />
              </div>
              <span className="text-xl font-bold transition-colors duration-300 group-hover:text-blue-600">
                SchoolVote
              </span>
            </Link>
            <p className="text-sm text-gray-500">
              A secure and transparent platform for school elections at Narayana School - Bally.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/register", label: "Register" },
                { href: "/vote", label: "Vote" },
                { href: "/nominees", label: "Nominees" },
                { href: "/results", label: "Results" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-gray-500 transition-colors duration-300 hover:text-blue-600 hover:translate-x-1 inline-flex items-center group"
                >
                  <span className="mr-2 opacity-0 transition-all duration-300 group-hover:opacity-100">›</span>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-bold">Contact</h3>
            <p className="text-sm text-gray-500">Narayana School - Bally</p>
            <div className="flex items-center gap-2 text-sm text-gray-500 hover:text-blue-600 transition-colors duration-300">
              <Mail className="h-4 w-4" />
              <span>info@narayanaschool.edu</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500 hover:text-blue-600 transition-colors duration-300">
              <Phone className="h-4 w-4" />
              <span>+91 1234567890</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t pt-6">
          <p className="text-center text-sm text-gray-500 flex items-center justify-center">
            © {new Date().getFullYear()} SchoolVote. All rights reserved. Made with
            <Heart className="h-4 w-4 mx-1 text-red-500 animate-pulse" />
            for Narayana School - Bally.
          </p>
        </div>
      </div>
    </footer>
  )
}
