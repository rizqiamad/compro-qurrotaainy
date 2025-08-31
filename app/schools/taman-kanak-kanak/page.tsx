import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Users, Heart, Moon, Star, Music, Palette } from "lucide-react"

export default function KinderGartenPage() {
  const programs = [
    {
      title: "Pembelajaran Islami",
      description: "Pengenalan doa-doa harian, surat pendek, dan akhlak mulia sejak usia dini",
      duration: "Setiap Hari",
      type: "Spiritual",
      fields: ["Doa Harian", "Surat Pendek", "Hadits Pilihan", "Adab Islami"],
    },
    {
      title: "Pengembangan Karakter",
      description: "Membentuk anak menjadi pribadi yang percaya diri, mandiri, dan berakhlak baik",
      duration: "Sepanjang Tahun",
      type: "Character Building",
      fields: ["Kejujuran", "Tanggung Jawab", "Tolong-Menolong", "Disiplin"],
    },
    {
      title: "Kreativitas & Bermain",
      description: "Belajar melalui permainan edukatif, seni, dan kegiatan kreatif",
      duration: "Setiap Minggu",
      type: "Creative",
      fields: ["Menggambar", "Bernyanyi Islami", "Kerajinan Tangan", "Permainan Edukatif"],
    },
  ]

  const features = [
    {
      icon: BookOpen,
      title: "Kurikulum Islami",
      description: "Mengintegrasikan ilmu pengetahuan dengan nilai iman dan takwa",
    },
    {
      icon: Users,
      title: "Guru Profesional",
      description: "Pendidik yang sabar, hangat, dan berkompeten dalam mendampingi anak",
    },
    {
      icon: Heart,
      title: "Lingkungan Nyaman",
      description: "Suasana belajar yang aman, islami, dan menyenangkan",
    },
    {
      icon: Moon,
      title: "Pembiasaan Ibadah",
      description: "Shalat berjamaah, doa harian, dan adab islami dalam kehidupan sehari-hari",
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
                <Star className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Taman Kanak-Kanak Islam
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Membimbing anak dengan kasih sayang dan nilai islami,
              membentuk generasi berakhlak mulia, cerdas, dan penuh keceriaan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Daftar Sekarang
              </Button>
              <Button size="lg" variant="outline">
                Lihat Program
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Program TK Islam
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Kegiatan pembelajaran terpadu yang menanamkan nilai agama, karakter, dan kreativitas anak.
            </p>
          </div>

          {/* Ubah ke grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <Card key={index} className="border-border h-full">
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <CardTitle className="text-2xl">{program.title}</CardTitle>
                        <Badge variant="secondary">{program.type}</Badge>
                      </div>
                      <CardDescription className="text-base">{program.description}</CardDescription>
                      {/* <div className="flex items-center text-sm text-muted-foreground">
                        📅 Durasi: {program.duration}
                      </div> */}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Fokus Pembelajaran:</h4>
                    <div className="flex flex-wrap gap-2">
                      {program.fields.map((field, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {field}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  {/* <Button className="mt-6" variant="outline">
                    Pelajari Program Ini
                  </Button> */}
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
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Mengapa Memilih TK Islam Kami?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Lingkungan islami yang mendukung tumbuh kembang anak secara optimal.
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

      {/* Activities Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Kegiatan Harian & Ekstrakurikuler
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Aktivitas yang dirancang untuk mengasah kecerdasan, spiritualitas, dan kreativitas anak.
              </p>
              <ul className="space-y-4 text-muted-foreground">
                <li>🌙 Shalat berjamaah & doa harian</li>
                <li>📖 Hafalan surat-surat pendek</li>
                <li>🎨 Seni dan kreativitas islami</li>
                <li>🎵 Lagu-lagu islami anak</li>
                <li>🌳 Outbound & permainan edukatif</li>
              </ul>
            </div>
            <div className="relative">
              <img
                src="/placeholder-1k6fb.png"
                alt="Kegiatan anak TK Islam"
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
