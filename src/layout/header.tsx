import { ThemeToggle } from '@/components/theme-toggle'
import { IconButton } from '@/components/ui/icon-button'
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
  return (
    <>
      {showSidebar ? (
        <IconButton
          className="hidden lg:block"
          variant="ghost"
          icon={PanelLeftClose}
          size="icon-lg"
          onClick={toggleSidebar}
        />
      ) : (
        <IconButton
          className="hidden lg:block"
          variant="ghost"
          icon={PanelLeftOpen}
          size="icon-lg"
          onClick={toggleSidebar}
        />
      )}

      <IconButton
        className="lg:hidden"
        icon={Menu}
        variant="ghost"
        size="icon-lg"
        onClick={openMobileSidebar}
      />

      <h1>Header</h1>
      {/* <span className="text-sm text-muted-foreground">
        Dashboard / Übersicht
      </span> */}

      <ThemeToggle className="ml-auto" />
    </>
  )
}
