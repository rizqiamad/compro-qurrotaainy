import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowRight, ExternalLink } from "lucide-react"

export function NewsSection() {
  const news = [
    {
      title: "New STEM Lab Opens at Innovation Learning Center",
      excerpt:
        "State-of-the-art laboratory facility will serve 600+ students with cutting-edge equipment and technology.",
      date: "2024-01-15",
      category: "Facilities",
      image: "/placeholder-x8bta.png",
      featured: true,
    },
    {
      title: "Summit High School Robotics Team Wins State Championship",
      excerpt: "Our robotics team secured first place in the state competition, advancing to nationals.",
      date: "2024-01-10",
      category: "Achievement",
      image: "/placeholder-1k6fb.png",
      featured: false,
    },
    {
      title: "Community Garden Project Launches at Greenwood Elementary",
      excerpt: "Students will learn about sustainability and nutrition through hands-on gardening experience.",
      date: "2024-01-08",
      category: "Programs",
      image: "/placeholder-jjq82.png",
      featured: false,
    },
    {
      title: "Annual Scholarship Program Awards $500K to Local Students",
      excerpt: "Foundation announces largest scholarship distribution in its history, supporting 150 students.",
      date: "2024-01-05",
      category: "Scholarships",
      image: "/placeholder-ijv98.png",
      featured: false,
    },
  ]

  const events = [
    {
      title: "Open House Weekend",
      date: "2024-02-15",
      time: "10:00 AM - 4:00 PM",
      location: "All Campuses",
    },
    {
      title: "Science Fair Exhibition",
      date: "2024-02-22",
      time: "6:00 PM - 8:00 PM",
      location: "Summit High School",
    },
    {
      title: "Community Art Show",
      date: "2024-03-01",
      time: "7:00 PM - 9:00 PM",
      location: "Innovation Learning Center",
    },
  ]

  return (
    <section id="news" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Latest News & Events</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Stay updated with the latest developments, achievements, and upcoming events across our educational
            foundation network.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* News Articles */}
          <div className="lg:col-span-2">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-bold text-foreground">Recent News</h3>
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                View All News
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="space-y-8">
              {news.map((article, index) => (
                <Card
                  key={index}
                  className={`bg-card border-border hover:shadow-lg transition-shadow duration-300 ${article.featured ? "ring-2 ring-primary/20" : ""}`}
                >
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <div className="aspect-video md:aspect-square overflow-hidden rounded-t-lg md:rounded-l-lg md:rounded-t-none">
                        <img
                          src={article.image || "/placeholder.svg"}
                          alt={article.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="secondary" className="bg-primary/10 text-primary">
                            {article.category}
                          </Badge>
                          {article.featured && <Badge className="bg-accent text-accent-foreground">Featured</Badge>}
                        </div>
                        <CardTitle className="text-xl text-foreground hover:text-primary transition-colors cursor-pointer">
                          {article.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4 leading-relaxed">{article.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4 mr-2" />
                            {new Date(article.date).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-primary hover:text-primary-foreground hover:bg-primary"
                          >
                            Read More
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Upcoming Events */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8">Upcoming Events</h3>
            <div className="space-y-6">
              {events.map((event, index) => (
                <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-foreground mb-3">{event.title}</h4>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        {new Date(event.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </div>
                      <div className="flex items-center">
                        <div className="w-4 h-4 mr-2 flex items-center justify-center">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                        </div>
                        {event.time}
                      </div>
                      <div className="flex items-center">
                        <div className="w-4 h-4 mr-2 flex items-center justify-center">
                          <div className="w-2 h-2 bg-accent rounded-full"></div>
                        </div>
                        {event.location}
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full mt-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                    >
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8">
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                View Full Calendar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
