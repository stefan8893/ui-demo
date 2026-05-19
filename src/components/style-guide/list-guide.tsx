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
  return (
    <Card size="sm" withBorder>
      <CardHeader>
        <CardTitle>List Items</CardTitle>
        <CardDescription>Navigation & Interaktions-Feedback.</CardDescription>
      </CardHeader>
      <CardContent>
        <Section>
          {['Benutzerliste', 'Einstellungen', 'Abmelden'].map((item) => (
            <ListItem key={item}>{item}</ListItem>
          ))}
        </Section>
      </CardContent>
      <CardFooter className="flex flex-row items-center justify-start">
        <p className="text-[11px] text-muted-foreground leading-relaxed">
          <b>Feedback:</b> Nutzt den <InlineCode>accent</InlineCode>
          -State für Hover und Focus, um die Klickbarkeit visuell zu bestätigen.
        </p>
      </CardFooter>
    </Card>
  )
}
