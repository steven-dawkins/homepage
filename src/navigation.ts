import { useSyncExternalStore } from 'react'

function subscribe(onChange: () => void) {
  window.addEventListener('popstate', onChange)
  return () => window.removeEventListener('popstate', onChange)
}

function normalise(pathname: string) {
  return pathname.replace(/\/+$/, '') || '/'
}

/** Current URL path without a trailing slash; re-renders on navigation. */
export function usePathname() {
  return useSyncExternalStore(
    subscribe,
    () => normalise(window.location.pathname),
    () => '/',
  )
}

/** Client-side navigation: updates the URL, notifies subscribers and scrolls to the top. */
export function navigate(to: string) {
  if (normalise(to) === normalise(window.location.pathname)) return
  window.history.pushState(null, '', to)
  window.dispatchEvent(new PopStateEvent('popstate'))
  window.scrollTo(0, 0)
}
