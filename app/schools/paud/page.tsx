import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Baby, Users, BookOpen, Heart, Star, Clock } from "lucide-react"

export default function EarlyChildhoodPage() {
  const programs = [
    {
      title: "Program PAUD",
      description: "Pendidikan Anak Usia Dini untuk usia 3–6 tahun",
      age: "3–6 tahun",
      duration: "Setengah / Sehari Penuh",
      features: [
        "Belajar sambil bermain",
        "Pengembangan karakter Islami",
        "Dasar membaca & berhitung",
        "Kreativitas & seni",
      ],
    },
    {
      title: "Kelompok Bermain",
      description: "Kegiatan bermain dan belajar untuk balita",
      age: "2–3 tahun",
      duration: "Setengah Hari",
      features: [
        "Stimulasi sensorik",
        "Perkembangan bahasa",
        "Latihan motorik halus & kasar",
        "Kemandirian dasar",
      ],
    },
    {
      title: "Program Parenting",
      description: "Pendampingan orang tua & anak usia dini",
      age: "0–2 tahun",
      duration: "2 Jam / Sesi",
      features: [
        "Aktivitas bonding orang tua & anak",
        "Tips pengasuhan Islami",
        "Stimulasi dini",
        "Komunitas orang tua",
      ],
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
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">Pendidikan Anak Usia Dini</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Membentuk fondasi kuat sejak dini melalui pendidikan yang penuh kasih, bermain, dan nilai Islami agar anak tumbuh ceria, mandiri, dan berakhlak mulia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Daftar Sekarang
              </Button>
              <Button size="lg" variant="outline">
                Jadwalkan Kunjungan
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Program PAUD Kami</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Program pembelajaran yang dirancang sesuai tahap perkembangan anak dengan pendekatan Islami dan menyenangkan.
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
                    <h4 className="font-semibold text-sm text-foreground">Fokus Kegiatan:</h4>
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
                    Lihat Detail
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
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Filosofi Pendidikan Kami</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/20 p-2 rounded-lg flex-shrink-0">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Lingkungan Penuh Kasih</h3>
                    <p className="text-muted-foreground">
                      Kami menciptakan suasana yang aman dan penuh kasih sayang sehingga anak merasa dicintai dan berani bereksplorasi.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/20 p-2 rounded-lg flex-shrink-0">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Belajar Melalui Bermain</h3>
                    <p className="text-muted-foreground">
                      Pembelajaran berbasis bermain yang mengembangkan kreativitas, rasa ingin tahu, dan kecerdasan sosial anak.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/20 p-2 rounded-lg flex-shrink-0">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Perkembangan Individu</h3>
                    <p className="text-muted-foreground">
                      Setiap anak unik, kami mendampingi sesuai minat, potensi, dan karakter agar tumbuh optimal dan percaya diri.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/happy-children-playing-and-learning-in-colorful-ea.png"
                alt="Anak-anak belajar sambil bermain"
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
