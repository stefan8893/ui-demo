import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva } from 'class-variance-authority'
import type { VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import type { LucideIcon } from 'lucide-react'

export interface SurfaceProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof surfaceVariants> {
  asChild?: boolean
  title?: string
  icon?: LucideIcon
}

const surfaceVariants = cva(
  'rounded-xl transition-colors relative overflow-hidden flex flex-col',
  {
    variants: {
      variant: {
        default: 'bg-card border shadow-sm text-card-foreground',
        muted: 'bg-muted/50 text-muted-foreground',
        ghost: 'bg-transparent border border-dashed text-muted-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

export const Surface = React.forwardRef<HTMLDivElement, SurfaceProps>(
  (
    {
      className,
      variant,
      asChild = false,
      title,
      icon: Icon,
      children,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'div'

    return (
      <Comp
        ref={ref}
        className={cn(surfaceVariants({ variant }), className)}
        {...props}
      >
        <div className="p-4 flex-1 flex flex-col">
          {title && (
            <div className="flex items-center gap-2 mb-4">
              {' '}
              {Icon && <Icon className="size-4 shrink-0" />}
              <span className="text-sm font-semibold italic leading-none text-foreground/80 tracking-tight">
                {title}
              </span>
            </div>
          )}

          <div className="flex-1 flex flex-col text-[14px] leading-relaxed">
            {children}
          </div>
        </div>
      </Comp>
    )
  },
)
