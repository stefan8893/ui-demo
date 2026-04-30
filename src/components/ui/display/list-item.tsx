import { cn } from '@/lib/utils'
import { forwardRef } from 'react'
import type { ComponentPropsWithoutRef } from 'react'

type ListItemProps = ComponentPropsWithoutRef<'div'>

export const ListItem = forwardRef<HTMLDivElement, ListItemProps>(
  ({ className, ...props }: ListItemProps, ref) => {
    return (
      <div
        ref={ref}
        {...props}
        className={cn(
          'px-3 py-2 rounded-md text-sm transition-colors hover:bg-accent hover:text-accent-foreground cursor-pointer',
          className,
        )}
      ></div>
    )
  },
)

ListItem.displayName = 'ListItem'
