import { cn } from '@/lib/utils'

interface NavItemProps {
  icon: React.ReactNode
  label: string
  active?: boolean
  onClick?: () => void
  className?: string
}

export function NavItem({
  icon,
  label,
  active,
  onClick,
  className,
}: NavItemProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer',
        active
          ? 'bg-primary text-primary-foreground shadow-sm'
          : 'text-muted-foreground hover:text-foreground hover:bg-accent',
        className,
      )}
    >
      {/* Wir erzwingen eine feste Größe für Icons, damit alles perfekt fluchtet */}
      <span
        className={cn(
          'size-5 flex items-center justify-center',
          active ? 'text-primary-foreground' : 'text-muted-foreground',
        )}
      >
        {icon}
      </span>
      {label}
    </button>
  )
}
