import { useEffect, useState, useRef } from 'react'
import type { RefObject } from 'react'

export function useSmartHeaderPosition(
  container: RefObject<HTMLDivElement | null>,
  headerHeight: number,
  threshold: number = 15,
) {
  const [scrollData, setScrollData] = useState({
    isHidden: false,
    isAtTop: true,
    scrollY: 0,
  })

  const lastScrollY = useRef(0)
  const ticking = useRef(false)

  useEffect(() => {
    const element = container.current
    if (!element) return

    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const currentScrollY = Math.max(0, element.scrollTop)
          const delta = currentScrollY - lastScrollY.current

          setScrollData((previous) => {
            // ZUSTAND 1: Wir sind ganz oben (0 bis Header-Höhe)
            if (currentScrollY <= headerHeight) {
              // DER ENTSCHEIDENDE FIX:
              // War der Header im Smart-Bereich bereits eingeblendet (!previous.isHidden)?
              // Wenn ja, erzwingen wir, dass er sichtbar bleibt (isHidden: false).
              const wasAlreadyVisible = !previous.isAtTop && !previous.isHidden

              return {
                // Falls er schon da war -> false (bleibt da).
                // Falls er weg war und wir kommen von unten -> true (wird reingeschoben).
                // Falls wir schon oben waren -> alten Zustand behalten.
                isHidden: wasAlreadyVisible
                  ? false
                  : previous.isAtTop
                    ? previous.isHidden
                    : true,
                isAtTop: true,
                scrollY: currentScrollY,
              }
            }

            // ZUSTAND 2: Wir verlassen die Top-Area nach unten
            if (previous.isAtTop && delta > 0) {
              return { isHidden: true, isAtTop: false, scrollY: currentScrollY }
            }

            // ZUSTAND 3: Smart-Logik (tiefer in der Seite)
            let nextHidden = previous.isHidden
            if (Math.abs(delta) > threshold) {
              nextHidden = delta > 0 // Runter = true, Hoch = false
            }

            return {
              isHidden: nextHidden,
              isAtTop: false,
              scrollY: currentScrollY,
            }
          })

          lastScrollY.current = currentScrollY
          ticking.current = false
        })
        ticking.current = true
      }
    }

    element.addEventListener('scroll', handleScroll, { passive: true })
    return () => element.removeEventListener('scroll', handleScroll)
  }, [container, headerHeight, threshold])

  return scrollData
}
