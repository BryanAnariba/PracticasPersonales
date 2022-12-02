export interface IAuthState extends IAuthData {
    status: number;
}

export interface IAuthData {
    data: IUserState
}

export interface IUserState {
    token: string,
    userEmail: string;
}

