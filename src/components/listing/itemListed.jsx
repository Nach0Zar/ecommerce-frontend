import React from 'react';
import { Link } from 'react-router-dom';

const ItemListed = (props) => {
    var articulo = props.articulo;
    const URLPage = "/ecommerce-frontend/ItemPage/"+articulo.id;
     
  return (
    <Link to={URLPage} className="noDecoration">
        <div className='elemento'>
            <div className="containerImagen">
                <img src={articulo.imgSrc} alt=""/>
            </div>
            <div className="containerTextosBoton">
                <div className="containerTextosElementos">
                    <div className="tituloprecio">
                        <h4 className="nombreElemento">{articulo.nombreArticulo}</h4>
                        <h5 className="precioElemento">${articulo.precio}</h5>
                    </div>
                    <p className="descripcionElemento">{articulo.descripcion}</p>
                </div>
            </div>
        </div>
    </Link>
  )
}

export default ItemListed