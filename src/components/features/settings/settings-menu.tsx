import { Link, linkOptions } from '@tanstack/react-router'
import { useState } from 'react'
import { ListItem } from '@/components/ui/display/list-item'
import { cn } from '@/lib/utils'

type SettingMenuProps = {
  onItemClick?: () => void
}

export function SettingsMenu({ onItemClick }: SettingMenuProps) {
  const menuItems = linkOptions([
    {
      to: '/settings/language-region',
      title: 'Sprache & Region',
    },
    {
      to: '/settings/appearance',
      title: 'Erscheinung',
    },
  ])

  return (
    <div className="flex flex-col gap-2">
      {menuItems.map((x) => (
        <Link
          to={x.to}
          key={x.to}
          activeProps={{
            className:
              'bg-primary text-primary-foreground shadow-sm rounded-xl',
          }}
          onClick={onItemClick}
        >
          <MenuItem title={x.title}></MenuItem>
        </Link>
      ))}
    </div>
  )
}

function MenuItem({ title }: { title: string }) {
  const [isAnimating, setIsAnimating] = useState(false)

  return (
    <ListItem
      onClick={() => setIsAnimating(true)}
      onAnimationEnd={() => setIsAnimating(false)}
      className={cn(
        'flex h-12 flex-row items-center px-3 py-2 font-medium text-sm',
        isAnimating && 'animate-flash-hard',
      )}
    >
      {title}
    </ListItem>
  )
}
