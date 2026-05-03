import { Card } from '@/components/ui/display/card'
import { cn } from '@/lib/utils'
import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/settings/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <Card title="Einstellungen">
      <Link
        to={'/settings/language-region'}
        className={cn(
          'block h-full w-full rounded-xl text-left',
          'data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground hover:bg-accent hover:text-accent-foreground cursor-pointer justify-start px-3 py-2 text-sm font-medium transition-all',
        )}
        viewTransition={{ types: ['slide-left'] }}
      >
        Sprache & Region
      </Link>

      <Link
        to={'/settings/appearance'}
        className={cn(
          'block h-full w-full rounded-xl text-left',
          'data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground hover:bg-accent hover:text-accent-foreground cursor-pointer justify-start px-3 py-2 text-sm font-medium transition-all',
        )}
        viewTransition={{ types: ['slide-left'] }}
      >
        Erscheinung
      </Link>
    </Card>
  )
}
