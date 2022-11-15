import { Request, Response } from "express";
import { IUser } from "../interface/IUser";
import { createUser, existsUser } from "../services/user.service";
import { encryptPassword } from "../utils/bcryp.handle";
import { handleHttp } from "../utils/error.handle";

const loginUser = async ( req: Request, res: Response ): Promise<Response> => {
    try {
        return res.status( 200 ).json({ status: 200, data: 'Login Works' });
    } catch ( error ) {
        return handleHttp( 500, res, 'HTTP_LOGIN_USER_ERROR', error );
    }
}

const registerUser = async ( req: Request, res: Response ): Promise<Response> => {
    try {
        let { email, password, firstName, lastName }: IUser = req.body;
        const exist = await existsUser( email );
        if ( exist ) {
            return handleHttp( 400, res, 'HTTP_REGISTER_USER_ERROR', 'Email already exists' );
        } else {
            password = await encryptPassword( password );
            const userServiceResponse = await createUser({ email, password, firstName, lastName });
            return res.status( 201 ).json({ status: 201, data: userServiceResponse });
        }
    } catch ( error ) {
        return handleHttp( 500, res, 'HTTP_REGISTER_USER_ERROR', error );
    }
}

export {
    loginUser,
    registerUser,
};