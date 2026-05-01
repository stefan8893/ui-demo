import { Sun, Moon, Monitor, Leaf, Pipette, Check } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useLocalStorage } from 'usehooks-ts'

export function AppearanceSettings() {
  const { theme, setTheme } = useTheme()
  const [accentTheme, setAccentTheme] = useLocalStorage(
    'accent-theme',
    'default',
    {
      serializer: (value) => value,
      deserializer: (value) => value,
    },
  )

  const updateAccent = (newAccent: string) => {
    setAccentTheme(newAccent)
    if (newAccent === 'default') {
      document.documentElement.removeAttribute('data-theme')
    } else {
      document.documentElement.setAttribute('data-theme', newAccent)
    }
  }

  return (
    <div className="space-y-8 p-1">
      <section className="space-y-4">
        <div className="space-y-1">
          <h3 className="text-sm leading-none font-medium">Helligkeit</h3>
          <p className="text-muted-foreground text-xs">
            Wähle aus, wie die App auf deinem Bildschirm erscheinen soll.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {[
            { id: 'light', label: 'Hell', icon: Sun },
            { id: 'dark', label: 'Dunkel', icon: Moon },
            { id: 'system', label: 'System', icon: Monitor },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setTheme(item.id)}
              className={`hover:bg-accent flex flex-col items-center gap-2 rounded-lg border-2 p-3 transition-all ${
                theme === item.id
                  ? 'border-primary'
                  : 'bg-secondary/50 border-transparent'
              }`}
            >
              <item.icon
                className={`size-5 ${theme === item.id ? 'text-primary' : 'text-muted-foreground'}`}
              />
              <span className="text-[10px] font-medium tracking-wider uppercase">
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </section>

      <hr className="border-border/50" />

      <section className="space-y-4">
        <div className="space-y-1">
          <h3 className="text-sm leading-none font-medium">
            Farbschema & Vibe
          </h3>
          <p className="text-muted-foreground text-xs">
            Passe die Grundstimmung der Oberfläche an.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <button
            onClick={() => updateAccent('default')}
            className={`group relative flex items-start gap-3 rounded-xl border p-4 transition-all hover:shadow-md ${
              accentTheme === 'default'
                ? 'border-primary bg-primary/5 ring-primary ring-1'
                : 'bg-card hover:border-primary/50'
            }`}
          >
            <div className="rounded-full bg-slate-200 p-2 dark:bg-slate-800">
              <Pipette className="size-4 text-slate-600 dark:text-slate-400" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-sm font-semibold">Modern Slate</span>
              <span className="text-muted-foreground text-[11px]">
                Kühl, sachlich, technisch.
              </span>
            </div>
            {accentTheme === 'default' && (
              <Check className="text-primary absolute top-3 right-3 size-4" />
            )}
          </button>

          <button
            onClick={() => updateAccent('organic')}
            className={`group relative flex items-start gap-3 rounded-xl border p-4 transition-all hover:shadow-md ${
              accentTheme === 'organic'
                ? 'border-primary bg-primary/5 ring-primary ring-1'
                : 'bg-card hover:border-primary/50'
            }`}
          >
            <div className="rounded-full bg-orange-100 p-2 dark:bg-orange-950/30">
              <Leaf className="size-4 text-orange-700 dark:text-orange-500" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-sm font-semibold">Organic Stone</span>
              <span className="text-muted-foreground text-[11px]">
                Warm, geerdet, biophil.
              </span>
            </div>
            {accentTheme === 'organic' && (
              <Check className="text-primary absolute top-3 right-3 size-4" />
            )}
          </button>
        </div>
      </section>
    </div>
  )
}
