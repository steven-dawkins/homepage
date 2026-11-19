import { profile } from './data/profile'
import { projects } from './data/projects'
import { usePathname } from './navigation'
import { NotFoundPage } from './pages/NotFoundPage'
import { ProjectPage } from './pages/ProjectPage'
import { Hero } from './sections/Hero'
import { Projects } from './sections/Projects'
const CURRENT_YEAR = new Date().getFullYear()

function Routes() {
  const pathname = usePathname()

  if (pathname === '/') {
    return (
      <>
        <Hero />
        <main>
          <Projects />
        </main>
        <footer className="border-t border-slate-200 py-8 text-center text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400">
          © {CURRENT_YEAR} {profile.name}
        </footer>
      </>
    )
  }

  const match = /^\/projects\/([^/]+)$/.exec(pathname)
  const project = match && projects.find((p) => p.slug === decodeURIComponent(match[1]))
  if (project) return <ProjectPage project={project} />

  return <NotFoundPage />
}

export function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <Routes />
    </div>
  )
}
