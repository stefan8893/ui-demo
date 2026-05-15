import { Button } from '../ui/buttons/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
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
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {/* Primary */}
          <div className="flex flex-col gap-1">
            <div className="space-y-1">
              <p className="font-bold text-[10px] text-muted-foreground uppercase tracking-wider">
                Primary
              </p>
              <p className="text-muted-foreground text-xs">
                Zentrale Interaktion
              </p>
            </div>
            <div className="flex flex-1 items-end">
              <Button className="w-full">Hauptaktion</Button>
            </div>
          </div>

          {/* Secondary */}
          <div className="flex flex-col gap-1">
            <div className="space-y-1">
              <p className="font-bold text-[10px] text-muted-foreground uppercase tracking-wider">
                Secondary
              </p>
              <p className="text-muted-foreground text-xs">Bearbeiten</p>
            </div>
            <div className="flex flex-1 items-end">
              <Button variant="secondary" className="w-full">
                Nebenaktion
              </Button>
            </div>
          </div>

          {/* Outline */}
          <div className="flex flex-col gap-1">
            <div className="space-y-1">
              <p className="font-bold text-[10px] text-muted-foreground uppercase tracking-wider">
                Outline
              </p>
              <p className="text-muted-foreground text-xs">
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
          <div className="flex flex-col gap-1">
            <div className="space-y-1">
              <p className="font-bold text-[10px] text-muted-foreground uppercase tracking-wider">
                Destructive
              </p>
              <p className="text-muted-foreground text-xs">Löschen/Abbrechen</p>
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
