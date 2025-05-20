"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

const certificates = [
  {
    title: "Advanced React and Redux",
    platform: "Udemy",
    date: "2023",
    description: "Comprehensive course covering advanced React patterns, Redux, and middleware.",
    image: "/placeholder.svg?height=100&width=100",
    link: "https://example.com",
  },
  {
    title: "UI/UX Design Fundamentals",
    platform: "Coursera",
    date: "2022",
    description: "Learned principles of user interface design, wireframing, and prototyping.",
    image: "/placeholder.svg?height=100&width=100",
    link: "https://example.com",
  },
  {
    title: "Full Stack Web Development",
    platform: "freeCodeCamp",
    date: "2021",
    description: "Built multiple projects covering frontend and backend technologies.",
    image: "/placeholder.svg?height=100&width=100",
    link: "https://example.com",
  },
  {
    title: "TypeScript Masterclass",
    platform: "Frontend Masters",
    date: "2022",
    description: "Deep dive into TypeScript features, types, and best practices.",
    image: "/placeholder.svg?height=100&width=100",
    link: "https://example.com",
  },
  {
    title: "AWS Certified Developer",
    platform: "Amazon Web Services",
    date: "2023",
    description: "Certification for developing and maintaining applications on AWS.",
    image: "/placeholder.svg?height=100&width=100",
    link: "https://example.com",
  },
  {
    title: "Responsive Web Design",
    platform: "freeCodeCamp",
    date: "2020",
    description: "Built responsive web design projects using HTML, CSS, and JavaScript.",
    image: "/placeholder.svg?height=100&width=100",
    link: "https://example.com",
  },
]

export default function Certificates() {
  return (
    <section id="certificates" className="py-12 md:py-24 bg-white/30 dark:bg-slate-900/30 backdrop-blur-sm">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Certificates</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              I'm committed to continuous learning. Here are some of the certifications I've earned.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div className="relative w-12 h-12 overflow-hidden rounded">
                    <Image src={cert.image || "/placeholder.svg"} alt={cert.platform} fill className="object-cover" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{cert.title}</CardTitle>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {cert.platform} • {cert.date}
                    </p>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-gray-500 dark:text-gray-400">{cert.description}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" size="sm">
                    <Link href={cert.link} target="_blank">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Certificate
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
