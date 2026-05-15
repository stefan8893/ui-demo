import { Card, CardContent, CardHeader, CardTitle } from '../ui/display/card'
import { ColorBox } from './color-box'

export function ColorsGuide() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Farben</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
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
			</CardContent>
		</Card>
	)
}
