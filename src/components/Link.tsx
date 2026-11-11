import type { ReactNode } from 'react'
import { navigate } from '../navigation'

interface LinkProps {
  to: string
  className?: string
  children: ReactNode
  'aria-label'?: string
  'aria-hidden'?: boolean
  tabIndex?: number
}

/** Internal link that navigates client-side but keeps normal link behaviour (new tab, copy, etc.). */
export function Link({ to, className, children, ...rest }: LinkProps) {
  return (
    <a
      href={to}
      className={className}
      {...rest}
      onClick={(e) => {
        if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) {
          return
        }
        e.preventDefault()
        navigate(to)
      }}
    >
      {children}
    </a>
  )
}
