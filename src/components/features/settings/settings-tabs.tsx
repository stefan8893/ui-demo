import { Link } from '@tanstack/react-router'
import { TabsContent, TabsTrigger } from '@/components/ui/display/tabs'
import { cn } from '@/lib/utils'

type SettingsTabTriggerProps = {
  value: 'appearance' | 'language-region'
  children: React.ReactNode
  className?: string
}

export function SettingsTabTrigger({
  value,
  children,
  className,
}: SettingsTabTriggerProps) {
  return (
    <TabsTrigger
      value={value}
      asChild
      className={cn(
        'data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground hover:bg-muted/50 w-full cursor-pointer justify-start px-3 py-2 text-sm font-medium transition-all',
        className,
      )}
    >
      <Link to={`/settings/${value}`} className="block h-full w-full text-left">
        {children}
      </Link>
    </TabsTrigger>
  )
}

type SettingsTabContentProps = {
  value: string
  title: string
  description?: string
  children: React.ReactNode
}

export function SettingsTabContent({
  value,
  title,
  description,
  children,
}: SettingsTabContentProps) {
  return (
    <TabsContent value={value} className="m-0 focus-visible:outline-none">
      <div className="mb-8">
        <h2 className="text-foreground text-2xl font-bold tracking-tight">
          {title}
        </h2>
        {description && (
          <p className="text-muted-foreground mt-1.5 text-sm leading-relaxed">
            {description}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-y-8">{children}</div>
    </TabsContent>
  )
}
