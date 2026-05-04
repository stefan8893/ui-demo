import { ButtonsGuide } from '@/components/style-guide/buttons-guide'
import { ColorsGuide } from '@/components/style-guide/colors-guide'
import { DefaultCardGuide } from '@/components/style-guide/default-card-guide'
import { IconButtonsGuide } from '@/components/style-guide/icon-buttons-guide'
import { ListGuide } from '@/components/style-guide/list-guide'
import { MutedCardGuide } from '@/components/style-guide/muted-card-guide'
import { PageCard } from '@/components/ui/display/page-card'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <PageCard
      title="Design System"
      description="Struktur und Leitlinien für eine einheitliche User Experience"
    >
      <div className="flex flex-col gap-y-8">
        <ButtonsGuide />
        <ColorsGuide />
        <div className="grid gap-4 md:grid-cols-2">
          <IconButtonsGuide />
          <ListGuide />
          <DefaultCardGuide />
          <MutedCardGuide />
        </div>
      </div>
    </PageCard>
  )
}
