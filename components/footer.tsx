"use client"

import { Heart, Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4">
        {/* Main Footer */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-25 h-25 bg-white rounded-full flex items-center justify-center">
                  <img src="./image/ycmi_logo.png" alt="Logo Yayasan" width="90" height="90" />
                </div>
                <span className="text-xl font-bold">YCMI</span>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed text-justify">
                Membangun masa depan yang lebih baik melalui aksi nyata untuk pendidikan, kesehatan, dan pemberdayaan
                masyarakat.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Navigasi</h3>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => scrollToSection("beranda")}
                    className="text-gray-300 hover:text-secondary transition-colors"
                  >
                    Beranda
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("tentang")}
                    className="text-gray-300 hover:text-secondary transition-colors"
                  >
                    Tentang Kami
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("program")}
                    className="text-gray-300 hover:text-secondary transition-colors"
                  >
                    Program
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("testimoni")}
                    className="text-gray-300 hover:text-secondary transition-colors"
                  >
                    Testimoni
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("relawan")}
                    className="text-gray-300 hover:text-secondary transition-colors"
                  >
                    Relawan
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("kontak")}
                    className="text-gray-300 hover:text-secondary transition-colors"
                  >
                    Kontak
                  </button>
                </li>
              </ul>
            </div>

            {/* Programs */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Program Kami</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-300 hover:text-secondary transition-colors">
                    Program Pendidikan
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-secondary transition-colors">
                    Program Kesehatan
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-secondary transition-colors">
                    Program Sosial
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-secondary transition-colors">
                    Program Lingkungan
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-secondary transition-colors">
                    Beasiswa
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-secondary transition-colors">
                    Bantuan Darurat
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Kontak</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                  <div className="text-gray-300 text-sm">
                    <p>Jln. Raya Bandung - Garut</p>
                    <p>Kp. Leuweung Tiis rt 05 rw 01</p>
                    <p>Desa Haruman Kecamatan Leles</p>
                    <p>Kabupaten Garut Kode pos 44152</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                  <div className="text-gray-300 text-sm">
                    <p>+62 21 1234 5678</p>
                    <p>+62 812 3456 7890</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                  <div className="text-gray-300 text-sm">
                    <p>info@yayasanharapan.org</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-300 text-sm">© 2025 Yayasan Campoes Masyrakat Indonesia. Semua hak cipta dilindungi.</div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-300 hover:text-secondary transition-colors">
                Kebijakan Privasi
              </a>
              <a href="#" className="text-gray-300 hover:text-secondary transition-colors">
                Syarat & Ketentuan
              </a>
              <a href="#" className="text-gray-300 hover:text-secondary transition-colors">
                Laporan Keuangan
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
