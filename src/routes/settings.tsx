import { SectionCard } from '@/components/ui/section-card'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/settings')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <SectionCard title="Settings">
      <div>Coming soon ...</div>
    </SectionCard>
  )
}
