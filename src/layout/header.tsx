import { ThemeToggle } from '@/components/theme-toggle'
import { GithubLink } from '@/components/ui/github-link'
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
          icon={PanelLeftClose}
          onClick={toggleSidebar}
        />
      ) : (
        <IconButton
          className="hidden lg:block"
          icon={PanelLeftOpen}
          onClick={toggleSidebar}
        />
      )}

      <IconButton
        className="lg:hidden"
        icon={Menu}
        onClick={openMobileSidebar}
      />

      <h1>Header</h1>
      {/* <span className="text-sm text-muted-foreground">
        Dashboard / Übersicht
      </span> */}

      <div className="ml-auto flex flex-row flex-nowrap items-center">
        <GithubLink />
        <ThemeToggle />
      </div>
    </>
  )
}
