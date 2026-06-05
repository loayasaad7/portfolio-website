import { Link, useLocation } from 'react-router-dom'

const navItems = [
  { label: 'Home', href: '/#home' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Skills', href: '/#skills' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
]

export function Navbar() {
  const location = useLocation()

  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Primary navigation">
        <Link className="brand" to="/">
          <span className="brand-mark">LA</span>
          <span>Loay Asaad</span>
        </Link>
        <div className="nav-links">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className={location.pathname === '/' ? '' : 'muted-link'}>
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}
