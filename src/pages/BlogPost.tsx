import { useParams } from 'react-router'
import { blogPosts } from '../data/blogPosts'

export function BlogPost() {
    const { postId } = useParams()
    const post = blogPosts.find((p) => p.id === postId)
    
    if (!post){
        return <h1>Post not found</h1>
        }

    return (
        <>
        <h1>{post.title}</h1>
        <p>{post.creatAt}</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>        
        </>
    )
}