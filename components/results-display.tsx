"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Trophy, Medal } from "lucide-react"
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend, Cell } from "recharts"

// Mock data for election results
const results = [
  {
    id: "president",
    title: "President",
    totalVotes: 487,
    nominees: [
      {
        id: "alex-johnson",
        name: "Alex Johnson",
        grade: "12",
        image: "/placeholder.svg?height=100&width=100",
        votes: 203,
        percentage: 41.7,
        isWinner: true,
      },
      {
        id: "jamie-smith",
        name: "Jamie Smith",
        grade: "12",
        image: "/placeholder.svg?height=100&width=100",
        votes: 187,
        percentage: 38.4,
        isWinner: false,
      },
      {
        id: "taylor-brown",
        name: "Taylor Brown",
        grade: "11",
        image: "/placeholder.svg?height=100&width=100",
        votes: 97,
        percentage: 19.9,
        isWinner: false,
      },
    ],
  },
  {
    id: "vice-president",
    title: "Vice President",
    totalVotes: 462,
    nominees: [
      {
        id: "morgan-lee",
        name: "Morgan Lee",
        grade: "11",
        image: "/placeholder.svg?height=100&width=100",
        votes: 241,
        percentage: 52.2,
        isWinner: true,
      },
      {
        id: "jordan-patel",
        name: "Jordan Patel",
        grade: "12",
        image: "/placeholder.svg?height=100&width=100",
        votes: 221,
        percentage: 47.8,
        isWinner: false,
      },
    ],
  },
  {
    id: "secretary",
    title: "Secretary",
    totalVotes: 455,
    nominees: [
      {
        id: "casey-wilson",
        name: "Casey Wilson",
        grade: "10",
        image: "/placeholder.svg?height=100&width=100",
        votes: 143,
        percentage: 31.4,
        isWinner: false,
      },
      {
        id: "riley-garcia",
        name: "Riley Garcia",
        grade: "11",
        image: "/placeholder.svg?height=100&width=100",
        votes: 178,
        percentage: 39.1,
        isWinner: true,
      },
      {
        id: "avery-martinez",
        name: "Avery Martinez",
        grade: "10",
        image: "/placeholder.svg?height=100&width=100",
        votes: 134,
        percentage: 29.5,
        isWinner: false,
      },
    ],
  },
  {
    id: "treasurer",
    title: "Treasurer",
    totalVotes: 448,
    nominees: [
      {
        id: "quinn-thompson",
        name: "Quinn Thompson",
        grade: "11",
        image: "/placeholder.svg?height=100&width=100",
        votes: 256,
        percentage: 57.1,
        isWinner: true,
      },
      {
        id: "reese-nguyen",
        name: "Reese Nguyen",
        grade: "12",
        image: "/placeholder.svg?height=100&width=100",
        votes: 192,
        percentage: 42.9,
        isWinner: false,
      },
    ],
  },
]

// Participation data
const participationData = [
  { grade: "Grade 9", students: 320, voters: 276, participation: 86.3 },
  { grade: "Grade 10", students: 305, voters: 248, participation: 81.3 },
  { grade: "Grade 11", students: 298, voters: 267, participation: 89.6 },
  { grade: "Grade 12", students: 312, voters: 289, participation: 92.6 },
]

// Colors for charts
const chartColors = ["#2563eb", "#3b82f6", "#60a5fa", "#93c5fd"]

