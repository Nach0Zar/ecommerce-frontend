import React from 'react';
import ItemCount from './itemCount';

const Item = (props) => {
    var articulo = props.articulo;
    return (
        <div className="itemDiv itemRecomendado">
            <img src= {articulo.imgSrc} alt=""/>
            <hr/>
            <span>${articulo.precio}</span>
            <ItemCount stock = {Math.floor(Math.random() * 100) + 1} cantidad = {1}/>
        </div>
    )
}

export default Item