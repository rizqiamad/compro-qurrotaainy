import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Baby, Users, BookOpen, Heart, Star, Clock } from "lucide-react"

export default function EarlyChildhoodPage() {
  const programs = [
    {
      title: "Pre-Kindergarten Program",
      description: "Comprehensive early learning for ages 3-5",
      age: "3-5 years",
      duration: "Full Day",
      features: ["Play-based learning", "Social development", "Basic literacy", "Creative arts"],
    },
    {
      title: "Nursery Care",
      description: "Nurturing environment for toddlers",
      age: "18 months - 3 years",
      duration: "Half/Full Day",
      features: ["Sensory play", "Language development", "Motor skills", "Emotional support"],
    },
    {
      title: "Parent-Child Programs",
      description: "Interactive sessions for families",
      age: "0-3 years",
      duration: "2 hours",
      features: ["Bonding activities", "Parenting support", "Early stimulation", "Community building"],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-primary/20 p-4 rounded-full">
                <Baby className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">Early Childhood Education</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Building strong foundations for lifelong learning through nurturing, play-based education that supports
              every child's unique development journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Enroll Your Child
              </Button>
              <Button size="lg" variant="outline">
                Schedule a Visit
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Early Childhood Programs</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Carefully designed programs that cater to different developmental stages and family needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{program.age}</Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1" />
                      {program.duration}
                    </div>
                  </div>
                  <CardTitle className="text-xl">{program.title}</CardTitle>
                  <CardDescription>{program.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-foreground">Key Features:</h4>
                    <ul className="space-y-1">
                      {program.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <Star className="h-3 w-3 mr-2 text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button className="w-full mt-6 bg-transparent" variant="outline">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Educational Philosophy</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/20 p-2 rounded-lg flex-shrink-0">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Nurturing Environment</h3>
                    <p className="text-muted-foreground">
                      We create warm, safe spaces where children feel loved and supported to explore and learn.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/20 p-2 rounded-lg flex-shrink-0">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Play-Based Learning</h3>
                    <p className="text-muted-foreground">
                      Learning through play develops creativity, problem-solving skills, and social competence.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/20 p-2 rounded-lg flex-shrink-0">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Individual Development</h3>
                    <p className="text-muted-foreground">
                      We recognize and celebrate each child's unique strengths, interests, and learning style.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/happy-children-playing-and-learning-in-colorful-ea.png"
                alt="Children learning through play"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
