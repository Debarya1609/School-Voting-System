import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ResultsDisplay } from "@/components/results-display"

export default function ResultsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-5xl space-y-8">
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Election Results</h1>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                View the final results of the school election
              </p>
            </div>
            <ResultsDisplay />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
