import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { VotingPortal } from "@/components/voting-portal"

export default function VotePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-5xl space-y-8">
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Secure Voting Portal</h1>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Cast your vote securely for the candidates of your choice
              </p>
            </div>
            <VotingPortal />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
