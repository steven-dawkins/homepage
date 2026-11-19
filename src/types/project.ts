export interface ProjectLink {
  label: string
  url: string
}

export interface ProjectImage {
  src: string
  alt: string
  caption?: string
  /** Wide images span the full width at their natural aspect ratio; the default is a 3:4 portrait tile. */
  wide?: boolean
}

export interface Project {
  /** URL path segment: the detail page lives at /projects/<slug>. */
  slug: string
  title: string
  summary: string
  /** Longer write-up, one paragraph per entry. */
  details: string[]
  highlights: string[]
  tags: string[]
  links: ProjectLink[]
  /** Small square image for the summary card on the home page. */
  thumbnail?: ProjectImage
  images?: ProjectImage[]
}
