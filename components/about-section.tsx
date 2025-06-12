"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, Target, Award } from "lucide-react"

export default function AboutSection() {
  const values = [
    {
      icon: Heart,
      title: "Kepedulian",
      description: "Kami berkomitmen untuk peduli terhadap sesama dan lingkungan",
    },
    {
      icon: Users,
      title: "Kebersamaan",
      description: "Membangun komunitas yang solid dan saling mendukung",
    },
    {
      icon: Target,
      title: "Fokus",
      description: "Bekerja dengan tujuan yang jelas dan terukur",
    },
    {
      icon: Award,
      title: "Integritas",
      description: "Menjaga kepercayaan dengan transparansi dan akuntabilitas",
    },
  ]

  return (
    <section id="tentang" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Tentang YCMI</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Didirikan pada tahun 2025, Yayasan Campoes Masyarakat Indonesia telah menjadi jembatan antara kepedulian dan aksi nyata untuk
              membantu masyarakat yang membutuhkan
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Story */}
             <div>
              <h3 className="text-2xl font-bold text-primary mb-6">Cerita Kami</h3>
              <div className="space-y-4 text-gray-700 text-justify">
                <p>
                  Yayasan Campoes Masyarakat Indonesia lahir dari kepedulian sekelompok individu yang melihat banyaknya
                  anak-anak kurang mampu yang tidak mendapatkan akses pendidikan dan kesehatan yang layak.
                </p>
                <p>
                  Dengan semangat gotong royong dan komitmen untuk menciptakan perubahan positif, kami memulai dengan
                  program-program kecil di komunitas lokal dan terus berkembang hingga saat ini.
                </p>
                <p>
                  Pada hari ini, kami bangga telah membantu ribuan anak dan keluarga melalui berbagai program
                  pendidikan, kesehatan, dan pemberdayaan masyarakat.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <img
                src="./image/kosambi.jpg?height=400&width=600"
                alt="Tim Yayasan Harapan"
                className="rounded-lg shadow-lg w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg"></div>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="border-l-4 border-l-secondary">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-4">Visi Kami</h3>
                <p className="text-gray-700 text-justify">
                  Menjadi yayasan terdepan dalam menciptakan masyarakat yang sejahtera, berdaya, dan memiliki akses yang
                  sama terhadap pendidikan dan kesehatan berkualitas.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-accent">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-4">Misi Kami</h3>
                <ul className="text-gray-700 space-y-2 text-justify">
                  <li>• Menyediakan akses pendidikan berkualitas untuk anak-anak kurang mampu</li>
                  <li>• Meningkatkan kesehatan masyarakat melalui program-program kesehatan</li>
                  <li>• Memberdayakan masyarakat agar mandiri secara ekonomi</li>
                  <li>• Melestarikan lingkungan untuk generasi yang akan datang</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Values */}
          <div>
            <h3 className="text-2xl font-bold text-primary text-center mb-12">Nilai-Nilai Kami</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-8 h-8 text-secondary" />
                    </div>
                    <h4 className="text-lg font-semibold text-primary mb-2">{value.title}</h4>
                    <p className="text-gray-600 text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
