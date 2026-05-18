import { Languages } from 'lucide-react'
import type { ComponentPropsWithoutRef } from 'react'
import { useTranslation } from 'react-i18next'
import { IconButton } from '@/components/ui/buttons/icon-button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/overlays/dropdown-menu'
import { cn } from '@/lib/utils'

export function LanguageSelect({ className }: ComponentPropsWithoutRef<'div'>) {
  const { i18n } = useTranslation()

  const changeLanguage = async (newLanguage: string) => {
    await i18n.changeLanguage(newLanguage)
  }

  return (
    <div className={className}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <IconButton icon={Languages} />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="center">
          {[
            {
              value: 'de',
              label: 'Deutsch',
              selected: i18n.resolvedLanguage === 'de',
            },
            {
              value: 'en',
              label: 'English',
              selected: i18n.resolvedLanguage === 'en',
            },
          ].map((x) => (
            <DropdownMenuItem
              key={x.value}
              onClick={() => changeLanguage(x.value)}
            >
              <span className={cn(x.selected && 'font-semibold')}>
                {x.label}
              </span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
