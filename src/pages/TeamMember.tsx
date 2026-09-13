import { useLoaderData, type LoaderFunctionArgs } from 'react-router'
import type { TeamMember } from '../types/interface'

export async function teamMemberLoader({ params }: LoaderFunctionArgs) {
  const res = await fetch(`/api/team/${params.memberId}`)
  if (!res.ok) throw new Response('Membro não encontrado', { status: res.status })
  return res.json() as Promise<TeamMember>
}

export function TeamMember() {
  const member = useLoaderData<TeamMember>()
  return (
    <>
      <h1>{member.name}</h1>
      <h3>{member.role}</h3>
      <h3>Contatos</h3>
      <h3>Campeonatos / Histórico</h3>
      <h3>Fotos/Vídeos</h3>
    </>
  )
}