"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with product listings, cart functionality, and secure checkout.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    demoLink: "https://example.com",
    githubLink: "https://github.com",
  },
  {
    title: "Task Management App",
    description: "A drag-and-drop task management application with real-time updates and team collaboration features.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["React", "Firebase", "Material UI", "React DnD"],
    demoLink: "https://example.com",
    githubLink: "https://github.com",
  },
  {
    title: "Portfolio Website",
    description:
      "A responsive portfolio website showcasing projects and skills with a modern design and smooth animations.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS"],
    demoLink: "https://example.com",
    githubLink: "https://github.com",
  },
  {
    title: "Weather Dashboard",
    description:
      "A weather application that displays current conditions and forecasts based on user location or search.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["React", "OpenWeather API", "Chart.js"],
    demoLink: "https://example.com",
    githubLink: "https://github.com",
  },
  {
    title: "Blog Platform",
    description: "A content management system for creating and publishing blog posts with user authentication.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Next.js", "Prisma", "NextAuth.js", "PostgreSQL"],
    demoLink: "https://example.com",
    githubLink: "https://github.com",
  },
  {
    title: "Recipe Finder",
    description: "An application to discover recipes based on available ingredients with filtering options.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["React", "Spoonacular API", "CSS Modules"],
    demoLink: "https://example.com",
    githubLink: "https://github.com",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Projects</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Here are some of my recent projects. Each one was built with a focus on performance, accessibility, and
              user experience.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col overflow-hidden group bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border border-white/20 dark:border-slate-700/50">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-gray-500 dark:text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button asChild variant="outline" size="sm">
                    <Link href={project.demoLink} target="_blank">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="sm">
                    <Link href={project.githubLink} target="_blank">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
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
