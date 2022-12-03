import { useState } from 'react';

import { regiterUser } from '../../services/auth.service';

import { useAuthContext } from './useAuthContext';

import { IPerson } from '../../interfaces/IPerson';

export const useRegister = () => {
    const { dispatch } = useAuthContext();
    const [ error, setError ] = useState<string>( '' );
    const [ isLoading, setIsLoading ] = useState<boolean>( false );
    const [ status, setStatus ] = useState<number>(0);

    const register = async ( personData: IPerson ) => {
        // ESPERANDO A QUE RESPONDA PARA ESTO ES ESTE LOADING
        setIsLoading( true ); 

        const response = await regiterUser( personData );
        const jsonResponse = await response.json();
        setStatus( response.status );

        console.log(jsonResponse.message);
        
        if ( !response.ok ) {
            //console.error( 'uy: ', jsonResponse);
            setError( jsonResponse.message );
            
        } else {
            setError( prevError => 'User registered Successfully!' );
            //console.log( jsonResponse );
        }
        
        // YA SE EJECUTO LA PROMESA O PROMESAS
        setIsLoading( false );
    }

    return {
        register,
        isLoading,
        error,
        status,
    }
}
