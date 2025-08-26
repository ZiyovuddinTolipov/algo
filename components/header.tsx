"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"

const navigation = [
  { name: "Bosh sahifa", href: "/" },
  { name: "Rahbariyat", href: "/rahbariyat" },
  { name: "Bo'limlar", href: "/departments" },
  { name: "Yo'nalishlar", href: "/specializations" },
  { name: "Biz haqimizda", href: "/about" },
  { name: "Yangiliklar", href: "/news" },
  { name: "Galereya", href: "/gallery" },
  { name: "Bog'lanish", href: "/contact" },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo and School Name */}
          <Link href="/" className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-white flex items-center justify-center">
                <Image src="/homiy-1.png" alt="logo" width={120} height={120} />
              </div>
            </div>
            <div className="uppercase text-md font-semibold text-slate-900">
              <span className="">Kattaqo'rg'on xizmat ko‘rsatish</span> <br />
              <span >va servis texnikumi</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav role="navigation" className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "px-4 py-2 text-sm transition-colors duration-200",
                  pathname === item.href ? "font-semibold text-slate-900" : "text-neutral-800 hover:text-blue-800",
                )}
                aria-current={pathname === item.href ? "page" : undefined}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Uzbekistan Flag */}
          <div className="hidden lg:flex items-center space-x-4">
            <span className="text-sm text-neutral-600 cursor-pointer">UZ | RU | ENG</span>
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-neutral-800">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Menyuni ochish</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-white">
              <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white flex items-center justify-center">
                    <Image src="/homiy-1.png" alt="logo" width={120} height={120} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">KXST</div>
                    <div className="text-xs text-neutral-600">Texnikumi</div>
                  </div>
                </div>
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="text-neutral-800">
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <nav role="navigation" className="flex flex-col space-y-1 mt-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "px-4 py-3 text-base transition-colors duration-200 rounded-md",
                      pathname === item.href
                        ? "font-semibold text-slate-900 bg-gray-50"
                        : "text-neutral-800 hover:text-blue-800 hover:bg-gray-50",
                    )}
                    aria-current={pathname === item.href ? "page" : undefined}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>

              <div className="mt-8 pt-6 border-t border-gray-200 ">
                <span className="text-sm text-neutral-600 cursor-pointer">UZ | RU | ENG</span>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
