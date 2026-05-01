import { Moon, Sun, Monitor } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/buttons/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/overlays/dropdown-menu'

export function ThemeToggle({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  const { setTheme } = useTheme()

  return (
    <div className={className}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon-lg" className="cursor-pointer">
            <Sun className="size-5 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
            <Moon className="absolute size-5 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
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
