import { PageCard } from '@/components/ui/display/page-card'
import {
  createFileRoute,
  Outlet,
  useNavigate,
  useRouterState,
} from '@tanstack/react-router'

import { AnimatePresence, motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { useEffect, useLayoutEffect, useState } from 'react'
import { Tabs } from '@/components/ui/display/tabs'
import { LanguageRegionSettings } from '@/components/features/settings/language-region-settings'
import { AppearanceSettings } from '@/components/features/settings/appearance-settings'
import { SettingsMobileMenu } from '@/components/features/settings/settings-mobile-menu'
import { SettingsDesktopMenu } from '@/components/features/settings/settings-desktop-menu'
import { useLayoutStore } from '@/stores/useLayoutStore'

export const Route = createFileRoute('/settings')({
  component: RouteComponent,
})

type Direction = 'forward' | 'backward'

const pageVariants: Variants = {
  enter: (direction: Direction) => ({
    x: direction === 'forward' ? '100%' : '-100%',
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: Direction) => ({
    x: direction === 'forward' ? '-30%' : '100%',
    opacity: 0,
  }),
}

const componentByPath: Record<string, React.ReactNode> = {
  '/settings': <SettingsMobileMenu />,
  '/settings/language-region': <LanguageRegionSettings showTitle />,
  '/settings/appearance': <AppearanceSettings showTitle />,
} as const

function RouteComponent() {
  const { location } = useRouterState()
  const navigate = useNavigate()

  const [wasAutoRedirected, setWasAutoRedirected] = useState(false)
  const isCompact = useLayoutStore((state) => state.isCompact)
  const pathname = location.pathname.replace(/\/$/, '') || '/'
  const activeTab = pathname.split('/').pop()
  const [direction, setDirection] = useState<Direction>('forward')

  useLayoutEffect(() => {
    const currentDepth = pathname.split('/').filter(Boolean).length

    setDirection(currentDepth === 2 ? 'backward' : 'forward')
  }, [pathname])

  useEffect(() => {
    if (!isCompact && pathname === '/settings') {
      setWasAutoRedirected(true)
      navigate({
        to: '/settings/language-region',
        replace: true,
      })
    }
  }, [isCompact, pathname, navigate])

  useEffect(() => {
    if (isCompact && wasAutoRedirected && pathname !== '/settings') {
      setWasAutoRedirected(false)
      navigate({ to: '/settings', replace: true })
    }
  }, [isCompact, wasAutoRedirected, pathname, navigate])

  const handleTabsListClick = () => {
    if (wasAutoRedirected) {
      setWasAutoRedirected(false)
    }
  }

  return (
    <PageCard title="Einstellungen">
      <div className="relative overflow-hidden">
        {isCompact ? (
          <AnimatePresence mode="popLayout" initial={false} custom={direction}>
            <motion.div
              key={pathname}
              custom={direction}
              variants={pageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                type: 'spring',
                stiffness: 450,
                damping: 40,
                mass: 1,
                restDelta: 0.5,
                restSpeed: 0.5,
              }}
              style={{ willChange: 'transform' }}
            >
              {componentByPath[pathname] ?? <SettingsMobileMenu />}
            </motion.div>
          </AnimatePresence>
        ) : (
          <Tabs value={activeTab} orientation="vertical">
            <div className="grid w-full grid-cols-[200px_minmax(0,1fr)] gap-12">
              <SettingsDesktopMenu onTabListClick={handleTabsListClick} />
              <div className="min-w-0">
                <Outlet />
              </div>
            </div>
          </Tabs>
        )}
      </div>
    </PageCard>
  )
}
