"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Clock, MapPin, Phone, Star, ChevronRight } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">


      {/* Hero Section */}
      <section className="relative h-[80vh] bg-cover bg-center" style={{ backgroundImage: "url('/hero.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-start">
          <h1 className="text-5xl md:text-6xl font-bold text-secondary mb-4">Bristol Co</h1>
          <p className="text-xl md:text-2xl text-secondary mb-8">The Tasty House - Fast Food Redefined</p>
          <Dialog>
            <DialogTrigger asChild>
              <Button size="lg" className="bg-primary hover:bg-primary-dark text-black">
                Order Now <ChevronRight className="ml-2" />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Place Your Order</DialogTitle>
              </DialogHeader>
              <form className="space-y-4 mt-4">
                <Input type="text" placeholder="Your Name" required />
                <Input type="tel" placeholder="Your Phone" required />
                <Textarea placeholder="Your Order" required />
                <Button type="submit" className="w-full">Submit Order</Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Since 2012</Badge>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Bristol Co</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Where fast food meets gourmet flavors in a symphony of taste
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <img
                  src="/home-1.jpg"
                  alt="Bristol Co Interior"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </CardContent>
            </Card>
            <div className="space-y-6">
              <p className="text-lg text-black leading-relaxed">
                Since 2012, Bristol Co has been revolutionizing the fast food scene with our gourmet twist.
                Our commitment to quality ingredients and innovative recipes sets us apart in the world of quick dining.
              </p>
              <p className="text-lg text-black leading-relaxed">
                At Bristol Co, we believe that fast food doesn't have to compromise on taste or quality.
                Our chefs work tirelessly to create unique flavor combinations that will tantalize your taste buds and keep you coming back for more.
              </p>
              <p className="text-lg text-black leading-relaxed">
                Whether you're grabbing a quick lunch or enjoying a casual dinner with friends,
                Bristol Co is your go-to destination for delicious, satisfying meals that redefine fast food.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Menu Items */}
      <section id="menu" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Signature Dishes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Gourmet Burger Deluxe", description: "A juicy beef patty topped with caramelized onions, aged cheddar, and our secret sauce.", src: "burger.jpg" },
              { name: "Crispy Chicken Wrap", description: "Tender crispy chicken with fresh vegetables and tangy yogurt sauce in a soft tortilla.", src: "wrap.jpg" },
              { name: "Veggie Supreme Pizza", description: "A crispy thin crust topped with a medley of fresh vegetables and our signature cheese blend.", src: "pizza.jpg" }
            ].map((dish, index) => (
              <div key={index} className="rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
                <img src={dish.src} alt={dish.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{dish.name}</h3>
                  <p className="text-gray-600">{dish.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant={'outline'}>
              <a href="/menu">View Menu</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Hours and Location */}
      <section id="location" className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Visit Us</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="mr-2 flex-shrink-0" />
                  <p>Bristol Road, Selly Oak, Birmingham, West Midlands, B29 6BE</p>
                </div>
                <div className="flex items-center">
                  <Clock className="mr-2 flex-shrink-0" />
                  <p>Open 1:00 PM to 11:00 PM (7 days a week)</p>
                </div>
                <div className="flex items-center">
                  <Phone className="mr-2 flex-shrink-0" />
                  <p>0141 611 2634</p>
                </div>
              </div>
              <Button className="mt-6" variant="secondary">Get Directions</Button>
            </div>
            <div className="relative h-64 md:h-full min-h-[300px]">
              <img src="/home-2.jpg" alt="Restaurant Location" className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-md" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Sarah Johnson", review: "Absolutely delicious! The Gourmet Burger Deluxe is a must-try. Great atmosphere and friendly staff too!" },
              { name: "Mike Thompson", review: "The Crispy Chicken Wrap is my go-to lunch. Always fresh and satisfying. Bristol Co never disappoints!" },
              { name: "Emily Davis", review: "As a vegetarian, I appreciate the variety of options. The Veggie Supreme Pizza is out of this world!" }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.review}"</p>
                <p className="font-semibold">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}