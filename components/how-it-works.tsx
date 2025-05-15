import { ArrowRight } from "lucide-react"

export function HowItWorks() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-600">How It Works</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Simple Steps to Participate</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our voting process is designed to be straightforward and accessible to all students.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-3">
          <div className="relative flex flex-col items-center space-y-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white">
              1
            </div>
            <h3 className="text-xl font-bold">Register</h3>
            <p className="text-center text-gray-500">
              Complete the registration form with your student information to verify your eligibility.
            </p>
            <div className="absolute right-0 top-8 hidden md:block">
              <ArrowRight className="h-8 w-8 text-gray-300" />
            </div>
          </div>
          <div className="relative flex flex-col items-center space-y-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white">
              2
            </div>
            <h3 className="text-xl font-bold">Vote</h3>
            <p className="text-center text-gray-500">
              Access the secure voting portal during the election period to cast your vote for your preferred
              candidates.
            </p>
            <div className="absolute right-0 top-8 hidden md:block">
              <ArrowRight className="h-8 w-8 text-gray-300" />
            </div>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white">
              3
            </div>
            <h3 className="text-xl font-bold">View Results</h3>
            <p className="text-center text-gray-500">
              Once voting closes, check the results page to see the outcome of the election with detailed statistics.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
