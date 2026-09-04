import { Link } from 'react-router'

export function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Kairos CT</Link>
        <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none' }}>
          <li><Link to="/">Início</Link></li>
          <li><Link to="/sobre">Sobre</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contato">Contato</Link></li>
        </ul>
      </nav>
    </header>
  )
}