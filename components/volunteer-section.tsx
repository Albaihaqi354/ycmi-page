"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Heart, Users, Clock, Gift, CheckCircle } from "lucide-react"

export default function VolunteerSection() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const benefits = [
    {
      icon: Heart,
      title: "Dampak Nyata",
      description: "Berkontribusi langsung untuk perubahan positif di masyarakat",
    },
    {
      icon: Users,
      title: "Komunitas Solid",
      description: "Bergabung dengan komunitas relawan yang peduli dan suportif",
    },
    {
      icon: Clock,
      title: "Fleksibel",
      description: "Waktu kegiatan yang dapat disesuaikan dengan jadwal Anda",
    },
    {
      icon: Gift,
      title: "Pengalaman Berharga",
      description: "Mendapatkan pengalaman dan keterampilan baru yang bermanfaat",
    },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      setTimeout(() => {
        setIsSubmitted(false)
        setEmail("")
      }, 3000)
    }
  }

  return (
    <section id="relawan" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Bergabung Sebagai Relawan</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Jadilah bagian dari perubahan positif. Bersama-sama kita bisa memberikan dampak yang lebih besar untuk
              masyarakat yang membutuhkan
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Content */}
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">Mengapa Menjadi Relawan?</h3>

              <div className="space-y-6 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">{benefit.title}</h4>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-semibold text-primary mb-3">Kegiatan Relawan:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Mengajar di program pendidikan anak</li>
                  <li>• Membantu kegiatan kesehatan masyarakat</li>
                  <li>• Pendampingan program pemberdayaan</li>
                  <li>• Kegiatan penggalangan dana</li>
                  <li>• Program lingkungan dan konservasi</li>
                </ul>
              </div>
            </div>

            {/* Right Content - CTA Form */}
            <div>
              <Card className="shadow-xl border-0">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-secondary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-2">Daftar Sebagai Relawan</h3>
                    <p className="text-gray-600">Mulai perjalanan Anda sebagai agen perubahan</p>
                  </div>

                  {!isSubmitted ? (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <Input
                        type="email"
                        placeholder="Masukkan email Anda"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="h-12"
                      />
                      <Button type="submit" className="w-full h-12 bg-secondary hover:bg-secondary/90 text-lg">
                        Daftar Sekarang
                      </Button>
                    </form>
                  ) : (
                    <div className="text-center py-8">
                      <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                      <h4 className="text-lg font-semibold text-primary mb-2">Terima Kasih!</h4>
                      <p className="text-gray-600">Kami akan menghubungi Anda segera untuk informasi lebih lanjut</p>
                    </div>
                  )}

                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <p className="text-sm text-gray-500 text-center">
                      Dengan mendaftar, Anda menyetujui untuk menerima informasi tentang kegiatan relawan kami
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Donation CTA */}
          <div className="bg-gradient-to-r from-primary via-accent to-secondary rounded-2xl p-8 md:p-12 text-white text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Tidak Bisa Jadi Relawan? Anda Tetap Bisa Membantu!</h3>
            <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Setiap donasi, sekecil apapun, akan memberikan dampak besar bagi mereka yang membutuhkan
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8">
                Donasi Sekarang
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-secondary hover:bg-white hover:text-primary px-8"
              >
                Pelajari Program Kami
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
