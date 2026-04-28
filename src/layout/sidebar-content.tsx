import { NavItem } from '@/components/ui/nav-item'
import { Settings, MousePointerClick, Home } from 'lucide-react'

export function SidebarContent({ isMobile }: { isMobile?: boolean }) {
  return (
    <div className="flex flex-col h-full text-foreground/70">
      <div className="p-6">
        <h2 className="text-xl font-bold tracking-tight text-foreground">
          UI Demo
        </h2>
      </div>

      <nav className="flex flex-col gap-1 px-2">
        <NavItem
          to="/"
          label="Home"
          icon={<Home size={20} />}
          isMobile={isMobile}
        />
        <NavItem
          to="/buttons"
          label="Buttons"
          icon={<MousePointerClick size={20} />}
          isMobile={isMobile}
        />
        {Array.from({ length: 30 }).map((_, i) => (
          <NavItem
            key={i}
            to="/buttons"
            label={`Buttons ${i}`}
            icon={<MousePointerClick size={20} />}
            isMobile={isMobile}
          />
        ))}
      </nav>

      <div className="p-4 border-t border-border mt-auto">
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
