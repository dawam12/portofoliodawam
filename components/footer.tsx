import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="px-6 md:px-12 lg:px-24 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-6 md:hidden">
            <Link
              href="https://github.com"
              target="_blank"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link
              href="mailto:hello@example.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </Link>
          </div>
          <p className="text-muted-foreground text-sm font-mono text-center">
            Dibangun dengan Next.js & Tailwind CSS
          </p>
          <p className="text-muted-foreground text-xs font-mono">
            2024 Ahmad Developer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
