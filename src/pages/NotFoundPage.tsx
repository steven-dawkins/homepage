import { Link } from '../components/Link'

export function NotFoundPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-bold tracking-tight">Page not found</h1>
      <p className="mt-3 text-slate-700 dark:text-slate-300">There is nothing at this address.</p>
      <Link
        to="/"
        className="mt-4 inline-block font-medium text-indigo-700 underline underline-offset-2 dark:text-indigo-400"
      >
        Back to the homepage
      </Link>
    </main>
  )
}
