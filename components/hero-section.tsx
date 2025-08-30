import { Button } from "@/components/ui/button"
import { ArrowRight, Users, BookOpen, Award, GraduationCap } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-background to-muted py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Konten */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-3xl lg:text-4xl xl:text-6xl font-bold text-foreground leading-tight">
                Membangun Masa Depan Cerah
                <span className="text-primary block">Bersama dari PAUD hingga SD</span>
              </h1>
              <p className="text-base lg:text-lg text-muted-foreground leading-relaxed max-w-xl">
                Yayasan kami berkomitmen mendampingi tumbuh kembang anak sejak usia dini hingga sekolah dasar.
                Dengan tenaga pendidik profesional, program unggulan, dan lingkungan belajar yang menyenangkan,
                kami percaya setiap anak berhak mendapatkan pendidikan berkualitas sejak langkah pertamanya.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href={'/#about'}>
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground cursor-pointer">
                  Jelajahi Sekolah Kami
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent cursor-pointer"
              >
                Kenali Visi & Misi Kami
              </Button>
            </div>

            {/* Statistik */}
            {/* <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground">1,200+</div>
                <div className="text-sm text-muted-foreground">Anak Didik</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground">10+</div>
                <div className="text-sm text-muted-foreground">Sekolah & Pusat Belajar</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground">95%</div>
                <div className="text-sm text-muted-foreground">Tingkat Kelulusan</div>
              </div>
            </div> */}
          </div>

          {/* Gambar */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-muted">
              <img
                src="/placeholder-3vjdm.png"
                alt="Anak-anak belajar bersama"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Kartu mengambang */}
            {/* <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-lg border border-border">
              <div className="flex items-center space-x-3">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="text-lg font-semibold text-foreground">98%</div>
                  <div className="text-sm text-muted-foreground">Kepuasan Orang Tua</div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}
