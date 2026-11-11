import { projects } from './data/projects'
import { usePathname } from './navigation'
import { NotFoundPage } from './pages/NotFoundPage'
import { ProjectPage } from './pages/ProjectPage'
import { Hero } from './sections/Hero'
import { Projects } from './sections/Projects'

function Routes() {
  const pathname = usePathname()

  if (pathname === '/') {
    return (
      <>
        <Hero />
        <main>
          <Projects />
        </main>
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
