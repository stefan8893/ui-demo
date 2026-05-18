import { RouterProvider } from '@tanstack/react-router'
import ReactDOM from 'react-dom/client'
import { createRouter } from '@/router'
import '@/i18n/index'
import { Suspense } from 'react'

const router = createRouter()

const rootElement = document.getElementById('app')

if (rootElement && !rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <Suspense
      fallback={
        <div className="flex h-screen items-center justify-center">
          Loading...
        </div>
      }
    >
      <RouterProvider router={router} />
    </Suspense>,
  )
}
