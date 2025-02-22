import { Car, CheckCircle, Sparkles } from "lucide-react"

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">¿Cómo funciona?</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Tres simples pasos para obtener ayuda experta con tu vehículo.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="rounded-full p-3 bg-primary/10">
              <Car className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">1. Describe el Problema</h3>
            <p className="text-muted-foreground">Cuéntanos los síntomas o problemas que presenta tu vehículo.</p>
          </div>
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="rounded-full p-3 bg-primary/10">
              <Sparkles className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">2. IA Analiza</h3>
            <p className="text-muted-foreground">Nuestro sistema procesa la información y consulta su base de datos.</p>
          </div>
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="rounded-full p-3 bg-primary/10">
              <CheckCircle className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">3. Recibe Soluciones</h3>
            <p className="text-muted-foreground">
              Obtén un diagnóstico detallado y pasos a seguir para resolver el problema.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

