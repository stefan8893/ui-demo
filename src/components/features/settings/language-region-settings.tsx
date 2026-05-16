import { SettingsCardHeader } from '@/components/features/settings/settings-card-header'
import { Card, CardContent } from '@/components/ui/display/card'

export function LanguageRegionSettings() {
  return (
    <Card>
      <SettingsCardHeader title="Sprache & Region" />
      <CardContent>
        <p className="mb-6 text-muted-foreground text-sm">
          Lege fest, wie Datumsangaben, Währungen und Kalenderwochen dargestellt
          werden.
        </p>
      </CardContent>
    </Card>
  )
}
