import {
  createFileRoute,
  Link,
  Outlet,
  useNavigate,
  useRouterState,
} from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { AppearanceSettings } from '@/components/features/settings/appearance-settings'
import { LanguageRegionSettings } from '@/components/features/settings/language-region-settings'
import { SettingsMobileMenu } from '@/components/features/settings/settings-mobile-menu'
import { ListItem } from '@/components/ui/display/list-item'
import { PageCard } from '@/components/ui/display/page-card'
import { useLayoutStore } from '@/stores/useLayoutStore'

export const Route = createFileRoute('/settings')({
  component: RouteComponent,
})

const componentByPath: Record<string, React.ReactNode> = {
  '/settings': <SettingsMobileMenu />,
  '/settings/language-region': <LanguageRegionSettings />,
  '/settings/appearance': <AppearanceSettings />,
} as const

function RouteComponent() {
  const { location } = useRouterState()
  const navigate = useNavigate()

  const [wasAutoRedirected, setWasAutoRedirected] = useState(false)
  const isCompact = useLayoutStore((state) => state.isCompact)
  const pathname = location.pathname.replace(/\/$/, '') || '/'

  useEffect(() => {
    if (!isCompact && pathname === '/settings') {
      setWasAutoRedirected(true)
      navigate({
        to: '/settings/language-region',
        replace: true,
      })
    }
  }, [isCompact, pathname, navigate])

  useEffect(() => {
    if (isCompact && wasAutoRedirected && pathname !== '/settings') {
      setWasAutoRedirected(false)
      navigate({ to: '/settings', replace: true })
    }
  }, [isCompact, wasAutoRedirected, pathname, navigate])

  const handleTabsListClick = () => {
    if (wasAutoRedirected) {
      setWasAutoRedirected(false)
    }
  }

  const getContent = () => {
    if (isCompact === undefined) {
      return null
    } else if (isCompact) {
      return componentByPath[pathname] ?? <SettingsMobileMenu />
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
          <div className="min-w-0">
            <Outlet />
          </div>
        </div>
      )
    }
  }

  return <PageCard title="Einstellungen">{getContent()}</PageCard>
}
