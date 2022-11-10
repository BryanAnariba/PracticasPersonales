import { Request, Response } from "express";
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
        return res.status( 201 ).json({ status: 201, data: 'Register Works' });
    } catch ( error ) {
        return handleHttp( 500, res, 'HTTP_REGISTER_USER_ERROR', error );
    }
}

export {
    loginUser,
    registerUser,
};