import { cn } from '@/lib/utils'

type SectionCardProps = {
  children: React.ReactNode
  title?: string
  description?: string
  className?: string
}

export function PageCard({
  children,
  title,
  description,
  className,
}: SectionCardProps) {
  return (
    <div
      className={cn(
        'bg-card text-card-foreground rounded-xl border shadow-sm',
        'p-4 sm:p-6 lg:p-8',
        className,
      )}
    >
      {(title || description) && (
        <div className="mb-6 space-y-1.5">
          {title && (
            <h2 className="mb-2 text-3xl font-bold tracking-tight">{title}</h2>
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
