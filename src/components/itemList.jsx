import React from 'react'
import Item from './item';
import { useState, useEffect } from 'react';
import { Articulo } from './classes';
import articulos from '../json/catalogo.json';

const ItemList = () => {
    const [items, setItems] = useState([]);
    function crearArticulos(articulosLista){
        for(const articulo of JSON.parse(sessionStorage.getItem('json'))){
            let {nombreArticulo, descripcion ,precio, imgSrc} = articulo;
            const articuloObjeto = new Articulo (nombreArticulo, descripcion, precio, imgSrc, 1, 0)
            articulosLista.push(articuloObjeto);
        }
        return articulosLista;
    }
    useEffect(() => {
        sessionStorage.setItem('json',JSON.stringify(articulos.articulos));//esto lo implemento para más adelante tambien tener en Session Storage el carrito de los items que tengo agregados
        var articulosLista = [];
        crearArticulos(articulosLista);
        setItems(articulosLista);
        console.log(articulosLista);
      }, []);
      
  return (
    <div id="recomendados">
        {items.map((item) => (
            <Item articulo={item}/>
        ))
        }
    </div>
  )
}

export default ItemList