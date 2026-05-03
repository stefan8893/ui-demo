import { AppearacneSettings } from '@/components/features/settings/appearance-settings'
import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/settings/appearance')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <Link to="/settings" viewTransition={{ types: ['slide-right'] }}>
        Zurück
      </Link>
      <AppearacneSettings />
    </>
  )
}
