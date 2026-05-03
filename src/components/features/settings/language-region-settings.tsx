import { IconButton } from '@/components/ui/buttons/icon-button'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/display/card'
import { CircleArrowLeft } from 'lucide-react'

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
          <CardTitle className="flex flex-row items-center gap-x-2">
            {showTitle && (
              <>
                <IconButton icon={CircleArrowLeft} size="lg" to="/settings" />
                <span>Sprache & Region</span>
              </>
            )}
          </CardTitle>
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
