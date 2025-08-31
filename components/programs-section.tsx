import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, Star, ExternalLink } from "lucide-react"
import Link from "next/link"

export function ProgramsSection() {
  const programs = [
    {
      name: "Pesantren Kilat Ramadhan",
      // participants: 200,
      // rating: 5.0,
      tags: ["Ibadah", "Akhlak", "Kebersamaan"],
      image: "/program-pesantren-kilat.png",
      description:
        "Kegiatan intensif selama bulan Ramadhan untuk memperkuat iman, ibadah, dan pembentukan akhlak mulia.",
      href: "/"
    },
    {
      name: "Ekstrakurikuler Memanah",
      // participants: 150,
      // rating: 4.9,
      tags: ["Olahraga Sunnah", "Fisik", "Fokus"],
      image: "/program-memanah.png",
      description:
        "Melatih keterampilan memanah sebagai olahraga sunnah yang menumbuhkan konsentrasi, kekuatan, dan disiplin.",
      href: "/"
    },
    {
      name: "Tahfidz Al-Qur’an",
      // participants: 180,
      // rating: 5.0,
      tags: ["Qur’an", "Spiritual", "Kedisiplinan"],
      image: "/program-tahfidz.png",
      description:
        "Program unggulan menghafal Al-Qur’an dengan metode yang menyenangkan dan pendampingan guru berpengalaman.",
      href: "/"
    },
    {
      name: "Robotik & Sains",
      // participants: 120,
      // rating: 4.8,
      tags: ["Teknologi", "Inovasi", "Kreativitas"],
      image: "/program-robotik.png",
      description:
        "Mengembangkan keterampilan abad 21 dengan pembelajaran robotik, eksperimen sains, dan pemecahan masalah kreatif.",
      href: "/"
    },
  ]

  return (
    <section id="programs" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Program Unggulan Sekolah
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Kami menghadirkan berbagai program untuk mendukung tumbuh kembang anak secara holistik —
            mencakup aspek spiritual, akademik, dan keterampilan hidup.
          </p>
        </div>

        {/* Program Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <Card
              key={index}
              className="bg-card border-border overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={"/placeholder-3vjdm.png"}
                  alt={program.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl text-foreground">{program.name}</CardTitle>
                  {/* <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium text-foreground">{program.rating}</span>
                  </div> */}
                </div>
                {/* <div className="flex items-center text-muted-foreground text-sm space-x-4">
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>{program.participants.toLocaleString()} peserta</span>
                  </div>
                </div> */}
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {program.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {program.tags.map((tag, idx) => (
                    <Badge key={idx} variant="secondary" className="bg-primary/10 text-primary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Link href={program.href}>
                  <Button
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent cursor-pointer"
                  >
                    Selengkapnya
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Lihat Semua Program
          </Button>
        </div>
      </div>
    </section>
  )
}
