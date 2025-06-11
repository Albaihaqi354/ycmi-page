"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: "Sarah Wijaya",
      role: "Donatur",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      comment:
        "Yayasan Campoes Masyarakata Indonesia benar-benar transparan dalam mengelola donasi. Saya bisa melihat langsung dampak dari setiap rupiah yang saya berikan. Terima kasih telah menjadi jembatan kebaikan!",
    },
    {
      name: "Ahmad Rizki",
      role: "Relawan",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      comment:
        "Bergabung sebagai relawan di Yayasan Campoes Masyarakata Indonesia adalah pengalaman yang mengubah hidup saya. Melihat senyum anak-anak yang terbantu membuat semua usaha terasa sangat berharga.",
    },
    {
      name: "Ibu Siti Nurhaliza",
      role: "Penerima Manfaat",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      comment:
        "Berkat bantuan beasiswa dari Yayasan Campoes Masyarakata Indonesia, anak saya bisa melanjutkan sekolah. Sekarang dia sudah kuliah dan bercita-cita membantu anak-anak lain seperti dirinya dulu.",
    },
    {
      name: "Dr. Budi Santoso",
      role: "Mitra Kesehatan",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      comment:
        "Kerjasama dengan Yayasan Campoes Masyarakata Indonesia dalam program kesehatan gratis sangat profesional. Mereka benar-benar peduli dengan kualitas layanan untuk masyarakat kurang mampu.",
    },
    {
      name: "Maya Sari",
      role: "Donatur Rutin",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      comment:
        "Sudah 3 tahun saya rutin berdonasi di Yayasan Campoes Masyarakata Indonesia. Laporan yang diberikan selalu detail dan saya bisa merasakan kepuasan batin karena ikut berkontribusi untuk sesama.",
    },
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section id="testimoni" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Apa Kata Mereka</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Testimoni dari donatur, relawan, dan penerima manfaat yang telah merasakan dampak positif dari
              program-program kami
            </p>
          </div>

          {/* Testimonial Carousel */}
          <div className="relative">
            <Card className="max-w-4xl mx-auto shadow-xl border-0">
              <CardContent className="p-8 md:p-12">
                <div className="text-center">
                  {/* Quote Icon */}
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Quote className="w-8 h-8 text-secondary" />
                  </div>

                  {/* Rating */}
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Comment */}
                  <blockquote className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                    "{testimonials[currentIndex].comment}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center justify-center space-x-4">
                    <img
                      src={testimonials[currentIndex].image || "/placeholder.svg"}
                      alt={testimonials[currentIndex].name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="text-left">
                      <div className="font-semibold text-primary text-lg">{testimonials[currentIndex].name}</div>
                      <div className="text-gray-600">{testimonials[currentIndex].role}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation Buttons */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg hover:bg-gray-50"
              onClick={prevTestimonial}
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg hover:bg-gray-50"
              onClick={nextTestimonial}
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? "bg-secondary" : "bg-gray-300"
                }`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-gray-200">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">98%</div>
              <div className="text-gray-600">Kepuasan Donatur</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">500+</div>
              <div className="text-gray-600">Testimoni Positif</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">4.9/5</div>
              <div className="text-gray-600">Rating Kepercayaan</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">100%</div>
              <div className="text-gray-600">Transparansi</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
