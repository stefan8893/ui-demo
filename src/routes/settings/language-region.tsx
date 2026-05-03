import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/display/card'
import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/settings/language-region')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <Link to="/settings" viewTransition={{ types: ['slide-right'] }}>
        Zurück
      </Link>
      <Card>
        <CardHeader>
          <CardTitle>Sprache & Region</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-6 text-sm">
            Lege fest, wie Datumsangaben, Währungen und Kalenderwochen
            dargestellt werden.
          </p>
        </CardContent>
      </Card>
    </>
  )
}
