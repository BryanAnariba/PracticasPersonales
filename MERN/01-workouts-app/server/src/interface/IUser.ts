import { IAuth } from "./IAuth";

export interface IUser extends IAuth {
    _id?: string;
    firstName: string;
    lastName: string;
    createdAt?: Date;
    updatedAt?: Date;
}