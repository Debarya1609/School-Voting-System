import Link from "next/link"
import NextImage from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4 animate-slide-up">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Your Voice Matters in School Elections
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl">
                A secure, transparent, and easy-to-use platform for school elections. Register, vote, and see results
                all in one place.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" className="button-primary group">
                <Link href="/register">Register to Vote</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="hover-lift group">
                <Link href="/nominees" className="flex items-center gap-1">
                  View Nominees
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-100 rounded-full opacity-50 blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-200 rounded-full opacity-50 blur-3xl"></div>
            <NextImage
              src="/logo.png"
              alt="Narayana School Logo"
              width={400}
              height={400}
              className="mx-auto p-8 sm:w-full lg:order-last animate-pulse-slow"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
