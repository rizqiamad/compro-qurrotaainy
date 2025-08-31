import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Users, Trophy, Microscope, Globe, Palette, Music } from "lucide-react"

export default function PrimarySecondaryPage() {
  const levels = [
    {
      title: "Primary Education",
      description: "Foundation years building core academic and social skills",
      grades: "Grades 1-6",
      age: "6-12 years",
      subjects: ["Mathematics", "Language Arts", "Science", "Social Studies", "Arts", "Physical Education"],
    },
    {
      title: "Middle School",
      description: "Transitional years developing critical thinking and independence",
      grades: "Grades 7-9",
      age: "12-15 years",
      subjects: ["Advanced Mathematics", "Literature", "Biology", "History", "Technology", "Foreign Languages"],
    },
    {
      title: "High School",
      description: "Preparation for higher education and career readiness",
      grades: "Grades 10-12",
      age: "15-18 years",
      subjects: ["Calculus", "Physics", "Chemistry", "Economics", "Advanced Arts", "Career Preparation"],
    },
  ]

  const features = [
    {
      icon: BookOpen,
      title: "Comprehensive Curriculum",
      description: "Well-rounded education covering all essential subjects and skills",
    },
    {
      icon: Users,
      title: "Small Class Sizes",
      description: "Personalized attention with optimal teacher-to-student ratios",
    },
    {
      icon: Trophy,
      title: "Excellence Programs",
      description: "Advanced programs for gifted students and specialized interests",
    },
    {
      icon: Microscope,
      title: "STEM Focus",
      description: "Strong emphasis on Science, Technology, Engineering, and Mathematics",
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
                <BookOpen className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">Primary & Secondary Education</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Comprehensive education programs that build strong academic foundations, develop critical thinking skills,
              and prepare students for future success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Apply Now
              </Button>
              <Button size="lg" variant="outline">
                School Tour
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Education Levels */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Education Levels</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Progressive learning stages designed to support students' academic and personal growth.
            </p>
          </div>

          <div className="space-y-8">
            {levels.map((level, index) => (
              <Card key={index} className="border-border">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl mb-2">{level.title}</CardTitle>
                      <CardDescription className="text-base">{level.description}</CardDescription>
                    </div>
                    <div className="flex gap-2">
                      <Badge variant="secondary">{level.grades}</Badge>
                      <Badge variant="outline">{level.age}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Core Subjects:</h4>
                    <div className="flex flex-wrap gap-2">
                      {level.subjects.map((subject, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {subject}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose Our Schools</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Exceptional educational features that set our primary and secondary programs apart.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-border text-center">
                <CardHeader>
                  <div className="bg-primary/20 p-3 rounded-full w-fit mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Extracurricular Activities */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Beyond the Classroom</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Rich extracurricular programs that develop well-rounded students.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Trophy, title: "Sports Teams", desc: "Competitive athletics and team sports" },
              { icon: Palette, title: "Arts Programs", desc: "Visual arts, drama, and creative expression" },
              { icon: Music, title: "Music & Band", desc: "Orchestra, choir, and musical performances" },
              { icon: Globe, title: "Clubs & Societies", desc: "Academic clubs and special interest groups" },
            ].map((activity, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary/10 p-4 rounded-full w-fit mx-auto mb-4">
                  <activity.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{activity.title}</h3>
                <p className="text-sm text-muted-foreground">{activity.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
