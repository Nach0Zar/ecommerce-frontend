import React from 'react';
import { useCart } from './cartContext';
import { useState, useEffect } from 'react';

const CartItem = (props) => {
    let articulo = props.articulo;
    const [counterItem, setCounterItem] = useState(articulo.cantidad);
    const { setItemQuantity, removeItem } = useCart();
    
    const handleAddItemOnClick = () => {
        (counterItem < articulo.stock) ? setCounterItem(articulo.cantidad+1) : alert("No quedan unidades en stock disponible")
      }
    
    const handleSubstractItemOnClick = () => {
        if(counterItem>1) {
            setCounterItem(articulo.cantidad-1)};
    }
    const removeFromCartHandler = () => {
        removeItem(articulo.id);
      }
      useEffect(() => {
        setItemQuantity(articulo.id,counterItem);
      }, [counterItem,articulo.id])
      
      
    
  return (
    <div className="elementoCarrito" key={articulo.id}>
            <div className="containerImagen">
              <img src={articulo.imgSrc} alt=""/>
            </div>
            <div className="containerTextosBotonCarrito">
                <div className="containerTextos">
                    <div className="tituloPrecioCarrito">
                        <h4 className="nombreElemento">{articulo.nombreArticulo}</h4>
                        <h5 className="precioElemento">${articulo.precio}</h5>
                    </div>
                </div>
                <div className="containerBotones">
                    <div className="containerCantidad">
                        <div className="containerCantidadBotones">
                            <div className="input-group w-auto align-items-center">
                                <input type="button" value="-" className="botonRestar" onClick={handleSubstractItemOnClick}/>
                                <div className="cantidadElemento">{counterItem}</div>
                                <input type="button" value="+" className="botonAgregar" onClick={handleAddItemOnClick}/>
                            </div>
                        </div>
                    </div>   
                    <div className="containerBotonEliminar">
                        <div className="containerBoton">
                            <button type="button" className="btn btn-outline-dark botonEliminar" onClick={removeFromCartHandler}>Quitar Articulo</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default CartItem