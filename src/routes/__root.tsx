import { Outlet, createRootRoute } from '@tanstack/react-router'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'

export const Route = createRootRoute({
    component: RootComponent,
})

function RootComponent() { 
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="grow xl:pt-20 md:pt-20 sm:pt-0">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}