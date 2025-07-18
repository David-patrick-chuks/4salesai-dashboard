"use client"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { useAuth } from "@/hooks/use-auth"
import { Bell, Menu, Search, User } from "lucide-react"

interface DashboardHeaderProps {
  onToggleSidebar: () => void
  sidebarCollapsed: boolean
}

export function DashboardHeader({ onToggleSidebar, sidebarCollapsed }: DashboardHeaderProps) {
  const { user, logout } = useAuth()

  return (
    <header className="h-16 border-b border-gray-200 bg-white flex items-center justify-between px-3 sm:px-6 w-full">
      <div className="flex items-center gap-2 sm:gap-4 w-full">
        <Button variant="ghost" size="icon" onClick={onToggleSidebar} className="h-9 w-9">
          <Menu className="h-4 w-4" />
          <span className="sr-only">Toggle sidebar</span>
        </Button>

        <div className="relative flex-1 max-w-full">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            type="search"
            placeholder="Search..."
            className="w-full sm:w-64 pl-8 pr-2"
          />
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0 ml-2">
        <Button variant="ghost" size="icon">
          <Bell className="h-4 w-4" />
          <span className="sr-only">Notifications</span>
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-8 w-8 rounded-full">
              <User className="h-4 w-4" />
              <span className="sr-only">Open user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">{user?.name}</p>
                <p className="text-xs leading-none text-muted-foreground">{user?.email}</p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={logout}>Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
