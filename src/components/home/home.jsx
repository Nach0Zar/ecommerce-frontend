import React from 'react';
import ItemListContainerRecommended from './ItemListContainerRecommended';
import Slider from './Slider';

const Home = () => {
  return (
    <div className="inicio">
        <Slider/>
        <ItemListContainerRecommended/>
    </div>
  )
}

export default Home