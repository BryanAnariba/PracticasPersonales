import { regiterUser } from '../../services/auth.service';
import { useAuthContext } from './useAuthContext';
import { useState } from 'react';
import { IAuthState } from '../../interfaces/IAuthState';



export const useRegister = () => {
    const { dispatch } = useAuthContext();
    const [ error, setError ] = useState({});
    const [ isLoading, setIsLoading ] = useState<boolean>( false );

    const register = async ( firstName: string, lastName: string, userEmail: string, userPassword: string ) => {
        const response = await regiterUser({ firstName, lastName, userEmail, userPassword });
        const jsonResponse = await response.json();
        console.log( jsonResponse );
    }

    return {
        register,

    }
}
