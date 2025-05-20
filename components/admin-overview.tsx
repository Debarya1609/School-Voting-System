"use client"

import { Card, CardContent } from "@/components/ui/card"
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart"
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, Cell } from "recharts"

// Mock data for the overview chart
const votingData = [
  { name: "Grade 9", registered: 120, voted: 78 },
  { name: "Grade 10", registered: 135, voted: 92 },
  { name: "Grade 11", registered: 110, voted: 85 },
  { name: "Grade 12", registered: 122, voted: 57 },
]

// Colors for the chart
const chartColors = ["#2563eb", "#60a5fa"]

export function AdminOverview() {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="mb-4">
          <h3 className="text-lg font-medium">Voting Overview</h3>
          <p className="text-sm text-gray-500">Registration and voting statistics by grade</p>
        </div>

        <div className="h-80">
          <ChartContainer
            config={{
              registered: {
                label: "Registered Voters",
                color: "hsl(var(--chart-1))",
              },
              voted: {
                label: "Votes Cast",
                color: "hsl(var(--chart-2))",
              },
            }}
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={votingData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip content={<ChartTooltipContent />} />
                <Legend />
                <Bar dataKey="registered" name="Registered Voters" fill="var(--color-registered)">
                  {votingData.map((_, index) => (
                    <Cell key={`cell-registered-${index}`} fill={chartColors[0]} />
                  ))}
                </Bar>
                <Bar dataKey="voted" name="Votes Cast" fill="var(--color-voted)">
                  {votingData.map((_, index) => (
                    <Cell key={`cell-voted-${index}`} fill={chartColors[1]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  )
}
