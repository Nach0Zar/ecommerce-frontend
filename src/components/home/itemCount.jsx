import React from 'react';
import { useState } from 'react';


const ItemCount = (props) => {
    const [counterItem, setCounterItem] = useState(props.cantidad);
    const handleAddItemOnClick = () => {
      (counterItem!==props.stock) ? setCounterItem(counterItem+1) : alert("No quedan unidades en stock disponible")
    }

    const handleSubstractItemOnClick = () => {
      (counterItem!==0) && (setCounterItem(counterItem-1));
    }
    const addToCartHandler = () => {
      if(!counterItem){
        console.log("tu item es 0");
      }
      else{
        console.log("agregaste " + counterItem);

      }
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