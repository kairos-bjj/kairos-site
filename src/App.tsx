import { Outlet } from 'react-router'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

export function App() {
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