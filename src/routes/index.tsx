import LandingPage from '@/components/page/landing'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <LandingPage />
}
