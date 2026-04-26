// components/SidebarContent.tsx
import { LayoutDashboard, Folder, Users, Settings } from 'lucide-react'

export function SidebarContent() {
  return (
    <div className="flex flex-col h-full bg-zinc-900 text-zinc-100">
      <div className="p-6">
        <h2 className="text-xl font-bold tracking-tight text-zinc-100">
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

      <div className="p-4 border-t border-zinc-800">
        <NavItem icon={<Settings size={20} />} label="Einstellungen" />
      </div>
    </div>
  )
}

function NavItem({
  icon,
  label,
  active = false,
}: {
  icon: React.ReactNode
  label: string
  active?: boolean
}) {
  return (
    <button
      className={`
      w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all
      ${active ? 'bg-zinc-800 text-white shadow-sm' : 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50'}
    `}
    >
      {icon}
      {label}
    </button>
  )
}
