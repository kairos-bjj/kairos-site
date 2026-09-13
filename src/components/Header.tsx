import { Link } from 'react-router'

export function Header() {
  return (
    <header>
      <nav style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly',alignItems:'center'}}>
        <Link to="/" viewTransition>Kairos CT</Link>
        <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none' }}>
          <li><Link to="/" viewTransition>Início</Link></li>
          <li><Link to="/nossa-equipe" viewTransition>Equipe</Link></li>
          <li><Link to="/sobre" viewTransition>Sobre o CT</Link></li>
          <li><Link to="/blog" viewTransition>Blog</Link></li>
          <li><Link to="/contato" viewTransition>Contato</Link></li>
        </ul>
      </nav>
    </header>
  )
}

