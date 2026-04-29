import StyleGuide from '@/components/style-guide'
import { SectionCard } from '@/components/ui/section-card'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <SectionCard>
      <StyleGuide></StyleGuide>
    </SectionCard>
  )
}
