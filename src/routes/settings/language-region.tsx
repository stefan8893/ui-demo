import { createFileRoute } from '@tanstack/react-router'
import { LanguageRegionSettings } from '@/components/features/settings/language-region-settings'

export const Route = createFileRoute('/settings/language-region')({
  component: LanguageRegionSettingsTab,
})

function LanguageRegionSettingsTab() {
  return <LanguageRegionSettings />
}
