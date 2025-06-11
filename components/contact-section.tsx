"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const contactInfo = [
    {
      icon: MapPin,
      title: "Alamat",
      details: ["Jln. Raya Bandung - Garut Kp. Leuweung Tiis rt 05 rw 01", "Desa Haruman Kecamatan Leles", "Kabupaten Garut Kode pos 44152"],
    },
    {
      icon: Phone,
      title: "Telepon",
      details: ["+62 21 1234 5678", "+62 812 3456 7890 (WhatsApp)"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@yayasanharapan.org", "relawan@yayasanharapan.org"],
    },
    {
      icon: Clock,
      title: "Jam Operasional",
      details: ["Senin - Jumat: 08:00 - 17:00", "Sabtu: 08:00 - 12:00", "Minggu: Tutup"],
    },
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.name && formData.email && formData.message) {
      setIsSubmitted(true)
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({ name: "", email: "", message: "" })
      }, 3000)
    }
  }

  return (
    <section id="kontak" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Hubungi Kami</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ada pertanyaan atau ingin berkolaborasi? Jangan ragu untuk menghubungi kami. Tim kami siap membantu Anda
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold text-primary mb-8">Informasi Kontak</h3>

              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">{info.title}</h4>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                <div className="rounded-lg overflow-hidden h-64 w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d908.1382441469003!2d107.89399155253224!3d-7.134033033620278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1749660727546!5m2!1sid!2sid"
                    className="w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="shadow-xl border-0">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-primary mb-6">Kirim Pesan</h3>

                  {!isSubmitted ? (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Nama Lengkap *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Masukkan nama lengkap Anda"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="h-12"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Masukkan alamat email Anda"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="h-12"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                          Pesan *
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Tulis pesan Anda di sini..."
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={5}
                          className="resize-none"
                        />
                      </div>

                      <Button type="submit" className="w-full h-12 bg-secondary hover:bg-secondary/90 text-lg">
                        <Send className="w-5 h-5 mr-2" />
                        Kirim Pesan
                      </Button>
                    </form>
                  ) : (
                    <div className="text-center py-12">
                      <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                      <h4 className="text-lg font-semibold text-primary mb-2">Pesan Terkirim!</h4>
                      <p className="text-gray-600">
                        Terima kasih atas pesan Anda. Tim kami akan merespons dalam 1x24 jam.
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Quick Contact */}
              <div className="mt-6 grid grid-cols-2 gap-4">
                <Button variant="outline" className="h-12 border-green-500 text-green-600 hover:bg-green-50">
                  <Phone className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>
                <Button variant="outline" className="h-12 border-blue-500 text-blue-600 hover:bg-blue-50">
                  <Mail className="w-4 h-4 mr-2" />
                  Email
                </Button>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-20">
            <h3 className="text-2xl font-bold text-primary text-center mb-12">Pertanyaan yang Sering Diajukan</h3>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-primary mb-2">Bagaimana cara berdonasi?</h4>
                  <p className="text-gray-600 text-sm">
                    Anda dapat berdonasi melalui transfer bank, e-wallet, atau datang langsung ke kantor kami. Semua
                    informasi rekening tersedia di website.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-primary mb-2">Apakah donasi saya akan dilaporkan?</h4>
                  <p className="text-gray-600 text-sm">
                    Ya, kami memberikan laporan penggunaan dana secara berkala dan transparan kepada semua donatur.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-primary mb-2">Bagaimana cara menjadi relawan?</h4>
                  <p className="text-gray-600 text-sm">
                    Daftar melalui form di website atau hubungi kami langsung. Kami akan memberikan orientasi dan
                    pelatihan sebelum Anda mulai berkegiatan.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-primary mb-2">Apakah ada program magang?</h4>
                  <p className="text-gray-600 text-sm">
                    Ya, kami menerima mahasiswa untuk program magang. Silakan kirim CV dan surat lamaran ke email kami.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
