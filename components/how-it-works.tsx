export function HowItWorks() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">How It Works</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our voting process is simple, secure, and designed to ensure a fair election for all students.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
              <span className="text-xl font-bold">1</span>
            </div>
            <h3 className="text-xl font-bold">Register to Vote</h3>
            <p className="text-sm text-gray-500 text-center">
              Complete the registration form with your student ID and contact information to receive your unique voter
              number.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
              <span className="text-xl font-bold">2</span>
            </div>
            <h3 className="text-xl font-bold">Review Nominees</h3>
            <p className="text-sm text-gray-500 text-center">
              Browse through the profiles of all nominees to learn about their background, experience, and election
              platform.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
              <span className="text-xl font-bold">3</span>
            </div>
            <h3 className="text-xl font-bold">Cast Your Vote</h3>
            <p className="text-sm text-gray-500 text-center">
              Enter your voter number to access the secure voting portal, then select your preferred candidate for each
              position.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
