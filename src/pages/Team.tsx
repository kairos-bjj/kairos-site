import { Link } from 'react-router'
import { teamMembers } from '../data/teamMembers'


export function Team() {
  return (
    <>
      <h1>Equipe</h1>
      {teamMembers.map((member) => (
        <h3 key={member.id}>
          <Link to={`/nossa-equipe/${member.id}`} viewTransition>{member.name}</Link>
        </h3>
      ))}
    </>
  )
}

