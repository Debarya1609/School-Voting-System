"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import {
  Code2,
  Database,
  Figma,
  FileCode2,
  Github,
  Globe,
  Layers,
  LayoutGrid,
  Palette,
  Server,
  Settings,
  Smartphone,
} from "lucide-react"

const skillCategories = [
  {
    name: "Frontend",
    description: "Technologies I use to build user interfaces",
    skills: [
      { name: "HTML5", icon: <FileCode2 className="h-8 w-8" />, description: "Semantic markup and accessibility" },
      {
        name: "CSS3",
        icon: <Palette className="h-8 w-8" />,
        description: "Styling, animations, and responsive design",
      },
      {
        name: "JavaScript",
        icon: <Code2 className="h-8 w-8" />,
        description: "ES6+, DOM manipulation, and async programming",
      },
      { name: "TypeScript", icon: <Code2 className="h-8 w-8" />, description: "Type-safe JavaScript development" },
      { name: "React", icon: <Layers className="h-8 w-8" />, description: "Component-based UI development" },
      { name: "Next.js", icon: <Globe className="h-8 w-8" />, description: "React framework for production" },
      { name: "Tailwind CSS", icon: <LayoutGrid className="h-8 w-8" />, description: "Utility-first CSS framework" },
      { name: "Framer Motion", icon: <Smartphone className="h-8 w-8" />, description: "Animation library for React" },
    ],
  },
  {
    name: "Backend",
    description: "Technologies I use for server-side development",
    skills: [
      { name: "Node.js", icon: <Server className="h-8 w-8" />, description: "JavaScript runtime for server-side code" },
      { name: "Express", icon: <Server className="h-8 w-8" />, description: "Web framework for Node.js" },
      { name: "MongoDB", icon: <Database className="h-8 w-8" />, description: "NoSQL database" },
      { name: "PostgreSQL", icon: <Database className="h-8 w-8" />, description: "Relational database" },
      { name: "GraphQL", icon: <Database className="h-8 w-8" />, description: "Query language for APIs" },
      { name: "REST API", icon: <Globe className="h-8 w-8" />, description: "RESTful API design and implementation" },
    ],
  },
  {
    name: "Tools & Others",
    description: "Tools and technologies I use in my workflow",
    skills: [
      { name: "Git", icon: <Github className="h-8 w-8" />, description: "Version control system" },
      { name: "Figma", icon: <Figma className="h-8 w-8" />, description: "UI/UX design and prototyping" },
      { name: "VS Code", icon: <Code2 className="h-8 w-8" />, description: "Code editor" },
      { name: "Docker", icon: <Settings className="h-8 w-8" />, description: "Containerization" },
      { name: "Jest", icon: <Settings className="h-8 w-8" />, description: "JavaScript testing framework" },
      { name: "CI/CD", icon: <Settings className="h-8 w-8" />, description: "Continuous integration and deployment" },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Skills & Tools</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Technologies and tools I work with to bring ideas to life.
            </p>
          </div>
        </motion.div>

        <div className="space-y-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>{category.name}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                    {category.skills.map((skill, skillIndex) => (
                      <TooltipProvider key={skillIndex}>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <motion.div
                              className="flex flex-col items-center justify-center p-4 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer"
                              whileHover={{ y: -5 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              {skill.icon}
                              <span className="mt-2 font-medium">{skill.name}</span>
                            </motion.div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{skill.description}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
