import { UserModel } from "../models/User"
import { IUser } from '../interface/IUser';

export const existsUser = async ( email: string ): Promise<boolean> => {
    const user  = await UserModel.findOne({ email: email });
    if ( !user ) {
        return false;
    } else {
        return true;
    }
}

export const createUser = async ( user: IUser ): Promise<IUser> => {
    return await UserModel.create( user );
}

export const existsUseByEmail = async ( email: string ): Promise<IUser | null> => {
    return await UserModel.findOne({ email: email });
}