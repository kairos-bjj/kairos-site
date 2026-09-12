export interface TeamMember {
  id: string
  name: string
  role: string
}

export const teamMembers: TeamMember[] = [
  { id: 'professor', name: 'Fulano da Silva', role: 'Professor' },
  { id: 'faixa-preta-1', name: 'Ciclano Souza', role: 'Faixa Preta' },
  { id: 'faixa-preta-2', name: 'Beltrano Alves', role: 'Faixa Preta' },
  { id: 'faixa-marrom-1', name: 'Maria Costa', role: 'Faixa Marrom' },
  { id: 'faixa-roxa-1', name: 'João Pereira', role: 'Faixa Roxa' },
  { id: 'faixa-roxa-2', name: 'Ana Lima', role: 'Faixa Roxa' },
]