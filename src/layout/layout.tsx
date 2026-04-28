import { Button } from '@/components/ui/button'
import { useSmartHeaderPosition } from '@/hooks/useSmartHeaderPosition'
import type { SmartHeaderPosition } from '@/hooks/useSmartHeaderPosition'
import { cn } from '@/lib/utils'
import { Menu } from 'lucide-react'
import { useRef } from 'react'

export function Layout() {
  const HEADER_HEIGHT = 64
  const contentArea = useRef<HTMLDivElement>(null)

  const { position, isAtTop, scrollY } = useSmartHeaderPosition(
    contentArea,
    HEADER_HEIGHT,
  )

  return (
    <div className="h-screen grid grid-cols-[minmax(250px,300px)_1fr] overflow-hidden">
      <aside className="bg-amber-300 overflow-y-auto">Sidebar</aside>

      <div
        ref={contentArea}
        className="bg-green-200 overflow-y-auto relative flex flex-col flex-nowrap"
      >
        <header
          style={getHeaderStyle(position, scrollY)}
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
            <div key={i} className="border-green-300/50">
              Foo {i}
            </div>
          ))}
        </main>
        <footer className="shrink-0 bg-cyan-500">some footer</footer>
      </div>
    </div>
  )
}

function getHeaderStyle(position: SmartHeaderPosition, scrollY: number) {
  switch (position) {
    case 'fixed-top':
      return { transform: `translateY(${-scrollY}px)`, transition: 'none' }
    case 'floating-hidden':
      return { transform: 'translateY(-100%)' }
    case 'floating-visible':
      return { transform: 'translateY(0%)' }
  }
}
