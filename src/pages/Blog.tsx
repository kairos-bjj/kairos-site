import { Link, useLoaderData } from 'react-router'
import type { BlogPostSummary } from '../types/interface'

export async function blogLoader() {
  const res = await fetch('/api/blog')
  if (!res.ok) throw new Response('Erro ao carregar posts', { status: res.status })
  return res.json() as Promise<BlogPostSummary[]>
}

export function Blog() {
  const posts = useLoaderData<BlogPostSummary[]>()
  return (
    <>
      <h1>Blog</h1>
      {posts.map((post) => (
        <article key={post.id}>
          <h3>
            <Link to={`/blog/${post.id}`}>{post.title}</Link>
          </h3>
          <p>at: {post.publishedAt} by: {post.author}</p>
          <p>{post.excerpt}</p>
        </article>
      ))}
    </>
  )
}