import type { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/lib/utils'

type SectionProps = {
  title?: string
  description?: string
} & ComponentPropsWithoutRef<'section'>

export function Section({
  title,
  description,
  className,
  children,
  ...props
}: SectionProps) {
  const hasHeader = title || description

  return (
    <section {...props} className={cn('flex flex-col gap-y-8', className)}>
      {hasHeader && (
        <div className="flex flex-col gap-y-1">
          {title && (
            <h3 className="font-medium text-sm leading-none">{title}</h3>
          )}
          {description && (
            <p className="text-muted-foreground text-xs">{description}</p>
          )}
        </div>
      )}
      <div>{children}</div>
    </section>
  )
}
