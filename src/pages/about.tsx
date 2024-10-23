import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Utensils, Users, Leaf, Award } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <header className="bg-black text-primary text-center py-32">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="mt-2 text-xl">Redefining Fast Food Since 2012</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="py-20 mb-8">
          <div className="grid gap-12 md:items-center md:grid-cols-2">
            <div>
            <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
              <p className="text-lg mb-4">
                Founded in December 2012 by Adrian Venoin, Bristol Co started with a simple yet ambitious goal: to revolutionize the fast food industry by offering quick, delicious meals without compromising on quality or nutrition.
              </p>
              <p className="text-lg mb-4">
                Located in the heart of Selly Oak, Birmingham, our restaurant quickly became a favorite among locals and students alike. We've grown from a small family-run establishment to a beloved community fixture, all while staying true to our original vision.
              </p>
            </div>
            <div className="relative h-64 md:h-auto">
              <img
                src="/about-1.jpg"
                alt="Bristol Co Storefront"
                className="rounded-lg shadow-md object-cover w-full h-full"
              />
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <Card>
            <CardContent className="pt-6">
              <p className="text-lg">
                At Bristol Co, our mission is to prove that fast food can be both convenient and nutritious. We strive to:
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2 text-lg">
                <li>Serve high-quality, fresh ingredients in every meal</li>
                <li>Offer a diverse menu that caters to various dietary needs</li>
                <li>Provide exceptional customer service in a welcoming environment</li>
                <li>Support local suppliers and contribute positively to our community</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Our Values</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Utensils, title: "Quality", description: "We never compromise on the quality of our ingredients or the care we put into preparing each dish." },
              { icon: Users, title: "Community", description: "We're more than just a restaurant; we're a part of the Selly Oak community, and we take that responsibility seriously." },
              { icon: Leaf, title: "Sustainability", description: "From sourcing to waste management, we strive to minimize our environmental impact in every aspect of our operation." },
              { icon: Award, title: "Innovation", description: "We continuously explore new recipes and techniques to keep our menu exciting and satisfying for our customers." }
            ].map((value, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <value.icon className="mr-2 h-6 w-6" />
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Meet the Team</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "Adrian Venoin", role: "Founder & Head Chef", image: "/person-2.jpg" },
              { name: "Sarah Thompson", role: "Restaurant Manager", image: "/person-1.jpg" },
              { name: "Michael Lee", role: "Customer Experience Director", image: "/person-3.jpg" }
            ].map((member, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <img src={member.image} alt={member.name} className="rounded-full w-32 h-32 mx-auto mb-4 object-cover" />
                    <h3 className="text-xl font-semibold">{member.name}</h3>
                    <p className="text-gray-600">{member.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <Card>
            <CardHeader>
              <CardTitle>Join Us on Our Journey</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg mb-4">
                We're always looking for passionate individuals to join our team and help us continue to redefine fast food. Whether you're a culinary enthusiast, a customer service superstar, or someone who shares our values, we'd love to hear from you.
              </p>
              <Button size="lg">
                <a href="/contact">Contact us</a>
                
              </Button>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  )
}