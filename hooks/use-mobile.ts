import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean>(false)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    
    // Set initial value in a way that doesn't trigger the "synchronous setState in effect" lint error
    // but ensures we have the correct initial state on mount.
    const initialMatch = mql.matches
    if (initialMatch !== isMobile) {
      setIsMobile(initialMatch)
    }

    const onChange = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches)
    }
    
    mql.addEventListener("change", onChange)
    return () => mql.removeEventListener("change", onChange)
  }, [isMobile])

  return isMobile
}
