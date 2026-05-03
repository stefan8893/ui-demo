import { AppearanceSettings } from '@/components/features/settings/appearance-settings'
import { SettingsTabContent } from '@/components/features/settings/settings-tabs'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/settings/appearance')({
  component: AppearanceSettingsTab,
})

function AppearanceSettingsTab() {
  return (
    <SettingsTabContent title="Erscheinung" value="appearance">
      <AppearanceSettings />
    </SettingsTabContent>
  )
}
