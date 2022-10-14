import React from 'react'
import { Link } from 'react-router-dom';
import carritoImg from '../../images/carrito.svg';
import { useCart } from '../cart/CartContext';
import { useState, useEffect } from 'react';

const Carrito = () => {
  const { articulos } = useCart();

  const [cantidadTotalItems, setCantidadTotalItems] = useState(0);

  useEffect(() => {
    var cantidadItemsTotales = 0;
    articulos.forEach(articulo => {
      cantidadItemsTotales += articulo.cantidad;
    });
    setCantidadTotalItems(cantidadItemsTotales);
  }, [articulos])
  return (
    <Link className="nav-link text-white" to={"/CoderhouseReact/cart"}>
      <div id="cantidadItemsCarritoWidget"><span>{cantidadTotalItems}</span></div>
      <img id="carrito" src={carritoImg} alt=""/>
    </Link>
  )
}

export default Carrito