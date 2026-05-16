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

export function ThemeToggle({ className }: ComponentPropsWithoutRef<'div'>) {
  const { setTheme } = useTheme()

  return (
    <div className={cn('', className)}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon-lg" className="cursor-pointer">
            <Sun className="size-6 rotate-0 scale-100 dark:scale-0" />
            <Moon className="absolute size-6 scale-0 dark:scale-100" />
            <span className="sr-only">Toggle Theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem
            onClick={() => setTheme('light')}
            className="cursor-pointer"
          >
            <Sun className="mr-2 h-4 w-4" />
            <span>Hell</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => setTheme('dark')}
            className="cursor-pointer"
          >
            <Moon className="mr-2 h-4 w-4" />
            <span>Dunkel</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => setTheme('system')}
            className="cursor-pointer"
          >
            <Monitor className="mr-2 h-4 w-4" />
            <span>System</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
