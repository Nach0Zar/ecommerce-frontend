import React from 'react';
import ItemCount from './itemCount';

const ItemRecommended = (props) => {
    var articulo = props.articulo;
    return (
        <div className="itemDiv itemRecomendado">
            <a href="/" id="noDecoration" >
                <img src= {articulo.imgSrc} alt=""/>
            </a>
            <hr/>
            <span>${articulo.precio}</span>
            <ItemCount stock = {Math.floor(Math.random() * 100) + 1} cantidad = {1}/>
        </div>
    )
}

export default ItemRecommended