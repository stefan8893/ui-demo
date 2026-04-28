import { Button } from '@/components/ui/button'
import { useSmartHeaderPosition } from '@/hooks/useSmartHeaderPosition'
import type { SmartHeaderPosition } from '@/hooks/useSmartHeaderPosition'
import { cn } from '@/lib/utils'
import { PanelLeftClose, PanelLeftOpen } from 'lucide-react'
import { useRef, useState } from 'react'

export function Layout() {
  const HEADER_HEIGHT = 64
  const contentArea = useRef<HTMLDivElement>(null)

  const { position, isAtTop, scrollY } = useSmartHeaderPosition(
    contentArea,
    HEADER_HEIGHT,
  )

  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  return (
    <div
      className={cn(
        'h-screen flex flex-col lg:grid overflow-hidden',
        'transition-all duration-300 ease-in-out',
        isSidebarOpen ? 'grid-cols-[280px_1fr] ' : 'grid-cols-[0px_1fr]',
      )}
    >
      <aside
        className={cn(
          'bg-amber-300 hidden lg:block overflow-y-auto',
          'transition-all duration-300 ease-in-out',
          isSidebarOpen ? 'w-70' : 'w-0 opacity-0',
        )}
      >
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i}>Nav item {i}</div>
        ))}
      </aside>

      <div
        ref={contentArea}
        className="bg-green-200 overflow-y-auto relative flex flex-col flex-nowrap flex-1"
      >
        <header
          style={getHeaderStyle(position, scrollY)}
          className={cn(
            'bg-teal-300/80 sticky top-0 z-50 h-16 shrink-0 flex flex-row justify-start items-center',
            !isAtTop && 'transition-transform duration-300 ease-in-out',
          )}
        >
          <Button
            variant="ghost"
            className="p-2"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? (
              <PanelLeftClose size={20} />
            ) : (
              <PanelLeftOpen size={20} />
            )}
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
        <footer className="bg-cyan-500 shrink-0">some footer</footer>
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
