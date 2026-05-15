import type { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/lib/utils'

export function InlineCode({
  className,
  ...props
}: ComponentPropsWithoutRef<'code'>) {
  return (
    <code
      {...props}
      className={cn(
        'bg-muted/50 px-[0.3rem] py-[0.1rem] text-foreground',
        'font-mono font-semibold text-[0.85em]',
        'rounded-md border border-border/50',
        className,
      )}
    />
  )
}
