import { useEffect }, React from 'react';
import { createContext, useReducer } from 'react';
import { authReducer } from '../reducers/authReducer';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [ state, dispatch ] = useReducer( authReducer, {
        user: null,
    });

    // VERIFICAMOS SI HAY ALGO EN LOCALSTORAGE SI AY ALGO ES QUE ESTA LOGUEADO
    useEffect(() => {
        const user = JSON.parse( localStorage.getItem( 'user' ) );
        if ( user ) {
            dispatch({
                type: 'SIGN_IN',
                payload: user
            });
        }
    }, []);

    console.log( `User Context Data: `,  state );
    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {
                children
            }
        </AuthContext.Provider>
    )
}