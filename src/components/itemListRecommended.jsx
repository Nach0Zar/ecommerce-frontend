import React from 'react'
import ItemRecommended from './itemRecommended';
import { useState, useEffect } from 'react';
import { Articulo } from './classes';
import articulosJSON from '../json/catalogo.json';

const ItemListRecommended = () => {

    const [items, setItems] = useState([]);

    const crearArticulos = async () => {
        var articulosListaRecomendados = [];
        for(var index = 0; index<4; index++ ){
            var articulo = articulosJSON[index];
            let {id, nombreArticulo, descripcion ,precio, imgSrc, categorias} = articulo;
            const articuloObjeto = new Articulo (nombreArticulo, descripcion, precio, imgSrc, categorias, 0 , id)
            articulosListaRecomendados.push(articuloObjeto);
        }
        return articulosListaRecomendados;
    }
    
    useEffect(() => {

        const promise = new Promise((resolve) => {
            setTimeout(() => {
                resolve(crearArticulos())
            }, 2000);
        })

        promise.then((data)=>{setItems(data)}).catch((err)=>console.log(err));
    }, []);

  return (
    <div id="recomendados">
        {items.map((item) => (
            <ItemRecommended key={item.id} articulo={item}/>
        ))
        }
    </div>
  )
}

export default ItemListRecommended