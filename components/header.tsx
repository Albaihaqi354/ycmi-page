"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Heart } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-1">
          {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="rounded-full overflow-hidden">
                <img src="./image/ycmi_logo.png" alt="Logo Yayasan" width="90" height="90" />
              </div>
              <span className="text-xl font-bold text-primary">YCMI</span>
            </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("beranda")}
              className="text-gray-700 hover:text-primary transition-colors hover:text-secondary"
            >
              Beranda
            </button>
            <button
              onClick={() => scrollToSection("tentang")}
              className="text-gray-700 hover:text-primary transition-colors hover:text-secondary"
            >
              Tentang Kami
            </button>
            <button
              onClick={() => scrollToSection("program")}
              className="text-gray-700 hover:text-primary transition-colors hover:text-secondary"
            >
              Program
            </button>
            <button
              onClick={() => scrollToSection("testimoni")}
              className="text-gray-700 hover:text-primary transition-colors hover:text-secondary"
            >
              Testimoni
            </button>
            <button
              onClick={() => scrollToSection("relawan")}
              className="text-gray-700 hover:text-primary transition-colors hover:text-secondary"
            >
              Relawan
            </button>
            <button
              onClick={() => scrollToSection("kontak")}
              className="text-gray-700 hover:text-primary transition-colors hover:text-secondary"
            >
              Kontak
            </button>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-white">
              Gabung Relawan
            </Button>
            <Button className="bg-secondary hover:bg-secondary/90">Donasi Sekarang</Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <nav className="flex flex-col space-y-4 p-4">
              <button onClick={() => scrollToSection("beranda")} className="text-left text-gray-700 hover:text-primary">
                Beranda
              </button>
              <button onClick={() => scrollToSection("tentang")} className="text-left text-gray-700 hover:text-primary">
                Tentang Kami
              </button>
              <button onClick={() => scrollToSection("program")} className="text-left text-gray-700 hover:text-primary">
                Program
              </button>
              <button
                onClick={() => scrollToSection("testimoni")}
                className="text-left text-gray-700 hover:text-primary"
              >
                Testimoni
              </button>
              <button onClick={() => scrollToSection("relawan")} className="text-left text-gray-700 hover:text-primary">
                Relawan
              </button>
              <button onClick={() => scrollToSection("kontak")} className="text-left text-gray-700 hover:text-primary">
                Kontak
              </button>
              <div className="flex flex-col space-y-2 pt-4">
                <Button
                  variant="outline"
                  className="border-secondary text-secondary hover:bg-secondary hover:text-white"
                >
                  Gabung Relawan
                </Button>
                <Button className="bg-secondary hover:bg-secondary/90">Donasi Sekarang</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
