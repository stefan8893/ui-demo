import { Button } from '@/components/ui/buttons/button'
import type { ButtonProps } from '@/components/ui/buttons/button'
import { cn } from '@/lib/utils'
import { cva } from 'class-variance-authority'
import type { VariantProps } from 'class-variance-authority'
import type { LucideIcon } from 'lucide-react'

const iconVariants = cva('', {
  variants: {
    size: {
      'icon-xs': 'size-3',
      'icon-sm': 'size-3.5',
      default: 'size-4',
      'icon-lg': 'size-5',
    },
  },
  defaultVariants: {
    size: 'default',
  },
})

interface IconButtonProps
  extends Omit<ButtonProps, 'size'>, VariantProps<typeof iconVariants> {
  icon: LucideIcon
  iconClassName?: string
}

export function IconButton({
  icon: Icon,
  size = 'icon-lg',
  variant = 'ghost',
  className,
  iconClassName,
  ...props
}: IconButtonProps) {
  return (
    <Button
      {...props}
      size={size}
      variant={variant}
      className={cn('shrink-0', className)}
    >
      <Icon className={cn(iconVariants({ size }), iconClassName)} />
    </Button>
  )
}
