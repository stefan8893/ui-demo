import { SettingsTabTrigger } from '@/components/features/settings/settings-tabs'
import { TabsList } from '@/components/ui/display/tabs'

type SettingsDesktopMenuProps = {
  onTabListClick?: () => void
}

export function SettingsDesktopMenu({
  onTabListClick,
}: SettingsDesktopMenuProps) {
  return (
    <TabsList
      onClick={onTabListClick}
      className="flex h-auto w-full flex-col items-stretch justify-start gap-y-1.5 border-none bg-transparent p-0"
    >
      <SettingsTabTrigger value="language-region">
        Sprache & Region
      </SettingsTabTrigger>
      <SettingsTabTrigger value="appearance">Erscheinung</SettingsTabTrigger>
    </TabsList>
  )
}
