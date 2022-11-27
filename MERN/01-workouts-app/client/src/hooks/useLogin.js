import { useState } from "react"
import { logInUser } from "../services/auth.service";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
    const { dispatch } = useAuthContext();
    const [ isLoading, setIsLoading ] = useState( false );
    const [ error, setError ] = useState( null );

    const loginUser = async ( email, password ) => {
        // EMPEZAMOS INICIALIZANDO ESTO ASI 
        setIsLoading( true );
        setError( null );
        
        const response = await logInUser( email, password );
        const responseJson = await response.json();

        if ( !response.ok ) {
            setIsLoading( false );
            setError( responseJson.error ) ;
            console.log( responseJson.error );
        } else {
            setIsLoading( false );
            setError( null );
            localStorage.setItem( 'user', JSON.stringify( responseJson.data ) );
            dispatch({
                type: 'SIGN_IN',
                payload: responseJson.data,
            });
        }
    }

    return {
        loginUser, isLoading, error
    }
}
