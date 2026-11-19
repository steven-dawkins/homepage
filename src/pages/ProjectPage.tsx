import { useEffect } from 'react'
import { Link } from '../components/Link'
import { profile } from '../data/profile'
import type { Project } from '../types/project'

const primaryLink =
  'rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
const secondaryLink =
  'rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:border-slate-600 dark:hover:bg-slate-800'

export function ProjectPage({ project }: { project: Project }) {
  useEffect(() => {
    const previous = document.title
    document.title = `${project.title} | ${profile.name}`
    return () => {
      document.title = previous
    }
  }, [project.title])

  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <Link
        to="/"
        className="text-sm font-medium text-indigo-700 underline underline-offset-2 hover:text-indigo-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:text-indigo-400"
      >
        ← All projects
      </Link>

      <article className="mt-6">
        <header>
          <h1 className="text-3xl font-bold tracking-tight">{project.title}</h1>
          <p className="mt-3 text-lg text-slate-700 dark:text-slate-300">{project.summary}</p>
        </header>

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

        {project.links.length > 0 && (
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
        )}

        <div className="mt-8 space-y-4 text-slate-700 dark:text-slate-300">
          {project.details.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        {project.images && project.images.length > 0 && (
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {project.images.map((image) => (
              <figure key={image.src} className={image.wide ? 'sm:col-span-2' : undefined}>
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  decoding="async"
                  className={`w-full rounded-lg border border-slate-200 dark:border-slate-700 ${image.wide ? 'h-auto' : 'aspect-[3/4] object-cover'}`}
                />
                {image.caption && (
                  <figcaption className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                    {image.caption}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        )}

        <h2 className="mt-8 text-xl font-semibold">Highlights</h2>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-700 dark:text-slate-300">
          {project.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      </article>
    </main>
  )
}
