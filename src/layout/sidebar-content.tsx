import { NavItem } from '@/components/ui/navigation/nav-item'
import { Settings, Home } from 'lucide-react'

export function SidebarContent({ isMobile }: { isMobile?: boolean }) {
  return (
    <div className="text-foreground/70 flex h-full flex-col">
      <div className="p-6">
        <h2 className="text-foreground text-xl font-bold tracking-tight">
          UI Demo
        </h2>
      </div>

      <nav className="flex flex-col gap-1 px-2 pb-6">
        <NavItem
          to="/"
          label="Home"
          icon={<Home size={20} />}
          isMobile={isMobile}
        />
      </nav>

      <div className="border-border mt-auto border-t p-4">
        <NavItem
          to="/settings"
          label="Einstellungen"
          icon={<Settings size={20} />}
          isMobile={isMobile}
        />
      </div>
    </div>
  )
}
