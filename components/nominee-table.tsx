"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Edit, MoreHorizontal, Trash2 } from "lucide-react"

// Mock data for nominees
const initialNominees = [
  {
    id: "alex-johnson",
    name: "Alex Johnson",
    position: "President",
    grade: "12",
    status: "Active",
  },
  {
    id: "jamie-smith",
    name: "Jamie Smith",
    position: "President",
    grade: "12",
    status: "Active",
  },
  {
    id: "taylor-brown",
    name: "Taylor Brown",
    position: "President",
    grade: "11",
    status: "Active",
  },
  {
    id: "morgan-lee",
    name: "Morgan Lee",
    position: "Vice President",
    grade: "11",
    status: "Active",
  },
  {
    id: "jordan-patel",
    name: "Jordan Patel",
    position: "Vice President",
    grade: "12",
    status: "Active",
  },
  {
    id: "casey-wilson",
    name: "Casey Wilson",
    position: "Secretary",
    grade: "10",
    status: "Active",
  },
  {
    id: "riley-garcia",
    name: "Riley Garcia",
    position: "Secretary",
    grade: "11",
    status: "Active",
  },
  {
    id: "avery-martinez",
    name: "Avery Martinez",
    position: "Secretary",
    grade: "10",
    status: "Active",
  },
]

export function NomineeTable() {
  const [nominees, setNominees] = useState(initialNominees)
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [nomineeToDelete, setNomineeToDelete] = useState(null)

  const handleDeleteClick = (nominee) => {
    setNomineeToDelete(nominee)
    setDeleteDialogOpen(true)
  }

  const confirmDelete = () => {
    if (nomineeToDelete) {
      setNominees(nominees.filter((n) => n.id !== nomineeToDelete.id))
      setDeleteDialogOpen(false)
      setNomineeToDelete(null)
    }
  }

  return (
    <>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Position</TableHead>
              <TableHead>Grade</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {nominees.map((nominee) => (
              <TableRow key={nominee.id}>
                <TableCell className="font-medium">{nominee.name}</TableCell>
                <TableCell>{nominee.position}</TableCell>
                <TableCell>{nominee.grade}</TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className={
                      nominee.status === "Active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                    }
                  >
                    {nominee.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Open menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <Link href={`/admin/dashboard/nominees/edit/${nominee.id}`}>
                        <DropdownMenuItem>
                          <Edit className="mr-2 h-4 w-4" />
                          Edit
                        </DropdownMenuItem>
                      </Link>
                      <DropdownMenuItem
                        className="text-red-600 focus:text-red-600"
                        onClick={() => handleDeleteClick(nominee)}
                      >
                        <Trash2 className="mr-2 h-4 w-4" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete {nomineeToDelete?.name}? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeleteDialogOpen(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={confirmDelete}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
