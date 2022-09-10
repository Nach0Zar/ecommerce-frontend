import React from 'react';
import { useContext, useState } from 'react';
import { obtenerItemPorID } from '../imports/functions';

const CartContext = React.createContext([]);

  const useCart = () => {
    return useContext(CartContext);
  }

  const CartProvider = ({defaultValue = [], children}) => {
    const [articulos, setArticulos] = useState(defaultValue);
    
    const addItem = async (item, quantity) => {
      if(!isInCart(item)){
        await obtenerItemPorID(item).then(
          (articuloObtenido) => {
            if(quantity <= articuloObtenido.stock){
              articuloObtenido.cantidad += quantity;
            }
            setArticulos(prevState => {
              return prevState.concat(articuloObtenido);
            })
          }

        );
        
      }

      else{
        articulos.forEach(articulo => {
          if(articulo.id === item ){
            if(quantity <= articulo.stock){
              articulo.cantidad += quantity;
            }
          }
        });
      }
    }

    const clearItems = () => {
      setArticulos([]);
    }

    const isInCart = (item) => {
      let foundInCart = false;
      articulos.forEach(articulo => {
        if(articulo.id === item ){
          foundInCart = true;
        }
      });
      return foundInCart;
    }

    const removeItem = (item) => {
      let indiceArticulo = -1;
      articulos.forEach(function callback(value, index) {
        if(value.id === item ){
          indiceArticulo = index
        }
      });
      if (indiceArticulo !== -1){
        articulos.splice(indiceArticulo,1);
      }
    }

    const setItemQuantity = (item, quantity) => {
      articulos.forEach(articulo => {
        if(articulo.id === item && quantity <= articulo.stock){
          articulo.cantidad = quantity;
        }
      }
      );
    }


    const context = {
      articulos,
      addItem,
      clearItems,
      removeItem
    }
    
  return (
    <CartContext.Provider value={context}>
      {children}
    </CartContext.Provider>
  )

}
export {useCart, CartProvider}