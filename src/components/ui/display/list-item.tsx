import { cn } from '@/lib/utils'
import type { ComponentPropsWithoutRef } from 'react'

type ListItemProps = ComponentPropsWithoutRef<'div'>

export function ListItem({ className, ...props }: ListItemProps) {
  return (
    <div
      {...props}
      className={cn(
        'px-3 py-2 rounded-md text-sm transition-colors hover:bg-accent hover:text-accent-foreground cursor-pointer',
        className,
      )}
    ></div>
  )
}
