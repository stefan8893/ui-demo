import { Info } from 'lucide-react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from '../ui/display/card'

export function MutedCardGuide() {
  return (
    <Card variant="muted">
      <CardHeader>
        <div className="flex justify-between items-center gap-2">
          <CardTitle>Muted Card</CardTitle>
          <Info className="size-5" />
        </div>
        <CardDescription>
          Wenn Informationen lediglich konsumiert werden, ohne den aktuellen
          Arbeitsfluss zu unterbrechen.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <p>
          Die <strong>Muted-Variante</strong> dient als untergeordnete Ebene für
          statische Inhalte oder Hintergrundinformationen. Durch die dezente
          Färbung und den Verzicht auf Schatten tritt sie visuell zurück.
        </p>

        <div className="space-y-2">
          <p className="font-medium">Wann man sie nutzt:</p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground pl-3">
            <li>Archivierte Daten oder Logs</li>
            <li>Sekundäre Status-Informationen</li>
            <li>Erklärtexte innerhalb komplexer Layouts</li>
            <li>Inhalte, die keine direkte Aktion erfordern</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}
