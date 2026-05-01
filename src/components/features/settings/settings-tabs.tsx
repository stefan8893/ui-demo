import { TabsContent, TabsTrigger } from '@/components/ui/display/tabs'

type SettingsTabTriggerProps = {
  value: string
  children: React.ReactNode
}

export function SettingsTabTrigger({
  value,
  children,
}: SettingsTabTriggerProps) {
  return (
    <TabsTrigger
      value={value}
      className="data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground hover:bg-muted/50 w-full cursor-pointer justify-start px-3 py-2 text-sm font-medium transition-all"
    >
      {children}
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
      <div className="mb-6">
        <h3 className="text-foreground text-lg font-semibold">{title}</h3>
        {description && (
          <p className="text-muted-foreground mt-1 text-sm">{description}</p>
        )}
      </div>
      <div className="space-y-6">{children}</div>
    </TabsContent>
  )
}
