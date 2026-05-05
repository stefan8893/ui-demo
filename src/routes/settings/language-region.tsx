import { LanguageRegionSettings } from '@/components/features/settings/language-region-settings'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/settings/language-region')({
  component: LanguageRegionSettingsTab,
})

function LanguageRegionSettingsTab() {
  return <LanguageRegionSettings />
}
