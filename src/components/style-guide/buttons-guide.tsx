import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/buttons/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/display/card'

export function ButtonsGuide() {
  const { t } = useTranslation('style-guide')
  return (
    <Card>
      <CardHeader>
        <CardTitle>{t('buttonsAndInteractions.title')}</CardTitle>
        <CardDescription>
          {t('buttonsAndInteractions.description')}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {/* Primary */}
          <div className="flex flex-col gap-1">
            <p className="font-bold text-[10px] text-muted-foreground uppercase tracking-wider">
              Primary
            </p>
            <p className="text-muted-foreground text-xs">
              {t('buttonsAndInteractions.mainActionExample')}
            </p>
            <Button className="w-full">
              {t('buttonsAndInteractions.mainAction')}
            </Button>
          </div>

          {/* Secondary */}
          <div className="flex flex-col gap-1">
            <p className="font-bold text-[10px] text-muted-foreground uppercase tracking-wider">
              Secondary
            </p>
            <p className="text-muted-foreground text-xs">
              {t('buttonsAndInteractions.secondaryActionExample')}
            </p>
            <Button variant="secondary" className="w-full">
              {t('buttonsAndInteractions.secondaryAction')}
            </Button>
          </div>

          {/* Outline */}
          <div className="flex flex-col gap-1">
            <p className="font-bold text-[10px] text-muted-foreground uppercase tracking-wider">
              Outline
            </p>
            <p className="text-muted-foreground text-xs">
              {t('buttonsAndInteractions.outlineActionExample')}
            </p>
            <Button variant="outline" className="w-full">
              {t('buttonsAndInteractions.outlineAction')}
            </Button>
          </div>

          {/* Destructive */}
          <div className="flex flex-col gap-1">
            <p className="font-bold text-[10px] text-muted-foreground uppercase tracking-wider">
              Destructive
            </p>
            <p className="text-muted-foreground text-xs">
              {t('buttonsAndInteractions.destructiveActionExample')}
            </p>
            <Button variant="destructive" className="w-full">
              {t('buttonsAndInteractions.destructiveAction')}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
