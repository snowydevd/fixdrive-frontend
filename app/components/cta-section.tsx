import { Button } from "@/components/ui/button"
import { MessageSquareText } from "lucide-react"

export function CTASection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-primary/90">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center text-primary-foreground">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Comienza a resolver problemas ahora
            </h2>
            <p className="mx-auto max-w-[600px] text-primary-foreground/90 md:text-xl">
              No pierdas más tiempo y dinero en diagnósticos innecesarios. FixDrive está aquí para ayudarte.
            </p>
          </div>
          <Button size="lg" variant="secondary" className="gap-2 rounded-full">
            <MessageSquareText className="h-5 w-5" />
            Probar Gratis
          </Button>
        </div>
      </div>
    </section>
  )
}

