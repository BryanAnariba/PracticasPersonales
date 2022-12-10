import { NextFunction, Response } from "express";
import { IRequestExtend } from "../interfaces/IRequestExtend";
import { handleHttp } from '../utils/error.handle';
import { verifyJWTToken } from "../utils/jwt.handle";

export const CheckJWT = ( req: IRequestExtend, res: Response, next: NextFunction ) => {
    try {
        const accessToken: string = `${ req.headers.authorization }`;
        const onlyToken: string = `${ accessToken.split( ' ' ).pop() }`; // Bearer 123123 => 123123
        const isUser = verifyJWTToken( onlyToken ) as { uid: number };
        //console.log(isUser);
        
        if ( !isUser ) {
            return handleHttp( 401, res, 'HTTP_UNAUTHORIZED_ERROR', { data: 'Unauthorized Request: You Should a valid token' });
        } else {
            req.user = isUser;
            next();
        }
    } catch ( error:any ) {
        //console.log(error.message);
        const tokenVerificationErrors: any = {
            "invalid signature": "Jwt Firm is not valid",
            "jwt expired": "Jwt was expired",
            "invalid token": "Jwt Is not valid",
            "No Bearer": "Incomplete Token",
            "jwt malformed": "Bad Token or not token",
        }
        return handleHttp( 401, res, 'HTTP_UNAUTHORIZED_ERROR', tokenVerificationErrors[ error.message ] );
    }
}