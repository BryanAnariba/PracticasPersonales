import { IStatus } from "./IStatus";
import { IUser } from "./IUser";

export interface IPerson {
    PersonId?: number;
    firstName: string;
    lastName: string;
    avatar: string;
    createdAt?: Date;
    updatedAt?: Date
    personStatus?: IStatus;
    userData: IUser;
}