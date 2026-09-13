import { teamMembers, blogPosts } from './mock-data.ts'

export default {
  async fetch(request) {
    const url = new URL(request.url)
    const { pathname } = url

    if (!pathname.startsWith('/api/')) {
      return new Response(null, { status: 404 })
    }

    // GET /api/team
    if (pathname === '/api/team' && request.method === 'GET') {
      return Response.json(teamMembers)
    }

    // GET /api/team/:id
    const teamMatch = pathname.match(/^\/api\/team\/([^/]+)$/)
    if (teamMatch && request.method === 'GET') {
      const member = teamMembers.find((m) => m.id === teamMatch[1])
      if (!member) return Response.json({ error: 'Membro não encontrado' }, { status: 404 })
      return Response.json(member)
    }

    // GET /api/blog
    if (pathname === '/api/blog' && request.method === 'GET') {
      return Response.json(blogPosts)
    }

    // GET /api/blog/:id
    const blogMatch = pathname.match(/^\/api\/blog\/([^/]+)$/)
    if (blogMatch && request.method === 'GET') {
      const post = blogPosts.find((p) => p.id === blogMatch[1])
      if (!post) return Response.json({ error: 'Post não encontrado' }, { status: 404 })
      return Response.json(post)
    }

    // POST /api/contact
    if (pathname === '/api/contact' && request.method === 'POST') {
      const body = await request.json()
      console.log('Contato recebido (mock):', body)
      return Response.json({ success: true })
    }

    return new Response(null, { status: 404 })
  },
} satisfies ExportedHandler<Env>