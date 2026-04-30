import { ButtonsGuide } from '@/components/style-guide/buttons-guide'
import { ColorsGuide } from '@/components/style-guide/colors-guide'
import { DefaultCardGuide } from '@/components/style-guide/default-card-guide'
import { IconButtonsGuide } from '@/components/style-guide/icon-buttons-guide'
import { ListGuide } from '@/components/style-guide/list-guide'
import { MutedCardGuide } from '@/components/style-guide/muted-card-guide'
import { SectionCard } from '@/components/ui/display/section-card'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <SectionCard
      title="Design System"
      description="Struktur und Leitlinien für eine einheitliche User Experience"
    >
      <div className="space-y-10">
        <ButtonsGuide />
        <ColorsGuide />
        <div className="grid gap-6 md:grid-cols-2">
          <IconButtonsGuide />
          <ListGuide />
          <DefaultCardGuide />
          <MutedCardGuide />
        </div>
      </div>
    </SectionCard>
  )
}
