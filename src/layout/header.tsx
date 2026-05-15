import {
	Home,
	Menu,
	PanelLeftClose,
	PanelLeftOpen,
	Settings,
} from 'lucide-react'
import { GithubLink } from '@/components/ui/branding/github-link'
import { ThemeToggle } from '@/components/ui/branding/theme-toggle'
import { IconButton } from '@/components/ui/buttons/icon-button'

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
		<div className="flex w-full flex-row flex-nowrap items-center gap-2">
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

			<div className="ml-auto flex flex-row flex-nowrap items-center gap-3">
				<IconButton icon={Home} to="/" />
				<IconButton icon={Settings} to="/settings" />
				<GithubLink />
				<ThemeToggle />
			</div>
		</div>
	)
}
