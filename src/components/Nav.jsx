import {} from 'react'
import {Link} from 'react-router-dom'
import { EstiloNav } from '../css/Nav';

function Nav(){

  return(
    <>
    <EstiloNav>
    <header className="menu">
      <h2>Loja</h2>
      <nav className="navmenu">
        <ul>
          <Link to="/" className="tlink">Home</Link>
          <Link to="/exemplo1" className="tlink">Exemplo1</Link>
          <Link to="/conteudo" className="tlink">Conteúdo</Link>
          <Link to="/login" className="tlink">Login</Link>
        </ul>
      </nav>
    </header>
    </EstiloNav>
    </>
  )
}
export default Nav;