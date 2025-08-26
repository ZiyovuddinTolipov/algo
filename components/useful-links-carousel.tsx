"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { ExternalLink } from "lucide-react"

const usefulLinks = [
  {
    id: 1,
    name: "Oliy va o'rta maxsus ta'lim vazirligi",
    shortName: "Ta'lim vazirligi",
    url: "https://edu.uz",
    logo: "homiy-1.png",
    description: "O'zbekiston Respublikasi Oliy va o'rta maxsus ta'lim vazirligi rasmiy portali",
  },
  {
    id: 2,
    name: "Samarkand iqtisodiyot va servis instituti",
    shortName: "SISI",
    url: "https://sies.uz/",
    logo: "homiy-2.png",
    description: "Samarkand iqtisodiyot va servis instituti rasmiy veb-sayti",
  },
  {
    id: 3,
    name: "Bilim va malakalarni baholash agentligi",
    shortName: "DTM",
    url: "https://uzbmb.uz/",
    logo: "uzbmb.png",
    description: "O'zbekiston Respublikasi Oliy ta’lim, fan va innovatsiyalar vazirligi huzuridagi Bilim va malakalarni baholash agentligi",
  },
  {
    id: 4,
    name: "Yagona interaktiv davlat xizmatlari portali",
    shortName: "My.gov.uz",
    url: "https://my.gov.uz",
    logo: "mygov.png",
    description: "Davlat xizmatlarini onlayn olish uchun yagona portal",
  }
]

export default function UsefulLinksCarousel() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <div className="relative">
      {/* Desktop Grid View */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {usefulLinks.map((link) => (
          <TooltipProvider key={link.id}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Card
                  className={`group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-gray-200 ${
                    hoveredCard === link.id ? "shadow-lg -translate-y-1" : ""
                  }`}
                  onMouseEnter={() => setHoveredCard(link.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <CardContent className="p-6 text-center">
                    <Link
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${link.name} saytiga o'tish`}
                      className="block"
                    >
                      <div className="relative mb-4">
                        <div className="w-20 h-20 mx-auto bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                          <Image
                            src={link.logo || "/placeholder.svg"}
                            alt={`${link.name} logotipi`}
                            width={60}
                            height={60}
                            className="object-contain transition-transform duration-300 group-hover:scale-110"
                          />
                        </div>
                        <div className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="bg-blue-600 text-white rounded-full p-1">
                            <ExternalLink className="h-3 w-3" />
                          </div>
                        </div>
                      </div>
                      <h3 className="text-sm font-semibold text-gray-900 mb-1 leading-tight group-hover:text-blue-600 transition-colors">
                        {link.shortName}
                      </h3>
                      <p className="text-xs text-gray-600 line-clamp-2">{link.name}</p>
                    </Link>
                  </CardContent>
                </Card>
              </TooltipTrigger>
              <TooltipContent side="bottom" className="max-w-xs">
                <p className="text-sm">{link.description}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>

      {/* Mobile Carousel View */}
      <div className="md:hidden">
        <Carousel className="w-full">
          <CarouselContent className="-ml-2 md:-ml-4">
            {usefulLinks.map((link) => (
              <CarouselItem key={link.id} className="pl-2 md:pl-4 basis-1/2 sm:basis-1/3">
                <Card className="group cursor-pointer transition-all duration-300 hover:shadow-lg border-gray-200">
                  <CardContent className="p-4 text-center">
                    <Link
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${link.name} saytiga o'tish`}
                      className="block"
                    >
                      <div className="relative mb-3">
                        <div className="w-16 h-16 mx-auto bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                          <Image
                            src={link.logo || "/placeholder.svg"}
                            alt={`${link.name} logotipi`}
                            width={48}
                            height={48}
                            className="object-contain transition-transform duration-300 group-hover:scale-110"
                          />
                        </div>
                        <div className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="bg-blue-600 text-white rounded-full p-1">
                            <ExternalLink className="h-2.5 w-2.5" />
                          </div>
                        </div>
                      </div>
                      <h3 className="text-xs font-semibold text-gray-900 mb-1 leading-tight group-hover:text-blue-600 transition-colors">
                        {link.shortName}
                      </h3>
                      <p className="text-xs text-gray-600 line-clamp-2 leading-tight">{link.name}</p>
                    </Link>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-6 space-x-2">
            <CarouselPrevious className="relative translate-y-0 left-0" />
            <CarouselNext className="relative translate-y-0 right-0" />
          </div>
        </Carousel>
      </div>

      {/* Additional Info */}
      <div className="mt-8 text-center">
        <p className="text-sm text-gray-600 mb-4">
          Barcha havolalar rasmiy davlat portallari va ishonchli ta'lim tashkilotlariga olib boradi
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            Rasmiy portallar
          </span>
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
            Xavfsiz ulanish
          </span>
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
            Yangi oynada ochiladi
          </span>
        </div>
      </div>
    </div>
  )
}
