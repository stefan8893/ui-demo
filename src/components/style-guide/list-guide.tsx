import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
  CardDescription,
} from '../ui/display/card'
import { ListItem } from '../ui/display/list-item'

export function ListGuide() {
  return (
    <Card size="sm">
      <CardHeader>
        <CardTitle>List Items</CardTitle>
        <CardDescription>Navigation & Interaktions-Feedback.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-1">
        {['Benutzerliste', 'Einstellungen', 'Abmelden'].map((item) => (
          <ListItem key={item}>{item}</ListItem>
        ))}
      </CardContent>
      <CardFooter className="flex flex-row justify-start items-center">
        <p className="text-[11px] leading-relaxed text-muted-foreground">
          <strong>Feedback:</strong> Nutzt den <code>accent</code>-State für
          Hover und Focus, um die Klickbarkeit visuell zu bestätigen.
        </p>
      </CardFooter>
    </Card>
  )
}
