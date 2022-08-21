import React from 'react'
import Carrito from './cartWidget';

const NavBar = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="index.html">Zona Compra</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse bg-dark" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item navLink"><a className="nav-link text-white" href="index.html">Inicio</a></li>
            <li className="nav-item navLink"><a className="nav-link text-white" href="index.html">Mercado</a></li>
            <li className="nav-item navLink"><a className="nav-link text-white" href="index.html">FAQs</a></li>
            <li className="nav-item navLink"><a className="nav-link text-white" href="index.html">Loguearse</a></li>
            <li className="nav-item navLink"><a className="nav-link text-white" href="index.html">Registrarse</a></li>
            <li className="nav-item navLink"><a className="nav-link text-white" href="index.html">Acerca de nosotros</a></li>
          </ul>
        </div>
        <Carrito/>
      </div>
    </nav>
  )
}

export default NavBar