import { createContext, useReducer } from 'react';

import { IUserState } from '../interfaces/IAuthState';
import { authReducer } from '../reducer/authReducer';
import { AuthActions } from '../types/AuthActions';

const initialState: IUserState = {
    userEmail: '',
    token: ''
};

interface IProps {
    children: JSX.Element | JSX.Element[];
}

export type AuthContextProps = {
    authState: IUserState,
    dispatch: React.Dispatch<AuthActions>
}

export const AuthContext = createContext<AuthContextProps>( {} as AuthContextProps );

export const AuthContextProvider = ( { children }: IProps ) => {
    const [ authState, dispatch ] = useReducer( authReducer, initialState );
    console.log( `AuthContext-authState: `, authState );
    return (
        <AuthContext.Provider  value={  { authState, dispatch } }>
            {
                children
            }
        </AuthContext.Provider>
    )
}