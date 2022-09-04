import React from 'react';
import { useState, useEffect} from 'react';
import articulosJSON from '../json/catalogo.json';
import { Articulo } from './classes';
import ItemListed from './itemListed';
import { Link } from 'react-router-dom';

const Catalog = () => {
  const [items, setItems] = useState([]);
  
  
  useEffect(() => {

    const crearTodosLosArticulos = async () => {
      var articulosLista = [];
      articulosJSON.forEach((articulo)=>{
        let {id, nombreArticulo, descripcion ,precio, imgSrc, categorias} = articulo;
        const articuloObjeto = new Articulo (nombreArticulo, descripcion, precio, imgSrc, categorias, 0, id)
        articulosLista.push(articuloObjeto);
      })
      return articulosLista;
    }
      const getItems = new Promise((resolve) => {
          resolve(crearTodosLosArticulos());
      })
  
      getItems.then((data)=> {
        setItems(data);
      }).catch((data)=>{
        data.then((result)=>setItems(result))
        });
      }, []);
  
    return (
      <main>
        <div id="catalogo">
            <div id="barraLateral">
                <div className="categoria">
                    <span>Descuentos</span>
                    <div className="subCategoria"><span>5% OFF</span></div>
                    <div className="subCategoria"><span>10% OFF</span></div>
                    <div className="subCategoria"><span>15% OFF</span></div>
                </div>
                <br/>
                <div className="categoria">
                    <span>Ubicacion</span>
                    <div className="subCategoria"><span>Argentina</span></div>
                    <div className="subCategoria"><span>Brasil</span></div>
                    <div className="subCategoria"><span>Chile</span></div>
                    <div className="subCategoria"><span>Colombia</span></div>
                </div>
                <br/>
                <div className="categoria">
                    <span>Condicion</span>
                    <div className="subCategoria"><span>Nuevo</span></div>
                    <div className="subCategoria"><span>Usado</span></div>
                </div>
                <br/>
                <div className="categoria">
                    <span>Tipo</span>
                    <div className="subCategoria"><span><Link className="noDecoration" to="/CoderhouseReact/category/0">Cosmeticos</Link></span></div>
                    <div className="subCategoria"><span><Link className="noDecoration" to="/CoderhouseReact/category/1">Electrónica</Link></span></div>
                    <div className="subCategoria"><span><Link className="noDecoration" to="/CoderhouseReact/category/2">Alimentos</Link></span></div>
                    <div className="subCategoria"><span><Link className="noDecoration" to="/CoderhouseReact/category/3">Escolares</Link></span></div>
                    <div className="subCategoria"><span><Link className="noDecoration" to="/CoderhouseReact/category/4">Domestico</Link></span></div>
                </div>
            </div>
            <div id="listaDeObjetos">
            { items.map((item) => (
                <div>
                  <ItemListed key={item.id} articulo={item}/>
                  <br/>
                </div>
            ))
            }
            </div>
        </div>
      </main>
  )
}

export default Catalog