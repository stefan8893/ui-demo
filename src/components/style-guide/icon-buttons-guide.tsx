import { Bell, Search, Settings } from 'lucide-react'
import { IconButton } from '../ui/buttons/icon-button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/display/card'

export function IconButtonsGuide() {
  return (
    <Card size="sm" withBorder>
      <CardHeader>
        <CardTitle>Icon Buttons</CardTitle>
        <CardDescription>
          Einheitliche Größen für Icon-Interaktionen.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-3 gap-4 py-6">
        <div className="flex flex-col items-center gap-3">
          <div className="flex h-12 items-center justify-center">
            <IconButton icon={Search} size="sm" />
          </div>
          <div className="text-center">
            <p className="font-bold text-[10px] text-muted-foreground uppercase tracking-wider">
              Small
            </p>
            <p className="text-[10px] text-muted-foreground/70">16px Icon</p>
            <p className="text-[10px] text-muted-foreground/70">size-4</p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-3">
          <div className="flex h-12 items-center justify-center">
            <IconButton icon={Bell} />
          </div>
          <div className="text-center">
            <p className="font-bold text-[10px] text-muted-foreground uppercase tracking-wider">
              Default
            </p>
            <p className="text-[10px] text-muted-foreground/70">20px Icon</p>
            <p className="text-[10px] text-muted-foreground/70">size-5</p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-3">
          <div className="flex h-12 items-center justify-center">
            <IconButton icon={Settings} size="lg" />
          </div>
          <div className="text-center">
            <p className="font-bold text-[10px] text-muted-foreground uppercase tracking-wider">
              Large
            </p>
            <p className="text-[10px] text-muted-foreground/70">24px Icon</p>
            <p className="text-[10px] text-muted-foreground/70">size-6</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
