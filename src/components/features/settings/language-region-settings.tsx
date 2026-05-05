import { Card, CardContent } from '@/components/ui/display/card'

export function LanguageRegionSettings() {
  return (
    <Card>
      <CardContent>
        <p className="text-muted-foreground mb-6 text-sm">
          Lege fest, wie Datumsangaben, Währungen und Kalenderwochen dargestellt
          werden.
        </p>
      </CardContent>
    </Card>
  )
}
