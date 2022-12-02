import { IUserState } from "../interfaces/IAuthState";
import { AuthActions } from "../types/AuthActions";

export const authReducer = ( state: IUserState, action: AuthActions  ) => {
    switch ( action.type ) {
        case '@register':
            return {
                ...state,
                userEmail: action.payload.userEmail, 
                token: action.payload.token,
            }
        case '@login':
            return {
                userEmail: action.payload.userEmail, 
                token: action.payload.token,
            }
        default: 
            return state;
    };
};