import Link from "next/link"
import { Facebook, Twitter, Instagram, Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="container px-4 py-12 md:px-6 md:py-16 lg:py-20">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.png" alt="Narayana School Logo" width={32} height={32} className="rounded-full" />
              <span className="text-xl font-bold">SchoolVote</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-gray-500">
              A secure and transparent platform for school elections, empowering students to make their voices heard.
            </p>
            <div className="mt-6 flex gap-4">
              <Link href="#" className="text-gray-500 hover:text-blue-600">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-blue-600">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-blue-600">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-500 hover:text-blue-600">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/register" className="text-gray-500 hover:text-blue-600">
                  Register
                </Link>
              </li>
              <li>
                <Link href="/vote" className="text-gray-500 hover:text-blue-600">
                  Vote
                </Link>
              </li>
              <li>
                <Link href="/nominees" className="text-gray-500 hover:text-blue-600">
                  Nominees
                </Link>
              </li>
              <li>
                <Link href="/results" className="text-gray-500 hover:text-blue-600">
                  Results
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium">Resources</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="#" className="text-gray-500 hover:text-blue-600">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-blue-600">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-blue-600">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-blue-600">
                  Help Center
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium">Contact</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="flex items-center gap-2 text-gray-500">
                <Mail className="h-4 w-4" />
                <span>support@schoolvote.edu</span>
              </li>
              <li className="flex items-center gap-2 text-gray-500">
                <Phone className="h-4 w-4" />
                <span>(123) 456-7890</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-6">
          <p className="text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} SchoolVote. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
