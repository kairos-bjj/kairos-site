import { createBrowserRouter } from 'react-router'

import { MainLayout } from './components/MainLayout'
import  { Home }  from './pages/Home'
import { About } from './pages/About'
import { Blog } from './pages/Blog'
import { BlogPost } from './pages/BlogPost'
import { Contact } from './pages/Contact'
import { PrivacyPolicy } from './pages/PrivacyPolicy'
import { TermsOfService } from './pages/TermsOfService'
import { Team } from './pages/Team'
import { TeamMember } from './pages/TeamMember'


export const router = createBrowserRouter([ // list of Route objects
  { 
    path: "*",
    element: <><h1 style={{display:'flex',justifyContent:'center'}}>This is a "Page for erros"</h1></> },
  { // Layout-routes/pathless-routes-objects
    Component: MainLayout,
    children: 
    [ // Nested-routes
      { index: true, Component: Home },
      { path: 'sobre', Component: About },
      { path: 'politica-de-privacidade', Component: PrivacyPolicy },
      { path: 'termos-de-uso', Component: TermsOfService },
      { path: 'contato', Component: Contact },

      { path: 'blog', children: [
        {index: true, Component: Blog}, // +loader: blogPostsLoader
        {path: ':postId', Component: BlogPost},]}, // +loader: postLoader
        
      { path: 'nossa-equipe', children: [
        { index: true, Component: Team,}, // +loader: teamListLoader
        { path: ':memberId', Component: TeamMember} ]}
    ]
  },
])