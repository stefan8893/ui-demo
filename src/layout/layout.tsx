import { Outlet } from '@tanstack/react-router'
import { useRef, useState } from 'react'
import { useResizeObserver } from 'usehooks-ts'
import packageInfo from '@/../package.json'
import type { SmartHeaderPosition } from '@/hooks/useSmartHeaderPosition'
import { useSmartHeaderPosition } from '@/hooks/useSmartHeaderPosition'
import { cn } from '@/lib/utils'
import { useLayoutStore } from '@/stores/useLayoutStore'
import { Header } from './header'
import { MobileSidebar } from './mobile-sidebar'
import { SidebarContent } from './sidebar-content'

export function Layout() {
  const HEADER_HEIGHT = 72

  const { position, isAtTop, scrollY } = useSmartHeaderPosition(HEADER_HEIGHT)

  const [showSidebar, setShowSidebar] = useState(true)
  const [showMobileSidebar, setShowMobileSidebar] = useState(false)

  const mainContentContainer = useRef<HTMLDivElement>(null!)
  const setIsCompact = useLayoutStore((state) => state.setIsCompact)

  useResizeObserver({
    ref: mainContentContainer,
    onResize: ({ width }) => {
      const shouldBeCompact = width !== undefined && width < 700

      window.requestAnimationFrame(() => {
        setIsCompact(shouldBeCompact)
      })
    },
  })

  return (
    <div
      className={cn(
        'flex min-h-screen flex-col lg:grid',
        'transition-[grid-template-columns] duration-300 ease-in-out',
        'text-foreground',
        showSidebar ? 'grid-cols-[280px_1fr]' : 'grid-cols-[0px_1fr]',
      )}
    >
      <aside
        className={cn(
          'hidden lg:block',
          'transition-[width] duration-300 ease-in-out',
          'border-border border-r bg-sidebar',
          showSidebar ? 'w-70' : 'w-0 border-none',
        )}
      >
        {/* The width here prevents squeezing the content when the sidebar is transitioning */}
        <div
          className={cn(
            'fixed h-screen w-70 overflow-y-auto',
            'transition-opacity ease-in-out',
            showSidebar
              ? 'opacity-100 delay-250 duration-150'
              : 'opacity-0 duration-75',
          )}
        >
          <SidebarContent />
        </div>
      </aside>

      <div className={cn('relative flex flex-1 flex-col flex-nowrap')}>
        {/* Keep h-18 in sync with HEADER_HEIGTH  */}
        <header
          style={getHeaderStyle(position, scrollY)}
          className={cn(
            'sticky top-0 z-50 flex h-18 shrink-0 flex-col flex-nowrap items-start justify-center',
            'border-b bg-background/50 px-4 backdrop-blur-sm',
            !isAtTop && 'transition-transform duration-300 ease-in-out',
          )}
        >
          <Header
            showSidebar={showSidebar}
            toggleSidebar={() => setShowSidebar(!showSidebar)}
            openMobileSidebar={() => setShowMobileSidebar(true)}
          />
        </header>

        <main className="flex-1 px-2 pt-4 pb-20 sm:px-4 sm:pt-6 md:px-6 md:pt-8 lg:pt-10">
          <div ref={mainContentContainer} className="mx-auto w-full max-w-4xl">
            <Outlet />
          </div>
        </main>

        <footer className="border-t px-4 py-6 text-center text-muted-foreground/50 text-xs">
          {packageInfo.version}
        </footer>
      </div>

      <MobileSidebar
        isOpen={showMobileSidebar}
        onOpenChange={setShowMobileSidebar}
      ></MobileSidebar>
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
