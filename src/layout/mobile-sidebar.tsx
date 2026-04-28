import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import { SidebarContent } from './sidebar-content'

export function MobileSidebar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="p-2 lg:hidden">
          <Menu size={24} />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0 w-70 flex flex-col h-full">
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
