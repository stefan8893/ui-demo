import { useTranslation } from 'react-i18next'
import { ColorBox } from '@/components/style-guide/color-box'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/display/card'

export function ColorsGuide() {
  const { t } = useTranslation('style-guide')
  return (
    <Card>
      <CardHeader>
        <CardTitle>{t('color', { count: 0 })}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <ColorBox
            label="Primary"
            bg="bg-primary"
            text="text-primary-foreground"
          />
          <ColorBox
            label="Secondary"
            bg="bg-secondary"
            text="text-secondary-foreground"
          />
          <ColorBox label="Muted" bg="bg-muted" text="text-muted-foreground" />
          <ColorBox
            label="Accent"
            bg="bg-accent"
            text="text-accent-foreground"
          />
        </div>
      </CardContent>
    </Card>
  )
}
