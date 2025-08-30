import Link from "next/link"
import { GraduationCap, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"

export function Footer() {
  const footerLinks = {
    "Tentang Kami": [
      { name: "Visi & Misi", href: "#" },
      { name: "Struktur Kepengurusan", href: "#" },
      { name: "Laporan Tahunan", href: "#" },
      { name: "Karier", href: "#" },
    ],
    Sekolah: [
      { name: "PAUD", href: "#" },
      { name: "TK", href: "#" },
      { name: "SD", href: "#" },
      { name: "Pusat Kegiatan Belajar", href: "#" },
    ],
    Program: [
      { name: "Program Akademik", href: "#" },
      { name: "Ekstrakurikuler", href: "#" },
      { name: "Kegiatan Liburan", href: "#" },
      { name: "Pembelajaran Orang Tua", href: "#" },
    ],
    SumberDaya: [
      { name: "Portal Orang Tua", href: "#" },
      { name: "Sumber Belajar Siswa", href: "#" },
      { name: "Perpustakaan", href: "#" },
      { name: "Layanan Dukungan", href: "#" },
    ],
  }

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
    { name: "YouTube", icon: Youtube, href: "#" },
  ]

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-primary p-2 rounded-lg">
                <GraduationCap className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="sm:text-xl font-bold text-foreground">Yayasan Qurrotaainy</h3>
                <p className="text-xs text-muted-foreground">SIT Qurrotaa'yun Sukabumi</p>
              </div>
            </div>
            <p className="text-[0.9rem] sm:text-base text-muted-foreground leading-relaxed mb-6">
              Kami berdedikasi memberikan layanan pendidikan terbaik yang
              membentuk generasi berakhlak mulia, cerdas, dan peduli terhadap lingkungan.
              Bersama orang tua dan masyarakat, kami berupaya menciptakan perubahan positif yang berkelanjutan.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="bg-muted hover:bg-primary text-muted-foreground hover:text-primary-foreground w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-200"
                >
                  <social.icon className="h-5 w-5" />
                  <span className="sr-only">{social.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="sm:text-lg font-semibold text-foreground mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-muted-foreground text-xs sm:text-sm">
              © {new Date().getFullYear()} Yayasan Qurrotaainy. All Rights Reserved.
            </div>
            <div className="flex flex-wrap gap-6 text-xs sm:text-sm">
              <Link href="#privacy" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                Kebijakan Privasi
              </Link>
              <Link href="#terms" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                Syarat & Ketentuan
              </Link>
              <Link
                href="#accessibility"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Aksesibilitas
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
