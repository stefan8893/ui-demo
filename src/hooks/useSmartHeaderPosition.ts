import { useEffect, useState, useRef } from 'react'
import type { RefObject } from 'react'

export type SmartHeaderPosition =
  | 'fixed-top'
  | 'floating-hidden'
  | 'floating-visible'

export type SmartHeader = {
  position: SmartHeaderPosition
  isAtTop: boolean
  scrollY: number
}

export function useSmartHeaderPosition(
  container: RefObject<HTMLDivElement | null>,
  headerHeight: number,
  threshold: number = 15,
) {
  const [scrollData, setScrollData] = useState<SmartHeader>({
    position: 'fixed-top',
    isAtTop: true,
    scrollY: 0,
  })

  const lastScrollY = useRef(0)
  const lock = useRef(false)

  useEffect(() => {
    const element = container.current
    if (!element) return

    const handleScroll = () => {
      if (!lock.current) {
        window.requestAnimationFrame(() => {
          const currentScrollY = Math.max(0, element.scrollTop)
          const delta = currentScrollY - lastScrollY.current

          setScrollData((previous) =>
            getSmartHeader(
              previous,
              currentScrollY,
              headerHeight,
              delta,
              threshold,
            ),
          )

          lastScrollY.current = currentScrollY
          lock.current = false
        })
        lock.current = true
      }
    }

    element.addEventListener('scroll', handleScroll, { passive: true })
    return () => element.removeEventListener('scroll', handleScroll)
  }, [container, headerHeight, threshold])

  return scrollData
}

function getSmartHeader(
  previous: SmartHeader,
  currentScrollY: number,
  headerHeight: number,
  delta: number,
  threshold: number,
): SmartHeader {
  const isInTopArea = currentScrollY <= headerHeight
  const isScrolling = delta > 0
  const isLeavingTop = !isInTopArea && previous.isAtTop && isScrolling

  if (isInTopArea) {
    return getSmartHeaderForTopArea(previous, currentScrollY)
  } else if (isLeavingTop) {
    return {
      position: 'floating-hidden',
      isAtTop: false,
      scrollY: currentScrollY,
    }
  } else {
    return getSmartHeaderForContentArea(
      previous,
      currentScrollY,
      delta,
      threshold,
    )
  }
}

function getSmartHeaderForTopArea(
  previous: SmartHeader,
  currentScrollY: number,
) {
  const isEnteringFromBelow = !previous.isAtTop
  const headerWasVisible = previous.position === 'floating-visible'

  return {
    position: isEnteringFromBelow
      ? headerWasVisible
        ? 'floating-visible'
        : 'fixed-top'
      : previous.position,
    isAtTop: true,
    scrollY: currentScrollY,
  }
}

function getSmartHeaderForContentArea(
  previous: SmartHeader,
  currentScrollY: number,
  delta: number,
  threshold: number,
) {
  const isFastScrolling = Math.abs(delta) > threshold
  const isScrollingDown = delta > 0
  return {
    position: isFastScrolling
      ? isScrollingDown
        ? 'floating-hidden'
        : 'floating-visible'
      : previous.position,
    isAtTop: false,
    scrollY: currentScrollY,
  }
}
