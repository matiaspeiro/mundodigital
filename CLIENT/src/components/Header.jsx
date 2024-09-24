import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <>
     <div>
      <nav>
        <ul>
          <li>
            <Link to='/' >INICIO</Link>
          </li>
          <li>
            <Link to='/contacto'>ENVIOS</Link>
          </li>
          <li>
            <Link to='/About'>NOSOTROS</Link>
          </li>
        </ul>
      </nav>
    </div>
    </>
  )
}

export default Header