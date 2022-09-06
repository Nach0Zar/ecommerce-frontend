import React from 'react'
import { NavLink } from 'react-router-dom';
import Carrito from './cartWidget';

const NavBar = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to={"/CoderhouseReact/"}>Zona Compra</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse bg-dark" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item navLink"><NavLink className="nav-link text-white" to={"/CoderhouseReact/"}>Inicio</NavLink></li>
            <li className="nav-item navLink"><NavLink className="nav-link text-white" to={"/CoderhouseReact/catalog/"}>Mercado</NavLink></li>
            <li className="nav-item navLink"><NavLink className="nav-link text-white" to={"/CoderhouseReact/"}>FAQs</NavLink></li>
            <li className="nav-item navLink"><NavLink className="nav-link text-white" to={"/CoderhouseReact/"}>Loguearse</NavLink></li>
            <li className="nav-item navLink"><NavLink className="nav-link text-white" to={"/CoderhouseReact/"}>Registrarse</NavLink></li>
            <li className="nav-item navLink"><NavLink className="nav-link text-white" to={"/CoderhouseReact/"}>Acerca de nosotros</NavLink></li>
          </ul>
        </div>
        <Carrito/>
      </div>
    </nav>
  )
}

export default NavBar