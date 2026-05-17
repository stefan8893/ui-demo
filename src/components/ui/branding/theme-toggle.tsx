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
          <Button variant="ghost" size="icon" className="cursor-pointer">
            <Sun className="size-5 dark:hidden" />
            <Moon className="hidden size-5 dark:block" />
            <span className="sr-only">Toggle Theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {[
            { value: 'light', label: 'Hell', icon: Sun },
            { value: 'dark', label: 'Dunkel', icon: Moon },
            { value: 'system', label: 'System', icon: Monitor },
          ].map((x) => (
            <DropdownMenuItem
              key={x.value}
              onClick={() => setTheme(x.value)}
              className="cursor-pointer"
            >
              <x.icon />
              <span>{x.label}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
