// components/SidebarContent.tsx
import { NavItem } from '@/components/ui/nav-item'
import { LayoutDashboard, Users, Settings, FolderKanban } from 'lucide-react'

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
          label="Dashboard"
          icon={<LayoutDashboard size={20} />}
          isMobile={isMobile}
        />
        <NavItem
          to="/projects"
          label="Projekte"
          icon={<FolderKanban size={20} />}
          isMobile={isMobile}
        />
        <NavItem
          to="/team"
          label="Team"
          icon={<Users size={20} />}
          isMobile={isMobile}
        />
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
