import React from 'react';
import { useState } from 'react';


const ItemCount = (props) => {
    const [counterItem, setCounterItem] = useState(props.cantidad);
  return (
    <div className="containerCantidadLanding">
        <div className="containerCantidadBotones2">
            <div className="input-group w-auto align-items-center">
                <input type="button" value="-" className="botonRestar" id="boton{id}" onClick={() => {(counterItem!==0) && (setCounterItem(counterItem-1))}}/>
                <div className="cantidadElemento">{counterItem}</div>
                <input type="button" value="+" className="botonAgregar" id="boton{id}" onClick={() => {(counterItem!==props.stock) ? setCounterItem(counterItem+1) : alert("No quedan unidades en stock disponible")}}/>
            </div>
        </div>
    </div>
  )
}

export default ItemCount