import React from 'react'
import NavBar from './navBar'

const Header = () => {
  return (
    <header id="headerIndex">
      <NavBar/>
        <div id="containerTitulos">
          <h1>Zona Compra E-Commerce</h1>
          <h2>E-Commerce dedicado a sudamerica</h2>
          <label htmlFor="busqueda">
            <input type="search" id="busqueda" placeholder="Buscar elementos en el catalogo"/>
            <button type="button" className="btn btn-outline-dark">Buscar</button>
          </label>
        </div>
        <hr/>
    </header>
  )
}

export default Header