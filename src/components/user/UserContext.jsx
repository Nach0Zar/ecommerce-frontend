import React from 'react';
import { useContext, useState } from 'react';

const UsuarioContext = React.createContext([]);

  const useUsuario = () => {
    return useContext(UsuarioContext);
  }

  const UsuarioProvider = ({defaultValue = null, children}) => {
    
    const [usuario, setUsuario] = useState(defaultValue);

    const loguearUser = (usuario) => {
        setUsuario(usuario);
      }

      const desloguearUser = () => {
        setUsuario([]);
      }

    const context = {
      usuario,
      loguearUser,
      desloguearUser
    }
    
  return (
    <UsuarioContext.Provider value={context}>
      {children}
    </UsuarioContext.Provider>
  )

}
export {useUsuario, UsuarioProvider}