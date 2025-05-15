import NextImage from "next/image"

export function Testimonials() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Students Say</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hear from students who have used our platform for their school elections.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col justify-between rounded-lg border p-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <NextImage
                  src="/placeholder.svg?height=40&width=40"
                  alt="Student"
                  className="rounded-full"
                  width={40}
                  height={40}
                />
                <div>
                  <h3 className="text-lg font-bold">Rahul Sharma</h3>
                  <p className="text-sm text-gray-500">Class 12 Student</p>
                </div>
              </div>
              <p className="text-gray-500">
                "The voting process was so easy and secure. I appreciated being able to learn about each candidate
                before making my decision."
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between rounded-lg border p-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <NextImage
                  src="/placeholder.svg?height=40&width=40"
                  alt="Student"
                  className="rounded-full"
                  width={40}
                  height={40}
                />
                <div>
                  <h3 className="text-lg font-bold">Priya Patel</h3>
                  <p className="text-sm text-gray-500">Class 11 Student</p>
                </div>
              </div>
              <p className="text-gray-500">
                "I was able to vote quickly between classes. The platform was intuitive and I loved seeing the results
                update in real-time."
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between rounded-lg border p-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <NextImage
                  src="/placeholder.svg?height=40&width=40"
                  alt="Student"
                  className="rounded-full"
                  width={40}
                  height={40}
                />
                <div>
                  <h3 className="text-lg font-bold">Arjun Singh</h3>
                  <p className="text-sm text-gray-500">Class 10 Student</p>
                </div>
              </div>
              <p className="text-gray-500">
                "As a first-time voter, I found the process straightforward. The nominee profiles helped me make an
                informed choice."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
