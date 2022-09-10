import React from 'react';
import { useState, useEffect } from 'react';
import { useCart } from '../cart/cartContext';


const ItemCount = (props) => {
  const itemId = props.id;
  const [counterItem, setCounterItem] = useState(1);
  const { addItem, removeItem} = useCart();
  const handleAddItemOnClick = () => {
    (counterItem!==props.stock) ? setCounterItem(counterItem+1) : alert("No quedan unidades en stock disponible")
  }

    const handleSubstractItemOnClick = () => {
      (counterItem>1) && (setCounterItem(counterItem-1));
    }
    const addToCartHandler = () => {
      addItem(itemId,counterItem);
    }

  return (
    <>
      <div className="containerCantidadLanding">
          <div className="containerCantidadBotones2">
              <div className="input-group w-auto align-items-center">
                  <input type="button" value="-" className="botonRestar" id="boton{id}" onClick={handleSubstractItemOnClick}/>
                  <div className="cantidadElemento">{counterItem}</div>
                  <input type="button" value="+" className="botonAgregar" id="boton{id}" onClick={handleAddItemOnClick}/>
              </div>
          </div>
      </div>
      <div className="containerCantidadLanding">
        <div className="containerCantidadBotones2">
          <div className="input-group w-auto align-items-center">
              <button type="button" className="btn btn-outline-dark" onClick={addToCartHandler}>Agregar al carrito</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ItemCount