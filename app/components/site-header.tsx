import { Button } from "@/components/ui/button"
import { Wrench } from "lucide-react"
import Link from "next/link"

export function SiteHeader() {
  return (
    <header className="px-6 h-16 border-b bg-background">
      <div className="max-w-7xl mx-auto w-full h-full flex items-center">
        {/* Logo - Left section */}
        <div className="flex items-center gap-2 text-xl w-1/3">
          <Wrench className="h-6 w-6" />
          <span className="tracking-wide">FixDrive</span>
        </div>

        {/* Navigation - Middle section */}
        <nav className="flex justify-center gap-8 w-1/3">
          <Link href="#about" className="text-sm hover:text-primary transition-colors">
            About us
          </Link>
          <Link href="#changelog" className="text-sm hover:text-primary transition-colors">
          Changelog
          </Link>
          <Link href="#contact" className="text-sm hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>

        {/* Auth - Right section */}
        <div className="flex justify-end w-1/3">
          <Button
            variant="default"
            className="rounded-full bg-secondary hover:bg-secondary/90 text-secondary-foreground"
          >
            Login / Register
          </Button>
        </div>
      </div>
    </header>
  )
}

