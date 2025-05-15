import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CallToAction() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Make Your Voice Heard?</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Join your fellow students in shaping the future of your school. Register now to participate in the
              upcoming election.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button asChild size="lg">
              <Link href="/register">Register to Vote</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/nominees">Learn About Nominees</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
