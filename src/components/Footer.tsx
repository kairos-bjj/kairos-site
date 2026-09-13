import { Link } from 'react-router'

export function Footer() {
  return (
    <footer style={{display:'flex',flexDirection: 'column',alignItems:'center'}}>
      <p>&copy; {new Date().getFullYear()} Kairos CT. Todos os direitos reservados.</p>
      <p><Link to="/politica-de-privacidade" viewTransition>politica de privacidade </Link> e <Link to="/termos-de-uso" viewTransition>termos de uso </Link></p>
    </footer>
  )
}