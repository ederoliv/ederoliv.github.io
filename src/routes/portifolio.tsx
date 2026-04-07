import { createFileRoute } from '@tanstack/react-router'
import { PortifolioPage } from '../pages/PortifolioPage'

export const Route = createFileRoute('/portifolio')({
  component: PortifolioPage,
})
