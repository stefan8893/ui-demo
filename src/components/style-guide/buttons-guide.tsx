import { Button } from '../ui/buttons/button'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '../ui/display/card'

export function ButtonsGuide() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Buttons & Interaktion</CardTitle>
        <CardDescription>
          Definition der visuellen Hierarchie für Benutzeraktionen.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Primary */}
          <div className="flex flex-col gap-3">
            <div className="space-y-1">
              <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                Primary
              </p>
              <p className="text-xs text-muted-foreground">
                Zentrale Interaktion
              </p>
            </div>
            <div className="flex flex-1 items-end">
              <Button className="w-full">Hauptaktion</Button>
            </div>
          </div>

          {/* Secondary */}
          <div className="flex flex-col gap-3">
            <div className="space-y-1">
              <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                Secondary
              </p>
              <p className="text-xs text-muted-foreground">Bearbeiten</p>
            </div>
            <div className="flex flex-1 items-end">
              <Button variant="secondary" className="w-full">
                Nebenaktion
              </Button>
            </div>
          </div>

          {/* Outline */}
          <div className="flex flex-col gap-3">
            <div className="space-y-1">
              <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                Outline
              </p>
              <p className="text-xs text-muted-foreground">
                Abbrechen/Schließen/Beenden
              </p>
            </div>
            <div className="flex flex-1 items-end">
              <Button variant="outline" className="w-full">
                Rückzug
              </Button>
            </div>
          </div>

          {/* Destructive */}
          <div className="flex flex-col gap-3">
            <div className="space-y-1">
              <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                Destructive
              </p>
              <p className="text-xs text-muted-foreground">Löschen/Abbrechen</p>
            </div>
            <div className="flex flex-1 items-end">
              <Button variant="destructive" className="w-full">
                Gefahrenzone
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
