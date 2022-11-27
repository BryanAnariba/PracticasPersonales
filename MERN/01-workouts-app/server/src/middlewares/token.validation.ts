import { NextFunction, Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import jwt from 'jsonwebtoken';
import { IRequestExtend } from "../interface/IRequestExtend";
import { findUserById } from "../services/user.service";

export const checkJWT = async ( req: IRequestExtend, res: Response, next: NextFunction ) => {
    
    const auth: string = req.headers.authorization || '';
    if ( !auth || auth === '' ) {
        return handleHttp( 401, res, 'HTTP_AUTHORIZATION_ERROR', 'Authorization Token Required' );    
    } 
    // Bearer 1132132 => 1132132
    const token = auth.split( ' ' )[1]; // or pop()

    try {
        const user = jwt.verify( token, `${process.env.SECRET_KEY}` ) as { uid: string };
        //console.log(user.uid);
        req.user = await findUserById( user.uid );
        next();
    } catch( err ) {
        console.log(err);
        return handleHttp( 401, res, 'HTTP_AUTHORIZATION_ERROR', err );
        
    }
}