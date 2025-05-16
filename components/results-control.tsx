"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon, Clock, AlertCircle } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export function ResultsControl() {
  const [areResultsVisible, setAreResultsVisible] = useState(false)
  const [autoPublish, setAutoPublish] = useState(true)
  const [publishDate, setPublishDate] = useState(new Date(Date.now() + 14 * 24 * 60 * 60 * 1000)) // 14 days from now
  const [publishTime, setPublishTime] = useState("15:00")
  const [timeRemaining, setTimeRemaining] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  const handleToggleResults = (checked) => {
    setAreResultsVisible(checked)
  }

  const handleToggleAutoPublish = (checked) => {
    setAutoPublish(checked)
  }

  const saveSettings = () => {
    // In a real app, this would save the settings to the server
    alert("Results visibility settings saved successfully!")
  }

  // Calculate the full publish date and time
  const getFullPublishDate = () => {
    const [hours, minutes] = publishTime.split(":").map(Number)
    const date = new Date(publishDate)
    date.setHours(hours, minutes, 0, 0)
    return date
  }

  // Update countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date()
      const fullPublishDate = getFullPublishDate()
      const difference = fullPublishDate.getTime() - now.getTime()

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
  }, [publishDate, publishTime])

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between space-x-2">
        <div className="flex flex-col space-y-1">
          <Label htmlFor="results-toggle" className="text-base font-medium">
            Results Visibility
          </Label>
          <span className="text-sm text-gray-500">Toggle to show or hide election results to the public</span>
        </div>
        <div className="flex items-center space-x-2">
          <Switch id="results-toggle" checked={areResultsVisible} onCheckedChange={handleToggleResults} />
          <Label htmlFor="results-toggle" className="font-medium">
            {areResultsVisible ? "Visible" : "Hidden"}
          </Label>
        </div>
      </div>

      <div className="flex items-center justify-between space-x-2">
        <div className="flex flex-col space-y-1">
          <Label htmlFor="auto-publish-toggle" className="text-base font-medium">
            Auto-Publish Results
          </Label>
          <span className="text-sm text-gray-500">Automatically publish results at a scheduled time</span>
        </div>
        <div className="flex items-center space-x-2">
          <Switch id="auto-publish-toggle" checked={autoPublish} onCheckedChange={handleToggleAutoPublish} />
          <Label htmlFor="auto-publish-toggle" className="font-medium">
            {autoPublish ? "Enabled" : "Disabled"}
          </Label>
        </div>
      </div>

      {autoPublish && (
        <div className="space-y-4 rounded-md border p-4">
          <h3 className="font-medium">Publication Schedule</h3>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="publish-date">Publication Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button id="publish-date" variant="outline" className="w-full justify-start text-left font-normal">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {format(publishDate, "PPP")}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar mode="single" selected={publishDate} onSelect={setPublishDate} initialFocus />
                </PopoverContent>
              </Popover>
            </div>

            <div className="space-y-2">
              <Label htmlFor="publish-time">Publication Time</Label>
              <div className="flex items-center">
                <Clock className="mr-2 h-4 w-4 text-gray-500" />
                <Input
                  id="publish-time"
                  type="time"
                  value={publishTime}
                  onChange={(e) => setPublishTime(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="timezone">Timezone</Label>
            <Select defaultValue="America/New_York">
              <SelectTrigger id="timezone">
                <SelectValue placeholder="Select timezone" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="America/New_York">Eastern Time (ET)</SelectItem>
                <SelectItem value="America/Chicago">Central Time (CT)</SelectItem>
                <SelectItem value="America/Denver">Mountain Time (MT)</SelectItem>
                <SelectItem value="America/Los_Angeles">Pacific Time (PT)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Card className="mt-4">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Countdown to Results Publication</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-4 gap-2 text-center">
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="text-2xl font-bold text-blue-600">{timeRemaining.days}</div>
                  <div className="text-xs text-gray-500">Days</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="text-2xl font-bold text-blue-600">{timeRemaining.hours}</div>
                  <div className="text-xs text-gray-500">Hours</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="text-2xl font-bold text-blue-600">{timeRemaining.minutes}</div>
                  <div className="text-xs text-gray-500">Minutes</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="text-2xl font-bold text-blue-600">{timeRemaining.seconds}</div>
                  <div className="text-xs text-gray-500">Seconds</div>
                </div>
              </div>

              <Alert className="mt-4 bg-blue-50 border-blue-200">
                <AlertCircle className="h-4 w-4 text-blue-600" />
                <AlertTitle className="text-blue-800">Public Display</AlertTitle>
                <AlertDescription className="text-blue-700">
                  This countdown will be visible to all users on the results page until the results are published.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          <div className="rounded-md bg-blue-50 p-3 text-sm text-blue-800">
            <p>
              Results will be automatically published on <strong>{format(publishDate, "PPP")}</strong> at{" "}
              <strong>{publishTime}</strong>.
            </p>
          </div>
        </div>
      )}

      <div className="rounded-md bg-amber-50 p-4 text-sm text-amber-800">
        <h4 className="font-medium">Important Note</h4>
        <p className="mt-1">
          Even when results are hidden from the public, administrators will always have access to real-time results
          through the admin dashboard.
        </p>
      </div>

      <Button onClick={saveSettings}>Save Settings</Button>
    </div>
  )
}
