import { Card, CardContent } from '@/components/ui/display/card'

export function LanguageRegionSettings() {
  return (
    <Card>
      <CardContent>
        <p className="mb-6 text-muted-foreground text-sm">
          Lege fest, wie Datumsangaben, Währungen und Kalenderwochen dargestellt
          werden.
        </p>
      </CardContent>
    </Card>
  )
}
