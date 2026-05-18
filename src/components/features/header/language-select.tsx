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
        <DropdownMenuContent>
          {[
            { value: 'de', label: 'Deutsch' },
            { value: 'en', label: 'English' },
          ].map((x) => (
            <DropdownMenuItem
              key={x.value}
              onClick={() => changeLanguage(x.value)}
            >
              {x.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
