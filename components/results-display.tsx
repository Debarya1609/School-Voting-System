"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Trophy, Medal, Clock, AlertTriangle } from "lucide-react"
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend, Cell } from "recharts"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

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
  const [resultsVisible, setResultsVisible] = useState(false)
  const [releaseDate, setReleaseDate] = useState(new Date(Date.now() + 2 * 24 * 60 * 60 * 1000)) // 2 days from now
  const [timeRemaining, setTimeRemaining] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  // Format data for the current position's chart
  const getChartData = (positionId) => {
    const position = results.find((p) => p.id === positionId)
    return position.nominees.map((nominee) => ({
      name: nominee.name,
      votes: nominee.votes,
      percentage: nominee.percentage,
    }))
  }

  // In a real app, this would be fetched from an API
  useEffect(() => {
    // Simulate API call to check if results are visible
    const checkResultsVisibility = async () => {
      // This would be a real API call in production
      // For demo, we'll just set it to false
      setResultsVisible(false)
    }

    checkResultsVisibility()
  }, [])

  // Update countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date()
      const difference = releaseDate.getTime() - now.getTime()

      if (difference <= 0) {
        clearInterval(timer)
        setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      setTimeRemaining({ days, hours, minutes, seconds })
    }, 1000)

    return () => clearInterval(timer)
  }, [releaseDate])

  if (!resultsVisible) {
    return (
      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Results Not Available Yet</CardTitle>
            <CardDescription>The election results will be published soon</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <AlertTriangle className="h-16 w-16 text-amber-500 mb-6" />
            <h3 className="text-2xl font-bold mb-2">Results will be announced soon</h3>
            <p className="text-gray-500 mb-8 text-center max-w-md">
              The voting process is still ongoing or the results are being verified. Please check back later.
            </p>

            <div className="bg-gray-50 rounded-lg p-6 w-full max-w-md">
              <h4 className="text-lg font-medium mb-4 flex items-center">
                <Clock className="mr-2 h-5 w-5 text-blue-600" />
                Results will be published in:
              </h4>

              <div className="grid grid-cols-4 gap-2 text-center">
                <div className="bg-white rounded-lg p-3 shadow-sm">
                  <div className="text-2xl font-bold text-blue-600">{timeRemaining.days}</div>
                  <div className="text-xs text-gray-500">Days</div>
                </div>
                <div className="bg-white rounded-lg p-3 shadow-sm">
                  <div className="text-2xl font-bold text-blue-600">{timeRemaining.hours}</div>
                  <div className="text-xs text-gray-500">Hours</div>
                </div>
                <div className="bg-white rounded-lg p-3 shadow-sm">
                  <div className="text-2xl font-bold text-blue-600">{timeRemaining.minutes}</div>
                  <div className="text-xs text-gray-500">Minutes</div>
                </div>
                <div className="bg-white rounded-lg p-3 shadow-sm">
                  <div className="text-2xl font-bold text-blue-600">{timeRemaining.seconds}</div>
                  <div className="text-xs text-gray-500">Seconds</div>
                </div>
              </div>

              <Alert className="mt-6 bg-blue-50 border-blue-200">
                <AlertTitle className="text-blue-800">Stay Updated</AlertTitle>
                <AlertDescription className="text-blue-700">
                  Check back on {releaseDate.toLocaleDateString()} at {releaseDate.toLocaleTimeString()} to view the
                  election results.
                </AlertDescription>
              </Alert>
            </div>
          </CardContent>
        </Card>
      </div>
    )
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
