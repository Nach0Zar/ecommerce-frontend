import React from 'react';
import ItemList from './itemList';

const ItemListContainer = () => { 
  return (
    <div>
        <div id="recomendadosContainer">
            <hr/>
            <h2>Recomendados</h2>
              <ItemList/>
        </div>
        <br/>
        <hr/>
    </div>
  )
}

export default ItemListContainer