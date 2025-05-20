"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, Lock } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

interface VoterVerificationProps {
  onVerified: () => void
}

export function VoterVerification({ onVerified }: VoterVerificationProps) {
  const [voterNumber, setVoterNumber] = useState("")
  const [error, setError] = useState("")
  const [isVerifying, setIsVerifying] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVoterNumber(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!voterNumber) {
      setError("Please enter your voter number")
      return
    }

    setIsVerifying(true)
    setError("")

    // Simulate verification - in a real app, this would be a server action
    setTimeout(() => {
      // For demo purposes, we'll accept any voter number that starts with 'V' followed by 5 digits
      if (/^V\d{5}$/.test(voterNumber)) {
        onVerified()
      } else {
        setError("Invalid voter number. Please check and try again.")
        setIsVerifying(false)
      }
    }, 1000)
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Voter Verification</CardTitle>
        <CardDescription>
          Please enter your voter number to access the voting portal. This ensures only registered voters can cast a
          vote.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="voterNumber">Voter Number</Label>
            <Input
              id="voterNumber"
              value={voterNumber}
              onChange={handleChange}
              placeholder="Enter your voter number (e.g., V12345)"
              className={error ? "border-red-500" : ""}
            />
            {error && <p className="text-sm text-red-500">{error}</p>}
          </div>

          <Alert className="bg-blue-50 border-blue-200">
            <AlertCircle className="h-4 w-4 text-blue-600" />
            <AlertTitle className="text-blue-800">Important</AlertTitle>
            <AlertDescription className="text-blue-700">
              Your voter number was provided during registration. If you've lost your voter number, you can retrieve it
              from the registration page.
            </AlertDescription>
          </Alert>
        </form>
      </CardContent>
      <CardFooter>
        <Button className="w-full" onClick={handleSubmit} disabled={isVerifying}>
          {isVerifying ? (
            <span className="flex items-center gap-2">
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
              Verifying...
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <Lock className="h-4 w-4" />
              Access Voting Portal
            </span>
          )}
        </Button>
      </CardFooter>
    </Card>
  )
}
