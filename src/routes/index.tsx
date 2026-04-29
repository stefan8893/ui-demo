import StyleGuide from '@/components/style-guide/style-guide'
import { SectionCard } from '@/components/ui/display/section-card'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <SectionCard>
      <StyleGuide></StyleGuide>
    </SectionCard>
  )
}
