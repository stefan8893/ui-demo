import { ThemeProvider as NextThemesProvider } from 'next-themes'
import type * as React from 'react'

export function ThemeProvider({
	children,
	...props
}: React.ComponentProps<typeof NextThemesProvider>) {
	const foo = 'bar'
	return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
