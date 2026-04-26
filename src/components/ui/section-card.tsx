import { cn } from '@/lib/utils'

export function SectionCard({
  children,
  title,
  className,
}: {
  children: React.ReactNode
  title?: string
  className?: string
}) {
  return (
    <div
      className={cn(
        'rounded-xl border border-border bg-card text-card-foreground shadow-sm p-6 lg:p-8',
        className,
      )}
    >
      {title && <h2 className="text-xl font-semibold mb-6">{title}</h2>}
      {children}
    </div>
  )
}
