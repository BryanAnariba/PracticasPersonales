import { Request, Response } from "express";
import { IPerson } from "../interfaces/IPerson";
import { IUser } from '../interfaces/IUser';
import { registerNewUser, existsUserById } from "../services/user.service";
import { handleHttp } from "../utils/error.handle";
import validator from "validator";
import { verifyPassword } from "../utils/bcrypt.handle";
import { genJWT } from "../utils/jwt.handle";

export const register = async ( req: Request, res: Response ): Promise<Response> => {
    const { firstName, lastName, avatar = '' }: IPerson = req.body;
    const {  userEmail, userPassword }: IUser = req.body;

    // VALIDATIONS
    if ( (!firstName || firstName.trim() === '') || ( !lastName || lastName.trim() === '' ) ) {
        return handleHttp( 400, res, 'HTTP_REGISTER_USER_ERROR', 'Required Fields: First Name, Last Name, Avatar' )
    }

    // Correct Email
    if ( !validator.isEmail( userEmail ) ) {
        return handleHttp( 400, res, 'HTTP_REGISTER_USER_ERROR', 'Incorrect Email' );
    }

    if ( !validator.isStrongPassword( userPassword ) ) { // @Asd.456
        return handleHttp( 400, res, 'HTTP_REGISTER_USER_ERROR', 'Password is not Strong' );
    }

    try {
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
        const userFound: IUser = await existsUserById( person.userData.userEmail );
        if ( !userFound ) {
            const jsonResponse = await registerNewUser( person );
            return res.status( 201 ).json({ status: 201, data: { userEmail: userEmail, token: jsonResponse } });
        } else {
            return handleHttp( 400, res, 'HTTP_REGISTER_USER_ERROR', `The user ${ person.userData.userEmail } already exists.` )
        }
    } catch ( error ) {
        return handleHttp( 500, res, 'HTTP_REGISTER_USER_ERROR', error );
    }
}

export const login = async ( req: Request, res: Response ): Promise<Response> => {
    try {
        const { userEmail, userPassword }: IUser = req.body;
        if ( (!userEmail || userEmail.trim() === '') || (!userPassword || userPassword.trim() === '' ) ) {
            return handleHttp( 400, res, 'HTTP_LOGIN_USER_ERROR', 'Required Fields: Email, Password.' )
        }

        if ( !validator.isEmail( userEmail ) ) {
            return handleHttp( 400, res, 'HTTP_LOGIN_USER_ERROR', 'Incorrect Email.' );
        }

        const userFound: IUser = await existsUserById( userEmail );
        //  VERIFICAMOS POR CORREO, SI NO ENTRO AQUI EL CORREO ES INVALIDO
        if ( !userFound ) {
            return handleHttp( 401, res, 'HTTP_LOGIN_USER_ERROR', 'Invalid Credentials: Email' );
        }

        // VERIFICAMOS EL PASSWORD
        const isMatch: boolean = await verifyPassword( userPassword, userFound.userPassword );
        if ( !isMatch ) {
            return handleHttp( 401, res, 'HTTP_LOGIN_USER_ERROR', 'Invalid Credentials: Password' );
        }

        //  GENERAMOS EL TOKEN
        //console.log(userFound);
        const token: string = await genJWT( userFound.personId );

        // RESPONDEMOS
        return res.status( 200 ).json({ status: 200, data: { userEmail, token } });

    } catch ( error ) {
        return handleHttp( 500, res, 'HTTP_LOGIN_USER_ERROR', error );
    }
}