import type { ComponentPropsWithoutRef } from 'react'
import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

type ListItemProps = ComponentPropsWithoutRef<'div'>

export const ListItem = forwardRef<HTMLDivElement, ListItemProps>(
  ({ className, ...props }: ListItemProps, ref) => {
    return (
      <div
        ref={ref}
        {...props}
        className={cn(
          'cursor-pointer rounded-xl px-3 py-1 text-sm hover:bg-accent hover:text-accent-foreground',
          className,
        )}
      ></div>
    )
  },
)

ListItem.displayName = 'ListItem'
