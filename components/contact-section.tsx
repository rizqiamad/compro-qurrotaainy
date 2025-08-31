import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function ContactSection() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Alamat Sekolah",
      details: ["Jl. Pendidikan No. 123", "Kecamatan Belajar, Kota Cerdas"],
      color: "bg-blue-500",
    },
    {
      icon: Phone,
      title: "Telepon",
      details: ["(021) 555-1234", "0812-3456-7890 (Admin Pendaftaran)"],
      color: "bg-green-500",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@sekolahku.sch.id", "ppdb@sekolahku.sch.id"],
      color: "bg-purple-500",
    },
    {
      icon: Clock,
      title: "Jam Operasional",
      details: ["Senin - Jumat: 07.30 - 16.00", "Sabtu: 08.00 - 12.00"],
      color: "bg-orange-500",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Hubungi Kami</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ada pertanyaan tentang jenjang pendidikan, program unggulan, atau pendaftaran siswa baru?
            Tim kami siap membantu Anda menemukan informasi yang tepat.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-foreground mb-8">Informasi Kontak</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="bg-card border-border">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div
                        className={`${info.color} w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0`}
                      >
                        <info.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-2">{info.title}</h4>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-muted-foreground text-sm leading-relaxed">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Kirim Pesan</CardTitle>
                <p className="text-muted-foreground">
                  Isi formulir berikut untuk pertanyaan seputar program, pendaftaran siswa baru, atau kerjasama.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="parentName" className="block text-sm font-medium text-foreground mb-2">
                      Nama Orang Tua / Wali
                    </label>
                    <Input id="parentName" placeholder="Masukkan nama Anda" className="bg-input border-border" />
                  </div>
                  <div>
                    <label htmlFor="studentName" className="block text-sm font-medium text-foreground mb-2">
                      Nama Calon Siswa
                    </label>
                    <Input id="studentName" placeholder="Masukkan nama anak" className="bg-input border-border" />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Masukkan email aktif"
                    className="bg-input border-border"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Nomor Telepon / WhatsApp
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Masukkan nomor telepon"
                    className="bg-input border-border"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Keperluan
                  </label>
                  <Input id="subject" placeholder="Contoh: Pendaftaran SD, Informasi Biaya" className="bg-input border-border" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Pesan
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tulis pertanyaan atau kebutuhan Anda di sini..."
                    rows={6}
                    className="bg-input border-border resize-none"
                  />
                </div>

                <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Kirim Pesan
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  Admin kami akan merespon dalam 1x24 jam pada hari kerja.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <Card className="bg-card border-border overflow-hidden">
            <div className="aspect-video bg-muted flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-foreground mb-2">Lokasi Sekolah</h4>
                <p className="text-muted-foreground">
                  Integrasi Google Maps dapat ditambahkan di sini untuk memudahkan orang tua menemukan lokasi sekolah.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
