import { useParams, useRouteLoaderData } from 'react-router'
import type { teamLoader } from './Team'

export function TeamMember() {
  const { memberId } = useParams()
  const members = useRouteLoaderData<typeof teamLoader>('team')
  const member = members?.find((m) => m.id === memberId)

  if (!member) return <h1>Membro não encontrado</h1>

  return (
    <>
      <h1>{member.name}</h1>
      <h3>{member.role}</h3>
    </>
  )
}