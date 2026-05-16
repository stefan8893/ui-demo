import { Check, Leaf, Monitor, Moon, Pipette, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useLocalStorage } from 'usehooks-ts'
import { SettingsCardHeader } from '@/components/features/settings/settings-card-header'
import { Card, CardContent } from '@/components/ui/display/card'
import { Section } from '@/components/ui/display/section'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'

export function AppearanceSettings() {
  return (
    <Card>
      <SettingsCardHeader title="Erscheinung" />
      <CardContent>
        <Section
          title="Helligkeit"
          description="Wähle aus, wie die App auf deinem Bildschirm erscheinen soll."
        >
          <ThemeSettings />
        </Section>

        <Separator />

        <Section
          title="Farbschema & Vibe"
          description="Passe die Grundstimmung der Oberfläche an."
        >
          <AccentThemeSettings />
        </Section>
      </CardContent>
    </Card>
  )
}

function ThemeSettings() {
  const { theme, setTheme } = useTheme()
  return (
    <div className="grid grid-cols-3 gap-3">
      {[
        { id: 'light', label: 'Hell', icon: Sun },
        { id: 'dark', label: 'Dunkel', icon: Moon },
        { id: 'system', label: 'System', icon: Monitor },
      ].map((item) => (
        <button
          type="button"
          key={item.id}
          onClick={() => setTheme(item.id)}
          className={cn(
            'flex flex-col items-center gap-2 rounded-lg border-2 p-3 hover:bg-accent',
            theme === item.id
              ? 'border-primary'
              : 'border-transparent bg-secondary/50',
          )}
        >
          <item.icon
            className={`size-5 ${theme === item.id ? 'text-primary' : 'text-muted-foreground'}`}
          />
          <span className="font-medium text-[10px] uppercase tracking-wider">
            {item.label}
          </span>
        </button>
      ))}
    </div>
  )
}

function AccentThemeSettings() {
  const [accentTheme, setAccentTheme] = useLocalStorage(
    'accent-theme',
    'default',
    {
      serializer: (value) => value,
      deserializer: (value) => value,
    },
  )

  const updateAccent = (newAccent: 'default' | 'organic') => {
    setAccentTheme(newAccent)
    if (newAccent === 'default') {
      document.documentElement.removeAttribute('data-accent-theme')
    } else {
      document.documentElement.setAttribute('data-accent-theme', newAccent)
    }
  }

  return (
    <div className="grid grid-cols-1 gap-2 pb-0.5 sm:grid-cols-2">
      <button
        type="button"
        onClick={() => updateAccent('default')}
        className={`group relative flex items-start gap-3 rounded-xl border p-4 transition-all hover:shadow-md ${
          accentTheme === 'default'
            ? 'border-primary bg-primary/5 ring-1 ring-primary'
            : 'bg-card hover:border-primary/50'
        }`}
      >
        <div className="rounded-full bg-slate-200 p-2 dark:bg-slate-800">
          <Pipette className="size-4 text-slate-600 dark:text-slate-400" />
        </div>
        <div className="flex flex-col text-left">
          <span className="font-semibold text-sm">Modern Slate</span>
          <span className="text-[11px] text-muted-foreground">
            Kühl, sachlich, technisch.
          </span>
        </div>
        {accentTheme === 'default' && (
          <Check className="absolute top-3 right-3 size-4 text-primary" />
        )}
      </button>

      <button
        type="button"
        onClick={() => updateAccent('organic')}
        className={`group relative flex items-start gap-3 rounded-xl border p-4 transition-all hover:shadow-md ${
          accentTheme === 'organic'
            ? 'border-primary bg-primary/5 ring-1 ring-primary'
            : 'bg-card hover:border-primary/50'
        }`}
      >
        <div className="rounded-full bg-orange-100 p-2 dark:bg-orange-950/30">
          <Leaf className="size-4 text-orange-700 dark:text-orange-500" />
        </div>
        <div className="flex flex-col text-left">
          <span className="font-semibold text-sm">Organic Stone</span>
          <span className="text-[11px] text-muted-foreground">
            Warm, geerdet.
          </span>
        </div>
        {accentTheme === 'organic' && (
          <Check className="absolute top-3 right-3 size-4 text-primary" />
        )}
      </button>
    </div>
  )
}
