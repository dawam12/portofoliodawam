import { ExternalLink, Github, Folder } from "lucide-react"
import Link from "next/link"

const featuredProjects = [
  {
    title: "E-Commerce Platform",
    description:
      "Platform e-commerce modern dengan fitur lengkap termasuk keranjang belanja, sistem pembayaran, dan dashboard admin. Dibangun dengan fokus pada performa dan user experience.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
    github: "https://github.com",
    live: "https://example.com"
  },
  {
    title: "Task Management App",
    description:
      "Aplikasi manajemen tugas kolaboratif dengan fitur real-time updates, drag-and-drop, dan integrasi dengan berbagai tools produktivitas.",
    tech: ["React", "Node.js", "Socket.io", "MongoDB"],
    github: "https://github.com",
    live: "https://example.com"
  },
  {
    title: "AI Content Generator",
    description:
      "Tool berbasis AI untuk menghasilkan konten marketing secara otomatis. Menggunakan OpenAI API dengan custom fine-tuning untuk hasil yang lebih relevan.",
    tech: ["Python", "FastAPI", "OpenAI", "React"],
    github: "https://github.com",
    live: "https://example.com"
  }
]

const otherProjects = [
  {
    title: "Weather Dashboard",
    description: "Dashboard cuaca real-time dengan visualisasi data interaktif",
    tech: ["React", "Chart.js", "API"],
    github: "https://github.com"
  },
  {
    title: "Portfolio Template",
    description: "Template portfolio developer yang modern dan customizable",
    tech: ["Next.js", "Tailwind", "MDX"],
    github: "https://github.com"
  },
  {
    title: "CLI Tool",
    description: "Command line tool untuk automasi development workflow",
    tech: ["Node.js", "Commander", "Chalk"],
    github: "https://github.com"
  },
  {
    title: "Chrome Extension",
    description: "Extension untuk meningkatkan produktivitas browsing",
    tech: ["JavaScript", "Chrome API"],
    github: "https://github.com"
  },
  {
    title: "API Gateway",
    description: "Lightweight API gateway dengan rate limiting dan caching",
    tech: ["Go", "Redis", "Docker"],
    github: "https://github.com"
  },
  {
    title: "Blog Platform",
    description: "Platform blogging minimalis dengan markdown support",
    tech: ["Next.js", "MDX", "Prisma"],
    github: "https://github.com"
  }
]

export function ProjectsSection() {
  return (
    <section id="projects" className="px-6 md:px-12 lg:px-24 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary font-mono text-sm">05.</span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Proyek Pilihan</h2>
          <div className="h-px bg-border flex-1 max-w-xs" />
        </div>

        <div className="space-y-24 mb-24">
          {featuredProjects.map((project, index) => (
            <div
              key={project.title}
              className={`relative grid md:grid-cols-12 gap-4 items-center ${
                index % 2 === 1 ? "md:text-right" : ""
              }`}
            >
              <div
                className={`md:col-span-7 ${
                  index % 2 === 1 ? "md:col-start-6" : ""
                }`}
              >
                <div className="bg-secondary/30 rounded-lg aspect-video flex items-center justify-center border border-border">
                  <span className="text-muted-foreground font-mono text-sm">
                    Project Preview
                  </span>
                </div>
              </div>

              <div
                className={`md:col-span-6 md:absolute ${
                  index % 2 === 1
                    ? "md:left-0 md:text-left"
                    : "md:right-0 md:text-right"
                }`}
              >
                <p className="text-primary font-mono text-sm mb-2">Featured Project</p>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {project.title}
                </h3>
                <div className="bg-card p-6 rounded-lg shadow-lg mb-4 border border-border">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <ul
                  className={`flex flex-wrap gap-3 mb-4 font-mono text-sm text-muted-foreground ${
                    index % 2 === 1 ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  {project.tech.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                <div
                  className={`flex gap-4 ${
                    index % 2 === 1 ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  <Link
                    href={project.github}
                    target="_blank"
                    className="text-foreground hover:text-primary transition-colors"
                    aria-label="GitHub Repository"
                  >
                    <Github className="w-5 h-5" />
                  </Link>
                  <Link
                    href={project.live}
                    target="_blank"
                    className="text-foreground hover:text-primary transition-colors"
                    aria-label="Live Demo"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-xl font-bold text-foreground text-center mb-12">
          Proyek Lainnya
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {otherProjects.map((project) => (
            <div
              key={project.title}
              className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-colors group"
            >
              <div className="flex items-center justify-between mb-6">
                <Folder className="w-10 h-10 text-primary" />
                <div className="flex gap-3">
                  <Link
                    href={project.github}
                    target="_blank"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </Link>
                </div>
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h4>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
              <ul className="flex flex-wrap gap-2 font-mono text-xs text-muted-foreground">
                {project.tech.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
