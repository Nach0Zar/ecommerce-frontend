import React from 'react';
import { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { obtenerCategoriasPorArticulo, obtenerItemPorID } from '../imports/functions';

const ItemPage = () => {
var {itemId} = useParams();
const [articuloCapturado, setArticuloCapturado] = useState([]);
const [categoriasItem, setCategoriasItem] = useState([]);
const [texto, setTexto] = useState("");
const [estilo, setEstilo] = useState("");
const idStlye = "boton"+itemId;
useEffect(() => {

  const getItemByID = new Promise((resolve) => {
      resolve(obtenerItemPorID(itemId));
  })

  getItemByID.then((data)=> {
    setArticuloCapturado(data);
    if(data.agregado === false){
      setTexto("Agregar Articulo");
      setEstilo("btn btn-outline-dark botonAgregarCarrito");
    }
    else {
      setTexto("Articulo Añadido");
      setEstilo("btn btn-dark botonAgregarCarrito");
    }
    
    const getCategoryByID = new Promise((resolve) => {
      resolve(obtenerCategoriasPorArticulo(data));
    });
    getCategoryByID.then((data)=> {setCategoriasItem(data)})
    
    .catch((err)=>console.log(err));
      
  }).catch((err)=>{
    alert("Item no encontrado. " + err)
    });
  
  }, [itemId]);
  
useEffect(() => {
  const actualizarBoton = () => {
    if(articuloCapturado.agregado === false){
      setTexto("Agregar Articulo");
      setEstilo("btn btn-outline-dark botonAgregarCarrito");
    }
    else {
      setTexto("Articulo Añadido");
      setEstilo("btn btn-dark botonAgregarCarrito");
    }
  }
  actualizarBoton();
},[texto, articuloCapturado])
  

const cambiarEstadoArticuloEnCarrito = (event) => {
  event.preventDefault();
  articuloCapturado.cambiarEstado();
  if(articuloCapturado.agregado === false){
    setTexto("Agregar Articulo");
    setEstilo("btn btn-outline-dark botonAgregarCarrito");
  }
  else {
    setTexto("Articulo Añadido");
    setEstilo("btn btn-dark botonAgregarCarrito");
  }
}


  return (
    <main>
      <div className="container">
        <div className="elemento">
          <div className="containerImagenPaginaDetalle">
              <img src={articuloCapturado.imgSrc} alt=""/>
          </div>
          <div className="containerTextosBotonPaginaDetalle">
              <div className="containerTextosElementos">
                  <div className="areaPaginaDetalle">
                    <div id="columnaPaginaDetalle">
                      <h4 className="nombreElemento">{articuloCapturado.nombreArticulo}</h4>
                      <p className="descripcionElemento">{articuloCapturado.descripcion}</p>
                    </div>
                    <div id="informacionVariada">
                      <h5 className="precioElemento">${articuloCapturado.precio}</h5>
                      <div className="containerBotonElemento">
                        <button type="button" onClick={cambiarEstadoArticuloEnCarrito} className={estilo} id={idStlye}>{texto}</button>
                      </div>
                      <h5 className="precioElemento">Categorías</h5>
                      <div className="categorias">
                        {categoriasItem.map((categoria) => (
                        <p className="descripcionElemento">{categoria.nombreCategoria}</p>
                          ))
                          }
                      </div>
                    </div>
                  </div>
              </div>
              
          </div>
        </div>
      </div>
    </main>
  )
}

export default ItemPage