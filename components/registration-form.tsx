"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, CheckCircle2 } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export function RegistrationForm() {
  const router = useRouter()
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    studentId: "",
    grade: "",
    section: "",
    agreeToTerms: false,
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormState((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSelectChange = (name, value) => {
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const validateForm = () => {
    const newErrors = {}
    if (!formState.firstName) newErrors.firstName = "First name is required"
    if (!formState.lastName) newErrors.lastName = "Last name is required"
    if (!formState.email) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      newErrors.email = "Email is invalid"
    }
    if (!formState.studentId) newErrors.studentId = "Student ID is required"
    if (!formState.grade) newErrors.grade = "Grade is required"
    if (!formState.section) newErrors.section = "Section is required"
    if (!formState.agreeToTerms) newErrors.agreeToTerms = "You must agree to the terms"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      setIsSubmitting(true)
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false)
        setIsSuccess(true)
        // Redirect after success
        setTimeout(() => {
          router.push("/vote")
        }, 2000)
      }, 1500)
    }
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Voter Registration Form</CardTitle>
        <CardDescription>Please fill out this form to register for the upcoming school election.</CardDescription>
      </CardHeader>
      <CardContent>
        {isSuccess ? (
          <Alert className="bg-green-50 border-green-200">
            <CheckCircle2 className="h-4 w-4 text-green-600" />
            <AlertTitle className="text-green-800">Registration Successful!</AlertTitle>
            <AlertDescription className="text-green-700">
              You have been registered successfully. You will be redirected to the voting page shortly.
            </AlertDescription>
          </Alert>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  name="firstName"
                  value={formState.firstName}
                  onChange={handleChange}
                  className={errors.firstName ? "border-red-500" : ""}
                />
                {errors.firstName && <p className="text-sm text-red-500">{errors.firstName}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  name="lastName"
                  value={formState.lastName}
                  onChange={handleChange}
                  className={errors.lastName ? "border-red-500" : ""}
                />
                {errors.lastName && <p className="text-sm text-red-500">{errors.lastName}</p>}
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">School Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formState.email}
                onChange={handleChange}
                className={errors.email ? "border-red-500" : ""}
              />
              {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="studentId">Student ID</Label>
              <Input
                id="studentId"
                name="studentId"
                value={formState.studentId}
                onChange={handleChange}
                className={errors.studentId ? "border-red-500" : ""}
              />
              {errors.studentId && <p className="text-sm text-red-500">{errors.studentId}</p>}
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="grade">Grade</Label>
                <Select value={formState.grade} onValueChange={(value) => handleSelectChange("grade", value)}>
                  <SelectTrigger id="grade" className={errors.grade ? "border-red-500" : ""}>
                    <SelectValue placeholder="Select Grade" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="9">Grade 9</SelectItem>
                    <SelectItem value="10">Grade 10</SelectItem>
                    <SelectItem value="11">Grade 11</SelectItem>
                    <SelectItem value="12">Grade 12</SelectItem>
                  </SelectContent>
                </Select>
                {errors.grade && <p className="text-sm text-red-500">{errors.grade}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="section">Section</Label>
                <Select value={formState.section} onValueChange={(value) => handleSelectChange("section", value)}>
                  <SelectTrigger id="section" className={errors.section ? "border-red-500" : ""}>
                    <SelectValue placeholder="Select Section" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="A">Section A</SelectItem>
                    <SelectItem value="B">Section B</SelectItem>
                    <SelectItem value="C">Section C</SelectItem>
                    <SelectItem value="D">Section D</SelectItem>
                  </SelectContent>
                </Select>
                {errors.section && <p className="text-sm text-red-500">{errors.section}</p>}
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <Checkbox
                id="agreeToTerms"
                name="agreeToTerms"
                checked={formState.agreeToTerms}
                onCheckedChange={(checked) => setFormState((prev) => ({ ...prev, agreeToTerms: checked }))}
                className={errors.agreeToTerms ? "border-red-500" : ""}
              />
              <div className="grid gap-1.5 leading-none">
                <Label
                  htmlFor="agreeToTerms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  I agree to the terms and conditions
                </Label>
                {errors.agreeToTerms && <p className="text-sm text-red-500">{errors.agreeToTerms}</p>}
              </div>
            </div>
            {Object.keys(errors).length > 0 && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>Please fix the errors in the form before submitting.</AlertDescription>
              </Alert>
            )}
          </form>
        )}
      </CardContent>
      {!isSuccess && (
        <CardFooter className="flex justify-between">
          <Button variant="outline" type="button" onClick={() => router.push("/")}>
            Cancel
          </Button>
          <Button type="submit" onClick={handleSubmit} disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Register"}
          </Button>
        </CardFooter>
      )}
    </Card>
  )
}
