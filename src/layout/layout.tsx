import { useSmartHeaderPosition } from '@/hooks/useSmartHeaderPosition'
import { cn } from '@/lib/utils'
import { useRef } from 'react'

export function Layout() {
  const HEADER_HEIGHT = 64
  // Der Ref muss auf das Element, das "overflow-y-auto" hat!
  const scrollableAreaRef = useRef<HTMLDivElement>(null)

  const { isHidden, isAtTop, scrollY } = useSmartHeaderPosition(
    scrollableAreaRef,
    HEADER_HEIGHT,
    15,
  )

  const getHeaderStyle = () => {
    if (isAtTop) {
      // WICHTIG: Math.min(0, ...) stellt sicher, dass der Header
      // nicht nach unten geschoben wird, falls scrollY negativ wird (iOS Bounce)
      const offset = isHidden ? -scrollY : 0
      return {
        transform: `translateY(${Math.min(0, offset)}px)`,
        transition: 'none',
      }
    }

    return {
      transform: isHidden ? 'translateY(-100%)' : 'translateY(0%)',
    }
  }

  return (
    <div className="h-screen grid grid-cols-[minmax(250px,300px)_1fr] overflow-hidden">
      {/* Sidebar scrollt unabhängig */}
      <aside className="bg-amber-300 overflow-y-auto">Sidebar</aside>

      {/* Das ist das eigentliche Target für den Hook */}
      <div
        ref={scrollableAreaRef}
        className="bg-green-200 overflow-y-auto relative"
      >
        <header
          style={getHeaderStyle()}
          className={cn(
            'sticky top-0 z-50 h-16 w-full flex flex-row justify-start items-center bg-teal-300/80 backdrop-blur-sm',
            !isAtTop && 'transition-transform duration-300 ease-in-out',
          )}
        >
          Header
        </header>
        <main className="p-4">
          {Array.from({ length: 130 }).map((_, i) => (
            <div key={i} className="py-2 border-b border-green-300/50">
              Foo {i}
            </div>
          ))}
        </main>
      </div>
    </div>
  )
}
