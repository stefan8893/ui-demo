import { ThemeToggle } from '@/components/theme-toggle'
import { Button } from '@/components/ui/button'
import { Menu, PanelLeftClose, PanelLeftOpen } from 'lucide-react'

type HeaderProps = {
  showSidebar: boolean
  toggleSidebar: () => void
  openMobileSidebar: () => void
}

export function Header({
  showSidebar,
  toggleSidebar,
  openMobileSidebar,
}: HeaderProps) {
  const sidebarIcon = showSidebar ? (
    <PanelLeftClose size={20} />
  ) : (
    <PanelLeftOpen size={20} />
  )

  return (
    <>
      <Button
        variant="ghost"
        className="hidden lg:block"
        onClick={toggleSidebar}
      >
        {sidebarIcon}
      </Button>

      <Button className="p-2 lg:hidden" onClick={openMobileSidebar}>
        <Menu size={24} />
      </Button>

      <h1>Header</h1>

      <ThemeToggle className="ml-auto" />
    </>
  )
}
