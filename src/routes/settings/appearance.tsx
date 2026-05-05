import { AppearanceSettings } from '@/components/features/settings/appearance-settings'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/settings/appearance')({
  component: AppearanceSettingsTab,
})

function AppearanceSettingsTab() {
  return <AppearanceSettings />
}
