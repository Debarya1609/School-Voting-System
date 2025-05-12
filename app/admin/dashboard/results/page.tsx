import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ResultsControl } from "../../../../components/results-control"

export default function ResultsControlPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Results Control</h1>
        <p className="text-gray-500">Manage the visibility of election results</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Results Visibility</CardTitle>
          <CardDescription>Control whether election results are publicly visible</CardDescription>
        </CardHeader>
        <CardContent>
          <ResultsControl />
        </CardContent>
      </Card>
    </div>
  )
}
