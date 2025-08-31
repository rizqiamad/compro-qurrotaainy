import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Users, Trophy, Microscope, Globe, Palette, Music } from "lucide-react"

export default function PrimarySchoolPage() {
  const levels = [
    {
      title: "Kelas Rendah",
      description: "Fokus pada dasar membaca, menulis, berhitung, dan pembiasaan ibadah.",
      grades: "Kelas 1-3",
      age: "6-9 tahun",
      subjects: ["Matematika", "Bahasa Indonesia", "IPA Dasar", "Pendidikan Agama", "Seni", "Olahraga"],
    },
    {
      title: "Kelas Tinggi",
      description: "Pengembangan ilmu pengetahuan, keterampilan, dan karakter Islami.",
      grades: "Kelas 4-6",
      age: "9-12 tahun",
      subjects: ["Matematika Lanjutan", "Bahasa Indonesia", "IPS", "IPA", "Bahasa Arab", "Al-Qur’an & Hadis"],
    },
  ]

  const features = [
    {
      icon: BookOpen,
      title: "Kurikulum Terpadu",
      description: "Menggabungkan kurikulum nasional dengan nilai-nilai Islam.",
    },
    {
      icon: Users,
      title: "Guru Profesional",
      description: "Tenaga pendidik berpengalaman dan berakhlak Islami.",
    },
    {
      icon: Trophy,
      title: "Program Tahfidz",
      description: "Pembiasaan membaca dan menghafal Al-Qur’an sejak dini.",
    },
    {
      icon: Microscope,
      title: "Ilmu Pengetahuan",
      description: "Pengenalan sains dan teknologi dengan pendekatan Islami.",
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
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Sekolah Dasar Islam
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Pendidikan dasar Islam yang membangun pondasi iman, ilmu, dan akhlak untuk masa depan anak.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Daftar Sekarang
              </Button>
              <Button size="lg" variant="outline">
                Kunjungi Sekolah
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Education Levels */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Jenjang Pendidikan</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tahapan pembelajaran yang disusun sesuai dengan perkembangan usia dan kebutuhan anak.
            </p>
          </div>

          {/* Ubah jadi grid 2 kolom */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {levels.map((level, index) => (
              <Card key={index} className="border-border h-full">
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
                    <h4 className="font-semibold text-foreground mb-3">Mata Pelajaran:</h4>
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
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Mengapa Memilih SD Islam Kami</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Lingkungan belajar Islami yang mendukung perkembangan akademik dan karakter anak.
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
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Kegiatan Ekstrakurikuler</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Program ekstrakurikuler yang memperkaya pengalaman belajar anak di luar kelas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Trophy, title: "Olahraga", desc: "Futsal, renang, bela diri, dan lainnya" },
              { icon: Palette, title: "Seni & Kreativitas", desc: "Lukis, tari, drama, dan kerajinan tangan" },
              { icon: Music, title: "Musik & Nasyid", desc: "Paduan suara, marawis, dan alat musik" },
              { icon: Globe, title: "Klub & Komunitas", desc: "Pramuka, sains, dan bahasa" },
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
