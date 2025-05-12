"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, Lock } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export function AdminAuthForm() {
  const router = useRouter()
  const [formState, setFormState] = useState({
    adminName: "",
    adminKey: "",
  })
  const [error, setError] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!formState.adminName || !formState.adminKey) {
      setError("Please fill in all fields")
      return
    }

    setIsSubmitting(true)
    setError("")

    // Simulate authentication - in a real app, this would be a server action
    setTimeout(() => {
      // For demo purposes, we'll use a simple check
      // In a real app, this would be a secure authentication process
      if (formState.adminKey === "admin123") {
        router.push("/admin/dashboard")
      } else {
        setError("Invalid admin credentials")
        setIsSubmitting(false)
      }
    }, 1000)
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Administrator Login</CardTitle>
        <CardDescription>Enter your credentials to access the admin dashboard</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="adminName">Admin Name</Label>
            <Input
              id="adminName"
              name="adminName"
              value={formState.adminName}
              onChange={handleChange}
              placeholder="Enter your admin name"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="adminKey">Admin Key</Label>
            <Input
              id="adminKey"
              name="adminKey"
              type="password"
              value={formState.adminKey}
              onChange={handleChange}
              placeholder="Enter your admin key"
              required
            />
          </div>

          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
        </form>
      </CardContent>
      <CardFooter>
        <Button className="w-full" onClick={handleSubmit} disabled={isSubmitting}>
          {isSubmitting ? (
            <span className="flex items-center gap-2">
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
              Authenticating...
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <Lock className="h-4 w-4" />
              Access Dashboard
            </span>
          )}
        </Button>
      </CardFooter>
    </Card>
  )
}
