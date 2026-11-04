import { ProjectCard } from '../components/ProjectCard'
import { projects } from '../data/projects'

export function Projects() {
  return (
    <section aria-labelledby="projects-heading" className="mx-auto max-w-3xl px-4 py-12">
      <h2 id="projects-heading" className="mb-6 text-2xl font-bold">
        Projects
      </h2>
      <div className="space-y-8">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </section>
  )
}
