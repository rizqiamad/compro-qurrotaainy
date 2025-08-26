import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Users, Star, ExternalLink } from "lucide-react"

export function SchoolsSection() {
  const schools = [
    {
      name: "Greenwood Elementary Academy",
      location: "Downtown District",
      students: 850,
      rating: 4.9,
      specialties: ["STEM", "Arts", "Multilingual"],
      image: "/modern-elementary-school-building-with-children-pl.png",
      description: "A vibrant elementary school focused on foundational learning and creative expression.",
    },
    {
      name: "Riverside Middle School",
      location: "Riverside Community",
      students: 1200,
      rating: 4.8,
      specialties: ["Technology", "Sports", "Music"],
      image: "/placeholder-cnho4.png",
      description: "Preparing middle school students for high school success through comprehensive programs.",
    },
    {
      name: "Summit High School",
      location: "Hillside Area",
      students: 1800,
      rating: 4.9,
      specialties: ["Advanced Placement", "Robotics", "Theater"],
      image: "/placeholder-rzsuc.png",
      description: "Our flagship high school offering college-prep and vocational training programs.",
    },
    {
      name: "Innovation Learning Center",
      location: "Tech District",
      students: 600,
      rating: 5.0,
      specialties: ["Coding", "Design", "Entrepreneurship"],
      image: "/placeholder-0fpfo.png",
      description: "A cutting-edge facility focused on 21st-century skills and digital literacy.",
    },
  ]

  return (
    <section id="schools" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Our Schools & Learning Centers</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover our network of exceptional educational institutions, each designed to meet the unique needs of
            students at different stages of their learning journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {schools.map((school, index) => (
            <Card
              key={index}
              className="bg-card border-border overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={school.image || "/placeholder.svg"}
                  alt={school.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl text-foreground">{school.name}</CardTitle>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium text-foreground">{school.rating}</span>
                  </div>
                </div>
                <div className="flex items-center text-muted-foreground text-sm space-x-4">
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span>{school.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>{school.students.toLocaleString()} students</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">{school.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {school.specialties.map((specialty, idx) => (
                    <Badge key={idx} variant="secondary" className="bg-primary/10 text-primary">
                      {specialty}
                    </Badge>
                  ))}
                </div>
                <Button
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                >
                  Learn More
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            View All Schools
          </Button>
        </div>
      </div>
    </section>
  )
}
