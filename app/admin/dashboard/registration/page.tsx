import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RegistrationControl } from "../../../../components/registration-control"

export default function RegistrationControlPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Registration Control</h1>
        <p className="text-gray-500">Manage voter registration settings and timeframes</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Registration Status</CardTitle>
          <CardDescription>Control when voter registration is open or closed</CardDescription>
        </CardHeader>
        <CardContent>
          <RegistrationControl />
        </CardContent>
      </Card>
    </div>
  )
}
