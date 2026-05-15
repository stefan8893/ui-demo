import { Info } from 'lucide-react'
import { Section } from '@/components/ui/display/section'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '../ui/display/card'

export function MutedCardGuide() {
	return (
		<Card variant="muted">
			<CardHeader>
				<div className="flex items-center justify-between gap-2">
					<CardTitle>Muted Card</CardTitle>
					<Info className="size-5" />
				</div>
				<CardDescription>
					Wenn Informationen lediglich konsumiert werden, ohne den aktuellen
					Arbeitsfluss zu unterbrechen.
				</CardDescription>
			</CardHeader>
			<CardContent>
				<Section>
					<p>
						Diese Karte ist für Inhalte gedacht, die nur gelesen werden. Sie
						hält sich im Hintergrund, um den Fokus nicht von den wichtigen
						Aktionen abzulenken.
					</p>
				</Section>
				<Section className="flex flex-col gap-y-2">
					<p className="font-medium">Typische Anwendungsfälle:</p>
					<ul className="text-muted-foreground list-inside list-disc space-y-2 pl-3">
						<li>Hintergrundinfos oder Hilfetexte</li>
						<li>Archivierte Daten oder Protokolle</li>
						<li>System-Statusmeldungen ohne Handlungsbedarf</li>
						<li>Zusatzinfos, die keine Klicks erfordern</li>
					</ul>
				</Section>
			</CardContent>
		</Card>
	)
}
