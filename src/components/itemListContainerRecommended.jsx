import React from 'react';
import ItemListRecommended from './itemListRecommended';

const ItemListContainerRecommended = () => { 
  return (
    <div>
        <div id="recomendadosContainer">
            <hr/>
            <h2>Recomendados</h2>
              <ItemListRecommended/>
        </div>
        <br/>
        <hr/>
    </div>
  )
}

export default ItemListContainerRecommended