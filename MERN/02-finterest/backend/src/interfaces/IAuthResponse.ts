export interface IAuthResponse {
    status: number;
    data: IData;
}

interface IData {
    userEmail: string;
    token: string;
}