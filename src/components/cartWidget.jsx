import React from 'react'
import carritoImg from '../images/carrito.svg'

const Carrito = () => {
  return (
    <a className="nav-link text-white" href="index.html"><img id="carrito" src={carritoImg} alt=""/></a>
  )
}

export default Carrito