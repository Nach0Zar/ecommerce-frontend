import React from 'react';
import { Categoria } from "../imports/classes";
import { useContext, useState } from 'react';
import { collection, getDocs, getFirestore, getDoc, doc } from "firebase/firestore";

const CategoriasContext = React.createContext([]);

  const useCategorias = () => {
    return useContext(CategoriasContext);
  }

  const CategoriasProvider = ({defaultValue = [], children}) => {
  const [categoriasListadoDB, setCategoriasListadoDB] = useState(defaultValue);
  const [categoriasLoaded, setCategoriasLoaded] = useState(false);
  

  //carga todas las categorias a la variable categoriasListadoDB para tenerlos de facil acceso en memoria
  const cargarCategorias = async () => {
    const db = getFirestore();
    var listadoDB = [];
    const categoriasRef = collection(db, "categorias");
    await getDocs(categoriasRef).then((categoria)=>{
        listadoDB = categoria.docs.map((doc)=>({idCategoria: doc.idCategoria, ...doc.data()}))
    })
    var categoriasListado = await obtenerTodasLasCategorias(listadoDB);
    setCategoriasLoaded(true);
    setCategoriasListadoDB(categoriasListado);
  }

  //genera la categoría luego de consultar a la DB en base a su ID
  const obtenerCategoriaPorID = async (categoryId) => {
    const db = getFirestore();
    var listadoDB;
    const categoriaRef = doc(db, "categorias", categoryId);
    await getDoc(categoriaRef).then((categoria)=>{
      listadoDB = {idCategoria: categoria.idCategoria, ...categoria.data()}
    })
    var categoriaCreada= new Categoria(listadoDB.idCategoria, listadoDB.nombreCategoria);
    return categoriaCreada;
  }

  //genera un listado de categorias en base a los IDs de categorias de un articulo buscandolas en el array de categorias que se consulta al inicio
  const obtenerCategoriasPorArticulo = async (articulo) => {
    var categoriasSeleccionadas = [];
    categoriasListadoDB.forEach((categoria)=>{
      (articulo.categorias.includes(categoria.idCategoria)) && (categoriasSeleccionadas.push(new Categoria(categoria.idCategoria, categoria.nombreCategoria)));
    })
    return categoriasSeleccionadas;
  }

  //genera las categorias del listado en base a la respuesta de la consulta hacia la DB
  const obtenerTodasLasCategorias = async (listadoDB) => {
    var categoriasLista = [];
    listadoDB.forEach((categoria)=>{
      categoriasLista.push(new Categoria(categoria.idCategoria, categoria.nombreCategoria));
    })
    return categoriasLista;
  }
  const context = {
    categoriasLoaded,
    categoriasListadoDB,
    cargarCategorias,
    obtenerCategoriaPorID,
    obtenerCategoriasPorArticulo
  }
    
  return (
    <CategoriasContext.Provider value={context}>
      {children}
    </CategoriasContext.Provider>
  )

}
export {useCategorias, CategoriasProvider}