import type { TeamMember, BlogPost } from '../src/types/index.ts'

export const teamMembers: TeamMember[] = [
  { id: 'professor', name: 'Fulano da Silva', role: 'Professor' },
  { id: 'faixa-preta-1', name: 'Ciclano Souza', role: 'Faixa Preta' },
  { id: 'faixa-preta-2', name: 'Beltrano Alves', role: 'Faixa Preta' },
  { id: 'faixa-marrom-1', name: 'Maria Costa', role: 'Faixa Marrom' },
  { id: 'faixa-roxa-1', name: 'João Pereira', role: 'Faixa Roxa' },
  { id: 'faixa-roxa-2', name: 'Ana Lima', role: 'Faixa Roxa' },
]

export const blogPosts: BlogPost[] = [
  { id: '1', title: 'First Blog Post', publishedAt: '20-10-1997', excerpt: 'lorem ipsum text', content: 'Conteúdo completo do post 1...', author: 'Joe' },
  { id: '2', title: 'Second Blog Post', publishedAt: '21-10-1997', excerpt: 'lorem ipsum text', content: 'Conteúdo completo do post 2...', author: 'Joe' },
  { id: '3', title: 'Third Blog Post', publishedAt: '22-10-1997', excerpt: 'lorem ipsum text', content: 'Conteúdo completo do post 3...', author: 'Joe' },
  { id: '4', title: 'Fourth Blog Post', publishedAt: '23-10-1997', excerpt: 'lorem ipsum text', content: 'Conteúdo completo do post 4...' },
]