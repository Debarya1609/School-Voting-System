import { Check, ShieldCheck, Users, BarChart3, Clock } from "lucide-react"

export function Features() {
  return (
    <section className="w-full bg-gray-50 py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-600">Features</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Everything You Need for School Elections
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our platform provides a comprehensive solution for managing school elections with security, transparency,
              and ease of use.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center space-y-2 rounded-lg border bg-white p-6 shadow-sm">
            <div className="rounded-full bg-blue-100 p-3">
              <ShieldCheck className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold">Secure Voting</h3>
            <p className="text-center text-sm text-gray-500">
              Our platform ensures that each vote is secure, private, and counted accurately.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border bg-white p-6 shadow-sm">
            <div className="rounded-full bg-blue-100 p-3">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold">Easy Registration</h3>
            <p className="text-center text-sm text-gray-500">
              Simple registration process that verifies eligibility and prevents duplicate voting.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border bg-white p-6 shadow-sm">
            <div className="rounded-full bg-blue-100 p-3">
              <BarChart3 className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold">Real-time Results</h3>
            <p className="text-center text-sm text-gray-500">
              View election results with detailed charts and statistics as soon as voting closes.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border bg-white p-6 shadow-sm">
            <div className="rounded-full bg-blue-100 p-3">
              <Check className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold">Nominee Profiles</h3>
            <p className="text-center text-sm text-gray-500">
              Detailed profiles of all nominees to help voters make informed decisions.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border bg-white p-6 shadow-sm">
            <div className="rounded-full bg-blue-100 p-3">
              <Clock className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold">Flexible Voting Period</h3>
            <p className="text-center text-sm text-gray-500">
              Set custom voting periods to accommodate all students' schedules.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border bg-white p-6 shadow-sm">
            <div className="rounded-full bg-blue-100 p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 text-blue-600"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
              </svg>
            </div>
            <h3 className="text-xl font-bold">Data Protection</h3>
            <p className="text-center text-sm text-gray-500">
              All voter information and election data is protected with industry-standard security.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
