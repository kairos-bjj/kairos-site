import { Link } from 'react-router'

export function Header() {
  return (
    <header>
      <nav style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly',alignItems:'center'}}>
        <Link to="/">Kairos CT</Link>
        <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none' }}>
          <li><Link to="/">Início</Link></li>
          <li><Link to="/nossa-equipe">Equipe</Link></li>
          <li><Link to="/sobre">Sobre o CT</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contato">Contato</Link></li>
        </ul>
      </nav>
    </header>
  )
}

