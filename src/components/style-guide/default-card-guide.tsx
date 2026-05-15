import { InlineCode } from '@/components/ui/display/inline-code'
import { Section } from '@/components/ui/display/section'
import { Button } from '../ui/buttons/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '../ui/display/card'

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
						Inhalte zu gruppieren, die eine <strong>Handlung</strong> erfordern
						oder eine
						<strong> hohe Priorität</strong> besitzen. Sie hebt sich physisch
						von der Oberfläche ab und signalisiert dem Nutzer:{' '}
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
					<ul className="text-muted-foreground list-inside list-disc space-y-2 pl-3">
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
