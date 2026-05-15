import type { ComponentPropsWithoutRef, PropsWithChildren } from 'react'
import { cn } from '@/lib/utils'

type SectionCardProps = {
	title?: string
	description?: string
} & PropsWithChildren<ComponentPropsWithoutRef<'section'>>

export function PageCard({
	children,
	title,
	description,
	className,
	...props
}: SectionCardProps) {
	return (
		<div
			className={cn(
				'bg-card text-card-foreground rounded-xl border shadow-sm',
				'flex flex-col p-4 sm:p-6 lg:p-8',
				className,
			)}
			{...props}
		>
			{(title || description) && (
				<div className="mb-4 flex flex-col gap-y-1">
					{title && (
						<h2 className="text-3xl font-bold tracking-tight">{title}</h2>
					)}
					{description && (
						<p className="text-muted-foreground text-sm">{description}</p>
					)}
				</div>
			)}
			{children}
		</div>
	)
}
