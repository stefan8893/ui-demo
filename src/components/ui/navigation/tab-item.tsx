import type { LinkProps } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'
import { SheetClose } from '@/components/ui/overlays/sheet'
import { cn } from '@/lib/utils'

type TabItemProps = Partial<LinkProps> & {
  label: string
  to: string
  closeMobileSidebarOnClick?: boolean
  onClick?: () => void
}

export function TabItem({
  label,
  to,
  closeMobileSidebarOnClick,
  onClick,
}: TabItemProps) {
  const content = (
    <Link
      to={to}
      preload="intent"
      onClick={onClick}
      className={cn(
        'flex w-full cursor-pointer items-center gap-3 rounded-lg px-3 py-2 font-medium text-sm transition-all',
        'hover:bg-accent',
      )}
      activeProps={{
        className:
          'bg-primary text-primary-foreground shadow-sm hover:bg-primary/90',
      }}
    >
      {label}
    </Link>
  )

  if (closeMobileSidebarOnClick) {
    return <SheetClose asChild>{content}</SheetClose>
  }

  return content
}
