import { Button } from '@/components/ui/buttons/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/display/card'
import { Badge } from '@/components/ui/display/badge'
import { IconButton } from '../ui/buttons/icon-button'
import { Eye } from 'lucide-react'

export default function StyleGuide() {
  return (
    <>
      <section>
        <h1 className="text-3xl font-bold tracking-tight mb-4">
          Design System
        </h1>
        <p className="text-muted-foreground">
          Übersicht der Farb-Variablen und deren Verwendung in der App.
        </p>
      </section>

      <Card>
        <CardHeader>
          <CardTitle>Buttons & Interaktion</CardTitle>
          <CardDescription>Wie wir Aktionen gewichten.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-4">
          <div className="space-y-2">
            <p className="text-xs font-medium uppercase text-muted-foreground">
              Primary
            </p>
            <Button>Hauptaktion</Button>
          </div>
          <div className="space-y-2">
            <p className="text-xs font-medium uppercase text-muted-foreground">
              Secondary
            </p>
            <Button variant="secondary">Nebenaktion</Button>
          </div>
          <div className="space-y-2">
            <p className="text-xs font-medium uppercase text-muted-foreground">
              Outline (Accent-ish)
            </p>
            <Button variant="outline">Rückzug</Button>
          </div>
          <div className="space-y-2">
            <p className="text-xs font-medium uppercase text-muted-foreground">
              Nur Icon
            </p>
            <IconButton icon={Eye} />
          </div>
          <div className="space-y-2">
            <p className="text-xs font-medium uppercase text-muted-foreground">
              Destructive
            </p>
            <Button variant="destructive">Löschen</Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="bg-muted/50">
          <CardHeader>
            <CardTitle className="text-sm italic">Muted Background</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Dieser Bereich nutzt{' '}
              <code className="bg-muted px-1 rounded text-foreground">
                bg-muted/50
              </code>
              . Perfekt für Infoboxen oder weniger wichtige Inhalte, die sich
              dezent abheben sollen.
            </p>
            <div className="mt-4 flex gap-2">
              <Badge variant="secondary">Status: Archiviert</Badge>
              <span className="text-xs text-muted-foreground flex items-center">
                Zuletzt aktualisiert: vor 2h
              </span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Accent & Hover</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-sm mb-4">
              Hover über diese Liste, um <strong>Accent</strong> zu sehen:
            </p>
            <div className="space-y-1">
              {['Benutzerliste', 'Einstellungen', 'Abmelden'].map((item) => (
                <div
                  key={item}
                  className="px-3 py-2 rounded-md text-sm transition-colors hover:bg-accent hover:text-accent-foreground cursor-pointer"
                >
                  {item}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Farb-Check</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
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
      </section>
    </>
  )
}

function ColorBox({
  label,
  bg,
  text,
}: {
  label: string
  bg: string
  text: string
}) {
  return (
    <div className={`${bg} ${text} p-4 rounded-lg border shadow-sm`}>
      <p className="font-bold text-sm">{label}</p>
      <p className="text-[10px] opacity-80 uppercase tracking-wider font-mono">
        Variable
      </p>
    </div>
  )
}
