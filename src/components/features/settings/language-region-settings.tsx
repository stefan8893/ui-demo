import { SettingsCardTitle } from '@/components/features/settings/settings-mobile-title'
import { Card, CardContent, CardHeader } from '@/components/ui/display/card'

type LanguageRegionSettingsProps = {
  showTitle?: boolean
}

export function LanguageRegionSettings({
  showTitle,
}: LanguageRegionSettingsProps) {
  return (
    <>
      <Card>
        <CardHeader>
          <SettingsCardTitle title="Sprache & Region" showTitle={showTitle} />
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
