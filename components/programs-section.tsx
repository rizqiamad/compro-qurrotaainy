import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Laptop, Palette, Music, Beaker, Globe } from "lucide-react"

export function ProgramsSection() {
  const programs = [
    {
      icon: BookOpen,
      title: "Early Childhood Development",
      description: "Comprehensive programs for ages 3-5 focusing on foundational skills and social development.",
      features: ["Play-based learning", "Language development", "Social skills", "School readiness"],
      color: "bg-blue-500",
    },
    {
      icon: Laptop,
      title: "Digital Literacy Initiative",
      description: "Preparing students for the digital age with coding, robotics, and technology integration.",
      features: ["Coding bootcamps", "Robotics clubs", "Digital citizenship", "Tech mentorship"],
      color: "bg-purple-500",
    },
    {
      icon: Palette,
      title: "Creative Arts Program",
      description: "Fostering creativity through visual arts, performing arts, and multimedia expression.",
      features: ["Art studios", "Theater productions", "Digital media", "Art exhibitions"],
      color: "bg-pink-500",
    },
    {
      icon: Music,
      title: "Music & Performing Arts",
      description: "Comprehensive music education from beginner to advanced levels across all genres.",
      features: ["Orchestra", "Band programs", "Voice training", "Music theory"],
      color: "bg-orange-500",
    },
    {
      icon: Beaker,
      title: "STEM Excellence",
      description: "Advanced science, technology, engineering, and mathematics programs with hands-on learning.",
      features: ["Lab research", "Engineering projects", "Science fairs", "Math competitions"],
      color: "bg-green-500",
    },
    {
      icon: Globe,
      title: "Global Citizenship",
      description: "Developing cultural awareness and global perspectives through language and cultural exchange.",
      features: ["Language immersion", "Cultural exchange", "Model UN", "Global projects"],
      color: "bg-teal-500",
    },
  ]

  return (
    <section id="programs" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Specialized Programs</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our diverse range of specialized programs ensures every student can explore their passions and develop
            skills that will serve them throughout their lives.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader>
                <div className={`w-12 h-12 ${program.color} rounded-lg flex items-center justify-center mb-4`}>
                  <program.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl text-foreground">{program.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">{program.description}</p>
                <ul className="space-y-2 mb-6">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-card rounded-2xl p-8 lg:p-12 border border-border">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">Custom Program Development</h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              We work closely with communities to develop specialized programs that meet local needs and interests. Have
              an idea for a new program? We'd love to hear from you.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Propose a Program
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
