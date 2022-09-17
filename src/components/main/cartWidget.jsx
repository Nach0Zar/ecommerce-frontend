import React from 'react'
import { Link } from 'react-router-dom';
import carritoImg from '../../images/carrito.svg';
import { useCart } from '../cart/CartContext';

const Carrito = () => {
  const { articulos } = useCart();
  return (
    <Link className="nav-link text-white" to={"/CoderhouseReact/cart"}>
      <div id="cantidadItemsCarritoWidget"><span>{articulos.length}</span></div>
      <img id="carrito" src={carritoImg} alt=""/>
    </Link>
  )
}

export default Carrito