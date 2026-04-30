import { Card, CardContent, CardHeader, CardTitle } from '../ui/display/card'
import { ColorBox } from './color-box'

export function ColorsGuide() {
  return (
    <Card className="ring-0">
      <CardHeader className="px-0">
        <CardTitle>Farben</CardTitle>
      </CardHeader>
      <CardContent className="px-0">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <ColorBox
            label="Primary"
            bg="bg-primary"
            text="text-primary-foreground"
            color="#024a70"
          />
          <ColorBox
            label="Secondary"
            bg="bg-secondary"
            text="text-secondary-foreground"
            color="#dfe6eb"
          />
          <ColorBox
            label="Muted"
            bg="bg-muted"
            text="text-muted-foreground"
            color="#eff2f5"
          />
          <ColorBox
            label="Accent"
            bg="bg-accent"
            text="text-accent-foreground"
            color="#d3e0ea"
          />
        </div>
      </CardContent>
    </Card>
  )
}
