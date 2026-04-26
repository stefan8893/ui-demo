import { Outlet } from '@tanstack/react-router'
import { Menu, PanelLeftClose, PanelLeftOpen } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { SidebarContent } from './sidebar-content'
import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'
import { ThemeToggle } from '@/components/theme-toggle'
import { IconButton } from '@/components/ui/icon-button'

export function MainLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const scrollDir = useScrollDirection()
  return (
    <div
      className={cn(
        'flex flex-col lg:grid min-h-screen bg-background text-foreground transition-all duration-300',
        isSidebarOpen ? 'lg:grid-cols-[280px_1fr]' : 'lg:grid-cols-[0px_1fr]',
      )}
    >
      {/* MOBILE HEADER */}
      <header
        className={cn(
          'lg:hidden fixed top-0 inset-x-0 h-16 flex items-center px-4 border-b bg-background/80 backdrop-blur-md z-50 transition-transform duration-300',
          scrollDir === 'down' ? '-translate-y-full' : 'translate-y-0',
        )}
      >
        <Sheet>
          <SheetTrigger asChild>
            <IconButton icon={<Menu />} className="p-2" />
          </SheetTrigger>
          <SheetContent side="left" className="p-0 w-70 flex flex-col h-full">
            <div className="flex-1 overflow-y-auto py-4">
              <SidebarContent />
            </div>
          </SheetContent>
        </Sheet>
        <h1 className="text-lg font-bold">UI Demo</h1>
        <ThemeToggle className="ml-auto" />
      </header>

      {/* DESKTOP SIDEBAR */}
      <aside
        className={cn(
          'hidden lg:block border-r border-border bg-sidebar',
          isSidebarOpen ? 'w-70' : 'w-0 opacity-0 border-none',
        )}
      >
        <div className="sticky top-0 h-screen overflow-y-auto">
          <SidebarContent />
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <div className="flex flex-col flex-1 min-w-0">
        {/* DESKTOP HEADER (SMART) */}
        <header
          className={cn(
            'hidden lg:flex h-18 items-center px-4 gap-4 border-b bg-background/50 backdrop-blur-md sticky top-0 z-40 transition-transform duration-300',
            scrollDir === 'down'
              ? '-translate-y-full shadow-none'
              : 'translate-y-0 shadow-sm',
          )}
        >
          <IconButton
            icon={
              isSidebarOpen ? (
                <PanelLeftClose size={20} />
              ) : (
                <PanelLeftOpen size={20} />
              )
            }
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          />
          <span className="text-sm text-muted-foreground">
            Dashboard / Übersicht
          </span>
          <ThemeToggle className="ml-auto" />
        </header>

        {/* Padding-Top für Mobile hinzufügen, damit der Content nicht unter dem Header startet */}
        <main className="flex-1 p-6 lg:p-10 mt-16 lg:mt-0">
          <div className="max-w-4xl mx-auto w-full">
            <Outlet />
          </div>
        </main>

        <footer className="p-4 border-t text-center text-[10px] text-muted-foreground/50">
          v1.0.4-stable
        </footer>
      </div>
    </div>
  )
}

function useScrollDirection() {
  const [scrollDir, setScrollDir] = useState<'up' | 'down'>('up')

  useEffect(() => {
    let lastScrollY = window.pageYOffset

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset
      const direction = scrollY > lastScrollY ? 'down' : 'up'
      if (
        direction !== scrollDir &&
        (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)
      ) {
        setScrollDir(direction)
      }
      lastScrollY = scrollY > 0 ? scrollY : 0
    }

    window.addEventListener('scroll', updateScrollDirection)
    return () => window.removeEventListener('scroll', updateScrollDirection)
  }, [scrollDir])

  return scrollDir
}
