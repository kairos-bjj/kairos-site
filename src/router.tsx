import { createBrowserRouter } from 'react-router'

import { App } from './App'
import { PrivacyPolicy } from './routes/PrivacyPolicy'
import { TermsOfService } from './routes/TermsOfService'
import { About } from './routes/About'
import { Home } from './routes/Home'
import { Contact } from './routes/Contact'
import { BlogPost, blogPostLoader } from './routes/BlogPost'
import { Blog, blogLoader } from './routes/Blog'
import { Team, teamLoader } from './routes/Team'
import { TeamMember } from './routes/TeamMember'


export const router = createBrowserRouter([
  {
    Component: App,
    children:
      [
        { index: true, Component: Home },
        { path: 'sobre', Component: About },
        { path: 'politica-de-privacidade', Component: PrivacyPolicy },
        { path: 'termos-de-uso', Component: TermsOfService },
        { path: 'contato', Component: Contact },
        
        { path: 'blog', children: [
          { index: true, Component: Blog, loader: blogLoader },
          { path: ':postId', Component: BlogPost, loader: blogPostLoader }]
        },
        { path: 'nossa-equipe', id: 'team', loader: teamLoader, children: [
          { index: true, Component: Team, },
          { path: ':memberId', Component: TeamMember }]
        }
      ]
  },
  {
    path: "*",
    element: <><h1 style={{ display: 'flex', justifyContent: 'center' }}>This is a "Page for erros"</h1></>
  }
])