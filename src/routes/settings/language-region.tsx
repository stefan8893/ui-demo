import { SettingsTabContent } from '@/components/features/settings/settings-tabs'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/settings/language-region')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <SettingsTabContent title="Sprache & Region" value="language-region">
      <p className="text-muted-foreground mb-6 text-sm">
        Lege fest, wie Datumsangaben, Währungen und Kalenderwochen dargestellt
        werden.
      </p>
    </SettingsTabContent>
  )
}
