import React from 'react';
import { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import articulosJSON from '../json/catalogo.json';
import categoriasJSON from '../json/categories.json';
import { Category, Articulo } from './classes';

const ItemPage = () => {
var {itemId} = useParams();
console.log(itemId);
const [articuloCapturado, setArticuloCapturado] = useState([]);
const [categoriaItem, setCategoriaItem] = useState([]);
let texto, estilo;
let idStlye;
useEffect(() => {
  const getCategory = async (articulo) => {
    var categoriaSeleccionada;
    categoriasJSON.forEach((categoria)=>{
      console.log(articulo.categorias.includes(1))
      console.log(articulo.categorias + " includes "+ categoria.idCategoria +" = " +articulo.categorias.includes(categoria.idCategoria))
      (articulo.categorias.includes(categoria.idCategoria)) && (categoriaSeleccionada = new Category(categoria.idCategoria, categoria.nombreCategoria))
    })
    return categoriaSeleccionada;
}
  const getItem = async () => {
    var itemSeleccionado;
    articulosJSON.forEach((articulo)=>{
      if(parseInt(itemId) === articulo.id){
        (itemSeleccionado = new Articulo(articulo.nombreArticulo, articulo.descripcion, articulo.precio, articulo.imgSrc, articulo.categorias, 0 , articulo.id))
      }
    })
    return itemSeleccionado;
  }

  const getItemByID = new Promise((resolve) => {
      resolve(getItem());
  })

  getItemByID.then((data)=> {
    setArticuloCapturado(data);
    const getCategoryByID = new Promise((resolve) => {
      resolve(getCategory(data));
    });
    getCategoryByID.then((data)=> {setCategoriaItem(data)})
    .catch((err)=>console.log(err));
  
  }).catch((err)=>{
    alert("Item no encontrado. " + err)
    });
  
  if(!articuloCapturado.agregado){
    texto = "Agregar Articulo";
      estilo = "btn btn-outline-dark botonAgregarCarrito";
  }
  else {
      texto = "Articulo Añadido"; 
      estilo = "btn btn-dark botonAgregarCarrito";
  }
  idStlye = "boton"+articuloCapturado.id;  
  }, []);
  
  return (
    <main>
      <div className="container">
        <div className='elemento'>
          <div className="containerImagen">
              <img src={articuloCapturado.imgSrc} alt=""/>
          </div>
          <div className="containerTextosBoton">
              <div className="containerTextosElementos">
                  <div className="tituloprecio">
                      <h4 className="nombreElemento">{articuloCapturado.nombreArticulo}</h4>
                      <h5 className="precioElemento">${articuloCapturado.precio}</h5>
                  </div>
                  <p className="descripcionElemento">{articuloCapturado.descripcion}</p>
              </div>
              <div className="containerBotonElemento">
                  <button type="button" className={estilo} id={idStlye}>{texto}</button>
              </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default ItemPage