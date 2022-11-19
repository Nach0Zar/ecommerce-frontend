import React from 'react';
import { useState, useEffect } from 'react';
import ModalConfirmarCompra from './ModalConfirmarCompra';
import { useCart } from './CartContext';
import CartItem from './CartItem';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  let navigate = useNavigate();
  const { articulos, costoSubTotal } = useCart();
  const [precioServicio, setPrecioServicio] = useState(0);
  const [costoTotal, setCostoTotal] = useState(0);
  const [estilo, setEstilo] = useState("btn btn-secondary disabled");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    useEffect(() => {
      (articulos.length > 0) ? setEstilo("btn btn-outline-dark") : setEstilo("btn btn-secondary disabled");
      let precioServicioCarrito = 750*articulos.length;
      setPrecioServicio(precioServicioCarrito);
      setCostoTotal(costoSubTotal+precioServicioCarrito);
  }, [articulos, costoSubTotal]);
    
  return (
    <div id="listado">
      <div id="listaCarrito">
      {
      articulos.length > 0 ?
        articulos.map((articulo)=>(
          <div key={articulo.id}>
            <CartItem  articulo={articulo}/>
            <br/>
          </div>
        ))
        
        :
        <div className="elementoCarrito">
          <div className="containerImagen">
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/f0/GHS-pictogram-unknown.svg" alt=""/>
          </div>
          <div className="containerTextosBotonCarrito">
            <div className="containerTextos">
              <h4 className="nombreElementoNoSeleccionado">No se selecciono ningun elemento</h4>
            </div>
            <div className="containerBoton">
              <div className='container'>
                <button type="button" className="btn btn-outline-dark botonEliminar" onClick={() => navigate("/ecommerce-frontend/")}>Volver al Home!</button>
              </div>
            </div>
          </div>
        </div>
      }
      </div>
      <div id="containerTicketBoton">
          <div id="resumenCarrito">
              <div id="listaRecibo">
                {
                  articulos.length > 0 ?
                  articulos.map((articulo)=>(
                    <div className='containerElementosResumen' key={articulo.id}>
                      <div className='nombreElementoTicket'>{articulo.nombreArticulo}</div>
                      <div className='precioMultiplicador'>
                        <div className='precioElementoTicket'>${articulo.precio}</div>
                        <div className='precioElementoTicket'>X{articulo.cantidad}</div>
                      </div>
                    </div>
                  ))
                  :
                  <div className='containerElementosResumen'>
                    <div className='nombreElementoTicket'>No hay items seleccionados</div>
                    <div className='precioElementoTicket'>$0</div>
                  </div>
                }
                <hr/>
                <div className='containerElementosResumen'>
                  <div className='nombreElementoTicket'>Sub-Total</div>
                  <div className='precioElementoTicket'>${costoSubTotal}</div>
                </div>
                <div className='containerElementosResumen'>
                  <div className='nombreElementoTicket'>
                    <div className='nombreElementoTicket'>Costo Servicio</div>
                    <div id="infoicon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-info-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                      </svg>
                    </div>
                    <div id="info">Por cada articulo agregado al carrito se sumará un importe de $750. No se sumará por cantidad del mismo artículo.</div>
                  </div>
                  <div className='precioElementoTicket'>${precioServicio}</div>
                </div>
                <hr/>
                <div className='containerElementosResumen'>
                  <div className='nombreElementoTicket'>TOTAL</div>
                  <div className='precioElementoTicket'>${costoTotal}</div>
                </div>
              </div>
          </div>
          <br/>
          <div id="containerBotonCompra">
            <div className="containerBoton">                        
              <button type="button" className={estilo} id="botonCompra" onClick={handleShow}>Realizar compra</button>
            </div>
            <ModalConfirmarCompra costoTotal={ (costoTotal)} show={show} onHide={handleClose}/>
          </div>
      </div>
    </div>
  )
}

export default Cart