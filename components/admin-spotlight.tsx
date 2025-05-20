import { Card, CardContent } from "@/components/ui/card"

// Mock data for administrators
const administrators = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    role: "Election Commissioner",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 2,
    name: "Mr. David Chen",
    role: "Faculty Advisor",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 3,
    name: "Ms. Maria Rodriguez",
    role: "Student Council Advisor",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 4,
    name: "Mr. James Wilson",
    role: "Technical Administrator",
    image: "/placeholder.svg?height=200&width=200",
  },
]

export function AdminSpotlight() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-600">
              Administrator Spotlight
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Meet Our Election Team</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              The dedicated administrators who ensure a fair and transparent election process
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
          {administrators.map((admin) => (
            <Card key={admin.id} className="overflow-hidden">
              <div className="aspect-square w-full overflow-hidden">
                <img
                  src={admin.image || "/placeholder.svg"}
                  alt={admin.name}
                  className="h-full w-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardContent className="p-4 text-center">
                <h3 className="font-bold">{admin.name}</h3>
                <p className="text-sm text-gray-500">{admin.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
