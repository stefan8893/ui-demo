import { createFileRoute } from '@tanstack/react-router'
import { SettingsMobileMenu } from '@/components/features/settings/settings-mobile-menu'

export const Route = createFileRoute('/settings/')({
  component: SettingsMobileMenu,
})
