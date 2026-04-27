import { Outlet } from '@tanstack/react-router'
import { Menu, PanelLeftClose, PanelLeftOpen } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { SidebarContent } from './sidebar-content'
import { useRef, useState } from 'react'
import { cn } from '@/lib/utils'
import { ThemeToggle } from '@/components/theme-toggle'
import { IconButton } from '@/components/ui/icon-button'
import packageInfo from '@/../package.json'
import { useSmartHeaderPosition } from '@/hooks/useSmartHeaderPosition'

export function MainLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const layoutContainer = useRef(null)
  const { isAtTop, isHidden, scrollY } = useSmartHeaderPosition(
    layoutContainer,
    64,
  )

  const getHeaderStyle = () => {
    // FORMEL FÜR OBEN:
    // Wenn wir oben sind, schieben wir den Header immer exakt so weit hoch,
    // wie wir gescrollt haben.
    // Ausnahme: Wenn er durch einen "Schnell-Scroll" von unten schon da ist,
    // lassen wir ihn bei 0 stehen (kein Hüpfen).
    if (isAtTop) {
      const stickyOffset = isHidden ? -scrollY : 0

      return {
        transform: `translateY(${Math.min(0, stickyOffset)}px)`,
        transition: 'none', // WICHTIG: Keine Verzögerung am Seitenanfang!
      }
    }

    // FORMEL FÜR UNTEN:
    return {
      transform: isHidden ? 'translateY(-100%)' : 'translateY(0%)',
      transition: 'transform 0.3s ease-in-out',
    }
  }

  return (
    <div
      ref={layoutContainer}
      className={cn(
        'flex flex-col lg:grid min-h-screen bg-background text-foreground transition-all duration-300 ease-in-out',
        isSidebarOpen ? 'lg:grid-cols-[280px_1fr]' : 'lg:grid-cols-[0px_1fr]',
      )}
    >
      {/* MOBILE HEADER */}
      <header
        style={getHeaderStyle()}
        className={cn(
          'lg:hidden fixed top-0 inset-x-0 h-16 flex items-center px-4 border-b bg-background/80 backdrop-blur-md z-50',
          !isAtTop && 'transition-transform duration-300 ease-in-out',
        )}
      >
        <Sheet>
          <SheetTrigger asChild>
            <IconButton icon={<Menu size={24} />} className="p-2" />
          </SheetTrigger>
          <SheetContent side="left" className="p-0 w-70 flex flex-col h-full">
            <div className="sr-only">
              <SheetTitle>Sidebar Navigation</SheetTitle>
              <SheetDescription>
                Here you can navigate through the different sections of the app.
              </SheetDescription>
            </div>
            <div className="flex-1 overflow-y-auto py-4">
              <SidebarContent isMobile={true} />
            </div>
          </SheetContent>
        </Sheet>
        <h1 className="text-lg font-bold">UI Demo</h1>
        <ThemeToggle className="ml-auto" />
      </header>

      {/* DESKTOP SIDEBAR */}
      <aside
        className={cn(
          'hidden lg:block sticky top-0 h-screen border-r border-border bg-sidebar overflow-hidden transition-all duration-300 ease-in-out',
          isSidebarOpen ? 'w-70' : 'w-0 opacity-0 border-none',
        )}
      >
        <div className="sticky top-0 h-screen w-70 overflow-y-auto">
          <SidebarContent />
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <div className="flex flex-col flex-1 min-w-0">
        {/* DESKTOP HEADER (SMART) */}
        <header
          className={cn(
            'hidden lg:flex h-18 items-center px-4 gap-4 border-b bg-background/50 backdrop-blur-md sticky top-0 z-40',
            !isAtTop && 'transition-transform duration-300 ease-in-out',
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

        <main className="flex-1 p-6 lg:p-10 mt-16 lg:mt-0">
          <div className="max-w-4xl mx-auto w-full">
            <Outlet />
          </div>
        </main>

        <footer className="p-4 border-t text-center text-[10px] text-muted-foreground/50">
          {packageInfo.version}
        </footer>
      </div>
    </div>
  )
}
