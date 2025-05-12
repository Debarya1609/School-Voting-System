import type React from "react"
import { AdminSidebar } from "@/components/admin-sidebar"

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <div className="flex-1 overflow-auto">
        <div className="container p-4 md:p-6">{children}</div>
      </div>
    </div>
  )
}
