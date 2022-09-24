import React from 'react';
import usuarioImagen from '../../images/usuario.svg';
import passwordImagen from '../../images/password.svg';
import mapImagen from '../../images/map.svg';
import emailImagen from '../../images/email.svg';
import dniImagen from '../../images/dni.svg';
import { useState } from 'react';
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import { Usuario } from "../imports/classes";
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [nombreUsuario, setNombreUsuario] = useState('');
    const [password, setPassword] = useState('');
    const [direccion, setDireccion] = useState('');
    const [email, setEmail] = useState('');
    const [dni, setDni] = useState('');
    let navigate = useNavigate();

    const handleChangeNombreUsuario = (e) => {
        setNombreUsuario(e.target.value);
    }
    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    }
    const handleChangeDireccion = (e) => {
        setDireccion(e.target.value);
    }
    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    }
    const handleChangeDni = (e) => {
        setDni(e.target.value.slice(0,e.target.maxLength));
    }

    const registrarUsuario = async (e) => {

        let inputElements = document.querySelectorAll("input");
        let allInputsFilled = true;
        inputElements.forEach(function(input) {
            if(input.value === ""){
                allInputsFilled = false;
            }
            if(input.id === "dni" && input.value.toString().length !== input.maxLength){
                allInputsFilled = false;
            }
            if(input.id === "email"){
                //validacion de email
                let lastAtPos = input.value.lastIndexOf("@");
                let lastDotPos = input.value.lastIndexOf(".");
                if (!(
                      lastAtPos < lastDotPos &&
                      lastAtPos > 0 &&
                      lastDotPos > 2 &&
                      input.value.toString().length - lastDotPos > 2 &&
                      lastDotPos - lastAtPos > 1
                    )) {
                        allInputsFilled = false;
                  }
            }

        });

        if (allInputsFilled){
            const db = getFirestore();

            //revisa si ya hay un usuario registrado previamente con ese DNI
            const usuarioDoc = doc(db, "usuarios", nombreUsuario);
            const usuarioSnap = await getDoc(usuarioDoc);
           
            if(!usuarioSnap.data()){
                const usuario = new Usuario (nombreUsuario, password, direccion, email, dni);
    
                await setDoc(doc(db, "usuarios", nombreUsuario), usuario).then(alert("Usuario creado correctamente"));
                let path = `/CoderhouseReact/`; 
                navigate(path);
            }
            else{
                alert("El Nombre de Usuario ya fue registrado");
            }
        }
        
    }


  return (
    <main>
        <div id="registerDiv">
            <h2>Registrarse</h2>
            <form onSubmit={(e)=>{e.preventDefault()}}>
                <div id="container">
                    <label htmlFor="usuario" className="registerLabelForm">
                        <img src={usuarioImagen} alt=""/>
                        <span>Nombre de usuario</span>
                        <input type="text" id="usuario" value={nombreUsuario} onChange={handleChangeNombreUsuario} required/>
                    </label>
                    <label htmlFor="contrasenia" className="registerLabelForm">
                        <img src={passwordImagen} alt=""/>
                        <span>Contraseña</span>
                        <input type="password" id="contrasenia" value={password} onChange={handleChangePassword} required/>
                    </label>
                    <label htmlFor="direccion" className="registerLabelForm">
                        <img src={mapImagen} alt=""/>
                        <span>Direccion</span>
                        <input type="text" id="direccion" value={direccion} onChange={handleChangeDireccion} required/>
                    </label>
                    <label htmlFor="email" className="registerLabelForm">
                        <img src={emailImagen} alt=""/>
                        <span>Direccion de correo</span>
                        <input type="email" id="email" value={email} onChange={handleChangeEmail} required/>
                    </label>
                    <label htmlFor="dni" className="registerLabelForm">
                        <img src={dniImagen} alt=""/>
                        <span>DNI o Pasaporte</span>
                        <input type="number" id="dni" value={dni} onChange={handleChangeDni} minLength={8} maxLength={8} required/>
                    </label>
                    <button type="submit" className="btn btn-outline-dark" id="botonRegisterForm" onClick={registrarUsuario}>Registrarse</button>
                </div>
            </form>
        </div>
    </main>
  )
}

export default Register