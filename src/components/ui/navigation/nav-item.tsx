import { Link } from '@tanstack/react-router'
import { cn } from '@/lib/utils'
import { SheetClose } from '../overlays/sheet'

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
        'flex w-full cursor-pointer items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all',
        'text-muted-foreground hover:text-foreground hover:bg-accent',
      )}
      activeProps={{
        className:
          'bg-primary text-primary-foreground shadow-sm hover:bg-primary/90',
      }}
    >
      <span className="flex size-5 items-center justify-center">{icon}</span>
      {label}
    </Link>
  )

  if (isMobile) {
    return <SheetClose asChild>{content}</SheetClose>
  }

  return content
}