export function ResultsDisplay() {
  const [activeTab, setActiveTab] = useState(results[0].id)

  // Format data for the current position's chart
  const getChartData = (positionId) => {
    const position = results.find((p) => p.id === positionId)
    return position.nominees.map((nominee) => ({
      name: nominee.name,
      votes: nominee.votes,
      percentage: nominee.percentage,
    }))
  }

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Election Winners</CardTitle>
          <CardDescription>Congratulations to all the elected student council members!</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {results.map((position) => {
              const winner = position.nominees.find((n) => n.isWinner)
              return (
                <Card key={position.id} className="overflow-hidden">
                  <div className="bg-blue-600 p-2 text-center text-white">
                    <h3 className="font-medium">{position.title}</h3>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <img
                          src={winner.image || "/placeholder.svg"}
                          alt={winner.name}
                          className="h-16 w-16 rounded-full object-cover"
                        />
                        <Trophy className="absolute -right-1 -top-1 h-6 w-6 text-yellow-500" />
                      </div>
                      <div>
                        <h4 className="font-medium">{winner.name}</h4>
                        <p className="text-sm text-gray-500">Grade {winner.grade}</p>
                        <div className="mt-1 flex items-center gap-2">
                          <Badge variant="outline">{winner.votes} votes</Badge>
                          <Badge className="bg-blue-100 text-blue-800">{winner.percentage}%</Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Detailed Results by Position</CardTitle>
          <CardDescription>View the complete breakdown of votes for each position</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue={results[0].id} value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
              {results.map((position) => (
                <TabsTrigger key={position.id} value={position.id}>
                  {position.title}
                </TabsTrigger>
              ))}
            </TabsList>
            {results.map((position) => (
              <TabsContent key={position.id} value={position.id} className="space-y-4">
                <div className="grid gap-6 md:grid-cols-[1fr_1fr]">
                  <div>
                    <h3 className="mb-4 text-lg font-medium">Vote Distribution</h3>
                    <ChartContainer
                      config={{
                        votes: {
                          label: "Votes",
                          color: "hsl(var(--chart-1))",
                        },
                      }}
                      className="h-[300px]"
                    >
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={getChartData(position.id)}>
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip content={<ChartTooltipContent />} />
                          <Legend />
                          <Bar dataKey="votes" name="Votes" fill="var(--color-votes)">
                            {getChartData(position.id).map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={chartColors[index % chartColors.length]} />
                            ))}
                          </Bar>
                        </BarChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Results Summary</h3>
                    <p className="text-sm text-gray-500">
                      Total votes cast: <span className="font-medium">{position.totalVotes}</span>
                    </p>
                    <div className="space-y-4">
                      {position.nominees
                        .sort((a, b) => b.votes - a.votes)
                        .map((nominee, index) => (
                          <div key={nominee.id} className="flex items-center gap-4">
                            <div className="relative">
                              <img
                                src={nominee.image || "/placeholder.svg"}
                                alt={nominee.name}
                                className="h-12 w-12 rounded-full object-cover"
                              />
                              {index === 0 && <Trophy className="absolute -right-1 -top-1 h-5 w-5 text-yellow-500" />}
                              {index === 1 && <Medal className="absolute -right-1 -top-1 h-5 w-5 text-gray-400" />}
                              {index === 2 && <Medal className="absolute -right-1 -top-1 h-5 w-5 text-amber-700" />}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between">
                                <h4 className="font-medium">{nominee.name}</h4>
                                <Badge className="bg-blue-100 text-blue-800">{nominee.percentage}%</Badge>
                              </div>
                              <div className="mt-1">
                                <div className="h-2 w-full rounded-full bg-gray-100">
                                  <div
                                    className="h-2 rounded-full bg-blue-600"
                                    style={{ width: `${nominee.percentage}%` }}
                                  />
                                </div>
                              </div>
                              <p className="mt-1 text-sm text-gray-500">{nominee.votes} votes</p>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Voter Participation</CardTitle>
          <CardDescription>Breakdown of voter turnout by grade level</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-[1fr_1fr]">
            <div>
              <h3 className="mb-4 text-lg font-medium">Participation Rate</h3>
              <ChartContainer
                config={{
                  participation: {
                    label: "Participation (%)",
                    color: "hsl(var(--chart-1))",
                  },
                }}
                className="h-[300px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={participationData}>
                    <XAxis dataKey="grade" />
                    <YAxis />
                    <Tooltip content={<ChartTooltipContent />} />
                    <Legend />
                    <Bar dataKey="participation" name="Participation (%)" fill="var(--color-participation)">
                      {participationData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={chartColors[index % chartColors.length]} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-medium">Participation Details</h3>
              <div className="space-y-4">
                {participationData.map((grade) => (
                  <div key={grade.grade} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium">{grade.grade}</h4>
                      <Badge className="bg-blue-100 text-blue-800">{grade.participation}%</Badge>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className="h-2 rounded-full bg-blue-600" style={{ width: `${grade.participation}%` }} />
                    </div>
                    <p className="text-sm text-gray-500">
                      {grade.voters} out of {grade.students} students voted
                    </p>
                  </div>
                ))}
                <div className="mt-6 rounded-lg bg-blue-50 p-4">
                  <h4 className="font-medium text-blue-800">Overall Participation</h4>
                  <p className="text-blue-700">
                    {participationData.reduce((sum, grade) => sum + grade.voters, 0)} out of{" "}
                    {participationData.reduce((sum, grade) => sum + grade.students, 0)} students voted (
                    {(
                      (participationData.reduce((sum, grade) => sum + grade.voters, 0) /
                        participationData.reduce((sum, grade) => sum + grade.students, 0)) *
                      100
                    ).toFixed(1)}
                    %)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
