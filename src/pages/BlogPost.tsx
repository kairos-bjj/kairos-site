import { useLoaderData, type LoaderFunctionArgs } from 'react-router'
import type { BlogPost } from '../types/interface'

export async function blogPostLoader({ params }: LoaderFunctionArgs) {
  const res = await fetch(`/api/blog/${params.postId}`)
  if (!res.ok) throw new Response('Post não encontrado', { status: res.status })
  return res.json() as Promise<BlogPost>
}

export function BlogPost() {
  const post = useLoaderData<BlogPost>()
  return (
    <article>
      <h1>{post.title}</h1>
      <p>by: {post.author ? ` · ${post.author}` : ''}</p>
      <p>at: {post.publishedAt}</p>
      <div>{post.content}</div>
    </article>
  )
}