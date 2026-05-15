import type { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/lib/utils'

export function InlineCode({
	className,
	...props
}: ComponentPropsWithoutRef<'code'>) {
	return (
		<code
			{...props}
			className={cn(
				'bg-muted/50 text-foreground px-[0.3rem] py-[0.1rem]',
				'font-mono text-[0.85em] font-semibold',
				'border-border/50 rounded-md border',
				className,
			)}
		/>
	)
}
