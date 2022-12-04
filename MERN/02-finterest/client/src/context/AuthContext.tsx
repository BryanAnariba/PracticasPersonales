import { createContext, useReducer } from 'react';

import { IUserState } from '../interfaces/IAuthState';
import { authReducer } from '../reducer/authReducer';
import { AuthActions } from '../types/AuthActions';

const initialState: IUserState = {
    userEmail: '',
    token: ''
}

interface IProps {
    children: JSX.Element | JSX.Element[];
}

export type AuthContextProps = {
    user: IUserState,
    dispatch: React.Dispatch<AuthActions>
}

export const AuthContext = createContext<AuthContextProps>( {} as AuthContextProps );

export const AuthContextProvider = ( { children }: IProps ) => {
    const [ user, dispatch ] = useReducer( authReducer, initialState);
    console.log( `AuthContext-authState: `, user );
    return (
        <AuthContext.Provider  value={  { user, dispatch } }>
            {
                children
            }
        </AuthContext.Provider>
    )
}