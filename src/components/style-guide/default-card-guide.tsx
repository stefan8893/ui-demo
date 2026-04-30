import { Button } from '../ui/buttons/button'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '../ui/display/card'

export function DefaultCardGuide() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Default Card</CardTitle>
        <CardDescription>
          Wenn der User eine Entscheidung treffen oder Daten aktiv bearbeiten
          soll.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <p>
          Die <strong>Card</strong> ist das wichtigste Werkzeug, um Inhalte zu
          gruppieren, die eine <strong>Handlung</strong> erfordern oder eine
          <strong> hohe Priorität</strong> besitzen. Sie hebt sich physisch von
          der Oberfläche ab und signalisiert dem Nutzer:{' '}
          <em>"Hier passiert etwas Wichtiges."</em>
        </p>

        <div className="space-y-2">
          <p className="font-medium">Typische Anwendungsfälle:</p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground pl-3">
            <li>Eingabemasken und Formulare</li>
            <li>Dashboard-Widgets mit Kennzahlen</li>
            <li>Klickbare Teaser oder Navigations-Elemente</li>
            <li>Hervorhebung von Kernfunktionen</li>
          </ul>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full sm:w-auto">
          Rückzug
        </Button>
        <Button className="w-full sm:w-auto">Hauptaktion</Button>
      </CardFooter>
    </Card>
  )
}
