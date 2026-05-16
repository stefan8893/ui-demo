import {
  createFileRoute,
  Outlet,
  useNavigate,
  useRouterState,
} from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { SettingsMenu } from '@/components/features/settings/settings-menu'
import { PageCard } from '@/components/ui/display/page-card'
import { useLayoutStore } from '@/stores/useLayoutStore'

export const Route = createFileRoute('/settings')({
  component: RouteComponent,
})

function RouteComponent() {
  const { location } = useRouterState()
  const navigate = useNavigate()

  const [wasAutoRedirected, setWasAutoRedirected] = useState(false)
  const isContentCompact = useLayoutStore((x) => x.isContentCompact)
  const pathname = location.pathname.replace(/\/$/, '') ?? '/'

  useEffect(() => {
    if (!isContentCompact && pathname === '/settings') {
      setWasAutoRedirected(true)
      navigate({
        to: '/settings/language-region',
        replace: true,
      })
    }
  }, [isContentCompact, pathname, navigate])

  useEffect(() => {
    if (isContentCompact && wasAutoRedirected && pathname !== '/settings') {
      setWasAutoRedirected(false)
      navigate({ to: '/settings', replace: true })
    }
  }, [isContentCompact, wasAutoRedirected, pathname, navigate])

  const handleMenuItemClick = () => {
    if (wasAutoRedirected) {
      setWasAutoRedirected(false)
    }
  }

  const renderSettingsContent = () => {
    if (isContentCompact === undefined) {
      return null
    } else if (isContentCompact) {
      return <Outlet />
    } else {
      return (
        <div className="grid grid-cols-[200px_minmax(0,1fr)] gap-12">
          <SettingsMenu onClick={handleMenuItemClick} />
          <div>
            <Outlet />
          </div>
        </div>
      )
    }
  }

  return <PageCard title="Einstellungen">{renderSettingsContent()}</PageCard>
}
