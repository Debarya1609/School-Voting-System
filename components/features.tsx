"use client"

import { useEffect, useRef, useState } from "react"
import { Shield, Users, BarChart3, FileText, BookOpen, LayoutDashboard } from "lucide-react"

export function Features() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const features = [
    {
      icon: Shield,
      title: "Secure Voting",
      description: "Our platform ensures that each vote is secure, anonymous, and cannot be tampered with.",
    },
    {
      icon: Users,
      title: "Easy Registration",
      description: "Students can easily register to vote using their school ID and receive a unique voter number.",
    },
    {
      icon: BarChart3,
      title: "Real-time Results",
      description: "View election results in real-time as votes are counted and verified by the system.",
    },
    {
      icon: FileText,
      title: "Nominee Profiles",
      description: "Learn about each nominee through detailed profiles including their background and platform.",
    },
    {
      icon: BookOpen,
      title: "Transparent Process",
      description: "Our voting process is fully transparent, with clear guidelines and verification at each step.",
    },
    {
      icon: LayoutDashboard,
      title: "Admin Dashboard",
      description: "School administrators have access to a powerful dashboard to manage the entire election process.",
    },
  ]

  return (
    <section ref={sectionRef} className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Features of Our Voting Platform</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our platform provides a secure, transparent, and easy-to-use experience for all school election
              participants.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col items-center space-y-2 rounded-lg border p-6 bg-white card-hover ${
                isVisible ? "animate-slide-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="rounded-full bg-blue-100 p-3 transition-all duration-300 hover:bg-blue-200">
                <feature.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-sm text-gray-500 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
