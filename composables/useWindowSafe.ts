export function useWindowSafe(): Window {
  if (import.meta.client) return window

  // Proxy: intercepts every access to window properties in SSR.
  return new Proxy({} as Window, {
    get(_target, prop) {
      console.warn(`[SSR-safe] window.${String(prop)} queried`)
      return undefined
    },
  })
}
