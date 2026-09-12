// src/components/Layout.tsx
import { Outlet } from 'react-router'
import { Header } from './Header'
import { Footer } from './Footer'

export function MainLayout() {
  return (
    <>
      <Header />
      <main style={{display:'flex',alignItems:'center',flexDirection:'column'}}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}