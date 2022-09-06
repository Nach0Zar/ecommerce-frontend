import React from 'react'
import { Link } from 'react-router-dom';
import carritoImg from '../../images/carrito.svg'

const Carrito = () => {
  return (
    <Link className="nav-link text-white" to={"/CoderhouseReact/cart"}><img id="carrito" src={carritoImg} alt=""/></Link>
  )
}

export default Carrito