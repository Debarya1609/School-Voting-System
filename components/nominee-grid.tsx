"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

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
        image: "/placeholder.svg?height=300&width=300",
        bio: "Student council member for 3 years with a focus on improving school facilities.",
        platform: "Advocating for extended library hours and more student events.",
        achievements: [
          "Honor Roll Student (2020-2023)",
          "Led fundraising campaign that raised $5,000 for new gym equipment",
          "Organized annual school spirit week",
        ],
        goals: [
          "Extend library hours during exam periods",
          "Create a student feedback system for school policies",
          "Organize monthly student-faculty forums",
        ],
      },
      {
        id: "jamie-smith",
        name: "Jamie Smith",
        grade: "12",
        image: "/placeholder.svg?height=300&width=300",
        bio: "Captain of the debate team and volunteer coordinator for community service.",
        platform: "Focused on increasing student voice in administrative decisions.",
        achievements: [
          "Debate Team Captain (2022-2023)",
          "Coordinated 500+ volunteer hours for community projects",
          "Student Representative on District Education Committee",
        ],
        goals: [
          "Implement student representation in all administrative committees",
          "Create a peer mentorship program",
          "Improve communication between administration and student body",
        ],
      },
      {
        id: "taylor-brown",
        name: "Taylor Brown",
        grade: "11",
        image: "/placeholder.svg?height=300&width=300",
        bio: "Honor roll student and founder of the environmental club.",
        platform: "Promoting sustainability initiatives and inclusive school culture.",
        achievements: [
          "Founded Environmental Awareness Club",
          "Implemented school-wide recycling program",
          "Recipient of Youth Leadership Award",
        ],
        goals: [
          "Establish a sustainability committee",
          "Create more inclusive school events",
          "Implement a student wellness program",
        ],
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
        image: "/placeholder.svg?height=300&width=300",
        bio: "Student athlete with leadership experience in multiple clubs.",
        platform: "Supporting mental health resources and academic support programs.",
        achievements: [
          "Varsity Basketball Team Captain",
          "Peer Counseling Program Leader",
          "Academic Excellence Award",
        ],
        goals: [
          "Expand mental health resources",
          "Create study groups for all major subjects",
          "Organize wellness activities during exam periods",
        ],
      },
      {
        id: "jordan-patel",
        name: "Jordan Patel",
        grade: "12",
        image: "/placeholder.svg?height=300&width=300",
        bio: "Tech club president and peer tutor for mathematics.",
        platform: "Enhancing technology access and creating study groups.",
        achievements: ["Tech Club President", "Developed school event mobile app", "Math Tutor for underclassmen"],
        goals: [
          "Improve technology access for all students",
          "Create a digital platform for club communication",
          "Implement coding workshops",
        ],
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
        image: "/placeholder.svg?height=300&width=300",
        bio: "Organized and detail-oriented student with experience in event planning.",
        platform: "Improving communication between students and administration.",
        achievements: ["Class Representative (2 years)", "School Event Planning Committee", "Perfect Attendance Award"],
        goals: [
          "Create a centralized calendar for all school events",
          "Improve announcement system",
          "Establish regular updates on student council activities",
        ],
      },
      {
        id: "riley-garcia",
        name: "Riley Garcia",
        grade: "11",
        image: "/placeholder.svg?height=300&width=300",
        bio: "Editor of the school newspaper and member of the yearbook committee.",
        platform: "Creating better documentation of school activities and achievements.",
        achievements: ["School Newspaper Editor", "Yearbook Committee Member", "Writing Competition Winner"],
        goals: [
          "Create a digital archive of school events",
          "Improve school newsletter",
          "Establish a student journalism program",
        ],
      },
      {
        id: "avery-martinez",
        name: "Avery Martinez",
        grade: "10",
        image: "/placeholder.svg?height=300&width=300",
        bio: "Class representative for two years with excellent organizational skills.",
        platform: "Streamlining processes for club funding and event approvals.",
        achievements: ["Class Representative (2 years)", "Reorganized club funding process", "Community Service Award"],
        goals: [
          "Simplify event approval process",
          "Create transparent club funding system",
          "Establish regular office hours for student concerns",
        ],
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
        image: "/placeholder.svg?height=300&width=300",
        bio: "Math team captain with experience managing club budgets.",
        platform: "Transparent financial reporting and equitable resource allocation.",
        achievements: ["Math Team Captain", "Managed $10,000 club budget", "Mathematics Competition Finalist"],
        goals: [
          "Implement transparent financial reporting",
          "Create equitable resource allocation system",
          "Establish fundraising opportunities for all clubs",
        ],
      },
      {
        id: "reese-nguyen",
        name: "Reese Nguyen",
        grade: "12",
        image: "/placeholder.svg?height=300&width=300",
        bio: "Business club leader with fundraising experience.",
        platform: "Innovative fundraising strategies and responsible spending.",
        achievements: [
          "Business Club President",
          "Raised $7,500 through innovative fundraisers",
          "Entrepreneurship Award Winner",
        ],
        goals: [
          "Implement new fundraising strategies",
          "Create financial literacy workshops",
          "Establish a student-run school store",
        ],
      },
    ],
  },
]

export function NomineeGrid() {
  const [selectedNominee, setSelectedNominee] = useState(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleNomineeClick = (nominee) => {
    setSelectedNominee(nominee)
    setIsDialogOpen(true)
  }

  return (
    <div className="space-y-8">
      <Tabs defaultValue={positions[0].id} className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
          {positions.map((position) => (
            <TabsTrigger key={position.id} value={position.id}>
              {position.title}
            </TabsTrigger>
          ))}
        </TabsList>
        {positions.map((position) => (
          <TabsContent key={position.id} value={position.id} className="space-y-4">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {position.nominees.map((nominee) => (
                <Card key={nominee.id} className="overflow-hidden">
                  <div className="aspect-square w-full overflow-hidden">
                    <img
                      src={nominee.image || "/placeholder.svg"}
                      alt={nominee.name}
                      className="h-full w-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>{nominee.name}</CardTitle>
                      <Badge>Grade {nominee.grade}</Badge>
                    </div>
                    <CardDescription>{nominee.bio}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-medium">Platform:</h4>
                    <p className="text-sm text-gray-500">{nominee.platform}</p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" onClick={() => handleNomineeClick(nominee)}>
                      View Full Profile
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        {selectedNominee && (
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle className="text-2xl">{selectedNominee.name}</DialogTitle>
              <DialogDescription>
                Candidate for {positions.find((p) => p.nominees.includes(selectedNominee))?.title}
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-6 py-4 md:grid-cols-[1fr_2fr]">
              <div>
                <img
                  src={selectedNominee.image || "/placeholder.svg"}
                  alt={selectedNominee.name}
                  className="w-full rounded-lg object-cover"
                />
                <div className="mt-4 flex items-center justify-between">
                  <Badge className="text-sm">{selectedNominee.name}</Badge>
                  <Badge variant="outline" className="text-sm">
                    Grade {selectedNominee.grade}
                  </Badge>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium">Biography</h3>
                  <p className="text-gray-500">{selectedNominee.bio}</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium">Platform</h3>
                  <p className="text-gray-500">{selectedNominee.platform}</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium">Achievements</h3>
                  <ul className="list-disc pl-5 text-gray-500">
                    {selectedNominee.achievements.map((achievement, index) => (
                      <li key={index}>{achievement}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium">Goals if Elected</h3>
                  <ul className="list-disc pl-5 text-gray-500">
                    {selectedNominee.goals.map((goal, index) => (
                      <li key={index}>{goal}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </div>
  )
}
