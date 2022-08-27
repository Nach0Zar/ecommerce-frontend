import './App.css';
import NavBar from './components/navBar';
import ItemListContainer from './components/itemListContainer';
import Footer from './components/footer';
import Slider from './components/slider';

function App() {
  return (
    <div className="App">
      <header id="headerIndex">
        <NavBar/>
        <div id="containerTitulos">
                  <h1>Zona Compra E-Commerce</h1>
                  <h2>E-Commerce dedicado a sudamerica</h2>
                  <label for="busqueda">
                      <input type="search" id="busqueda" placeholder="Buscar elementos en el catalogo"/>
                      <button type="button" class="btn btn-outline-dark">Buscar</button>
                  </label>
              </div>
          <hr/>
        </header>
        <Slider/>
        <ItemListContainer/>
        <Footer/>
    </div>
  );
}

export default App;
