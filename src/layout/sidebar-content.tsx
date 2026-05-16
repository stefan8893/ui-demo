import { Home, Settings } from 'lucide-react'
import { NavItem } from '@/components/ui/navigation/nav-item'

export function SidebarContent({ isMobile }: { isMobile?: boolean }) {
  return (
    <div className="flex h-full flex-col text-foreground/70">
      <div className="p-6">
        <h2 className="font-bold text-foreground text-xl tracking-tight">
          UI Kit
        </h2>
      </div>

      <nav className="flex flex-col gap-1 px-2 pb-6">
        <NavItem to="/" label="Home" icon={<Home />} isMobile={isMobile} />
      </nav>

      <div className="mt-auto border-border border-t p-4">
        <NavItem
          to="/settings"
          label="Einstellungen"
          icon={<Settings />}
          isMobile={isMobile}
        />
      </div>
    </div>
  )
}
