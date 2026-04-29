import { useSmartHeaderPosition } from '@/hooks/useSmartHeaderPosition'
import type { SmartHeaderPosition } from '@/hooks/useSmartHeaderPosition'
import { cn } from '@/lib/utils'
import { useRef, useState } from 'react'
import { SidebarContent } from './sidebar-content'
import { MobileSidebar } from './mobile-sidebar'
import { Outlet } from '@tanstack/react-router'
import packageInfo from '@/../package.json'
import { Header } from './header'

export function Layout() {
  const HEADER_HEIGHT = 72
  const contentArea = useRef<HTMLDivElement>(null)

  const { position, isAtTop, scrollY } = useSmartHeaderPosition(
    contentArea,
    HEADER_HEIGHT,
  )

  const [showSidebar, setShowSidebar] = useState(true)
  const [showMobileSidebar, setShowMobileSidebar] = useState(false)

  return (
    <div
      className={cn(
        'h-screen flex flex-col lg:grid overflow-hidden',
        'transition-all duration-300 ease-in-out',
        'text-foreground',
        // 'pl-[env(safe-area-inset-left)] pr-[env(safe-area-inset-right)]',
        showSidebar ? 'grid-cols-[280px_1fr] ' : 'grid-cols-[0px_1fr]',
      )}
    >
      <aside
        className={cn(
          'hidden lg:block overflow-y-auto',
          'transition-all duration-300 ease-in-out',
          'border-r border-border bg-sidebar',
          showSidebar ? 'w-70' : 'w-0 opacity-0 border-none',
        )}
      >
        {/* Wrap the sidebar in a container with a fix width 
        in order to prevent squeezing the content when the sidebar is transitioning */}
        <div className="sticky top-0 h-screen w-70 overflow-y-auto">
          <SidebarContent />
        </div>
      </aside>

      <div
        ref={contentArea}
        className={cn(
          'overflow-y-auto relative flex flex-col flex-nowrap flex-1',
        )}
      >
        <header
          style={getHeaderStyle(position, scrollY)}
          className={cn(
            'sticky top-0 z-50 h-18 shrink-0 flex flex-col flex-nowrap justify-center items-start',
            'px-4 border-b bg-background/50 backdrop-blur-sm',
            !isAtTop && 'transition-transform duration-300 ease-in-out',
          )}
        >
          <Header
            showSidebar={showSidebar}
            toggleSidebar={() => setShowSidebar(!showSidebar)}
            openMobileSidebar={() => setShowMobileSidebar(true)}
          />
        </header>

        <main className="flex-1 px-4 pt-4 pb-20 sm:px-6 sm:pt-6 md:pt-8 lg:pt-10">
          <div className="max-w-4xl mx-auto w-full">
            <Outlet />
          </div>
        </main>

        <footer className="px-4 py-6 border-t text-center text-xs text-muted-foreground/50">
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
