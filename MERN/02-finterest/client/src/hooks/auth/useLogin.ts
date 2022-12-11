import { useState } from 'react';
import { IUser } from '../../interfaces/IUser';
import { logInUser } from '../../services/auth.service';

import { useAuthContext } from './useAuthContext';

export const useLogin = () => {
    const { dispatch } = useAuthContext();
    const [ error, setError ] = useState<string>( '' );
    const [ isLoading, setIsLoading ] = useState<boolean>( false );

    const login = async ( userData: IUser ) => {
        setIsLoading( true );
        const response = await logInUser( userData );
        const jsonResponse = await response.json();
        console.log( 'Resultado Promesa Login: ', jsonResponse);
        if ( !response.ok ) {
            setError( jsonResponse.message );
        } else {
            localStorage.setItem( 'userData', JSON.stringify( jsonResponse.data ) );
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
        error,
        isLoading,
        login,
    }
}
