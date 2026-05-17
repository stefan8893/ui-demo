import { createFileRoute } from '@tanstack/react-router'
import { AppearanceSettings } from '@/components/features/settings/appearance-settings'

export const Route = createFileRoute('/settings/appearance')({
  component: () => <AppearanceSettings />,
})
