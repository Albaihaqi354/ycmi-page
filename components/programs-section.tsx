"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GraduationCap, Heart, Users, Leaf, ArrowRight } from "lucide-react"

export default function ProgramsSection() {
  const programs = [
    {
      icon: GraduationCap,
      title: "Program Pendidikan",
      description:
        "Memberikan akses pendidikan berkualitas melalui beasiswa, bantuan sekolah, dan program literasi untuk anak-anak kurang mampu.",
      features: [
        "Beasiswa Pendidikan",
        "Bantuan Seragam & Alat Tulis",
        "Program Bimbingan Belajar",
        "Perpustakaan Keliling",
      ],
      color: "bg-blue-500",
    },
    {
      icon: Heart,
      title: "Program Kesehatan",
      description:
        "Meningkatkan akses layanan kesehatan melalui klinik gratis, program gizi, dan edukasi kesehatan masyarakat.",
      features: ["Klinik Kesehatan Gratis", "Program Gizi Anak", "Vaksinasi Massal", "Edukasi Kesehatan"],
      color: "bg-red-500",
    },
    {
      icon: Users,
      title: "Program Sosial",
      description:
        "Memberdayakan masyarakat melalui pelatihan keterampilan, bantuan modal usaha, dan program pemberdayaan ekonomi.",
      features: ["Pelatihan Keterampilan", "Bantuan Modal Usaha", "Program Pemberdayaan Perempuan", "Bantuan Darurat"],
      color: "bg-green-500",
    },
    {
      icon: Leaf,
      title: "Program Lingkungan",
      description:
        "Melestarikan lingkungan melalui program penghijauan, pengelolaan sampah, dan edukasi lingkungan hidup.",
      features: ["Program Penghijauan", "Bank Sampah", "Edukasi Lingkungan", "Konservasi Air"],
      color: "bg-emerald-500",
    },
  ]

  return (
    <section id="program" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Program Unggulan Kami</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Berbagai program yang dirancang untuk memberikan dampak positif dan berkelanjutan bagi masyarakat
            </p>
          </div>

          {/* Programs Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div
                      className={`w-16 h-16 ${program.color} rounded-lg flex items-center justify-center flex-shrink-0`}
                    >
                      <program.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-2">{program.title}</h3>
                      <p className="text-gray-600">{program.description}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-primary mb-3">Kegiatan Utama:</h4>
                    <ul className="space-y-2">
                      {program.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-secondary group-hover:text-white group-hover:border-secondary transition-all"
                  >
                    Pelajari Lebih Lanjut
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ingin Mendukung Program Kami?</h3>
              <p className="text-lg mb-6 opacity-90">
                Setiap kontribusi Anda akan memberikan dampak nyata bagi mereka yang membutuhkan
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90">
                  Donasi Sekarang
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-secondary hover:bg-white hover:text-primary"
                >
                  Jadi Relawan
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
