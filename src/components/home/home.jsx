import React from 'react';
import ItemListContainerRecommended from './itemListContainerRecommended';
import Slider from './slider';

const Home = () => {
  return (
    <div className="inicio">
        <Slider/>
        <ItemListContainerRecommended/>
    </div>
  )
}

export default Home