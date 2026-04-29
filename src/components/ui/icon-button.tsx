import { Button } from '@/components/ui/button'
import type { ButtonProps } from '@/components/ui/button'
import type { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

type IconButtonProps = Omit<ButtonProps, 'size'> & {
  icon: LucideIcon
  size?: 'icon-xs' | 'icon-sm' | 'default' | 'icon-lg'
  iconClassName?: string
}

export function IconButton({
  icon: Icon,
  size = 'default',
  className,
  iconClassName,
  ...props
}: IconButtonProps) {
  const iconSizeMap: Record<string, string> = {
    'icon-xs': 'size-3',
    'icon-sm': 'size-3.5',
    default: 'size-4',
    'icon-lg': 'size-5',
  }

  const autoIconSize = iconSizeMap[size as string] ?? iconSizeMap['default']

  return (
    <Button size={size} className={className} {...props}>
      <Icon className={cn(autoIconSize, iconClassName)} />
    </Button>
  )
}
