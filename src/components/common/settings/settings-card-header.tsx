import { ChevronLeftCircle } from 'lucide-react'
import { IconButton } from '@/components/ui/buttons/icon-button'
import { CardHeader, CardTitle } from '@/components/ui/display/card'
import { useLayoutStore } from '@/stores/useLayoutStore'

export function SettingsCardHeader({ title }: { title: string }) {
  const isContentCompact = useLayoutStore((x) => x.isContentCompact)

  return (
    <>
      {isContentCompact && (
        <CardHeader>
          <CardTitle className="flex flex-row items-center gap-2">
            <IconButton icon={ChevronLeftCircle} size="lg" to="/settings" />
            <span>{title}</span>
          </CardTitle>
        </CardHeader>
      )}
    </>
  )
}
