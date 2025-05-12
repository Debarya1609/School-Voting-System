import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AdminOverview } from "../../../components/admin-overview"
import { UserPlus, BarChart3, Settings, Award, Clock, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AdminDashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
        <p className="text-gray-500">Manage and monitor the school election system</p>
      </div>

      <AdminOverview />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Registration Status</CardTitle>
            <CardDescription>Current voter registration status</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold">Open</span>
              <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800">Active</span>
            </div>
            <p className="mt-2 text-sm text-gray-500">Closes in: 2 days, 5 hours</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Registered Voters</CardTitle>
            <CardDescription>Total number of registered voters</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">487</div>
            <p className="mt-2 text-sm text-gray-500">+24 in the last 24 hours</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Votes Cast</CardTitle>
            <CardDescription>Total number of votes submitted</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">312</div>
            <p className="mt-2 text-sm text-gray-500">64% of registered voters</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest actions in the system</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-blue-100 p-2">
                  <UserPlus className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium">New voter registered</p>
                  <p className="text-sm text-gray-500">Emma Thompson - Grade 10</p>
                  <p className="text-xs text-gray-400">10 minutes ago</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-full bg-green-100 p-2">
                  <BarChart3 className="h-4 w-4 text-green-600" />
                </div>
                <div>
                  <p className="font-medium">Vote cast</p>
                  <p className="text-sm text-gray-500">Anonymous - Grade 11</p>
                  <p className="text-xs text-gray-400">25 minutes ago</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-full bg-amber-100 p-2">
                  <Settings className="h-4 w-4 text-amber-600" />
                </div>
                <div>
                  <p className="font-medium">System settings updated</p>
                  <p className="text-sm text-gray-500">Admin: John Davis</p>
                  <p className="text-xs text-gray-400">1 hour ago</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common administrative tasks</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <Link href="/admin/dashboard/nominees/add">
                <Button variant="outline" className="w-full justify-start">
                  <Award className="mr-2 h-4 w-4" />
                  Add Nominee
                </Button>
              </Link>

              <Link href="/admin/dashboard/voters/add">
                <Button variant="outline" className="w-full justify-start">
                  <UserPlus className="mr-2 h-4 w-4" />
                  Add Voter
                </Button>
              </Link>

              <Link href="/admin/dashboard/registration">
                <Button variant="outline" className="w-full justify-start">
                  <Clock className="mr-2 h-4 w-4" />
                  Modify Registration
                </Button>
              </Link>

              <Link href="/admin/dashboard/results">
                <Button variant="outline" className="w-full justify-start">
                  <Eye className="mr-2 h-4 w-4" />
                  Toggle Results
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
