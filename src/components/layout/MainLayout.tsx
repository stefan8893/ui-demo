import { Outlet } from '@tanstack/react-router'

export function MainLayout() {
  return (
    <div className="grid grid-cols-4 grid-rows-[auto_1fr_auto] min-h-screen">
      <header className="col-span-4 bg-zinc-800">
        <h1 className="text-2xl font-bold tracking-tight text-slate-200 font-heading">
          UI Demo
        </h1>
      </header>

      <aside className="col-span-1 font-body">Sidebar</aside>

      <main className="col-span-3">
        <Outlet />
      </main>

      <footer className="col-span-4 font-mono">Footer</footer>
    </div>
  )
}
