import { Button } from '@/components/ui/buttons/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/display/card'
import { InlineCode } from '@/components/ui/display/inline-code'
import { Section } from '@/components/ui/display/section'

export function DefaultCardGuide() {
  return (
    <Card withBorder>
      <CardHeader>
        <CardTitle>Default Card</CardTitle>
        <CardDescription>
          Nutze diese Karte für Inhalte, mit denen der Nutzer arbeitet.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Section>
          <p>
            Die <InlineCode>Card</InlineCode> ist das wichtigste Werkzeug, um
            Inhalte zu gruppieren, die eine <b>Handlung</b> erfordern oder eine
            <b> hohe Priorität</b> besitzen. Sie hebt sich physisch von der
            Oberfläche ab und signalisiert dem Nutzer:{' '}
            <em>"Hier passiert etwas Wichtiges."</em>
          </p>
          <p>
            Unterteile Bereiche innerhalb von{' '}
            <InlineCode>CardContent</InlineCode> in{' '}
            <InlineCode>Section</InlineCode>s.
          </p>
        </Section>
        <Section className="flex flex-col gap-y-2">
          <p className="font-medium">Typische Anwendungsfälle:</p>
          <ul className="list-inside list-disc space-y-2 pl-3 text-muted-foreground">
            <li>Formulare und Eingabefelder</li>
            <li>Wichtige Dashboard-Elemente</li>
            <li>Klickbare Teaser, die zu einer neuen Seite führen</li>
            <li>Alles, was einen Button benötigt</li>
          </ul>
        </Section>
      </CardContent>
      <CardFooter>
        <Button variant="outline">Rückzug</Button>
        <Button>Hauptaktion</Button>
      </CardFooter>
    </Card>
  )
}
