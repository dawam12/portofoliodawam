export function AboutSection() {
  const technologies = [
    "JavaScript (ES6+)",
    "TypeScript",
    "React & Next.js",
    "Node.js",
    "Python",
    "PostgreSQL",
    "Docker",
    "AWS / GCP"
  ]

  return (
    <section id="about" className="px-6 md:px-12 lg:px-24 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary font-mono text-sm">01.</span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Tentang Saya</h2>
          <div className="h-px bg-border flex-1 max-w-xs" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Saya adalah seorang IT Professional dengan pengalaman lebih dari 5 tahun 
              dalam pengembangan web dan aplikasi. Perjalanan saya dimulai saat masih 
              kuliah, di mana saya mulai tertarik dengan dunia programming.
            </p>
            <p>
              Saat ini, saya fokus pada pengembangan aplikasi web full-stack menggunakan 
              teknologi modern seperti <span className="text-primary">React</span>,{" "}
              <span className="text-primary">Next.js</span>,{" "}
              <span className="text-primary">Node.js</span>, dan{" "}
              <span className="text-primary">TypeScript</span>.
            </p>
            <p>
              Di luar pekerjaan, saya aktif berkontribusi pada proyek open source 
              dan senang berbagi pengetahuan melalui blog dan komunitas developer.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-foreground font-semibold mb-4">
              Teknologi yang saya gunakan:
            </h3>
            <ul className="grid grid-cols-2 gap-3">
              {technologies.map((tech) => (
                <li key={tech} className="flex items-center gap-2 text-muted-foreground">
                  <span className="text-primary text-xs">▹</span>
                  <span className="font-mono text-sm">{tech}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
