import { useState } from 'react';

import { regiterUser } from '../../services/auth.service';

import { useAuthContext } from './useAuthContext';

import { IPerson } from '../../interfaces/IPerson';

export const useRegister = () => {
    const { dispatch } = useAuthContext();
    const [ error, setError ] = useState<string>( '' );
    const [ isLoading, setIsLoading ] = useState<boolean>( false );

    const register = async ( personData: IPerson ) => {
        // ESPERANDO A QUE RESPONDA PARA ESTO ES ESTE LOADING
        setIsLoading( true ); 

        const response = await regiterUser( personData );
        const jsonResponse = await response.json();
        console.log( 'Resultado Promesa Register: ', jsonResponse.message);
        
        if ( !response.ok ) {
            setError( jsonResponse.message );
            
        } else {
            // SI TODO VA BIEN HACEMOS EL DISPATCH y guardamos data del usuario en local storage
            localStorage.setItem( 'userData', JSON.stringify( jsonResponse.data ) )
            dispatch({
                type: '@login',
                payload: jsonResponse.data,
            });
            setError( '' );
        }
        // YA SE EJECUTO LA PROMESA O PROMESAS
        setIsLoading( false );
    }

    return {
        register,
        isLoading,
        error,
    }
}
