import { Button } from '@/components/ui/buttons/button'
import { SectionCard } from '@/components/ui/display/section-card'
import { createFileRoute } from '@tanstack/react-router'
import { Pointer } from 'lucide-react'

export const Route = createFileRoute('/buttons')({
  component: Buttons,
})

function Buttons() {
  const variants = [
    'default',
    'secondary',
    'outline',
    'ghost',
    'link',
    'destructive',
  ] as const

  const sizes = ['xs', 'sm', 'default', 'lg'] as const

  return (
    <SectionCard
      title="Button Showcase"
      className="flex flex-col items-start gap-6"
    >
      {variants.map((variant) => (
        <div
          key={variant}
          className="flex flex-row flex-wrap items-center gap-4"
        >
          <Button variant={variant} size="icon">
            <Pointer className="size-4" />
          </Button>

          {sizes.map((size) => (
            <Button key={`${variant}-${size}`} variant={variant} size={size}>
              {variant.charAt(0).toUpperCase() + variant.slice(1)} ({size})
            </Button>
          ))}
        </div>
      ))}
    </SectionCard>
  )
}
