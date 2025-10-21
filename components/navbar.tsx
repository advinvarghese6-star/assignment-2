"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
    <nav className="bg-primary text-primary-foreground shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold">Employee Dashboard</h1>
          </div>
          <div className="flex gap-8">
            <Link
              href="/"
              className={`px-4 py-2 rounded-md transition-colors ${
                isActive("/") ? "bg-primary-foreground text-primary" : "hover:bg-primary-foreground hover:text-primary"
              }`}
            >
              Home
            </Link>
            <Link
              href="/employee-form"
              className={`px-4 py-2 rounded-md transition-colors ${
                isActive("/employee-form")
                  ? "bg-primary-foreground text-primary"
                  : "hover:bg-primary-foreground hover:text-primary"
              }`}
            >
              Employee Form
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
