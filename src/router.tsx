import { createBrowserRouter } from 'react-router'
import { Layout } from './components/Layout'
import  { Home }  from './pages/Home'
import { Sobre } from './pages/Sobre'
import { Blog } from './pages/Blog'
import { Contato } from './pages/Contato'

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { 
        path: '/', 
        Component: Home, 
      },
      { 
        path: '/sobre', 
        Component: Sobre, 
      },
      { 
        path: '/blog', 
        Component: Blog, 
      },
      { 
        path: '/contato', 
        Component: Contato, 
      },
    ],
  },
])