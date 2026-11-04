import { profile } from '../data/profile'

export function Hero() {
  return (
    <header className="mx-auto max-w-3xl px-4 pt-16">
      <h1 className="text-4xl font-bold tracking-tight">{profile.name}</h1>
      <p className="mt-3 text-lg text-slate-600 dark:text-slate-400">{profile.tagline}</p>
      <a
        href={profile.githubUrl}
        target="_blank"
        rel="noreferrer"
        className="mt-4 inline-block text-indigo-600 underline hover:text-indigo-800 dark:text-indigo-400"
      >
        GitHub
      </a>
    </header>
  )
}
