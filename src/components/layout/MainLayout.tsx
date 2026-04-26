import { Outlet } from '@tanstack/react-router'
import { Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { SidebarContent } from './SidebarContent'

export function MainLayout() {
  return (
    <div className="flex flex-col lg:grid lg:grid-cols-[280px_1fr] min-h-screen bg-zinc-900 text-zinc-100">
      {/* MOBILE HEADER & SHEET */}
      <header className="lg:hidden flex items-center justify-between p-4 border-b border-zinc-700 bg-zinc-800">
        <h1 className="text-lg font-bold">UI Demo</h1>
        <Sheet>
          <SheetTrigger asChild>
            <button className="p-2 hover:bg-zinc-800 rounded-md">
              <Menu className="size-6 text-zinc-400" />
            </button>
          </SheetTrigger>
          {/* side="left" sorgt dafür, dass es wie eine echte Sidebar einfährt */}
          <SheetContent side="left" className="p-0 border-r-zinc-800 w-70">
            <SidebarContent />
          </SheetContent>
        </Sheet>
      </header>

      {/* DESKTOP SIDEBAR */}
      <aside className="hidden lg:block border-r border-zinc-800 bg-zinc-800/50">
        <div className="sticky top-0 h-screen">
          <SidebarContent />
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <div className="flex flex-col flex-1 bg-zinc-900">
        {/* Optionaler Desktop-Header (für Breadcrumbs etc.) */}
        <header className="hidden lg:flex h-16 items-center px-8 border-b border-zinc-800 bg-zinc-800/30">
          <span className="text-sm text-zinc-500">Dashboard / Übersicht</span>
        </header>

        <main className="flex-1 p-6 lg:p-10 bg-zinc-900">
          <div className="rounded-xl border border-zinc-800 bg-zinc-800/40 p-8">
            <Outlet />
          </div>
        </main>

        <footer className="p-4 border-t text-center text-xs border-zinc-800 text-zinc-500 font-mono">
          v1.0.4-stable
        </footer>
      </div>
    </div>
  )
}
