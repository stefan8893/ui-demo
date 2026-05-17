import { linkOptions } from '@tanstack/react-router'
import { TabItem } from '@/components/ui/navigation/tab-item'

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
        <TabItem to={x.to} key={x.to} label={x.label} onClick={onClick} />
      ))}
    </div>
  )
}
