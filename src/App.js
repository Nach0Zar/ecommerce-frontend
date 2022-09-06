import Footer from './components/main/footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/home/home';
import Catalog from './components/catalog/catalog';
import ItemPage from './components/itemPage/itemPage';
import CategoryItems from './components/category/category';
import Cart from './components/cart/cart';
import Header from './components/main/header';

function App() {
  return (
    <BrowserRouter>
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
  </BrowserRouter>
  );
}

export default App;
