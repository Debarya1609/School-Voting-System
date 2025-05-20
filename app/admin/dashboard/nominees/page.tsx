import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus } from "lucide-react"
import { NomineeTable } from "../../../../components/nominee-table"

export default function NomineeManagementPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Nominee Management</h1>
          <p className="text-gray-500">Add, edit, or remove nominees from the election</p>
        </div>
        <Link href="/admin/dashboard/nominees/add">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Nominee
          </Button>
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Current Nominees</CardTitle>
          <CardDescription>Manage all nominees across positions</CardDescription>
        </CardHeader>
        <CardContent>
          <NomineeTable />
        </CardContent>
      </Card>
    </div>
  )
}
