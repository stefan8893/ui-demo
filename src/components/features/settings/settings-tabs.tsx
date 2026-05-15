import { Link } from '@tanstack/react-router'
import { TabsContent, TabsTrigger } from '@/components/ui/display/tabs'
import { cn } from '@/lib/utils'

type SettingsTabTriggerProps = {
	value: 'appearance' | 'language-region'
	children: React.ReactNode
	className?: string
}

export function SettingsTabTrigger({
	value,
	children,
	className,
}: SettingsTabTriggerProps) {
	return (
		<TabsTrigger value={value} asChild className={cn('', className)}>
			<Link to={`/settings/${value}`}>{children}</Link>
		</TabsTrigger>
	)
}

type SettingsTabContentProps = {
	value: string

	children: React.ReactNode
}

export function SettingsTabContent({
	value,
	children,
}: SettingsTabContentProps) {
	return <TabsContent value={value}>{children}</TabsContent>
}
