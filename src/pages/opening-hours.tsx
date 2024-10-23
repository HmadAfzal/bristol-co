import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Clock,  AlertCircle } from "lucide-react"

export default function OpeningHoursPage() {
  const regularHours = [
    { day: "Monday", hours: "1:00 PM - 11:00 PM" },
    { day: "Tuesday", hours: "1:00 PM - 11:00 PM" },
    { day: "Wednesday", hours: "1:00 PM - 11:00 PM" },
    { day: "Thursday", hours: "1:00 PM - 11:00 PM" },
    { day: "Friday", hours: "1:00 PM - 11:00 PM" },
    { day: "Saturday", hours: "1:00 PM - 11:00 PM" },
    { day: "Sunday", hours: "1:00 PM - 11:00 PM" },
  ]



  return (
    <div className="min-h-screen">
          <header className="bg-black text-primary text-center py-32">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Timing</h1>
          <p className="mt-2 text-xl">Our opening hours</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div>
          <Card >
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="mr-2" /> Regular Hours
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Day</TableHead>
                    <TableHead>Hours</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {regularHours.map((day) => (
                    <TableRow key={day.day}>
                      <TableCell className="font-medium">{day.day}</TableCell>
                      <TableCell>{day.hours}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

        </div>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <AlertCircle className="mr-2" /> Special Notes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>Last orders are taken 30 minutes before closing time.</li>
              <li>Kitchen closes 15 minutes before the restaurant closing time.</li>
              <li>We may close early or open late during severe weather conditions. Please check our social media pages for updates.</li>
              <li>Private events may occasionally affect our regular hours. We'll post notices in advance for any schedule changes.</li>
            </ul>
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <p className="text-lg mb-4">Have questions about our hours or planning to visit?</p>
          <Button size="lg">
            <a href="/contact"> Contact Us</a>
          </Button>
        </div>
      </main>

    </div>
  )
}