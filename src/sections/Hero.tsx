import { profile } from '../data/profile'

export function Hero() {
  return (
    <header className="border-b border-slate-200 bg-gradient-to-b from-indigo-50 to-slate-50 dark:border-slate-800 dark:from-indigo-950/40 dark:to-slate-950">
      <div className="mx-auto max-w-3xl px-4 pt-16 pb-12 sm:pt-20">
        <p className="text-sm font-semibold tracking-wider text-indigo-700 uppercase dark:text-indigo-400">
          {profile.role}
        </p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">{profile.name}</h1>
        <p className="mt-4 text-xl text-slate-800 sm:text-2xl dark:text-slate-200">{profile.tagline}</p>
        <p className="mt-4 max-w-2xl text-slate-600 dark:text-slate-400">{profile.intro}</p>

        <ul className="mt-6 flex flex-wrap gap-2" aria-label="Focus areas">
          {profile.focus.map((item) => (
            <li
              key={item}
              className="rounded-full border border-indigo-200 bg-white px-3 py-1 text-xs font-medium text-indigo-800 dark:border-indigo-900 dark:bg-slate-900 dark:text-indigo-300"
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#projects-heading"
            className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            See projects
          </a>
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:border-slate-600 dark:bg-slate-900 dark:hover:bg-slate-800"
          >
            GitHub
          </a>
          <span className="text-sm text-slate-500 dark:text-slate-400">{profile.location}</span>
        </div>
      </div>
    </header>
  )
}
