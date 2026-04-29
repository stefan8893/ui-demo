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
    <div className="flex flex-row flex-nowrap items-center w-full gap-2">
      <IconButton
        className="hidden lg:flex"
        icon={showSidebar ? PanelLeftClose : PanelLeftOpen}
        onClick={toggleSidebar}
      />

      <IconButton
        className="lg:hidden"
        icon={Menu}
        onClick={openMobileSidebar}
      />

      {/* <span className="text-sm text-muted-foreground">
        Dashboard / Übersicht
      </span> */}

      <div className="ml-auto flex flex-row flex-nowrap items-center gap-3">
        <GithubLink />
        <ThemeToggle />
      </div>
    </div>
  )
}
