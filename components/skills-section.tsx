"use client"

import { Card } from "@/components/ui/card"

const skillCategories = [
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"]
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST API"]
  },
  {
    category: "Tools & Platform",
    skills: ["Git", "Docker", "AWS", "Firebase", "CI/CD"]
  },
  {
    category: "Soft Skills",
    skills: ["Problem Solving", "Team Collaboration", "Communication", "Mentoring", "Agile"]
  }
]

export function SkillsSection() {
  return (
    <section id="skills" className="px-6 md:px-12 lg:px-24 py-24">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary font-mono text-sm">02.</span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Skills</h2>
          <div className="h-px bg-border flex-1 max-w-xs" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="p-6 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 hover:border-primary/40 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-foreground mb-4">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1.5 rounded-full text-sm font-medium text-primary bg-primary/10 border border-primary/20 hover:bg-primary/20 hover:border-primary/40 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
