import { Bell, Search, Settings } from 'lucide-react'
import { IconButton } from '../ui/buttons/icon-button'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '../ui/display/card'

export function IconButtonsGuide() {
  return (
    <Card size="sm">
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
            <p className="text-muted-foreground text-[10px] font-bold tracking-wider uppercase">
              Small
            </p>
            <p className="text-muted-foreground/70 text-[10px]">16px Icon</p>
            <p className="text-muted-foreground/70 text-[10px]">size-4</p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-3">
          <div className="flex h-12 items-center justify-center">
            <IconButton icon={Bell} />
          </div>
          <div className="text-center">
            <p className="text-muted-foreground text-[10px] font-bold tracking-wider uppercase">
              Default
            </p>
            <p className="text-muted-foreground/70 text-[10px]">20px Icon</p>
            <p className="text-muted-foreground/70 text-[10px]">size-5</p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-3">
          <div className="flex h-12 items-center justify-center">
            <IconButton icon={Settings} size="lg" />
          </div>
          <div className="text-center">
            <p className="text-muted-foreground text-[10px] font-bold tracking-wider uppercase">
              Large
            </p>
            <p className="text-muted-foreground/70 text-[10px]">24px Icon</p>
            <p className="text-muted-foreground/70 text-[10px]">size-6</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
