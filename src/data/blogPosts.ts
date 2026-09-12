export interface Post {
  id: string
  title: string
  creatAt: string
  content: string
}

export const blogPosts: Post[] = [
  { id: '1', title: 'First Blog Post', creatAt: '20-10-1997', content: 'lorem ipsum text' },
  { id: '2', title: 'Second Blog Post', creatAt: '21-10-1997', content: 'lorem ipsum text' },
  { id: '3', title: 'Third Blog Post', creatAt: '22-10-1997', content: 'lorem ipsum text' },
  { id: '4', title: 'Fourth Blog Post', creatAt: '23-10-1997', content: 'lorem ipsum text' },
]