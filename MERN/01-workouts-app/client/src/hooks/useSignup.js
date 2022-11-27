import { useState } from 'react';
import { loginUser } from '../services/auth.service';
import { useAuthContext } from './useAuthContext';

export const useSignup = () => {
    const { dispatch } = useAuthContext();
    const [ error, setError ] = useState( null );
    const [ isLoading, setIsLoading ] = useState( false );

    const login = async ( firstName, lastName, email, password ) => {
        // EMPEZAMOS INICIALIZANDO ESTO ASI 
        setIsLoading( true );
        setError( null );

        const response = await loginUser( firstName, lastName, email, password );
        const responseJson = await response.json();

        if ( !response.ok ) {
            setIsLoading( false );
            setError( responseJson.error );
            console.error( error );
        } else {
            //console.log(responseJson);
            // SAVE IN LOCALSTORAGE
            localStorage.setItem( 'userData: ', JSON.stringify( responseJson.data ) );

            // UPATE CONTEXT
            dispatch({
                type: 'SIGN_IN',
                payload: responseJson.data
            });

            setIsLoading( false );
            setError( null );
        }
    }

    return { login, isLoading, error }
}

