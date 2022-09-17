import Footer from './components/main/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/home/Home';
import Catalog from './components/catalog/Catalog';
import ItemPage from './components/itemPage/ItemPage';
import CategoryItems from './components/category/Category';
import Cart from './components/cart/Cart';
import Header from './components/main/Header';
import { CartProvider } from './components/cart/CartContext';
import { useEffect } from 'react';
import LoadingComponent from './components/main/LoadingComponent';
import { useArticulos } from './components/listing/ItemsContext';
import { useCategorias } from './components/category/CategoryContext';

function App() {
  const { articulosLoaded, cargarArticulos } = useArticulos();
  const { categoriasLoaded, cargarCategorias } = useCategorias();

  useEffect(() => {
    if(!articulosLoaded){
      const promise = new Promise((resolve) => {
        resolve(cargarArticulos())
    })
    promise.then()
    .catch((err)=>console.log(err));
    }
    else{
      if(!categoriasLoaded){
        const promise = new Promise((resolve) => {
          resolve(cargarCategorias())
      })
      promise.then()
      .catch((err)=>console.log(err));
      }
    }
  }, [articulosLoaded, categoriasLoaded])

if(!articulosLoaded || !categoriasLoaded){ 
  return(<LoadingComponent />)} 
else
  return (
    <BrowserRouter>
    <CartProvider>
      <Header/>
      <Routes>
        <Route exact path="/" element={ <Home />} />
        <Route exact path="/CoderhouseReact/" element={ <Home />} />
        <Route exact path="/CoderhouseReact/catalog" element={ <Catalog />} />
        <Route path="/CoderhouseReact/itemPage/:itemId" element={ <ItemPage />} />
        <Route path="/CoderhouseReact/category" element={ <CategoryItems />}/>
        <Route path="/CoderhouseReact/category/:categoryId" element={ <CategoryItems />}/>
        <Route exact path="/CoderhouseReact/cart" element={ <Cart />}/>
      </Routes>
      <Footer/>
    </CartProvider>
  </BrowserRouter>
  );
}

export default App;
