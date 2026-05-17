import type { ComponentPropsWithRef } from 'react'
import { cn } from '@/lib/utils'

type ListItemProps = ComponentPropsWithRef<'div'>

export function ListItem({ className, ...props }: ListItemProps) {
  return (
    <div
      {...props}
      className={cn(
        'cursor-pointer rounded-xl px-3 py-1 text-sm hover:bg-accent hover:text-accent-foreground',
        className,
      )}
    />
  )
}
