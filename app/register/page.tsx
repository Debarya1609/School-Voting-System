import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { RegistrationForm } from "@/components/registration-form"
import { VoterNumberRetrieval } from "@/components/voter-number-retrieval"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-8">
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Voter Registration</h1>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Register to participate in the upcoming school election
              </p>
            </div>

            <Tabs defaultValue="register" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="register">Register to Vote</TabsTrigger>
                <TabsTrigger value="retrieve">Forgot Your Voter Number?</TabsTrigger>
              </TabsList>
              <TabsContent value="register">
                <RegistrationForm />
              </TabsContent>
              <TabsContent value="retrieve">
                <VoterNumberRetrieval />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
