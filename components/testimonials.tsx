import { Quote } from "lucide-react"

export function Testimonials() {
  return (
    <section className="w-full bg-gray-50 py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-600">Testimonials</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Students Say</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hear from students who have used our platform for school elections.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col justify-between rounded-lg border bg-white p-6 shadow-sm">
            <div className="space-y-4">
              <Quote className="h-6 w-6 text-blue-600" />
              <p className="text-gray-500">
                "The voting process was so easy and secure. I felt confident that my vote was counted correctly."
              </p>
            </div>
            <div className="mt-6 flex items-center gap-4">
              <img
                src="/placeholder.svg?height=40&width=40"
                alt="Student"
                className="rounded-full"
                width={40}
                height={40}
              />
              <div>
                <p className="font-medium">Emily Johnson</p>
                <p className="text-sm text-gray-500">Senior, Class President</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between rounded-lg border bg-white p-6 shadow-sm">
            <div className="space-y-4">
              <Quote className="h-6 w-6 text-blue-600" />
              <p className="text-gray-500">
                "I loved being able to read about all the nominees before voting. It helped me make an informed
                decision."
              </p>
            </div>
            <div className="mt-6 flex items-center gap-4">
              <img
                src="/placeholder.svg?height=40&width=40"
                alt="Student"
                className="rounded-full"
                width={40}
                height={40}
              />
              <div>
                <p className="font-medium">Michael Chen</p>
                <p className="text-sm text-gray-500">Junior, Student Council</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between rounded-lg border bg-white p-6 shadow-sm">
            <div className="space-y-4">
              <Quote className="h-6 w-6 text-blue-600" />
              <p className="text-gray-500">
                "As a nominee, I appreciated how fairly the election was run. The results were clear and transparent."
              </p>
            </div>
            <div className="mt-6 flex items-center gap-4">
              <img
                src="/placeholder.svg?height=40&width=40"
                alt="Student"
                className="rounded-full"
                width={40}
                height={40}
              />
              <div>
                <p className="font-medium">Sophia Martinez</p>
                <p className="text-sm text-gray-500">Sophomore, Treasurer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
