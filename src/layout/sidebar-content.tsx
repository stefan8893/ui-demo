// components/SidebarContent.tsx
import { NavItem } from '@/components/ui/nav-item'
import { LayoutDashboard, Folder, Users, Settings } from 'lucide-react'

export function SidebarContent() {
  return (
    <div className="flex flex-col h-full text-foreground/70">
      <div className="p-6">
        <h2 className="text-xl font-bold tracking-tight text-foreground">
          UI Demo
        </h2>
      </div>

      <nav className="flex-1 px-4 space-y-2">
        <NavItem
          icon={<LayoutDashboard size={20} />}
          label="Dashboard"
          active
        />
        <NavItem icon={<Folder size={20} />} label="Projekte" />
        <NavItem icon={<Users size={20} />} label="Team" />
      </nav>

      <div className="p-4 border-t border-border">
        <NavItem icon={<Settings size={20} />} label="Einstellungen" />
      </div>
    </div>
  )
}
