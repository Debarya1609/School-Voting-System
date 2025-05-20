"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, MapPin } from "lucide-react"

const experiences = [
  {
    role: "Senior Frontend Developer",
    company: "Tech Innovations Inc.",
    duration: "2021 - Present",
    location: "San Francisco, CA",
    description:
      "Led the development of the company's flagship product, improving performance by 40%. Mentored junior developers and implemented best practices for code quality.",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
  },
  {
    role: "UI/UX Designer & Developer",
    company: "Creative Solutions",
    duration: "2019 - 2021",
    location: "New York, NY",
    description:
      "Designed and developed responsive web applications for clients across various industries. Collaborated with stakeholders to deliver high-quality products.",
    skills: ["Figma", "React", "SCSS", "User Testing"],
  },
  {
    role: "Frontend Developer Intern",
    company: "StartUp Hub",
    duration: "2018 - 2019",
    location: "Boston, MA",
    description:
      "Assisted in developing user interfaces for web applications. Participated in code reviews and implemented feedback from senior developers.",
    skills: ["HTML", "CSS", "JavaScript", "jQuery"],
  },
]

export default function About() {
  return (
    <section id="about" className="py-12 md:py-24 bg-white/30 dark:bg-slate-900/30 backdrop-blur-sm">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              I'm a passionate web developer with 5+ years of experience creating beautiful, functional websites and
              applications. My goal is to build digital experiences that are both visually appealing and highly
              performant.
            </p>
          </div>
        </motion.div>

        <div className="space-y-4">
          <h3 className="text-2xl font-bold tracking-tighter text-center mb-8">Work Experience</h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                      <div>
                        <CardTitle>{exp.role}</CardTitle>
                        <CardDescription className="text-lg">{exp.company}</CardDescription>
                      </div>
                      <div className="flex flex-col items-start md:items-end text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center gap-1">
                          <CalendarDays className="h-4 w-4" />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => (
                        <Badge key={i} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
