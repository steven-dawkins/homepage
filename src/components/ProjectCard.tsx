import type { Project } from '../types/project'
import { Link } from './Link'

const MAX_TAGS = 4

/** Short summary card for the project list; the full write-up is on the detail page. */
export function ProjectCard({ project }: { project: Project }) {
  const tags = project.tags.slice(0, MAX_TAGS)
  const hiddenTags = project.tags.length - tags.length
  const detailPath = `/projects/${project.slug}`

  return (
    <article className="flex gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-indigo-300 hover:shadow-md dark:border-slate-700 dark:bg-slate-900 dark:hover:border-indigo-700">
      {project.thumbnail && (
        // Decorative duplicate of the title link, so hidden from keyboard and screen readers.
        <Link to={detailPath} aria-hidden={true} tabIndex={-1} className="shrink-0 self-start">
          <img
            src={project.thumbnail.src}
            alt=""
            width={112}
            height={112}
            loading="lazy"
            decoding="async"
            className="size-20 rounded-lg border border-slate-200 object-cover sm:size-28 dark:border-slate-700"
          />
        </Link>
      )}

      <div className="min-w-0 flex-1">
        <h3 className="text-lg font-semibold">
          <Link
            to={detailPath}
            className="hover:text-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:hover:text-indigo-400"
          >
            {project.title}
          </Link>
        </h3>
        <p className="mt-2 text-slate-700 dark:text-slate-300">{project.summary}</p>

        <ul className="mt-3 flex flex-wrap gap-2" aria-label="Technologies">
          {tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300"
            >
              {tag}
            </li>
          ))}
          {hiddenTags > 0 && (
            <li className="px-1 py-1 text-xs text-slate-500 dark:text-slate-400">+{hiddenTags} more</li>
          )}
        </ul>

        <Link
          to={detailPath}
          aria-label={`View details: ${project.title}`}
          className="mt-4 inline-block text-sm font-medium text-indigo-700 underline underline-offset-2 hover:text-indigo-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:text-indigo-400 dark:hover:text-indigo-300"
        >
          View details →
        </Link>
      </div>
    </article>
  )
}
