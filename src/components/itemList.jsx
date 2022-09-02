import React from 'react'
import Item from './item';
import { useState, useEffect } from 'react';
import { Articulo } from './classes';
import articulosJSON from '../json/catalogo.json';

const ItemList = () => {

    const [items, setItems] = useState([]);

    const crearArticulos = async () => {
        var articulosLista = [];
        articulosJSON.forEach(articulo => {
            let {nombreArticulo, descripcion ,precio, imgSrc} = articulo;
            const articuloObjeto = new Articulo (nombreArticulo, descripcion, precio, imgSrc, 1, 0)
            articulosLista.push(articuloObjeto);
        });
        return articulosLista;
    }
    
    useEffect(() => {

        const promise = new Promise((resolve) => {
            setTimeout(() => {
                resolve(crearArticulos())
            }, 2000);
        })

        promise.then((data)=>{ setItems(data)}).catch((err)=>console.log(err));
    }, []);

  return (
    <div id="recomendados">
        {items.map((item) => (
            <Item key={item.id} articulo={item}/>
        ))
        }
    </div>
  )
}

export default ItemList