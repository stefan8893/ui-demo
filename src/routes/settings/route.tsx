import { PageCard } from '@/components/ui/display/page-card'
import { createFileRoute, Outlet } from '@tanstack/react-router'
import './view-transitions.css'

export const Route = createFileRoute('/settings')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <PageCard title="Einstellungen">
      <div
        style={{
          viewTransitionName: 'settings-page',
          contain: 'layout',
        }}
        className="relative overflow-hidden"
      >
        <Outlet />
      </div>
    </PageCard>
  )
}
