"use client"

import type React from "react"

import { useChat } from "ai/react"
import { useState } from "react"
import { Send, Car } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogTrigger } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ScrollArea } from "@/components/ui/scroll-area"

const carBrands = [
  "Toyota",
  "Honda",
  "Ford",
  "Chevrolet",
  "Volkswagen",
  "BMW",
  "Mercedes-Benz",
  "Audi",
  "Nissan",
  "Hyundai",
]

const transmissionTypes = ["Automatic", "Manual", "CVT", "Semi-automatic", "Dual-clutch"]

const carModelsByBrand: Record<string, string[]> = {
  toyota: ["Corolla", "Camry", "RAV4", "Highlander", "Tacoma"],
  honda: ["Civic", "Accord", "CR-V", "Pilot", "HR-V"],
  ford: ["F-150", "Mustang", "Explorer", "Escape", "Edge"],
  chevrolet: ["Silverado", "Malibu", "Equinox", "Traverse", "Camaro"],
  volkswagen: ["Golf", "Jetta", "Tiguan", "Atlas", "Passat"],
  bmw: ["3 Series", "5 Series", "X3", "X5", "M3"],
  "mercedes-benz": ["C-Class", "E-Class", "GLC", "GLE", "A-Class"],
  audi: ["A4", "A6", "Q5", "Q7", "e-tron"],
  nissan: ["Altima", "Rogue", "Sentra", "Maxima", "Pathfinder"],
  hyundai: ["Elantra", "Sonata", "Tucson", "Santa Fe", "Kona"],
}

interface CarInfo {
  brand: string
  model: string
  transmission: string
  year: string
  mileage: string
  isMechanic: boolean
}

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat()
  const [showChat, setShowChat] = useState(false)
  const [carInfo, setCarInfo] = useState<CarInfo>({
    brand: "",
    model: "",
    transmission: "",
    year: "",
    mileage: "",
    isMechanic: false,
  })

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowChat(true)
  }

  return (
    <div className="min-h-screen p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">FixDrive</h1>

      {!showChat ? (
        <div className="text-center">
          <Dialog>
            <DialogTrigger asChild>
              <Button size="lg" className="gap-2">
                <Car className="h-5 w-5" />
                Start Car Diagnosis
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
              <form onSubmit={handleFormSubmit}>
                <DialogHeader>
                  <DialogTitle>Car Information</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="mechanic"
                      checked={carInfo.isMechanic}
                      onCheckedChange={(checked) => setCarInfo({ ...carInfo, isMechanic: checked as boolean })}
                    />
                    <Label htmlFor="mechanic">I am a mechanic</Label>
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="brand">Car Brand</Label>
                    <Select
                      value={carInfo.brand}
                      onValueChange={(value) => setCarInfo({ ...carInfo, brand: value, model: "" })}
                    >
                      <SelectTrigger id="brand">
                        <SelectValue placeholder="Select brand" />
                      </SelectTrigger>
                      <SelectContent>
                        {carBrands.map((brand) => (
                          <SelectItem key={brand} value={brand.toLowerCase()}>
                            {brand}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="model">Car Model</Label>
                    <Select
                      value={carInfo.model}
                      onValueChange={(value) => setCarInfo({ ...carInfo, model: value })}
                      disabled={!carInfo.brand}
                    >
                      <SelectTrigger id="model">
                        <SelectValue placeholder={carInfo.brand ? "Select model" : "Select a brand first"} />
                      </SelectTrigger>
                      <SelectContent>
                        {carInfo.brand &&
                          carModelsByBrand[carInfo.brand].map((model) => (
                            <SelectItem key={model} value={model.toLowerCase()}>
                              {model}
                            </SelectItem>
                          ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="transmission">Transmission</Label>
                    <Select
                      value={carInfo.transmission}
                      onValueChange={(value) => setCarInfo({ ...carInfo, transmission: value })}
                    >
                      <SelectTrigger id="transmission">
                        <SelectValue placeholder="Select transmission" />
                      </SelectTrigger>
                      <SelectContent>
                        {transmissionTypes.map((type) => (
                          <SelectItem key={type} value={type.toLowerCase()}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="year">Year</Label>
                    <Input
                      type="date"
                      id="year"
                      value={carInfo.year}
                      onChange={(e) => setCarInfo({ ...carInfo, year: e.target.value })}
                      max={new Date().toISOString().split("T")[0]}
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="mileage">Mileage (km)</Label>
                    <Input
                      type="number"
                      id="mileage"
                      placeholder="Enter mileage"
                      value={carInfo.mileage}
                      onChange={(e) => setCarInfo({ ...carInfo, mileage: e.target.value })}
                      min="0"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Start Chat</Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      ) : (
        <div className="bg-slate-50 rounded-lg p-4">
          <div className="mb-4 p-3 bg-primary/10 rounded-lg">
            <h2 className="font-semibold mb-2">Car Details:</h2>
            <div className="text-sm grid grid-cols-2 md:grid-cols-3 gap-2">
              <div>Brand: {carBrands.find((b) => b.toLowerCase() === carInfo.brand)}</div>
              <div>
                Model: {carInfo.model && carModelsByBrand[carInfo.brand].find((m) => m.toLowerCase() === carInfo.model)}
              </div>
              <div>Year: {carInfo.year}</div>
              <div>Transmission: {carInfo.transmission}</div>
              <div>Mileage: {carInfo.mileage} km</div>
              <div>{carInfo.isMechanic ? "Mechanic" : "Car Owner"}</div>
            </div>
          </div>

          <ScrollArea className="h-[50vh] pr-4">
            <div className="space-y-4">
              {messages.map((m) => (
                <div key={m.id} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`rounded-lg px-4 py-2 max-w-[80%] ${
                      m.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                    }`}
                  >
                    {m.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-muted rounded-lg px-4 py-2">Thinking...</div>
                </div>
              )}
            </div>
          </ScrollArea>

          <form onSubmit={handleSubmit} className="flex space-x-2 mt-4">
            <Input
              value={input}
              onChange={handleInputChange}
              placeholder="Type your message..."
              className="flex-grow"
              disabled={isLoading}
            />
            <Button type="submit" disabled={isLoading}>
              <Send className="h-4 w-4" />
              <span className="sr-only">Send message</span>
            </Button>
          </form>
        </div>
      )}
    </div>
  )
}

