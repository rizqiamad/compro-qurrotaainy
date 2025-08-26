import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Quote, Star, TrendingUp, Award, Users, BookOpen } from "lucide-react"

export function ImpactSection() {
  const testimonials = [
    {
      name: "Maria Rodriguez",
      role: "Parent",
      school: "Greenwood Elementary",
      content:
        "The foundation has transformed my daughter's love for learning. The teachers are incredible and the programs are exactly what she needed to thrive.",
      rating: 5,
    },
    {
      name: "James Chen",
      role: "Graduate",
      school: "Summit High School",
      content:
        "The robotics program at Summit prepared me for my engineering degree. I'm now working at a top tech company thanks to the foundation they provided.",
      rating: 5,
    },
    {
      name: "Dr. Emily Watson",
      role: "Community Leader",
      school: "Innovation Learning Center",
      content:
        "This foundation has been a cornerstone of our community's growth. The impact on local families and economic development has been remarkable.",
      rating: 5,
    },
  ]

  const achievements = [
    {
      icon: TrendingUp,
      value: "98%",
      label: "College Acceptance Rate",
      description: "Our graduates consistently achieve high college acceptance rates",
    },
    {
      icon: Award,
      value: "150+",
      label: "Academic Awards",
      description: "Recognition for excellence in education and innovation",
    },
    {
      icon: Users,
      value: "2,500+",
      label: "Alumni Network",
      description: "Successful graduates making a difference worldwide",
    },
    {
      icon: BookOpen,
      value: "50+",
      label: "Community Programs",
      description: "Ongoing programs serving families and communities",
    },
  ]

  return (
    <section id="impact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Our Impact & Success Stories</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            See how our educational programs are making a real difference in the lives of students, families, and
            communities across our network.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <Card
              key={index}
              className="bg-card border-border text-center hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-6">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{achievement.value}</div>
                <div className="text-lg font-semibold text-foreground mb-2">{achievement.label}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">{achievement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground text-center mb-12">What Our Community Says</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Quote className="h-6 w-6 text-primary mr-2" />
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                  <div className="border-t border-border pt-4">
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-sm text-primary">{testimonial.school}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-primary rounded-2xl p-8 lg:p-12 text-center">
          <h3 className="text-2xl lg:text-3xl font-bold text-primary-foreground mb-4">Be Part of Our Success Story</h3>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join our community of educators, students, and families working together to create brighter futures through
            quality education and innovative programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              Apply for Enrollment
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
            >
              Become a Volunteer
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
