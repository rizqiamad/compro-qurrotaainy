import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Users, Award, Briefcase, Globe, Laptop, FlaskConical } from "lucide-react"

export default function HigherEducationPage() {
  const programs = [
    {
      title: "Bachelor's Degree Programs",
      description: "Comprehensive undergraduate education across multiple disciplines",
      duration: "3-4 years",
      type: "Undergraduate",
      fields: [
        "Business Administration",
        "Computer Science",
        "Education",
        "Engineering",
        "Liberal Arts",
        "Health Sciences",
      ],
    },
    {
      title: "Master's Degree Programs",
      description: "Advanced graduate studies for professional development",
      duration: "1-2 years",
      type: "Graduate",
      fields: ["MBA", "Master of Education", "Master of Science", "Master of Arts", "Public Administration"],
    },
    {
      title: "Professional Certificates",
      description: "Specialized training for career advancement",
      duration: "6 months - 1 year",
      type: "Certificate",
      fields: [
        "Digital Marketing",
        "Project Management",
        "Data Analytics",
        "Teaching Certification",
        "Healthcare Management",
      ],
    },
  ]

  const features = [
    {
      icon: Users,
      title: "Expert Faculty",
      description: "Learn from industry professionals and academic experts",
    },
    {
      icon: Laptop,
      title: "Modern Facilities",
      description: "State-of-the-art labs, libraries, and learning spaces",
    },
    {
      icon: Briefcase,
      title: "Career Services",
      description: "Job placement assistance and career counseling",
    },
    {
      icon: Globe,
      title: "Global Partnerships",
      description: "International exchange and collaboration opportunities",
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
                <GraduationCap className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">Higher Education</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Advanced educational opportunities that prepare students for leadership roles and professional excellence
              in their chosen fields.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Apply Today
              </Button>
              <Button size="lg" variant="outline">
                Request Information
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Academic Programs</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Diverse educational pathways designed to meet your academic and career goals.
            </p>
          </div>

          <div className="space-y-8">
            {programs.map((program, index) => (
              <Card key={index} className="border-border">
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <CardTitle className="text-2xl">{program.title}</CardTitle>
                        <Badge variant="secondary">{program.type}</Badge>
                      </div>
                      <CardDescription className="text-base mb-3">{program.description}</CardDescription>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Award className="h-4 w-4 mr-1" />
                        Duration: {program.duration}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Available Fields of Study:</h4>
                    <div className="flex flex-wrap gap-2">
                      {program.fields.map((field, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {field}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button className="mt-6 bg-transparent" variant="outline">
                    Learn More About This Program
                  </Button>
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
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Excellence in Higher Education</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive support and resources for your academic journey.
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

      {/* Research & Innovation */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Research & Innovation</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our higher education institutions are centers of research excellence, contributing to knowledge
                advancement and societal progress.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/20 p-2 rounded-lg flex-shrink-0">
                    <FlaskConical className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Research Centers</h3>
                    <p className="text-muted-foreground">
                      Specialized research facilities focusing on cutting-edge discoveries and innovations.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/20 p-2 rounded-lg flex-shrink-0">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Student Research</h3>
                    <p className="text-muted-foreground">
                      Opportunities for students to participate in meaningful research projects.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/20 p-2 rounded-lg flex-shrink-0">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Global Impact</h3>
                    <p className="text-muted-foreground">
                      Research that addresses global challenges and contributes to sustainable development.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/university-students-conducting-research-in-modern-.png"
                alt="Students conducting research"
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
