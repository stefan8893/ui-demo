import { linkOptions } from '@tanstack/react-router'
import { NavItem } from '@/components/ui/navigation/nav-item'

type SettingMenuProps = {
  onClick?: () => void
}

export function SettingsMenu({ onClick }: SettingMenuProps) {
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
        <NavItem to={x.to} key={x.to} label={x.label} onClick={onClick} />
      ))}
    </div>
  )
}
