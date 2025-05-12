"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon, Clock } from "lucide-react"

export function RegistrationControl() {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(true)
  const [useTimer, setUseTimer] = useState(true)
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)) // 7 days from now
  const [startTime, setStartTime] = useState("08:00")
  const [endTime, setEndTime] = useState("17:00")

  const handleToggleRegistration = (checked) => {
    setIsRegistrationOpen(checked)
  }

  const handleToggleTimer = (checked) => {
    setUseTimer(checked)
  }

  const saveSettings = () => {
    // In a real app, this would save the settings to the server
    alert("Registration settings saved successfully!")
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between space-x-2">
        <div className="flex flex-col space-y-1">
          <Label htmlFor="registration-toggle" className="text-base font-medium">
            Registration Status
          </Label>
          <span className="text-sm text-gray-500">Toggle to enable or disable voter registration</span>
        </div>
        <div className="flex items-center space-x-2">
          <Switch id="registration-toggle" checked={isRegistrationOpen} onCheckedChange={handleToggleRegistration} />
          <Label htmlFor="registration-toggle" className="font-medium">
            {isRegistrationOpen ? "Open" : "Closed"}
          </Label>
        </div>
      </div>

      <div className="flex items-center justify-between space-x-2">
        <div className="flex flex-col space-y-1">
          <Label htmlFor="timer-toggle" className="text-base font-medium">
            Automatic Timer
          </Label>
          <span className="text-sm text-gray-500">Automatically open and close registration based on schedule</span>
        </div>
        <div className="flex items-center space-x-2">
          <Switch id="timer-toggle" checked={useTimer} onCheckedChange={handleToggleTimer} />
          <Label htmlFor="timer-toggle" className="font-medium">
            {useTimer ? "Enabled" : "Disabled"}
          </Label>
        </div>
      </div>

      {useTimer && (
        <div className="space-y-4 rounded-md border p-4">
          <h3 className="font-medium">Registration Schedule</h3>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="start-date">Start Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button id="start-date" variant="outline" className="w-full justify-start text-left font-normal">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {format(startDate, "PPP")}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar mode="single" selected={startDate} onSelect={setStartDate} initialFocus />
                </PopoverContent>
              </Popover>
            </div>

            <div className="space-y-2">
              <Label htmlFor="start-time">Start Time</Label>
              <div className="flex items-center">
                <Clock className="mr-2 h-4 w-4 text-gray-500" />
                <Input id="start-time" type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="end-date">End Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button id="end-date" variant="outline" className="w-full justify-start text-left font-normal">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {format(endDate, "PPP")}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar mode="single" selected={endDate} onSelect={setEndDate} initialFocus />
                </PopoverContent>
              </Popover>
            </div>

            <div className="space-y-2">
              <Label htmlFor="end-time">End Time</Label>
              <div className="flex items-center">
                <Clock className="mr-2 h-4 w-4 text-gray-500" />
                <Input id="end-time" type="time" value={endTime} onChange={(e) => setEndTime(e.target.value)} />
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
              Registration will be automatically {isRegistrationOpen ? "opened" : "closed"} from{" "}
              <strong>{format(startDate, "PPP")}</strong> at <strong>{startTime}</strong> until{" "}
              <strong>{format(endDate, "PPP")}</strong> at <strong>{endTime}</strong>.
            </p>
          </div>
        </div>
      )}

      <Button onClick={saveSettings}>Save Settings</Button>
    </div>
  )
}
