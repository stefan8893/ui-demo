import { SettingsTabTrigger } from '@/components/features/settings/settings-tabs'
import { PageCard } from '@/components/ui/display/page-card'
import { Tabs, TabsList } from '@/components/ui/display/tabs'
import {
  createFileRoute,
  Outlet,
  redirect,
  useRouterState,
} from '@tanstack/react-router'
import { useEffect } from 'react'

export const Route = createFileRoute('/settings')({
  component: RouteComponent,
  beforeLoad: ({ location }) => {
    if (
      location.pathname.endsWith('settings') ||
      location.pathname.endsWith('settings/')
    )
      throw redirect({
        to: '/settings/language-region',
        replace: true,
      })
  },
  notFoundComponent: NotFoundRedirect,
})

function NotFoundRedirect() {
  const navigate = Route.useNavigate()

  useEffect(() => {
    navigate({ to: '/settings/language-region', replace: true })
  }, [navigate])

  return null
}

function RouteComponent() {
  const routerState = useRouterState()
  const currentPath = routerState.location.pathname
  const activeTab = currentPath.split('/').pop()

  return (
    <PageCard title="Einstellungen">
      <Tabs value={activeTab} orientation="vertical">
        <div className="grid w-full grid-cols-[200px_minmax(0,1fr)] gap-12">
          <TabsList className="flex h-auto w-full flex-col items-stretch justify-start gap-y-1.5 border-none bg-transparent p-0">
            <SettingsTabTrigger value="language-region">
              Sprache & Region
            </SettingsTabTrigger>
            <SettingsTabTrigger value="appearance">
              Erscheinung
            </SettingsTabTrigger>
          </TabsList>
          <div className="min-w-0">
            <Outlet />
          </div>
        </div>
      </Tabs>
    </PageCard>
  )
}
