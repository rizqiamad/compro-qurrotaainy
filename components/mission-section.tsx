import { Card, CardContent } from "@/components/ui/card"
import { Heart, Target, Lightbulb, Globe } from "lucide-react"

export function MissionSection() {
  const values = [
    {
      icon: Heart,
      title: "Community First",
      description:
        "We believe in the power of community and work to strengthen bonds between families, schools, and neighborhoods.",
    },
    {
      icon: Target,
      title: "Excellence in Education",
      description:
        "Our commitment to academic excellence ensures every student receives the highest quality education possible.",
    },
    {
      icon: Lightbulb,
      title: "Innovation & Growth",
      description: "We embrace innovative teaching methods and technologies to prepare students for the future.",
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description: "We foster global citizenship and cultural understanding in an increasingly connected world.",
    },
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Our Mission & Values</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We are committed to providing exceptional educational opportunities that empower students, strengthen
            communities, and create lasting positive change in the world.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="bg-card rounded-2xl p-8 lg:p-12 border border-border">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
              "Education is the most powerful weapon which you can use to change the world."
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Inspired by this vision, our foundation works tirelessly to ensure that quality education is accessible to
              all, regardless of background or circumstance. Through our network of schools and programs, we are
              building a brighter future for generations to come.
            </p>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold">EF</span>
              </div>
              <div className="text-left">
                <div className="font-semibold text-foreground">Dr. Sarah Johnson</div>
                <div className="text-sm text-muted-foreground">Foundation Director</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
