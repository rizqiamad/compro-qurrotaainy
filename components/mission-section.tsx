import { Card, CardContent } from "@/components/ui/card"
import { Heart, Target, Lightbulb, Globe } from "lucide-react"

export function MissionSection() {
  const values = [
    {
      icon: Heart,
      title: "Kebersamaan & Kepedulian",
      description:
        "Kami percaya pada kekuatan kebersamaan, membangun hubungan erat antara keluarga, sekolah, dan masyarakat.",
    },
    {
      icon: Target,
      title: "Unggul dalam Pendidikan",
      description:
        "Komitmen kami terhadap mutu pendidikan memastikan setiap anak mendapatkan pembelajaran terbaik sejak dini.",
    },
    {
      icon: Lightbulb,
      title: "Inovasi & Kreativitas",
      description:
        "Kami mengutamakan metode belajar inovatif dan menyenangkan untuk menumbuhkan semangat belajar anak.",
    },
    {
      icon: Globe,
      title: "Wawasan Global & Akhlak",
      description:
        "Kami menanamkan nilai akhlak mulia sekaligus membekali anak dengan wawasan dunia yang semakin terhubung.",
    },
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Visi & Nilai Kami
          </h2>
          <p className="sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Kami berkomitmen menghadirkan pendidikan berkualitas yang membentuk generasi cerdas, berakhlak,
            dan peduli lingkungan. Bersama orang tua dan masyarakat, kami ingin menciptakan masa depan
            yang lebih baik untuk anak-anak bangsa.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-6 text-center flex flex-col items-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-xs">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="bg-card rounded-2xl p-8 lg:p-12 border border-border">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-6">
              "Pendidikan adalah jalan untuk menanamkan ilmu, membentuk akhlak, dan membangun masa depan yang lebih baik."
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Terinspirasi oleh nilai tersebut, yayasan kami bekerja keras untuk memastikan pendidikan berkualitas
              dapat diakses oleh semua anak. Melalui sekolah dan program yang kami kembangkan,
              kami percaya setiap langkah kecil hari ini akan menjadi fondasi masa depan yang gemilang.
            </p>

            {/* Founder / Leader Info */}
            <div className="flex flex-col sm:flex-row items-center sm:items-center sm:justify-center gap-3">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shrink-0">
                <span className="text-primary-foreground font-bold">YA</span>
              </div>
              <div className="text-center sm:text-left">
                <div className="font-semibold text-foreground text-sm sm:text-base">
                  Pimpinan Yayasan
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">
                  Yayasan Qurrotaainy
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
