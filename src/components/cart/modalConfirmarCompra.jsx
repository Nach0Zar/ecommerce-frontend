import React from 'react';
import { Modal } from "react-bootstrap";

const ModalConfirmarCompra = (props) => {
    const costoTotal = props.costoTotal;
    const show = props.show;
    const handleClose = props.onHide;

    function calcularCuotas(cuotas){
        return (costoTotal)/(cuotas);
    }

    const realizarCompra = () => {
        let inputElements = document.querySelectorAll("input");
        let cuotas;
        inputElements.forEach(function(input) {
            if(input.name === "cuotas" && input.checked){
                cuotas = input.value;
            }
        });
        alert("El valor total fue divido en "+ cuotas + " cuotas de $" + calcularCuotas(parseInt(cuotas)) + " cada una, ya que el valor total es de $" + costoTotal);
        handleClose();
    }
  return (
    <>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Realizar compra</Modal.Title>
        </Modal.Header>
        {/* {<form className="form-horizontal" method="POST" action="">} */}
            <Modal.Body>
            <div className="centered">
                <p>¿Estas a punto de finalizar tu compra, estás seguro de querer hacerlo?</p>
                <p>Confirmar que su información de contacto es la correcta. De no ser asi, modificarla desde su perfil.</p>
                    <div className="form-group">
                        <div className="input-group mb-1">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">@</span>
                            </div>
                        <input type="text" className="form-control" placeholder="Nombre de Usuario" name="username" default="username" readOnly="readOnly" defaultValue="nach0zar"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-group mb-1">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">Mail de contacto</span>
                            </div>
                        <input type="email" className="form-control" placeholder="Mail del usuario" name="email" default="email" readOnly="readOnly" defaultValue="ignaciozarlenga@hotmail.com"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-group mb-1">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">Nombre</span>
                            </div>
                        <input type="text" className="form-control" placeholder="Nombre del usuario" name="nombre" default="nombre" readOnly="readOnly" defaultValue="Ignacio"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">Apellido</span>
                            </div>
                        <input type="text" className="form-control" placeholder="Apellido del usuario" name="apellido" default="apellido" readOnly="readOnly" defaultValue="Zarlenga"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-group mb-1">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">Tarjeta del usuario</span>
                            </div>
                        <input type="number" className="form-control" maxLength="16" /*onInput="this.value=this.value.slice(0,this.maxLength)"*/ placeholder="XXXXXXXXXXXXXXXX" required/>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-group mb-1">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">Fecha de Vto.</span>
                            </div>
                            <input type="month" className="form-control" required/>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">Codigo de seguridad</span>
                            </div>
                            <input type="number" maxLength="4" /*onInput={this.value=this.value.slice(0,this.maxLength)}*/ className="form-control" placeholder="XXXX" required/>
                        </div>
                    </div>
                    <div className="form-group mb-3">
                        <div className="input-group mb-1">
                            <div className="input-group-text">
                                <input className="form-check-input mt-0" type="radio" name="cuotas" aria-label="Radio button for following text input" value="1" defaultChecked="checked"/>
                            </div>
                            <input type="text" className="form-control" aria-label="Text input with radio button" placeholder="1 Cuota sin interés" readOnly="readOnly" disabled/>
                        </div>
                        <div className="input-group mb-1">
                            <div className="input-group-text">
                                <input className="form-check-input mt-0" type="radio" name="cuotas" aria-label="Radio button for following text input" value="3"/>
                            </div>
                            <input type="text" className="form-control" aria-label="Text input with radio button" placeholder="3 Cuotas sin interés" readOnly="readOnly" disabled/>
                        </div>
                        
                        <div className="input-group mb-1">
                            <div className="input-group-text">
                                <input className="form-check-input mt-0" type="radio" name="cuotas" aria-label="Radio button for following text input" value="6"/>
                            </div>
                            <input type="text" className="form-control" aria-label="Text input with radio button" placeholder="6 Cuotas sin interés" readOnly="readOnly" disabled/>
                        </div>
                        <div className="input-group">
                            <div className="input-group-text">
                                <input className="form-check-input mt-0" type="radio" name="cuotas" aria-label="Radio button for following text input" value="12"/>
                            </div>
                            <input type="text" className="form-control" aria-label="Text input with radio button" placeholder="12 Cuotas sin interés" readOnly="readOnly" disabled/>
                        </div>
                    </div>
                <p>El monto a pagar por los servicios totales es de <strong>${costoTotal}</strong></p>
            </div>
            </Modal.Body>
            <Modal.Footer>
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleClose}>Cancelar Compra</button>
                <button type="submit" className="btn btn-outline-secondary" name="comprar" id="realizarCompra" value="Submit" onClick={realizarCompra}>Realizar Compra</button>
            </Modal.Footer>
        {/* {</form>} */}
        </Modal>
    </>
  )
}

export default ModalConfirmarCompra