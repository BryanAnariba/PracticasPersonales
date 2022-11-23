import { Request, Response } from "express";
import { IUser } from '../interface/IUser';
import { createUser, existsUser, existsUseByEmail } from '../services/user.service';
import { encryptPassword, isMatchInPassword } from "../utils/bcryp.handle";
import { handleHttp } from "../utils/error.handle";
import validator from 'validator';
import { IOkResponse } from "../interface/iResponses";
import { generateToken } from "../utils/jwt.handle";
import { IAuth } from "../interface/IAuth";

const loginUser = async ( req: Request, res: Response ): Promise<IOkResponse | Response> => {
    let { email, password }: IAuth = req.body;
    try {
        if ( !email.trim() || !password.trim() ) {
            return handleHttp( 400, res, 'HTTP_LOGIN_USER_ERROR', 'Invalid Access: please checked your Email and Password' );
        }

        const user = await existsUseByEmail( email );
        // CHECK EMAIL AND PASSWORD
        if ( !user ) {
            return handleHttp( 400, res, 'HTTP_LOGIN_USER_ERROR', 'Invalid Credentials' );
        }
        const isMatch: boolean = await isMatchInPassword( password, user.password );
        if ( !isMatch ) {
            return handleHttp( 400, res, 'HTTP_LOGIN_USER_ERROR', 'Invalid Credentials' );
        }

        //  SI LLEGO AQUI GENERAR EL TOKEN
        const token: string = generateToken( `${  user._id  }` );
        return res.status( 200 ).json({ status: 200, data: { user: user.email, token: token } });
    } catch ( error ) {
        return handleHttp( 500, res, 'HTTP_LOGIN_USER_ERROR', error );
    }
}

const registerUser = async ( req: Request, res: Response ): Promise<IOkResponse | Response> => {
    let { email, password, firstName, lastName }: IUser = req.body;
    try {
        // VALIDATIONS
        if ( !email.trim() || !password.trim() || !firstName.trim() || !lastName.trim() ) {
            //throw new Error( `Required Fields: Email, Password, FirstName, LastName` );
            return handleHttp( 400, res, 'HTTP_REGISTER_USER_ERROR', `Required Fields: Email, Password, FirstName, LastName` );
        }

        if ( !validator.isEmail( email ) ) {
            //throw new Error( `Email is not valid` );
            return handleHttp( 400, res, 'HTTP_REGISTER_USER_ERROR', `Email is not valid` );
        }

        if ( !validator.isStrongPassword( password ) ) {
            //throw new Error( `Password is not strong` )
            return handleHttp( 400, res, 'HTTP_REGISTER_USER_ERROR', `Password is not strong` );
        }

        const exist: boolean = await existsUser( email );
        if ( exist ) {
            return handleHttp( 400, res, 'HTTP_REGISTER_USER_ERROR', 'Email already exists' );
        } else {
            password = await encryptPassword( password );
            const userServiceResponse: IUser = await createUser({ email, password, firstName, lastName });
            // CREATE TOKEN
            const token: string = generateToken( `${  userServiceResponse._id  }` );
            return res.status( 201 ).json({ status: 201, data: { user: userServiceResponse.email, token: token }});
        }
    } catch ( error ) {
        return handleHttp( 500, res, 'HTTP_REGISTER_USER_ERROR', error );
    }
}

export {
    loginUser,
    registerUser,
};