import React from 'react'

const ItemListed = (props) => {
    var articulo = props.articulo;
    let texto, estilo;
    if(!articulo.agregado){
        texto = "Agregar Articulo";
         estilo = "btn btn-outline-dark botonAgregarCarrito";
    }
    else {
        texto = "Articulo Añadido"; 
        estilo = "btn btn-dark botonAgregarCarrito";
    }
    var idStlye = "boton"+articulo.id;
  return (
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
            <div className="containerBotonElemento">
                <button type="button" className={estilo} id={idStlye}>{texto}</button>
            </div>
        </div>
    </div>
  )
}

export default ItemListed