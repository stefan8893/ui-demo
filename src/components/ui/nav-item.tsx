// components/ui/nav-item.tsx
import { Link } from '@tanstack/react-router'
import { cn } from '@/lib/utils'
import { SheetClose } from './sheet'

interface NavItemProps {
  icon: React.ReactNode
  label: string
  to: string
  isMobile?: boolean
}

export function NavItem({ icon, label, to, isMobile }: NavItemProps) {
  const content = (
    <Link
      to={to}
      preload="intent"
      className={cn(
        'w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer',
        'text-muted-foreground hover:text-foreground hover:bg-accent',
      )}
      activeProps={{
        className:
          'bg-primary text-primary-foreground shadow-sm hover:bg-primary/90',
      }}
    >
      <span className="size-5 flex items-center justify-center">{icon}</span>
      {label}
    </Link>
  )

  if (isMobile) {
    return <SheetClose asChild>{content}</SheetClose>
  }

  return content
}
