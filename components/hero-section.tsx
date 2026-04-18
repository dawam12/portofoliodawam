"use client"

import { Github, Linkedin, Mail, ArrowDown } from "lucide-react"
import Link from "next/link"
import { ProfilePhotoCard } from "@/components/profile-photo-card"

export function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 py-20 relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl">
        {/* Text Content */}
        <div>
          <p className="text-primary font-mono text-sm mb-4 tracking-wider">
            Halo, nama saya
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 text-balance">
            Muhammad Dawam Amru Bittaqwa
          </h1>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-muted-foreground mb-8 text-balance">
            Full Stack Developer
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl leading-relaxed mb-12">
            Saya adalah seorang developer yang passionate dalam membangun aplikasi web modern 
            dan solusi digital yang berdampak. Fokus saya adalah menciptakan pengalaman pengguna 
            yang luar biasa dengan kode yang bersih dan efisien.
          </p>
          
          <div className="flex items-center gap-6 mb-16">
            <Link 
              href="#contact" 
              className="bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:opacity-90 transition-opacity"
            >
              Hubungi Saya
            </Link>
            <Link 
              href="#projects" 
              className="border border-primary text-primary px-6 py-3 rounded-md font-medium hover:bg-primary/10 transition-colors"
            >
              Lihat Proyek
            </Link>
          </div>

          <div className="flex items-center gap-6">
            <Link 
              href="https://github.com" 
              target="_blank" 
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </Link>
            <Link 
              href="https://linkedin.com" 
              target="_blank" 
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </Link>
            <Link 
              href="mailto:hello@example.com" 
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </Link>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <ProfilePhotoCard />
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  )
}
