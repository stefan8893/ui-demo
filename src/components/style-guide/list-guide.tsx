import { Section } from '@/components/ui/display/section'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/display/card'
import { ListItem } from '../ui/display/list-item'

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
          <strong>Feedback:</strong> Nutzt den <code>accent</code>-State für
          Hover und Focus, um die Klickbarkeit visuell zu bestätigen.
        </p>
      </CardFooter>
    </Card>
  )
}
