import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center px-4">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-gray-300">404</h1>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Sahifa topilmadi</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
            Kechirasiz, siz qidirayotgan sahifa mavjud emas yoki ko'chirilgan.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/">
              <Home className="h-4 w-4 mr-2" />
              Bosh sahifaga qaytish
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/contact">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Bog'lanish
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
