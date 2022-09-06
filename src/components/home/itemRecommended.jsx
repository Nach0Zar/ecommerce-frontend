import React from 'react';
import ItemCount from './itemCount';
import { Link } from 'react-router-dom';

const ItemRecommended = (props) => {
    var articulo = props.articulo;
    const URLPage = "/CoderhouseReact/ItemPage/"+articulo.id;
    return (
        <div className="itemDiv itemRecomendado">
            <Link to={URLPage} className="noDecoration" >
                <img src= {articulo.imgSrc} alt=""/>
            </Link>
            <hr/>
            <span>${articulo.precio}</span>
            <ItemCount stock = {Math.floor(Math.random() * 100) + 1} cantidad = {1}/>
        </div>
    )
}

export default ItemRecommended