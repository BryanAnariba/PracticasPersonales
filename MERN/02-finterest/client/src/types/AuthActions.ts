import { IUserState } from "../interfaces/IAuthState";

export type AuthActions = 
    | { type: '@register', payload: { userEmail: '', token: '' } }
    | { type: '@login', payload: IUserState }
    | { type: '@logOut', payload: { userEmail: '', token: '' } }