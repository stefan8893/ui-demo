import { TanStackDevtools } from '@tanstack/react-devtools'
import { createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { ThemeProvider } from 'next-themes'
import { useEffect } from 'react'
import { useLocalStorage } from 'usehooks-ts'
import { Layout } from '@/layout/layout'
import '@/styles.css'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  const [accentTheme] = useLocalStorage('accent-theme', 'default', {
    serializer: (value) => value,
    deserializer: (value) => value,
  })

  useEffect(() => {
    if (accentTheme !== 'default') {
      document.documentElement.setAttribute('data-accent-theme', accentTheme)
    }
  }, [accentTheme])

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
