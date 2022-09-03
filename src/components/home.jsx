import React from 'react';
import Header from './header';
import ItemListContainerRecommended from './itemListContainerRecommended';
import Slider from './slider';

const Home = () => {
  return (
    <div className="inicio">
        <Header/>
        <Slider/>
        <ItemListContainerRecommended/>
    </div>
  )
}

export default Home