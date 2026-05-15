import type { LinkProps } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'
import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'
import type { LucideIcon } from 'lucide-react'
import type { ButtonProps } from '@/components/ui/buttons/button'
import { Button } from '@/components/ui/buttons/button'
import { cn } from '@/lib/utils'

const iconVariants = cva('', {
  variants: {
    size: {
      sm: 'size-4',
      default: 'size-5',
      lg: 'size-6',
    },
  },
  defaultVariants: {
    size: 'default',
  },
})

const buttonSizeMap = {
  sm: 'icon-sm',
  default: 'icon',
  lg: 'icon-lg',
} as const

type IconButtonProps = Omit<ButtonProps, 'size'> &
  Partial<LinkProps> &
  VariantProps<typeof iconVariants> & {
    icon: LucideIcon
    iconClassName?: string
  }

export function IconButton({
  icon: Icon,
  size = 'default',
  variant = 'ghost',
  className,
  iconClassName,
  to,
  params,
  search,
  hash,
  target,
  replace,
  ...props
}: IconButtonProps) {
  const isLink = Boolean(to)

  return (
    <Button
      {...props}
      asChild={isLink}
      size={buttonSizeMap[size ?? 'default']}
      variant={variant}
      className={cn('shrink-0 transition-none', className)}
    >
      {isLink ? (
        <Link
          to={to}
          params={params}
          search={search}
          hash={hash}
          target={target}
          replace={replace}
        >
          <Icon className={cn(iconVariants({ size }), iconClassName)} />
        </Link>
      ) : (
        <Icon className={cn(iconVariants({ size }), iconClassName)} />
      )}
    </Button>
  )
}
