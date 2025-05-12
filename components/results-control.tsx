"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon, Clock } from "lucide-react"
import { Input } from "@/components/ui/input"

export function ResultsControl() {
  const [areResultsVisible, setAreResultsVisible] = useState(false)
  const [autoPublish, setAutoPublish] = useState(true)
  const [publishDate, setPublishDate] = useState(new Date(Date.now() + 14 * 24 * 60 * 60 * 1000)) // 14 days from now
  const [publishTime, setPublishTime] = useState("15:00")

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
