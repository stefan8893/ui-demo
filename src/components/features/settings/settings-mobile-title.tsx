import { CardTitle } from '@/components/ui/display/card'
import { Link } from '@tanstack/react-router'
import { ChevronLeft } from 'lucide-react'

type SettingsCardTitleProps = {
  title: string
  showTitle?: boolean
}

export function SettingsCardTitle({
  title,
  showTitle,
}: SettingsCardTitleProps) {
  return (
    <>
      <CardTitle className="flex flex-row items-center gap-x-2">
        {showTitle && (
          <>
            <Link to="/settings">
              <ChevronLeft size={32} />
            </Link>
            <span>{title}</span>
          </>
        )}
      </CardTitle>
    </>
  )
}
