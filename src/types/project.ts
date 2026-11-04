export interface ProjectLink {
  label: string
  url: string
}

export interface Project {
  title: string
  year: number
  summary: string
  /** Longer write-up, one paragraph per entry. */
  details: string[]
  highlights: string[]
  tags: string[]
  links: ProjectLink[]
}
