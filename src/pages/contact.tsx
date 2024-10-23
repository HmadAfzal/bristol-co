import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from "lucide-react"

export default function ContactUsPage() {
  return (
    <div className="min-h-screen">
          <header className="bg-black text-primary text-center py-32">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="mt-2 text-xl">Get in touch with Bristol Co</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MapPin className="mr-2" /> Location
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg">Bristol Road, Selly Oak,</p>
              <p className="text-lg">Birmingham, West Midlands,</p>
              <p className="text-lg">B29 6BE</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="mr-2" /> Opening Hours
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg">Open 7 days a week</p>
              <p className="text-lg font-semibold">1:00 PM to 11:00 PM</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Phone className="mr-2" /> Phone
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg">Main: 0141 611 2634</p>
              <p className="text-lg">Reservations: 0141 611 2635</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Mail className="mr-2" /> Email
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg">General Inquiries:</p>
              <p className="text-lg font-semibold">clearbusinessbyadrian@gmail.com</p>
              <p className="text-lg mt-2">Reservations:</p>
              <p className="text-lg font-semibold">reservations@bristolco.com</p>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              Connect With Us
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center space-x-6">
              <Button variant="outline" size="icon">
                <Facebook className="h-6 w-6" />
              </Button>
              <Button variant="outline" size="icon">
                <Instagram className="h-6 w-6" />
              </Button>
              <Button variant="outline" size="icon">
                <Twitter className="h-6 w-6" />
              </Button>
            </div>
            <p className="text-center mt-4">Follow us on social media for updates, special offers, and more!</p>
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">We'd Love to Hear From You</h2>
          <p className="text-lg mb-4">
            Whether you have a question about our menu, want to make a reservation, or just want to say hello, we're here to help!
          </p>
        </div>
      </main>

    </div>
  )
}