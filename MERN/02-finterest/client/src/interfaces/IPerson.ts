import { IUser } from "./IUser";

export interface IPerson extends IUser {
    uid?: string;
    firstName: string;
    lastName: string;
    avatar?: string;
    createdAt?: Date;
    updatedAt?: Date; 
}