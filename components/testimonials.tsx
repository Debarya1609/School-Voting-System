"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"
import { useState } from "react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Manager at TechCorp",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "John is an exceptional developer who consistently delivers high-quality work. His attention to detail and problem-solving skills are impressive. He's a valuable asset to any team.",
  },
  {
    name: "Michael Chen",
    role: "CTO at StartupX",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "Working with John was a pleasure. He understood our requirements quickly and delivered a solution that exceeded our expectations. His technical expertise and communication skills are top-notch.",
  },
  {
    name: "Emily Rodriguez",
    role: "UI/UX Designer at DesignHub",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "John has a great eye for design implementation. He translated our designs into pixel-perfect interfaces and added thoughtful interactions that enhanced the user experience.",
  },
  {
    name: "David Kim",
    role: "Founder at WebSolutions",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "John helped us rebuild our company website, and the results were outstanding. The site is faster, more responsive, and has received positive feedback from our clients. Highly recommended!",
  },
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-12 md:py-24 bg-white/30 dark:bg-slate-900/30 backdrop-blur-sm">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Testimonials</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              What clients and colleagues say about working with me.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader className="pb-0">
                  <Quote className="h-8 w-8 text-purple-500 mb-2" />
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-gray-500 dark:text-gray-400 italic">"{testimonial.content}"</p>
                </CardContent>
                <CardFooter>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} />
                      <AvatarFallback>
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
