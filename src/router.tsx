// src/router.tsx
import { createBrowserRouter } from 'react-router'
import { Layout } from './components/Layout'
import  Home  from './pages/Home'
// import { Sobre } from './pages/Sobre'
// import { Blog } from './pages/Blog'
// import { Contato } from './pages/Contato'

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      // { path: '/sobre', element: <Sobre /> },
      // { path: '/blog', element: <Blog /> },
      // { path: '/contato', element: <Contato /> },
    ],
  },
])