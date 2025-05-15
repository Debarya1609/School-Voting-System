import Link from "next/link"
import NextImage from "next/image"

export function Footer() {
  return (
    <footer className="w-full border-t bg-white py-6">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-2">
            <Link href="/" className="flex items-center gap-2">
              <NextImage src="/logo.png" alt="Narayana School Logo" width={32} height={32} className="rounded-full" />
              <span className="text-xl font-bold">SchoolVote</span>
            </Link>
            <p className="text-sm text-gray-500">
              A secure and transparent platform for school elections at Narayana School - Bally.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <Link href="/" className="text-sm text-gray-500 hover:text-blue-600">
              Home
            </Link>
            <Link href="/register" className="text-sm text-gray-500 hover:text-blue-600">
              Register
            </Link>
            <Link href="/vote" className="text-sm text-gray-500 hover:text-blue-600">
              Vote
            </Link>
            <Link href="/nominees" className="text-sm text-gray-500 hover:text-blue-600">
              Nominees
            </Link>
            <Link href="/results" className="text-sm text-gray-500 hover:text-blue-600">
              Results
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-bold">Resources</h3>
            <Link href="#" className="text-sm text-gray-500 hover:text-blue-600">
              Help Center
            </Link>
            <Link href="#" className="text-sm text-gray-500 hover:text-blue-600">
              FAQs
            </Link>
            <Link href="#" className="text-sm text-gray-500 hover:text-blue-600">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-gray-500 hover:text-blue-600">
              Terms of Service
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-bold">Contact</h3>
            <p className="text-sm text-gray-500">Narayana School - Bally</p>
            <p className="text-sm text-gray-500">Email: info@narayanaschool.edu</p>
            <p className="text-sm text-gray-500">Phone: +91 1234567890</p>
          </div>
        </div>
        <div className="mt-8 border-t pt-4">
          <p className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} SchoolVote. All rights reserved. Developed for Narayana School - Bally.
          </p>
        </div>
      </div>
    </footer>
  )
}
