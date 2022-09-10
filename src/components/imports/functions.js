import { Articulo, Categoria } from "./classes";
import categoriasJSON from '../../json/categories.json';
import articulosJSON from '../../json/catalogo.json';

function crearArticulo(articulo){
  let {id, nombreArticulo, descripcion ,precio, imgSrc, categorias, stock} = articulo;
  const articuloObjeto = new Articulo (id, nombreArticulo, descripcion, precio, imgSrc, categorias, 1, stock)
  return articuloObjeto
}

export const obtenerCategoriasPorArticulo = async (articulo) => {
    var categoriasSeleccionadas = [];
    categoriasJSON.forEach((categoria)=>{
      (articulo.categorias.includes(categoria.idCategoria)) && (categoriasSeleccionadas.push(new Categoria(categoria.idCategoria, categoria.nombreCategoria)));
    })
    return categoriasSeleccionadas;
}

export const obtenerItemPorID = async (itemId) => {
  var itemSeleccionado;
  articulosJSON.forEach((articulo)=>{
    if(parseInt(itemId) === articulo.id){
      (itemSeleccionado = crearArticulo(articulo))
    }
  })
  return itemSeleccionado;
}

export const obtenerCategoriaPorID = async (categoryId) => {
  // por si decido utilizar API de ML para items y categorias
  // const URL = "https://api.mercadolibre.com/categories/MLA86379"/*+categoryId*/;
  // return await fetch(categoriasJSON).then((response)=>response.json());
  var categoriasSeleccionada = [];
  categoriasJSON.forEach((categoria)=>{
    if (parseInt(categoryId) === categoria.idCategoria) {
      categoriasSeleccionada.push(new Categoria(categoria.idCategoria, categoria.nombreCategoria))
      }
  })
  return categoriasSeleccionada;
}

export const obtenerItemsPorCategoria = async (categoria) => {
  var articulosLista = [];
  articulosJSON.forEach((articulo)=>{
    if(articulo.categorias.includes(categoria[0].idCategoria)){
      const articuloObjeto = crearArticulo(articulo);
      articulosLista.push(articuloObjeto);
    }
  })
  return articulosLista;
}

const obtenerTodosLosArticulos = async () => {
  var articulosLista = [];
  articulosJSON.forEach((articulo)=>{
    const articuloObjeto = crearArticulo(articulo);
    articulosLista.push(articuloObjeto);
  })
  return articulosLista;
}

export const obtenerArticulos = async (cantidad = 0) => {
  //esta funcion a futuro como default va a tomar el valor default de la cantidad total de 
  //articulos creados y la funcion funcionará igual que obtenerTodosLosArticulos
  var articulosListaRecomendados = [];
  if(cantidad === 0){
    return obtenerTodosLosArticulos();
  }
  else{
    for(var index = 0; index<cantidad; index++ ){
    var articulo = articulosJSON[index];
    const articuloObjeto = crearArticulo(articulo)
    articulosListaRecomendados.push(articuloObjeto);
  }

  }
  
  return articulosListaRecomendados;
}