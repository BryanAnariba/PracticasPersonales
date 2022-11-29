import { Request, Response } from "express";
import { IPerson } from "../interfaces/IPerson";
import { IUser } from "../interfaces/IUser";
import { registerNewUser } from "../services/user.service";
import { handleHttp } from "../utils/error.handle";

export const register = async ( req: Request, res: Response ): Promise<Response> => {
    const { firstName, lastName, avatar = '' }: IPerson = req.body;
    const {  userEmail, userPassword }: IUser = req.body;
    let person: IPerson = {
        firstName,
        lastName,
        avatar,
        userData: {
            userEmail,
            userPassword,
        },
        personStatus: {
            statusId: 1
        }
    }
    const jsonResponse = await registerNewUser( person );
    try {
        return res.status( 201 ).json({ data: 'Created' });
    } catch ( error ) {
        return handleHttp( 500, res, 'HTTP_REGISTER_USER_ERROR', error );
    }
}