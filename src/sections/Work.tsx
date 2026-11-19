import { workHighlights } from '../data/experience'

export function Work() {
  return (
    <section aria-labelledby="work-heading" className="mx-auto max-w-3xl px-4 pb-16">
      <h2 id="work-heading" className="text-2xl font-bold">
        At work
      </h2>
      <p className="mt-2 text-slate-600 dark:text-slate-400">A few highlights from my professional work.</p>
      <ul className="mt-6 space-y-6 border-l-2 border-indigo-200 pl-6 dark:border-indigo-900">
        {workHighlights.map((item) => (
          <li key={item.title}>
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="mt-1 text-slate-700 dark:text-slate-300">{item.summary}</p>
            <p className="mt-2 text-xs font-medium text-slate-500 dark:text-slate-400">
              {item.tags.join(' · ')}
            </p>
          </li>
        ))}
      </ul>
    </section>
  )
}
