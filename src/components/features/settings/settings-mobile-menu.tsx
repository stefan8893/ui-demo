import { ListItem } from '@/components/ui/display/list-item'
import { Link } from '@tanstack/react-router'

export function SettingsMobileMenu() {
  return (
    <div className="flex flex-col gap-2">
      <Link to={'/settings/language-region'}>
        <MenuItem title="Sprache & Region" />
      </Link>

      <Link to={'/settings/appearance'}>
        <MenuItem title="Erscheinung" />
      </Link>
    </div>
  )
}

function MenuItem({ title }: { title: string }) {
  return (
    <ListItem className="flex h-12 flex-row items-center px-3 py-2 text-sm font-medium">
      {title}
    </ListItem>
  )
}
