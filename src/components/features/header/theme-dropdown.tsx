import { Monitor, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import type { ComponentPropsWithoutRef } from 'react'
import { Button } from '@/components/ui/buttons/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/overlays/dropdown-menu'
import { cn } from '@/lib/utils'

export function ThemeDropdown({ className }: ComponentPropsWithoutRef<'div'>) {
  const { setTheme, theme } = useTheme()
  return (
    <div className={className}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className="cursor-pointer">
            <Sun className="size-5 dark:hidden" />
            <Moon className="hidden size-5 dark:block" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {[
            {
              value: 'light',
              label: 'Hell',
              icon: Sun,
              selected: theme === 'light',
            },
            {
              value: 'dark',
              label: 'Dunkel',
              icon: Moon,
              selected: theme === 'dark',
            },
            {
              value: 'system',
              label: 'System',
              icon: Monitor,
              selected: theme === 'system',
            },
          ].map((item) => (
            <DropdownMenuItem
              key={item.value}
              onClick={() => setTheme(item.value)}
            >
              <item.icon className={cn(item.selected && 'stroke-bold')} />
              <span className={cn(item.selected && 'font-semibold')}>
                {item.label}
              </span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
