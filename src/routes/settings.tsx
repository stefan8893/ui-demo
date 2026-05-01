import { AppearanceSettings } from '@/components/features/settings/appearance-settings'
import {
  SettingsTabContent,
  SettingsTabTrigger,
} from '@/components/features/settings/settings-tabs'
import { SectionCard } from '@/components/ui/display/section-card'
import { Tabs, TabsList } from '@/components/ui/display/tabs'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/settings')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <SectionCard title="Einstellungen">
      <Tabs defaultValue="region" className="" orientation="vertical">
        <div className="grid w-full grid-cols-[200px_minmax(0,1fr)] gap-12">
          <TabsList className="flex h-auto w-full flex-col items-stretch justify-start gap-y-1.5 border-none bg-transparent p-0">
            <SettingsTabTrigger value="languageRegion">
              Sprache & Region
            </SettingsTabTrigger>
            <SettingsTabTrigger value="appearance">
              Erscheinungsbild
            </SettingsTabTrigger>
          </TabsList>
          <div className="min-w-0">
            <SettingsTabContent title="Sprache & Region" value="languageRegion">
              <p className="text-muted-foreground mb-6 text-sm">
                Lege fest, wie Datumsangaben, Währungen und Kalenderwochen
                dargestellt werden.
              </p>
            </SettingsTabContent>
            <SettingsTabContent title="Erscheinungsbild" value="appearance">
              <AppearanceSettings />
            </SettingsTabContent>
          </div>
        </div>
      </Tabs>
    </SectionCard>
  )
}
