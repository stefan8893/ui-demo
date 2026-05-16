import {
  createFileRoute,
  Link,
  Outlet,
  useNavigate,
  useRouterState,
} from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { ListItem } from '@/components/ui/display/list-item'
import { PageCard } from '@/components/ui/display/page-card'
import { useLayoutStore } from '@/stores/useLayoutStore'

export const Route = createFileRoute('/settings')({
  component: RouteComponent,
})

function RouteComponent() {
  const { location } = useRouterState()
  const navigate = useNavigate()

  const [wasAutoRedirected, setWasAutoRedirected] = useState(false)
  const isContentCompact = useLayoutStore((state) => state.isContentCompact)
  const pathname = location.pathname.replace(/\/$/, '') || '/'

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

  const handleTabsListClick = () => {
    if (wasAutoRedirected) {
      setWasAutoRedirected(false)
    }
  }

  const getSettingsContent = () => {
    if (isContentCompact === undefined) {
      return null
    } else if (isContentCompact) {
      return <Outlet />
    } else {
      return (
        <div className="grid w-full grid-cols-[200px_minmax(0,1fr)] gap-12">
          <div>
            <Link to="/settings/language-region" onClick={handleTabsListClick}>
              <ListItem>Sprache & Region</ListItem>
            </Link>
            <Link to="/settings/appearance" onClick={handleTabsListClick}>
              <ListItem>Erscheinung</ListItem>
            </Link>
          </div>
          <div>
            <Outlet />
          </div>
        </div>
      )
    }
  }

  return <PageCard title="Einstellungen">{getSettingsContent()}</PageCard>
}
