import React from 'react'
import { Link } from 'react-router-dom';
import carritoImg from '../../images/carrito.svg';
import { useCart } from '../cart/CartContext';
import { useState, useEffect } from 'react';

const Carrito = () => {
  const { articulos } = useCart();

  const [cantidadTotalItems, setCantidadTotalItems] = useState(0);

  useEffect(() => {
    console.log(articulos);
    var cantidadItemsTotales = 0;
    articulos.forEach(articulo => {
      cantidadItemsTotales += articulo.cantidad;
    });
    setCantidadTotalItems(cantidadItemsTotales);
  }, [JSON.stringify(articulos)])
  //Hice un stringify de articulos para poder obtener los cambios hechos en las cantidades de cada uno de los articulos y al mismo tiempo capturar el cambio de
  //length en el listado de items

  return (
    <Link className="nav-link text-white" to={"/CoderhouseReact/cart"}>
      <div id="cantidadItemsCarritoWidget"><span>{cantidadTotalItems}</span></div>
      <img id="carrito" src={carritoImg} alt=""/>
    </Link>
  )
}

export default Carrito