import React from 'react'

const ItemListadoOrder = (props) => {
    const item = props.item;
  return (
    <div className='containerCantidadOrder'>
          <h6>
            {item.nombreItem}
          </h6>
          <h6>
            x{item.cantidadItem}
          </h6>
      </div>
  )
}

export default ItemListadoOrder