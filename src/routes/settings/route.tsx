import { createFileRoute, Outlet, useRouterState } from '@tanstack/react-router'
import { SettingsTabTrigger } from '@/components/features/settings/settings-tabs'
import { PageCard } from '@/components/ui/display/page-card'
import { Tabs, TabsList } from '@/components/ui/display/tabs'

export const Route = createFileRoute('/settings')({
	component: RouteComponent,
})

function RouteComponent() {
	const { location } = useRouterState()
	const pathname = location.pathname.replace(/\/$/, '') || '/'
	const activeTab = pathname.split('/').pop()

	return (
		<PageCard title="Einstellungen">
			<Tabs value={activeTab} orientation="horizontal">
				<TabsList>
					<SettingsTabTrigger value="language-region">
						Sprache & Region
					</SettingsTabTrigger>
					<SettingsTabTrigger value="appearance">
						Erscheinung
					</SettingsTabTrigger>
				</TabsList>
				<div className="mt-3">
					<Outlet />
				</div>
			</Tabs>
		</PageCard>
	)
}
