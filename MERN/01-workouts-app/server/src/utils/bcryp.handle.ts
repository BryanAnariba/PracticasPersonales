import { compare, genSalt, hash } from "bcryptjs"

export const encryptPassword = async ( password: string ): Promise<string> => {
    const salt = await genSalt( 10 );
    const encryptedPassword: string = await hash( password, salt );
    return encryptedPassword;
}

export const isMatchInPassword = async ( password: string, hashedPassword: string ): Promise<boolean> => {
    return await compare( password, hashedPassword );
}