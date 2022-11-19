import React from 'react';
import Order from './Order';
import { collection, getDocs, getFirestore, query, where, doc } from "firebase/firestore";
import { useUsuario } from './UserContext';
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

const Orders = () => {
    const { usuario } = useUsuario();
    const isLoggedIn = !(usuario === null);
    const [compras, setCompras] = useState([])
    const [comprasListadas, setComprasListadas] = useState(false)

    
    useEffect(() => {
        const db = getFirestore();
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
        if (isLoggedIn && !comprasListadas){
            getAllOrdersFromUser()
        }
    }, [compras, isLoggedIn, comprasListadas, usuario])


    return (
        <div className="ordenesContainer">
            <div className="perfilDiv">
                {(!isLoggedIn) && <Navigate to="/ecommerce-frontend/"/> }
                {compras.map((compra, index, array)=>{
                    if(index+1 === array.length){
                        console.log(index+1)
                        console.log(array.length)
                        return <div>
                            <Order key={compra.id} compra={compra}/>
                            <br />
                        </div>
                    }
                    else{
                        return <div>
                            <Order key={compra.id} compra={compra}/>
                            <hr/>
                        </div>

                    }
                    

                }

                
                )}
            </div>
        </div>
    )
}

                        // <div>
                        //     <Order key={compra.id} compra={compra}/>
                        //     <hr/>
                        // </div>


export default Orders