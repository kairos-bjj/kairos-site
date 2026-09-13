import { Link, useLoaderData } from 'react-router'
import type { TeamMember } from '../types/interface'

export async function teamLoader() {
  const res = await fetch('/api/team')
  if (!res.ok) throw new Response('Erro ao carregar equipe', { status: res.status })
  return res.json() as Promise<TeamMember[]>
}

export function Team() {
  const members = useLoaderData<TeamMember[]>()
  return (
    <>
      <h1>Equipe</h1>
      {members.map((member) => (
        <h3 key={member.id}>
          <Link to={`/nossa-equipe/${member.id}`}>{member.name}</Link>
        </h3>
      ))}
    </>
  )
}