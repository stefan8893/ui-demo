import { ThemeToggle } from '@/components/theme-toggle'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { useSmartHeaderPosition } from '@/hooks/useSmartHeaderPosition'
import type { SmartHeaderPosition } from '@/hooks/useSmartHeaderPosition'
import { cn } from '@/lib/utils'
import { Menu, PanelLeftClose, PanelLeftOpen } from 'lucide-react'
import { useRef, useState } from 'react'
import { SidebarContent } from './sidebar-content'
import { MobileSidebar } from './mobile-sidebar'
import { Outlet } from '@tanstack/react-router'

export function Layout() {
  const HEADER_HEIGHT = 64
  const contentArea = useRef<HTMLDivElement>(null)

  const { position, isAtTop, scrollY } = useSmartHeaderPosition(
    contentArea,
    HEADER_HEIGHT,
  )

  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const sidebarIcon = isSidebarOpen ? (
    <PanelLeftClose size={20} />
  ) : (
    <PanelLeftOpen size={20} />
  )

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
        <SidebarContent isMobile={false} />
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
            className="hidden lg:block"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            {sidebarIcon}
          </Button>

          <MobileSidebar></MobileSidebar>

          <span>Header</span>
          <ThemeToggle className="ml-auto" />
        </header>

        <main className="flex-1">
          <div className="max-w-4xl mx-auto w-full">
            <Outlet />
          </div>
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
