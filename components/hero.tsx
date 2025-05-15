import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
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
              <Button asChild size="lg">
                <Link href="/register">Register to Vote</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/nominees" className="flex items-center gap-1">
                  View Nominees <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          <img
            src="/https://scontent.fccu20-1.fna.fbcdn.net/v/t39.30808-6/373580797_6274900949281554_3047544253400664157_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=UKQG5WcQ6qYQ7kNvwEF9gn7&_nc_oc=Adm5cVr2R_6sYk96i5jGvNHKFOJ7hOSmIyu8Whqc6xydh_RbqbRUCB--Bd8jX90FroGNtF69droYLK_hfSaU1m3X&_nc_zt=23&_nc_ht=scontent.fccu20-1.fna&_nc_gid=7hQumYlV8fzCwHQ2ftorWQ&oh=00_AfKRIM9tJM3xk287oW6TW9wVJ4n6WcPeNIXKxj_upGW3bA&oe=682C04BE?height=550&width=550"
            alt="School Election"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
            width={550}
            height={550}
          />
        </div>
      </div>
    </section>
  )
}
