import React from 'react';
import Order from './Order';
import { collection, getDocs, getFirestore, query, where, doc } from "firebase/firestore";
import { useUsuario } from './UserContext';
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

const Orders = () => {
    const db = getFirestore();
    const { usuario } = useUsuario();
    const isLoggedIn = !(usuario === null);
    const [compras, setCompras] = useState([])
    const [comprasListadas, setComprasListadas] = useState(false)

    useEffect(() => {
        (isLoggedIn && !comprasListadas) && getAllOrdersFromUser()
    }, [compras, isLoggedIn])
    
    const getAllOrdersFromUser = async () => {
        // Primero busco el usuario en mi base de datos en base a su ID, en este caso su nombre
        const usuarioDoc = doc(db, "usuarios", usuario.nombreUsuario);
        // Luego creo una query filtrando por la referencia del usuario para obtener todos las compras del usuario
        const comprasRef = query(
            collection(db, "compras"),
            where("usuario", "==", usuarioDoc)
        );
        var listadoDB;
        await getDocs(comprasRef).then((compra)=>{
            listadoDB = compra.docs.map((doc)=>({id: doc.id, ...doc.data()}))
          })
        setCompras(listadoDB)
        setComprasListadas(true);
    }



    return (
        <div className="perfilContainer">
            <div className="perfilDiv">
                {(!isLoggedIn) && <Navigate to="/CoderhouseReact/"/> }
                {compras.map((compra)=>(
                    <div>
                        <Order key={compra.id} compra={compra}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Orders