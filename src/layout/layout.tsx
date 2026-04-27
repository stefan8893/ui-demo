import { Button } from '@/components/ui/button'
import { useSmartHeaderPosition } from '@/hooks/useSmartHeaderPosition'
import { cn } from '@/lib/utils'
import { Menu } from 'lucide-react'
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
      // Wenn er versteckt war, schiebe ihn pixelgenau rein.
      // Wenn er schon da ist, lass ihn bei 0 fixiert.
      const offset = isHidden ? -scrollY : 0
      return {
        transform: `translateY(${offset}px)`,
        transition: 'none',
      }
    }
    return {
      transform: isHidden ? 'translateY(-100%)' : 'translateY(0%)',
    }
  }

  return (
    <div className="h-screen grid grid-cols-[minmax(250px,300px)_1fr] overflow-hidden">
      <aside className="bg-amber-300 overflow-y-auto">Sidebar</aside>

      <div
        ref={scrollableAreaRef}
        className="bg-green-200 overflow-y-auto relative flex flex-col flex-nowrap"
      >
        <header
          style={getHeaderStyle()}
          className={cn(
            'sticky top-0 z-50 h-16 shrink-0 flex flex-row justify-start items-center bg-teal-300/80',
            !isAtTop && 'transition-transform duration-300 ease-in-out',
          )}
        >
          <Button
            variant="ghost"
            className="p-2"
            onClick={() => console.log('clicked')}
          >
            <Menu size={24} />
          </Button>
          <span>Header</span>
        </header>
        <main className="p-4 flex-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="py-2 border-b border-green-300/50">
              Foo {i}
            </div>
          ))}
        </main>
        <footer className="shrink-0 bg-cyan-500">some footer</footer>
      </div>
    </div>
  )
}
