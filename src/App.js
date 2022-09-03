import Footer from './components/footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/home';
import Catalog from './components/catalog';
import ItemPage from './components/itemPage';
import CategoryItems from './components/category';
import Cart from './components/cart';
import Header from './components/header';

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
