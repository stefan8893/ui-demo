import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
} from '@/components/ui/overlays/sheet'
import { SidebarContent } from './sidebar-content'

type MobileSidebarProps = {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
}

export function MobileSidebar({ isOpen, onOpenChange }: MobileSidebarProps) {
  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetContent
        side="left"
        className="p-0 w-70 flex flex-col h-full pl-[env(safe-area-inset-left)]"
      >
        <div className="sr-only">
          <SheetTitle>Sidebar Navigation</SheetTitle>
          <SheetDescription>
            Here you can navigate through the different sections of the app.
          </SheetDescription>
        </div>
        <div className="flex-1 overflow-y-auto py-4">
          <SidebarContent isMobile={true} />
        </div>
      </SheetContent>
    </Sheet>
  )
}
