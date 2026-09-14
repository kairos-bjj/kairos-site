export interface ContactFormValues {
  name: string
  email: string
  phone?: string
  message: string
}

export interface TeamMember {
  id: string
  name: string
  role: string
}

export interface BlogPostSummary {
  id: string
  title: string
  publishedAt: string
  excerpt: string
  coverImage?: string
  author?: string
}

export interface BlogPost extends BlogPostSummary {
  content: string
}

