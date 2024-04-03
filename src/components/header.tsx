import logoNlw from '../assets/nlw-logo.svg'
import { NavLink } from './nav-link'

export function Header() {
  return (
    <div className="flex items-center gap-5 py-2">
      <img src={logoNlw} alt="" />

      <nav className="flex items-center gap-5">
        <NavLink href="/eventos">Eventos</NavLink>
        <NavLink href="/participantes">Participantes</NavLink>
      </nav>
    </div>
  )
}
