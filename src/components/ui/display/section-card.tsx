import { cn } from '@/lib/utils'

type SectionCardProps = {
  children: React.ReactNode
  title?: string
  description?: string
  className?: string
}

export function SectionCard({
  children,
  title,
  description,
  className,
}: SectionCardProps) {
  return (
    <div
      className={cn(
        'rounded-xl border bg-card text-card-foreground shadow-sm p-6 lg:p-8',
        className,
      )}
    >
      {(title || description) && (
        <div className="mb-6 space-y-1.5">
          {title && (
            <h2 className="text-3xl font-bold tracking-tight mb-4">{title}</h2>
          )}
          {description && (
            <p className="text-sm text-muted-foreground">{description}</p>
          )}
        </div>
      )}
      {children}
    </div>
  )
}
