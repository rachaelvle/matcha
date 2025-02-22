import Link from "next/link"
import { Button } from "@/components/ui/button"

export function MainNav() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-green-700">
            Matcha Scout
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            <Link href="/brands" className="text-muted-foreground hover:text-foreground">
              Brands
            </Link>
            <Link href="/cafes" className="text-muted-foreground hover:text-foreground">
              Cafes
            </Link>
            <Link href="/reviews" className="text-muted-foreground hover:text-foreground">
              Reviews
            </Link>
            <Link href="/learn" className="text-muted-foreground hover:text-foreground">
              Learn
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost">Sign In</Button>
            <Button>Join Community</Button>
          </div>
        </nav>
      </div>
    </header>
  )
}

