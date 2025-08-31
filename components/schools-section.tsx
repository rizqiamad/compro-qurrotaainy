import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Baby, School, Book } from "lucide-react"

export function SchoolsSection() {
  const levels = [
    {
      icon: Baby,
      title: "PAUD (Pendidikan Anak Usia Dini)",
      description:
        "Fokus pada perkembangan motorik, sosial, emosional, dan kognitif anak usia dini melalui pendekatan bermain yang edukatif.",
      features: ["Belajar sambil bermain", "Pembiasaan ibadah", "Motorik halus & kasar", "Interaksi sosial"],
      color: "bg-pink-500",
    },
    {
      icon: School,
      title: "Taman Kanak-Kanak",
      description:
        "Mengembangkan kemandirian, kreativitas, serta kesiapan akademik dasar anak untuk melanjutkan ke sekolah dasar.",
      features: ["Calistung (membaca, menulis, berhitung)", "Seni & kreativitas", "Kegiatan outdoor", "Pembiasaan disiplin"],
      color: "bg-yellow-500",
    },
    {
      icon: Book,
      title: "Sekolah Dasar",
      description:
        "Pembelajaran terstruktur yang menekankan penguasaan akademik dasar, pembentukan karakter, serta keterampilan abad 21.",
      features: ["Kurikulum nasional", "Tahfidz & pendidikan karakter", "STEM & literasi digital", "Ekstrakurikuler variatif"],
      color: "bg-blue-500",
    },
  ]

  return (
    <section id="levels" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Jenjang Pendidikan</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Kami menyediakan layanan pendidikan yang berkesinambungan mulai dari PAUD, Taman Kanak-Kanak, hingga
            Sekolah Dasar untuk mendukung perkembangan anak secara optimal.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {levels.map((level, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader>
                <div className={`w-12 h-12 ${level.color} rounded-lg flex items-center justify-center mb-4`}>
                  <level.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl text-foreground">{level.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">{level.description}</p>
                <ul className="space-y-2 mb-6">
                  {level.features.map((feature, idx) => (
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
                  Pelajari Lebih Lanjut
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
