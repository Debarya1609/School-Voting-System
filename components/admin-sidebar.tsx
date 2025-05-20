"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart3, Users, UserPlus, Settings, LogOut, Award, Eye, Layout, Map } from "lucide-react"
import { cn } from "@/lib/utils"

export function AdminSidebar() {
  const pathname = usePathname()

  const navItems = [
    {
      title: "Dashboard",
      href: "/admin/dashboard",
      icon: Layout,
    },
    {
      title: "Nominee Management",
      href: "/admin/dashboard/nominees",
      icon: Award,
    },
    {
      title: "Voter Management",
      href: "/admin/dashboard/voters",
      icon: Users,
    },
    {
      title: "Voting Areas",
      href: "/admin/dashboard/areas",
      icon: Map,
    },
    {
      title: "Registration Control",
      href: "/admin/dashboard/registration",
      icon: UserPlus,
    },
    {
      title: "Results Control",
      href: "/admin/dashboard/results",
      icon: Eye,
    },
    {
      title: "Real-time Results",
      href: "/admin/dashboard/live-results",
      icon: BarChart3,
    },
    {
      title: "System Settings",
      href: "/admin/dashboard/settings",
      icon: Settings,
    },
  ]

  return (
    <div className="flex h-screen w-64 flex-col border-r bg-white">
      <div className="flex h-14 items-center border-b px-4">
        <Link href="/admin/dashboard" className="flex items-center gap-2 font-bold text-blue-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <path d="M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z" />
            <circle cx="16.5" cy="7.5" r=".5" />
          </svg>
          <span>Admin Panel</span>
        </Link>
      </div>
      <nav className="flex-1 overflow-auto p-2">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  pathname === item.href
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900",
                )}
              >
                <item.icon className="h-4 w-4" />
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="border-t p-2">
        <Link
          href="/"
          className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900"
        >
          <LogOut className="h-4 w-4" />
          Logout
        </Link>
      </div>
    </div>
  )
}
