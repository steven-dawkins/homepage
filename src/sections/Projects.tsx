import { ProjectCard } from '../components/ProjectCard'
import { projects } from '../data/projects'

export function Projects() {
  return (
    <section aria-labelledby="projects-heading" className="mx-auto max-w-3xl px-4 py-12">
      <h2 id="projects-heading" className="scroll-mt-6 text-2xl font-bold">
        Personal projects
      </h2>
      <p className="mt-2 text-slate-600 dark:text-slate-400">Things I’ve built in my own time.</p>
      <div className="mt-6 space-y-6">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </section>
  )
}
