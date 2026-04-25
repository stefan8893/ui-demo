import { defineConfig } from 'vite'
import { devtools } from '@tanstack/devtools-vite'
import Fonts from 'unplugin-fonts/vite'
import { tanstackRouter } from '@tanstack/router-plugin/vite'
import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  resolve: { tsconfigPaths: true },
  plugins: [
    tanstackRouter({ target: 'react', autoCodeSplitting: true }),
    viteReact(),
    tailwindcss(),
    devtools(),
    Fonts({
      fontsource: {
        families: [
          {
            name: 'JetBrains Mono',
            weights: [400, 600],
            subset: 'latin',
          },
          {
            name: 'Inter',
            weights: [300, 400, 500, 600, 700],
            styles: ['normal', 'italic'],
            subset: 'latin',
          },
        ],
      },
    }),
  ],
})
