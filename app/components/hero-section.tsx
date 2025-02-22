
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="w-full py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-16">
          <p className="text-sm tracking-[0.2em] text-primary">INTRODUCING FIXDRIVE</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight font-normal max-w-4xl mx-auto leading-[1.1] font-serif">
            Automate <span className="italic">intelligent diagnosis</span> to speed up your vehicle repairs
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            FixDrive analyzes your vehicle's symptoms & provides expert insights you'd normally get from hours at the
            mechanic.
          </p>
          <Button variant="default" size="lg" className="rounded-full text-base px-8 h-12">
            Request Access
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}

