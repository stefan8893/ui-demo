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

export function ThemeToggle({ className }: ComponentPropsWithoutRef<'div'>) {
  const { setTheme } = useTheme()

  return (
    <div className={className}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon-lg" className="cursor-pointer">
            <Sun className="size-6 dark:hidden" />
            <Moon className="hidden size-6 dark:block" />
            <span className="sr-only">Toggle Theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {[
            { label: 'Hell', icon: <Sun />, value: 'light' },
            { label: 'Dunkel', icon: <Moon />, value: 'dark' },
            { label: 'System', icon: <Monitor />, value: 'system' },
          ].map((x) => (
            <DropdownMenuItem
              key={x.label}
              onClick={() => setTheme(x.value)}
              className="cursor-pointer"
            >
              <span className="mr-2">{x.icon}</span>
              <span>{x.label}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
