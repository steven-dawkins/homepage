import type { Project } from '../types/project'

const primaryLink =
  'rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
const secondaryLink =
  'rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:border-slate-600 dark:hover:bg-slate-800'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <header className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <span className="text-sm text-slate-500 dark:text-slate-400">{project.year}</span>
      </header>
      <p className="mt-2 text-slate-700 dark:text-slate-300">{project.summary}</p>

      <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
        {project.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300"
          >
            {tag}
          </li>
        ))}
      </ul>

      <div className="mt-4 space-y-3 text-slate-700 dark:text-slate-300">
        {project.details.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <ul className="mt-4 list-disc space-y-1 pl-5 text-slate-700 dark:text-slate-300">
        {project.highlights.map((h) => (
          <li key={h}>{h}</li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-3">
        {project.links.map((link, i) => (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noreferrer"
            className={i === 0 ? primaryLink : secondaryLink}
          >
            {link.label}
          </a>
        ))}
      </div>
    </article>
  )
}
