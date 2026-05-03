import { LanguageRegionSettings } from '@/components/features/settings/language-region-settings'
import { SettingsTabContent } from '@/components/features/settings/settings-tabs'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/settings/language-region')({
  component: LanguageRegionSettingsTab,
})

function LanguageRegionSettingsTab() {
  return (
    <SettingsTabContent value="language-region" title="Sprache & Region">
      <LanguageRegionSettings />
    </SettingsTabContent>
  )
}
