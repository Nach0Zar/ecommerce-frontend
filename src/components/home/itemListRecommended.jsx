import React from 'react'
import ItemRecommended from './itemRecommended';
import { useState, useEffect } from 'react';
import { obtenerArticulos } from '../imports/functions';

const ItemListRecommended = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {

        const promise = new Promise((resolve) => {
            setTimeout(() => {
                resolve(obtenerArticulos(4))
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