import { Card, CardContent } from "@/components/ui/card"
import { Settings, Sparkles, Timer } from "lucide-react"

export function FeaturesSection() {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-accent/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              Características
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Todo lo que necesitas</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              FixDrive combina la potencia de la IA con conocimiento automotriz experto para ofrecerte la mejor
              asistencia.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
          <Card className="relative overflow-hidden">
            <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
              <div className="rounded-full p-3 bg-secondary/20">
                <Sparkles className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold">Diagnóstico Preciso</h3>
              <p className="text-muted-foreground">
                Análisis detallado de problemas utilizando IA avanzada y base de datos automotriz.
              </p>
            </CardContent>
          </Card>
          <Card className="relative overflow-hidden">
            <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
              <div className="rounded-full p-3 bg-secondary/20">
                <Timer className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold">Respuesta Instantánea</h3>
              <p className="text-muted-foreground">Obtén soluciones inmediatas a tus problemas automotrices, 24/7.</p>
            </CardContent>
          </Card>
          <Card className="relative overflow-hidden">
            <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
              <div className="rounded-full p-3 bg-secondary/20">
                <Settings className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold">Guía Paso a Paso</h3>
              <p className="text-muted-foreground">
                Instrucciones detalladas para reparaciones y mantenimiento básico.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

