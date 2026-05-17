import { linkOptions } from '@tanstack/react-router'
import { ChevronRight } from 'lucide-react'
import { TabItem } from '@/components/ui/navigation/tab-item'

type SettingMenuProps = {
  showAppendIconGoTo?: boolean
  onClick?: () => void
}

export function SettingsMenu({
  showAppendIconGoTo = false,
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
        <TabItem
          to={x.to}
          key={x.to}
          label={x.label}
          onClick={onClick}
          appendIcon={showAppendIconGoTo && <ChevronRight size={20} />}
        />
      ))}
    </div>
  )
}
