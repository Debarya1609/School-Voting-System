"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { AlertCircle, CheckCircle2, Info } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { VoterVerification } from "./voter-verification"

// Mock data for nominees
const positions = [
  {
    id: "president",
    title: "President",
    nominees: [
      {
        id: "alex-johnson",
        name: "Alex Johnson",
        grade: "12",
        image: "/placeholder.svg?height=100&width=100",
        bio: "Student council member for 3 years with a focus on improving school facilities.",
        platform: "Advocating for extended library hours and more student events.",
      },
      {
        id: "jamie-smith",
        name: "Jamie Smith",
        grade: "12",
        image: "/placeholder.svg?height=100&width=100",
        bio: "Captain of the debate team and volunteer coordinator for community service.",
        platform: "Focused on increasing student voice in administrative decisions.",
      },
      {
        id: "taylor-brown",
        name: "Taylor Brown",
        grade: "11",
        image: "/placeholder.svg?height=100&width=100",
        bio: "Honor roll student and founder of the environmental club.",
        platform: "Promoting sustainability initiatives and inclusive school culture.",
      },
    ],
  },
  {
    id: "vice-president",
    title: "Vice President",
    nominees: [
      {
        id: "morgan-lee",
        name: "Morgan Lee",
        grade: "11",
        image: "/placeholder.svg?height=100&width=100",
        bio: "Student athlete with leadership experience in multiple clubs.",
        platform: "Supporting mental health resources and academic support programs.",
      },
      {
        id: "jordan-patel",
        name: "Jordan Patel",
        grade: "12",
        image: "/placeholder.svg?height=100&width=100",
        bio: "Tech club president and peer tutor for mathematics.",
        platform: "Enhancing technology access and creating study groups.",
      },
    ],
  },
  {
    id: "secretary",
    title: "Secretary",
    nominees: [
      {
        id: "casey-wilson",
        name: "Casey Wilson",
        grade: "10",
        image: "/placeholder.svg?height=100&width=100",
        bio: "Organized and detail-oriented student with experience in event planning.",
        platform: "Improving communication between students and administration.",
      },
      {
        id: "riley-garcia",
        name: "Riley Garcia",
        grade: "11",
        image: "/placeholder.svg?height=100&width=100",
        bio: "Editor of the school newspaper and member of the yearbook committee.",
        platform: "Creating better documentation of school activities and achievements.",
      },
      {
        id: "avery-martinez",
        name: "Avery Martinez",
        grade: "10",
        image: "/placeholder.svg?height=100&width=100",
        bio: "Class representative for two years with excellent organizational skills.",
        platform: "Streamlining processes for club funding and event approvals.",
      },
    ],
  },
  {
    id: "treasurer",
    title: "Treasurer",
    nominees: [
      {
        id: "quinn-thompson",
        name: "Quinn Thompson",
        grade: "11",
        image: "/placeholder.svg?height=100&width=100",
        bio: "Math team captain with experience managing club budgets.",
        platform: "Transparent financial reporting and equitable resource allocation.",
      },
      {
        id: "reese-nguyen",
        name: "Reese Nguyen",
        grade: "12",
        image: "/placeholder.svg?height=100&width=100",
        bio: "Business club leader with fundraising experience.",
        platform: "Innovative fundraising strategies and responsible spending.",
      },
    ],
  },
]

export function VotingPortal() {
  const router = useRouter()
  const [isVerified, setIsVerified] = useState(false)
  const [votes, setVotes] = useState({})
  const [currentStep, setCurrentStep] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleVoteChange = (positionId, nomineeId) => {
    setVotes((prev) => ({
      ...prev,
      [positionId]: nomineeId,
    }))
  }

  const handleNext = () => {
    if (!votes[positions[currentStep].id]) {
      setError(`Please select a nominee for ${positions[currentStep].title}`)
      return
    }
    setError("")
    if (currentStep < positions.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      handleSubmit()
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = () => {
    // Check if all positions have votes
    const allVoted = positions.every((position) => votes[position.id])
    if (!allVoted) {
      setError("Please vote for all positions before submitting")
      return
    }

    setIsSubmitting(true)
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
      // Redirect after success
      setTimeout(() => {
        router.push("/results")
      }, 3000)
    }, 1500)
  }

  const handleVerified = () => {
    setIsVerified(true)
  }

  const currentPosition = positions[currentStep]

  if (!isVerified) {
    return <VoterVerification onVerified={handleVerified} />
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Cast Your Vote</CardTitle>
        <CardDescription>
          Select your preferred candidate for each position. Your vote is anonymous and secure.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {isSuccess ? (
          <Alert className="bg-green-50 border-green-200">
            <CheckCircle2 className="h-4 w-4 text-green-600" />
            <AlertTitle className="text-green-800">Vote Submitted Successfully!</AlertTitle>
            <AlertDescription className="text-green-700">
              Thank you for participating in the school election. Your vote has been recorded securely. You will be
              redirected to the results page shortly.
            </AlertDescription>
          </Alert>
        ) : (
          <div className="space-y-6">
            <div className="flex justify-between mb-4">
              <p className="text-sm text-gray-500">
                Step {currentStep + 1} of {positions.length}
              </p>
              <p className="text-sm font-medium">Voting for: {currentPosition.title}</p>
            </div>

            <Alert className="bg-blue-50 border-blue-200">
              <Info className="h-4 w-4 text-blue-600" />
              <AlertTitle className="text-blue-800">Important</AlertTitle>
              <AlertDescription className="text-blue-700">
                You can only vote for one nominee per position. Your selection is final once you submit your ballot.
              </AlertDescription>
            </Alert>

            <RadioGroup
              value={votes[currentPosition.id] || ""}
              onValueChange={(value) => handleVoteChange(currentPosition.id, value)}
              className="space-y-4"
            >
              {currentPosition.nominees.map((nominee) => (
                <div key={nominee.id} className="flex">
                  <RadioGroupItem value={nominee.id} id={nominee.id} className="peer sr-only" />
                  <Label
                    htmlFor={nominee.id}
                    className="flex flex-col items-start space-y-3 rounded-md border-2 border-muted bg-white p-4 hover:bg-gray-50 peer-data-[state=checked]:border-blue-600 [&:has([data-state=checked])]:border-blue-600 w-full cursor-pointer"
                  >
                    <div className="flex w-full items-start space-x-4">
                      <img
                        src={nominee.image || "/placeholder.svg"}
                        alt={nominee.name}
                        className="h-16 w-16 rounded-full object-cover"
                      />
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between">
                          <p className="text-base font-medium">{nominee.name}</p>
                          <p className="text-sm text-gray-500">Grade {nominee.grade}</p>
                        </div>
                        <p className="text-sm text-gray-500">{nominee.bio}</p>
                        <div className="mt-2">
                          <p className="text-sm font-medium">Platform:</p>
                          <p className="text-sm text-gray-500">{nominee.platform}</p>
                        </div>
                      </div>
                    </div>
                  </Label>
                </div>
              ))}
            </RadioGroup>

            {error && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
          </div>
        )}
      </CardContent>
      {!isSuccess && (
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={handleBack} disabled={currentStep === 0 || isSubmitting}>
            Back
          </Button>
          <Button onClick={handleNext} disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : currentStep === positions.length - 1 ? "Submit Ballot" : "Next"}
          </Button>
        </CardFooter>
      )}
    </Card>
  )
}
