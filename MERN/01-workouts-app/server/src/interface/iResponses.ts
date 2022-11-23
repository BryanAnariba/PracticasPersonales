import { IUser } from './IUser';
export interface IOkResponse {
    status: number | string;
    data: IData;
}

interface IData {
    user: string | IUser | IUser[],
    token?: string;
}

export interface IFailedResponse {
    message: string;
    error: string | any;
}