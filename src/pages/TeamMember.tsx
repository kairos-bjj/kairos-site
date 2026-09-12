import { useParams } from 'react-router'
import { teamMembers } from '../data/teamMembers'

export function TeamMember() {
  const { memberId } = useParams()
  const member = teamMembers.find((m) => m.id === memberId)

  if (!member) {
    return <h1>Membro não encontrado</h1>
  }

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