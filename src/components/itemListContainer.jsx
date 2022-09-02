import React from 'react';
import ItemList from './itemList';

const ItemListContainer = () => { 
  return (
    <div>
        <div id="recomendadosContainer">
            <hr/>
            <h2>Recomendados</h2>
            <div id="recomendados">
                <ItemList/>
            </div>
        </div>
        <br/>
        <hr/>
    </div>
  )
}

export default ItemListContainer