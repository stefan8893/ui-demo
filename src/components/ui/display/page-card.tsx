import type { ComponentPropsWithoutRef, PropsWithChildren } from 'react'
import { cn } from '@/lib/utils'

type SectionCardProps = {
  title?: string
  description?: string
} & PropsWithChildren<ComponentPropsWithoutRef<'section'>>

export function PageCard({
  children,
  title,
  description,
  className,
  ...props
}: SectionCardProps) {
  return (
    <div
      className={cn(
        'rounded-xl border bg-card text-card-foreground shadow-sm',
        'flex flex-col p-4 sm:p-6 lg:p-8',
        className,
      )}
      {...props}
    >
      {(title || description) && (
        <div className="mb-4 flex flex-col gap-y-1">
          {title && (
            <h2 className="font-bold text-3xl tracking-tight">{title}</h2>
          )}
          {description && (
            <p className="text-muted-foreground text-sm">{description}</p>
          )}
        </div>
      )}
      {children}
    </div>
  )
}
