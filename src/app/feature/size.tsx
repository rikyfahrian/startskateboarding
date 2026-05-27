/** @format */

"use client";

import { useMemo, useState } from "react";
import { Card, CardContent } from "../../components/ui/card";
import { shoeSizes, WheelsTypes } from "../utils/data";
import { Info } from "lucide-react";
import { cn } from "../../lib/utils";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../components/ui/tooltip";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select";

export default function SkateboardDeckFinder() {
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [selectedPlayground, setSelectedPlayground] = useState<string | null>(null);

  const selectedDeck = useMemo(() => {
    return shoeSizes.find((item) => item.size === selectedSize);
  }, [selectedSize]);

  const selectedWheels = useMemo(() => {
    return WheelsTypes.filter((item) => item.playgrounds === selectedPlayground);
  }, [selectedPlayground]);

  return (
    <div className="flex flex-col self-center gap-6 max-w-3xl p-6">
      <div>
        <h2 className="self-center tracking-tight font-semibold text-xl flex flex-col">
          Ketahui Ukuran Sepatu Kamu
        </h2>
        <p className="text-sm text-muted-foreground">
          Ukuran sepatu menjadi acuan untuk memilih papan (deck) karena ukuran kaki mempengaruhi
          kenyamanan, stabilitas, dan kontrol saat bermain skateboard. Ini adalah panduan umum untuk
          membantu kamu memilih ukuran papan (deck) yang tepat berdasarkan ukuran sepatu.
        </p>
      </div>

      <TooltipProvider>
        <div className="flex flex-wrap justify-center gap-3">
          {shoeSizes.map((item) => (
            <Tooltip key={item.size}>
              <TooltipTrigger asChild>
                <div
                  className={cn(
                    "cursor-pointer rounded-lg border px-4 py-2 text-center transition-colors",
                    selectedSize === item.size
                      ? "bg-black text-white"
                      : "bg-white text-black hover:bg-muted",
                  )}
                  onClick={() => setSelectedSize(item.size)}
                >
                  <p className="text-xl font-medium">{item.size}</p>

                  <p className="text-sm text-muted-foreground">{item.insoleCm}</p>
                </div>
              </TooltipTrigger>

              {selectedSize !== item.size && (
                <TooltipContent>
                  <p className="text-sm">
                    {item.insoleCm} adalah ukuran <span className="italic">insole</span> sepatu
                  </p>
                </TooltipContent>
              )}
            </Tooltip>
          ))}
        </div>
      </TooltipProvider>

      {selectedDeck && (
        <Card className="animate-in fade-in zoom-in-95 duration-300">
          <CardContent className="space-y-4 p-6">
            <div>
              <p className="text-sm text-muted-foreground">Ukuran Sepatu</p>
              <h2 className="text-4xl font-bold">{selectedDeck.size}</h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border p-4 flex flex-col gap-2">
                <p className="text-sm text-muted-foreground">Ukuran Papan (Deck)</p>
                <h3 className="text-2xl font-bold">{selectedDeck.deck}</h3>
                <Link rel="stylesheet" href="#" className="text-blue-500 underline text-xs">
                  Apa itu Papan (Deck)?
                </Link>
              </div>

              <div className="rounded-2xl border p-4 flex flex-col gap-2">
                <p className="text-sm text-muted-foreground">Ukuran Truck</p>
                <h3 className="text-2xl font-bold">{selectedDeck.truck}</h3>
                <Link rel="stylesheet" href="#" className="text-blue-500 underline text-xs">
                  Apa itu Truck?
                </Link>
              </div>
            </div>

            <div className="rounded-2xl bg-muted p-4">
              <p className="text-sm text-muted-foreground">Catatan</p>
              <p className="mt-1 font-medium">{selectedDeck.note}</p>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="font-semibold text-lg">Dimana kamu akan bermain skateboard?</h2>

              <Select onValueChange={(value) => setSelectedPlayground(value as "street" | "park")}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Ini mempengaruhi pemilihan roda (wheels) skateboard" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="park">Skatepark - Bowl - Transition</SelectItem>
                    <SelectItem value="street">Jalanan - Trotoar</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              {selectedWheels.length > 0 && (
                <div className="rounded-2xl border p-4 flex flex-col gap-2">
                  {selectedWheels.map((wheel) => (
                    <div key={wheel.size} className="rounded-lg bg-muted p-3">
                      <p className="font-medium">
                        {wheel.size} mm - {wheel.shape}
                      </p>
                      <p className="font-me">{wheel.hardness} </p>
                      <p className="text-sm text-muted-foreground">{wheel.note}</p>
                    </div>
                  ))}

                  <Link rel="stylesheet" href="#" className="text-blue-500 underline text-xs">
                    Lebih lanjut tentang Roda (Wheels)
                  </Link>
                </div>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="font-semibold text-lg">Selanjutnya kamu membutuhkan</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-stretch">
                <Card className="flex flex-col h-full bg-slate-900 border-slate-800">
                  <CardContent className="flex flex-col grow p-5 justify-between gap-4">
                    <div className="space-y-2">
                      <p className="font-bold text-slate-100">Bearing</p>
                      <p className="text-sm text-slate-400 leading-relaxed">
                        Gunakan bearing skate-rated yang dirancang khusus untuk skateboard hantaman
                        tinggi. Hindari patokan rating ABEC industri demi performa dan durabilitas
                        optimal.
                      </p>
                    </div>
                    <Link
                      href="/panduan/bearing"
                      className="text-emerald-400 hover:text-emerald-300 font-medium text-xs transition-colors self-start mt-auto"
                    >
                      Apa itu Bearing? →
                    </Link>
                  </CardContent>
                </Card>

                <Card className="flex flex-col h-full bg-slate-900 border-slate-800">
                  <CardContent className="flex flex-col grow p-5 justify-between gap-4">
                    <div className="space-y-2">
                      <p className="font-bold text-slate-100">Grip Tape</p>
                      <p className="text-sm text-slate-400 leading-relaxed">
                        Lapisan kasar seperti amplas yang ditempelkan di atas papan (deck) untuk
                        memberikan cengkeraman kaki yang baik saat melakukan trik pop atau flip.
                      </p>
                    </div>
                    <Link
                      href="/panduan/griptape"
                      className="text-emerald-400 hover:text-emerald-300 font-medium text-xs transition-colors self-start mt-auto"
                    >
                      Apa itu Grip Tape? →
                    </Link>
                  </CardContent>
                </Card>

                <Card className="flex flex-col h-full bg-slate-900 border-slate-800">
                  <CardContent className="flex flex-col grow p-5 justify-between gap-4">
                    <div className="space-y-2">
                      <p className="font-bold text-slate-100">Baut (Hardware / Bolts)</p>
                      <p className="text-sm text-slate-400 leading-relaxed">
                        Set baut dan mur yang digunakan untuk mengaitkan truck dengan papan
                        skateboard.
                      </p>
                    </div>
                    <Link
                      href="/panduan/bolts"
                      className="text-emerald-400 hover:text-emerald-300 font-medium text-xs transition-colors self-start mt-auto"
                    >
                      Lebih lanjut tentang Baut (Bolts) →
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="flex items-start gap-2 rounded-xl bg-green-500/15 p-3 text-green-700">
              <Info className="size-4 shrink-0 sm:size-5" />
              <p className="text-xs leading-relaxed sm:text-sm">
                Rekomendasi berdasarkan panduan ukuran Skateboard umum dan preferensi Skateboarder.
              </p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
