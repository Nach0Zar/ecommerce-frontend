import Footer from './components/main/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/home/Home';
import Catalog from './components/catalog/Catalog';
import ItemPage from './components/itemPage/ItemPage';
import CategoryItems from './components/category/Category';
import Cart from './components/cart/Cart';
import Header from './components/main/Header';
import { CartProvider } from './components/cart/CartContext';
import { useState } from 'react';
import LoadingComponent from './components/main/LoadingComponent';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  //aqui se puede implementar un await a que haga un fetch de información, pero como son archivos locales la consulta se hace casi instantánea, por lo que casi 
  //no se llega a observar el loading component, por lo que decidi darle 2 segundos en el primer render para poder observarlo
  setTimeout(() => {
    setIsLoading(false)
}, 2000);

if(isLoading){ 
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
