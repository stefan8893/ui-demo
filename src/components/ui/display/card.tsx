import * as React from 'react'
import { cn } from '@/lib/utils'

const CardContext = React.createContext<{ withBorder: boolean }>({
  withBorder: false,
})

export function useCardContext() {
  return React.useContext(CardContext)
}

function Card({
  className,
  size = 'default',
  variant = 'default',
  withBorder = false,
  ...props
}: React.ComponentProps<'div'> & {
  size?: 'default' | 'sm'
  variant?: 'default' | 'muted'
  withBorder?: boolean
}) {
  return (
    <CardContext.Provider value={{ withBorder }}>
      <div
        data-slot="card"
        data-size={size}
        data-variant={variant}
        className={cn(
          'group/card @container/card flex flex-col gap-2 overflow-hidden text-sm has-[>img:first-child]:pt-0 has-data-[slot=card-footer]:pb-0 data-[size=sm]:gap-3 data-[size=sm]:py-3 data-[size=sm]:has-data-[slot=card-footer]:pb-0 *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl',
          'data-[variant=default]:bg-card data-[variant=default]:text-card-foreground',
          'data-[variant=muted]:bg-muted/50 data-[variant=muted]:text-muted-foreground data-[variant=muted]:shadow-none data-[variant=muted]:ring-transparent',
          'data-[variant=muted]:rounded-xl data-[variant=muted]:py-4',
          withBorder &&
            'rounded-xl py-4 data-[variant=default]:ring-1 data-[variant=default]:ring-foreground/10',
          className,
        )}
        {...props}
      />
    </CardContext.Provider>
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<'div'>) {
  const { withBorder } = useCardContext()

  return (
    <div
      data-slot="card-header"
      className={cn(
        'group/card-header @container/card-header grid auto-rows-min items-start gap-1 rounded-t-xl px-4 has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto] group-data-[size=sm]/card:px-3 [.border-b]:pb-4 group-data-[size=sm]/card:[.border-b]:pb-3',
        !withBorder && 'group-data-[variant=default]/card:px-0',
        className,
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-title"
      className={cn(
        'font-heading font-semibold text-lg leading-tight group-data-[size=sm]/card:text-sm',
        className,
      )}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-description"
      className={cn('text-muted-foreground text-sm', className)}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        'col-start-2 row-span-2 row-start-1 self-start justify-self-end',
        className,
      )}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<'div'>) {
  const { withBorder } = useCardContext()

  return (
    <div
      data-slot="card-content"
      className={cn(
        'flex flex-1 flex-col gap-10 px-5 group-data-[size=sm]/card:px-4',
        !withBorder && 'group-data-[variant=default]/card:px-1',
        className,
      )}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<'div'>) {
  const { withBorder } = useCardContext()

  return (
    <div
      data-slot="card-footer"
      className={cn(
        'flex @sm:flex-row flex-col-reverse flex-wrap @sm:items-center items-stretch justify-end gap-6 rounded-b-xl p-4',
        'group-data-[size=sm]/card:p-3',
        withBorder ? 'border-t' : 'group-data-[variant=default]/card:px-0',
        className,
      )}
      {...props}
    />
  )
}

export {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
}
