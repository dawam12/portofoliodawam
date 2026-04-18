"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

const experiences = [
  {
    company: "Tech Company",
    role: "Senior Full Stack Developer",
    period: "2022 - Sekarang",
    description: [
      "Memimpin tim pengembangan untuk membangun aplikasi enterprise dengan React dan Node.js",
      "Mengimplementasikan CI/CD pipeline untuk meningkatkan efisiensi deployment",
      "Melakukan code review dan mentoring untuk developer junior",
      "Berkolaborasi dengan tim produk untuk merancang fitur baru"
    ]
  },
  {
    company: "Startup Digital",
    role: "Full Stack Developer",
    period: "2020 - 2022",
    description: [
      "Mengembangkan platform e-commerce dengan Next.js dan PostgreSQL",
      "Mengoptimasi performa aplikasi hingga 40% lebih cepat",
      "Membangun RESTful API dan microservices architecture",
      "Implementasi sistem pembayaran dan integrasi third-party"
    ]
  },
  {
    company: "Software House",
    role: "Junior Developer",
    period: "2018 - 2020",
    description: [
      "Mengembangkan website dan aplikasi web untuk berbagai klien",
      "Belajar dan menerapkan best practices dalam pengembangan software",
      "Berpartisipasi dalam daily standup dan sprint planning",
      "Membuat dokumentasi teknis untuk proyek-proyek yang dikerjakan"
    ]
  }
]

export function ExperienceSection() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section id="experience" className="px-6 md:px-12 lg:px-24 py-24">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary font-mono text-sm">03.</span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Pengalaman Kerja</h2>
          <div className="h-px bg-border flex-1 max-w-xs" />
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex md:flex-col overflow-x-auto md:overflow-x-visible border-b md:border-b-0 md:border-l border-border">
            {experiences.map((exp, index) => (
              <button
                key={exp.company}
                onClick={() => setActiveTab(index)}
                className={cn(
                  "px-5 py-3 text-sm font-mono text-left whitespace-nowrap transition-all",
                  "hover:bg-secondary/50 hover:text-primary",
                  activeTab === index
                    ? "text-primary bg-secondary/30 border-b-2 md:border-b-0 md:border-l-2 border-primary md:-ml-px"
                    : "text-muted-foreground border-b-2 md:border-b-0 md:border-l-2 border-transparent md:-ml-px"
                )}
              >
                {exp.company}
              </button>
            ))}
          </div>

          <div className="py-2 md:py-0 min-h-[300px]">
            <h3 className="text-xl font-semibold text-foreground mb-1">
              {experiences[activeTab].role}{" "}
              <span className="text-primary">@ {experiences[activeTab].company}</span>
            </h3>
            <p className="text-muted-foreground font-mono text-sm mb-6">
              {experiences[activeTab].period}
            </p>
            <ul className="space-y-4">
              {experiences[activeTab].description.map((desc, i) => (
                <li key={i} className="flex gap-3 text-muted-foreground">
                  <span className="text-primary mt-1.5 text-xs">▹</span>
                  <span className="leading-relaxed">{desc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
