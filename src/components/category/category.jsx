import React from 'react';
import { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ItemListed from '../listing/itemListed';
import { Link } from 'react-router-dom';
import { obtenerCategoriaPorID, obtenerItemsPorCategoria, obtenerArticulos } from '../imports/functions';


const CategoryItems = () => {
const [itemsCategory, setItemsCategory] = useState([]);
var {categoryId} = useParams();
(categoryId===undefined) && (categoryId = -1);


useEffect(() => {
  
    const getCategoryByID = new Promise((resolve,reject) => {

      if(categoryId>-1){
        resolve(obtenerCategoriaPorID(categoryId));
      }
      else{
        reject(obtenerArticulos())
      }
      
    })

    getCategoryByID.then((data)=> {
      const getItemsByCategoryID = new Promise((resolve) => {
        resolve(obtenerItemsPorCategoria(data));
      });
      getItemsByCategoryID.then((data)=> {setItemsCategory(data)})
      .catch((err)=>console.log(err));
    
    }).catch((data)=>{
      data.then((result)=>setItemsCategory(result))
      });
    }, [categoryId]);

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