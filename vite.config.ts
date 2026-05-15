import path from 'node:path'
import tailwindcss from '@tailwindcss/vite'
import { devtools } from '@tanstack/devtools-vite'
import { tanstackRouter } from '@tanstack/router-plugin/vite'
import viteReact from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
	resolve: {
		tsconfigPaths: true,
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
	plugins: [
		tanstackRouter({ target: 'react', autoCodeSplitting: true }),
		viteReact(),
		tailwindcss(),
		devtools(),
	],
})
