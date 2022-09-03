import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from './header';
import categoriasJSON from '../json/categories.json';
import articulosJSON from '../json/catalogo.json';
import { Category, Articulo } from './classes';
import ItemRecommended from './itemRecommended';

const CategoryItems = () => {
const [itemsCategory, setItemsCategory] = useState([]);
var {categoryId} = useParams();
(categoryId===undefined) && (categoryId = -1);

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
  
  console.log(itemsCategory);
  return (
    <div className="CategoryHome">
      <Header/>
      <div id="recomendadosContainer">
        <div id="recomendados">
        { itemsCategory.map((item) => (
              <ItemRecommended key={item.id} articulo={item}/>
          ))
          }
        </div>
      </div>
    </div>
  )
}

export default CategoryItems