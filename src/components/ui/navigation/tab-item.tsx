import type { LinkProps } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'
import type { ReactNode } from 'react'
import { SheetClose } from '@/components/ui/overlays/sheet'
import { cn } from '@/lib/utils'

type TabItemProps = {
  label: string
  appendIcon?: ReactNode
  to: string
  closeMobileSidebarOnClick?: boolean
  onClick?: () => void
} & Partial<LinkProps>

export function TabItem({
  label,
  appendIcon,
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
        'flex w-full cursor-pointer items-center justify-between gap-3 rounded-lg px-3 py-4 font-medium text-base transition-all',
        'hover:bg-accent',
      )}
      activeProps={{
        className:
          'bg-primary text-primary-foreground shadow-sm hover:bg-primary/90',
      }}
    >
      {label}
      {appendIcon && <span>{appendIcon}</span>}
    </Link>
  )

  if (closeMobileSidebarOnClick) {
    return <SheetClose asChild>{content}</SheetClose>
  }

  return content
}
