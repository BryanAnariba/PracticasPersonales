import { AuthContext } from "../context/AuthContext";
import { useContext } from 'react';

export const useAuthContext = () => {
    const context = useContext( AuthContext ); // retorna el valor del context creado en este caso el estado y acciones del distpach
    if ( !context ) {
        throw new Error( `Este context debe usarse como provider` );
    }
    return context;
}