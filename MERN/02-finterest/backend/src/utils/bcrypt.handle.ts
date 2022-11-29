import { hash, compare, genSalt } from 'bcryptjs';

export const hashedPassword = async ( password: string ): Promise<string> => {
    const salt = await genSalt( 10 );
    const hashedPass = await hash( password, salt );
    return hashedPass;
}

export const verifyPassword = async ( password: string, hashedPassword: string ): Promise<boolean> => {
    const isMatch: boolean = await compare( password, hashedPassword );
    return isMatch;
}