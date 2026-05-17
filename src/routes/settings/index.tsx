import { createFileRoute, redirect } from '@tanstack/react-router'
import { SettingsMenu } from '@/components/features/settings/settings-menu'
import { useLayoutStore } from '@/stores/useLayoutStore'

export const Route = createFileRoute('/settings/')({
  beforeLoad: () => {
    const isContentCompact = useLayoutStore.getState().isContentCompact

    if (isContentCompact === undefined) return
    if (isContentCompact === false)
      throw redirect({ to: '/settings/language-region', replace: true })
  },
  component: () => <SettingsMenu showAppendIconGoTo size="lg" />,
})
