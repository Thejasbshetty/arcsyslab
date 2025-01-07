import Link from "next/link"
import { Button } from "./ui/button"
import { Compass, PenSquare, Plus, Menu } from 'lucide-react'

interface HeaderProps {
  onMenuClick: () => void
}

export function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="border-b border-border bg-background">
      <div className="flex h-14 items-center px-4 container">
        <Button variant="ghost" size="icon" className="md:hidden mr-2" onClick={onMenuClick}>
          <Menu className="h-5 w-5" />
        </Button>
        <Link href="/" className="font-semibold text-xl mr-8 text-[#F3AE9F]">
          Logo
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm flex-1">
          <Link href="/explore" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <Compass className="h-4 w-4" />
            <span className="text-xs">Explore</span>
          </Link>
          <Link href="/create" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <Plus className="h-4 w-4" />
            <span className="text-xs">Create</span>
          </Link>
          <Link href="/edit" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <PenSquare className="h-4 w-4" />
            <span className="text-xs">Edit</span>
          </Link>
        </nav>
        <Button size="sm" className="bg-[#F3AE9F] text-[#2C2C2C] hover:bg-[#F3AE9F]/90 rounded-full px-6">
          Login
        </Button>
      </div>
    </header>
  )
}

