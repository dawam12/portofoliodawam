"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { name: "Tentang", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Pengalaman", href: "#experience" },
  { name: "Sertifikat", href: "#certificates" },
  { name: "Proyek", href: "#projects" },
  { name: "Kontak", href: "#contact" }
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/90 backdrop-blur-md shadow-lg py-4"
          : "bg-transparent py-6"
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="text-primary font-bold text-2xl font-mono">
          {"<AD />"}
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                <span className="text-primary font-mono">0{index + 1}.</span>{" "}
                {link.name}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/resume.pdf"
              className="border border-primary text-primary px-4 py-2 rounded text-sm hover:bg-primary/10 transition-colors"
            >
              Resume
            </Link>
          </li>
        </ul>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-primary"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-background/95 backdrop-blur-md z-40">
          <nav className="flex flex-col items-center justify-center h-full gap-8">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-foreground hover:text-primary transition-colors text-lg"
              >
                <span className="text-primary font-mono block text-center text-sm mb-1">
                  0{index + 1}.
                </span>
                {link.name}
              </Link>
            ))}
            <Link
              href="/resume.pdf"
              className="border border-primary text-primary px-6 py-3 rounded text-lg hover:bg-primary/10 transition-colors mt-4"
            >
              Resume
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
