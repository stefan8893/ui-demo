import { createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'
import '@/styles.css'
import { ThemeProvider } from 'next-themes'
import { Layout } from '@/layout/layout'
import { useEffect } from 'react'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  useEffect(() => {
    const savedAccent = localStorage.getItem('accent-theme')
    if (savedAccent && savedAccent !== 'default') {
      document.documentElement.setAttribute('data-theme', savedAccent)
    }
  }, [])

  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Layout />
      </ThemeProvider>
      <TanStackDevtools
        config={{
          position: 'bottom-right',
        }}
        plugins={[
          {
            name: 'TanStack Router',
            render: <TanStackRouterDevtoolsPanel />,
          },
        ]}
      />
    </>
  )
}
