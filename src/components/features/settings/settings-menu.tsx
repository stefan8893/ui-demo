import { Link } from '@tanstack/react-router'
import { useState } from 'react'
import { ListItem } from '@/components/ui/display/list-item'
import { cn } from '@/lib/utils'

export function SettingsMenu() {
  return (
    <div className="flex flex-col gap-2">
      <Link
        to={'/settings/language-region'}
        activeProps={{
          className: 'bg-primary text-primary-foreground shadow-sm rounded-xl',
        }}
      >
        <MenuItem title="Sprache & Region" />
      </Link>

      <Link
        to={'/settings/appearance'}
        activeProps={{
          className: 'bg-primary text-primary-foreground shadow-sm rounded-xl',
        }}
      >
        <MenuItem title="Erscheinung" />
      </Link>
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
