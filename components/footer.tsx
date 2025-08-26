import Link from "next/link"
import { GraduationCap, MapPin, Phone, Mail, Facebook, Instagram, TextIcon, Send } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
     
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <GraduationCap className="h-8 w-8 text-blue-400" />
              <div>
                <div className="text-xl font-bold">KXKS</div>
                <div className="text-sm text-gray-400">Texnikumi</div>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              Kattaqo'rg'on xizmat ko'rsatish va servis texnikumi - 1958 yildan beri faoliyat yuritayotgan kasbiy
              ta'lim muassasasi. Biz malakali kadrlar tayyorlash va zamonaviy ta'lim berish bilan shug'ullanamiz.
            </p>
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com/groups/3946572862040320/?ref=share&mibextid=NSMWBT" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              {/* <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </Link> */}
              <Link href="https://t.me/kxkstuz" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Send className="h-5 w-5" />
                
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Tezkor havolalar</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  Biz haqimizda
                </Link>
              </li>
              <li>
                <Link href="/departments" className="text-gray-300 hover:text-white transition-colors">
                  Bo'limlar
                </Link>
              </li>
              <li>
                <Link href="/rahbariyat" className="text-gray-300 hover:text-white transition-colors">
                  Rahbariyat
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-gray-300 hover:text-white transition-colors">
                  Yangiliklar
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-300 hover:text-white transition-colors">
                  Galereya
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Bog'lanish
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Bog'lanish</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  Samarkand viloyati, Kattaqo'rg'on shahri, Samarkand ko'chasi, 70-uy
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">+998 66 456 07 23</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">kxkst.2025@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Kattaqo'rg'on xizmat ko'rsatish va servis texnikumi. Barcha huquqlar
            himoyalangan.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Maxfiylik siyosati
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Foydalanish shartlari
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
