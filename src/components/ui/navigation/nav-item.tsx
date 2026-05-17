import type { LinkProps } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'
import { cva, type VariantProps } from 'class-variance-authority'
import type { ReactNode } from 'react'
import { SheetClose } from '@/components/ui/overlays/sheet'
import { cn } from '@/lib/utils'

const iconSizeMap = {
  default: 'size-5',
  lg: 'size-6',
} as const

const navItemVariants = cva(
  cn(
    'flex w-full cursor-pointer items-center gap-3 rounded-lg font-medium text-sm transition-all',
    'text-muted-foreground hover:bg-accent',
  ),
  {
    variants: {
      size: {
        default: 'px-3 py-2 text-sm gap-3',
        lg: 'px-4 py-2.5 text-base gap-3.5',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  },
)

type NavItemProps = {
  prependIcon?: ReactNode
  label: string
  appendIcon?: ReactNode
  to: string
  closeMobileSidebarOnClick?: boolean
  onClick?: () => void
} & Partial<LinkProps> &
  VariantProps<typeof navItemVariants>

export function NavItem({
  prependIcon,
  label,
  appendIcon,
  to,
  size = 'default',
  closeMobileSidebarOnClick,
  onClick,
}: NavItemProps) {
  const iconSize = iconSizeMap[size ?? 'default']
  const content = (
    <Link
      to={to}
      preload="intent"
      onClick={onClick}
      className={cn(navItemVariants({ size }))}
      activeProps={{
        className:
          'bg-primary text-primary-foreground shadow-sm hover:bg-primary/90',
      }}
    >
      {prependIcon && (
        <span className={cn('flex items-center justify-center', iconSize)}>
          {prependIcon}
        </span>
      )}
      {label}
      {appendIcon && (
        <span
          className={cn('ml-auto flex items-center justify-center', iconSize)}
        >
          {appendIcon}
        </span>
      )}
    </Link>
  )

  if (closeMobileSidebarOnClick) {
    return <SheetClose asChild>{content}</SheetClose>
  }

  return content
}
