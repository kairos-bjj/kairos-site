import { Link } from 'react-router'
import { blogPosts } from '../data/blogPosts'


export function Blog() {
  return (
    <>
      <h1>Posts</h1>
      {blogPosts.map((post) => (
        <h3 key={post.id}>
          <Link to={`/blog/${post.id}`}>{post.title}</Link>
        </h3>
      ))}
    </>
  )
}

