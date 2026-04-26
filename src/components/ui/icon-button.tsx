// components/ui/icon-button.tsx
import { cn } from '@/lib/utils'

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  // Wir akzeptieren nur ein fertiges Element (z.B. <Menu />)
  icon: React.ReactNode
}

export function IconButton({ icon, className, ...props }: IconButtonProps) {
  return (
    <button
      className={cn(
        'p-2 rounded-md transition-colors cursor-pointer flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-accent',
        className,
      )}
      {...props}
    >
      {/* Wir rendern das Icon einfach direkt */}
      {icon}
    </button>
  )
}
