import { Trans, useTranslation } from 'react-i18next'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/display/card'
import { InlineCode } from '@/components/ui/display/inline-code'
import { ListItem } from '@/components/ui/display/list-item'
import { Section } from '@/components/ui/display/section'

export function ListGuide() {
  const { t } = useTranslation(['common', 'style-guide'])
  return (
    <Card size="sm" withBorder>
      <CardHeader>
        <CardTitle>List Items</CardTitle>
        <CardDescription>
          {t('style-guide:listItems.description')}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Section>
          {[t('common:userList'), t('common:settings'), t('common:logout')].map(
            (item) => (
              <ListItem key={item}>{item}</ListItem>
            ),
          )}
        </Section>
      </CardContent>
      <CardFooter className="flex flex-row items-center justify-start">
        <p className="text-muted-foreground text-xs leading-relaxed">
          <span className="font-bold">{t('common:feedback')}:</span>{' '}
          <Trans
            i18nKey="listItems.footer"
            ns="style-guide"
            components={{ code: <InlineCode /> }}
          />
        </p>
      </CardFooter>
    </Card>
  )
}
