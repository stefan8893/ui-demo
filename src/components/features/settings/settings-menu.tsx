import { linkOptions } from '@tanstack/react-router'
import { ChevronRight } from 'lucide-react'
import { NavItem } from '@/components/ui/navigation/nav-item'

type SettingMenuProps = {
  showAppendIconGoTo?: boolean
  size?: 'default' | 'lg'
  onClick?: () => void
}

export function SettingsMenu({
  showAppendIconGoTo = false,
  size = 'default',
  onClick,
}: SettingMenuProps) {
  const menuItems = linkOptions([
    {
      to: '/settings/language-region',
      label: 'Sprache & Region',
    },
    {
      to: '/settings/appearance',
      label: 'Erscheinung',
    },
  ])

  return (
    <div className="flex flex-col gap-2">
      {menuItems.map((x) => (
        <NavItem
          to={x.to}
          key={x.to}
          label={x.label}
          size={size}
          onClick={onClick}
          appendIcon={showAppendIconGoTo && <ChevronRight size={20} />}
        />
      ))}
    </div>
  )
}
