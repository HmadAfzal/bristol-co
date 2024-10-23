import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react'
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">Bristol Co</h3>
            <p className="text-sm">Fast Food Restaurant</p>
            <p className="text-sm">Trading Since: December 2012</p>
            <div className="flex space-x-4 mt-6">
              <Button variant="ghost" size="icon" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Contact Us</h3>
            <div className="space-y-2">
              <p className="flex items-center text-sm">
                <MapPin className="h-4 w-4 mr-2" />
                Bristol Road, Selly Oak, Birmingham, B29 6BE
              </p>
              <p className="flex items-center text-sm">
                <Phone className="h-4 w-4 mr-2" />
                0141 611 2634
              </p>
              <p className="flex items-center text-sm">
                <Mail className="h-4 w-4 mr-2" />
                clearbusinessbyadrian@gmail.com
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Opening Hours</h3>
            <p className="text-sm">Monday - Sunday: 1:00 PM - 11:00 PM</p>
            <Button variant="default" className="mt-4 t" asChild>
              <a href="/opening-hours">View Opening hours</a>
            </Button>
          </div>
        </div>
        <Separator className="my-8 bg-gray-700" />
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">&copy; 2023 Bristol Co. All rights reserved.</p>
          <nav className="mt-4 md:mt-0">
            <ul className="flex space-x-4 text-sm">
              <li><a href="/about" className="hover:text-white transition-colors duration-300">About us</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors duration-300">Contact</a></li>
              <li><a href="/menu" className="hover:text-white transition-colors duration-300">Menu</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer