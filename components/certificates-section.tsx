"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, ExternalLink } from "lucide-react"
import Link from "next/link"

const certificates = [
  {
    title: "Full Stack Web Development",
    issuer: "Udemy",
    date: "2023",
    category: "Development",
    description: "Comprehensive course covering React, Node.js, and MongoDB",
    credentialUrl: "#",
    downloadUrl: "#"
  },
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2023",
    category: "Cloud",
    description: "Professional level certification for AWS cloud solutions",
    credentialUrl: "#",
    downloadUrl: "#"
  },
  {
    title: "JavaScript Advanced Concepts",
    issuer: "Coursera",
    date: "2022",
    category: "Development",
    description: "Deep dive into advanced JavaScript patterns and concepts",
    credentialUrl: "#",
    downloadUrl: "#"
  },
  {
    title: "UI/UX Design Fundamentals",
    issuer: "Google Career Certificates",
    date: "2022",
    category: "Design",
    description: "User interface and experience design principles",
    credentialUrl: "#",
    downloadUrl: "#"
  }
]

const categoryColors: Record<string, string> = {
  Development: "bg-blue-500/20 text-blue-600 border-blue-200",
  Cloud: "bg-orange-500/20 text-orange-600 border-orange-200",
  Design: "bg-pink-500/20 text-pink-600 border-pink-200",
  Other: "bg-gray-500/20 text-gray-600 border-gray-200"
}

export function CertificatesSection() {
  return (
    <section id="certificates" className="px-6 md:px-12 lg:px-24 py-24">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary font-mono text-sm">04.</span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Sertifikat</h2>
          <div className="h-px bg-border flex-1 max-w-xs" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificates.map((cert, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 border-border/50 hover:border-primary/30"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-primary font-mono mb-3">
                    {cert.issuer} • {cert.date}
                  </p>
                </div>
                <Badge
                  className={`whitespace-nowrap ml-2 ${
                    categoryColors[cert.category] || categoryColors.Other
                  }`}
                >
                  {cert.category}
                </Badge>
              </div>

              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {cert.description}
              </p>

              <div className="flex items-center gap-3">
                <Link
                  href={cert.credentialUrl}
                  target="_blank"
                  className="inline-flex items-center gap-2 px-3 py-2 text-xs font-medium text-primary hover:bg-primary/10 rounded-md transition-colors border border-primary/30 hover:border-primary/60"
                >
                  <ExternalLink className="w-3 h-3" />
                  Lihat Kredensial
                </Link>
                <Link
                  href={cert.downloadUrl}
                  target="_blank"
                  className="inline-flex items-center gap-2 px-3 py-2 text-xs font-medium text-muted-foreground hover:bg-secondary/50 rounded-md transition-colors border border-border hover:border-primary/30"
                >
                  <Download className="w-3 h-3" />
                  Download
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
