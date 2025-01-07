import Link from "next/link"
import { Button } from "./ui/button"
import { Compass, PenSquare, Plus } from 'lucide-react'

export function Header() {
  return (
    <header className="border-b border-border">
      <div className="flex h-16 items-center px-4 container">
        <Link href="/" className="font-semibold text-xl mr-8">
          Logo
        </Link>
        <nav className="flex items-center gap-6 text-sm flex-1">
          <Link href="/explore" className="flex items-center gap-2 text-muted-foreground hover:text-primary">
            <Compass className="h-4 w-4" />
            Explore
          </Link>
          <Link href="/create" className="flex items-center gap-2 text-muted-foreground hover:text-primary">
            <Plus className="h-4 w-4" />
            Create
          </Link>
          <Link href="/edit" className="flex items-center gap-2 text-muted-foreground hover:text-primary">
            <PenSquare className="h-4 w-4" />
            Edit
          </Link>
        </nav>
        <Button variant="secondary" className="bg-primary text-primary-foreground hover:bg-primary/90">
          Login
        </Button>
      </div>
    </header>
  )
}

