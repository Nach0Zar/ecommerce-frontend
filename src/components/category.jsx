import React from 'react';
import { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import categoriasJSON from '../json/categories.json';
import articulosJSON from '../json/catalogo.json';
import { Category, Articulo } from './classes';
import ItemListed from './itemListed';
import { Link } from 'react-router-dom';


const CategoryItems = () => {
const [itemsCategory, setItemsCategory] = useState([]);
var {categoryId} = useParams();
(categoryId===undefined) && (categoryId = -1);


useEffect(() => {
  
    const getCategory = async () => {
      // por si decido utilizar API de ML para items y categorias
      // const URL = "https://api.mercadolibre.com/categories/MLA86379"/*+categoryId*/;
      // return await fetch(categoriasJSON).then((response)=>response.json());
      var categoriaSeleccionada;
      categoriasJSON.forEach((categoria)=>{
        (categoryId === categoria.idCategoria) && (categoriaSeleccionada = new Category(categoria.idCategoria, categoria.nombreCategoria))
      })
      return categoriaSeleccionada;
  }
  const crearArticulosByCategory = async (categoria) => {
    var articulosLista = [];
    articulosJSON.forEach((articulo)=>{
      if(articulo.categorias.includes(categoria.idCategoria)){
        let {nombreArticulo, descripcion ,precio, imgSrc, categorias} = articulo;
        const articuloObjeto = new Articulo (nombreArticulo, descripcion, precio, imgSrc, categorias, 0, 0)
        articulosLista.push(articuloObjeto);
      }
    })
    return articulosLista;
  }
  const crearTodosLosArticulos = async () => {
    var articulosLista = [];
    articulosJSON.forEach((articulo)=>{
      let {nombreArticulo, descripcion ,precio, imgSrc, categorias} = articulo;
      const articuloObjeto = new Articulo (nombreArticulo, descripcion, precio, imgSrc, categorias, 0, 0)
      articulosLista.push(articuloObjeto);
    })
    return articulosLista;
  }
    const getCategoryByID = new Promise((resolve,reject) => {

      if(categoryId>-1){
        resolve(getCategory());
      }
      else{
        reject(crearTodosLosArticulos())
      }
      
    })

    getCategoryByID.then((data)=> {
      const getItemsByCategoryID = new Promise((resolve) => {
        resolve(crearArticulosByCategory(data));
      });
      getItemsByCategoryID.then((data)=> {setItemsCategory(data)})
      .catch((err)=>console.log(err));
    
    }).catch((data)=>{
      data.then((result)=>setItemsCategory(result))
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
                  <div className="subCategoria"><span><Link className="noDecoration" to="/CoderhouseReact/category/0" onClick={() => {window.location.href="/CoderhouseReact/category/0"}}>Cosmeticos</Link></span></div>
                  <div className="subCategoria"><span><Link className="noDecoration" to="/CoderhouseReact/category/1" onClick={() => {window.location.href="/CoderhouseReact/category/1"}}>Electrónica</Link></span></div>
                  <div className="subCategoria"><span><Link className="noDecoration" to="/CoderhouseReact/category/2" onClick={() => {window.location.href="/CoderhouseReact/category/2"}}>Alimentos</Link></span></div>
                  <div className="subCategoria"><span><Link className="noDecoration" to="/CoderhouseReact/category/3" onClick={() => {window.location.href="/CoderhouseReact/category/3"}}>Escolares</Link></span></div>
                  <div className="subCategoria"><span><Link className="noDecoration" to="/CoderhouseReact/category/4" onClick={() => {window.location.href="/CoderhouseReact/category/4"}}>Domestico</Link></span></div>
              </div>
          </div>
          <div id="listaDeObjetos">
          { itemsCategory.map((item) => (
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

export default CategoryItems