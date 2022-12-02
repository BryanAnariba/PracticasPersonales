import jwt from 'jsonwebtoken';
const JWT_SECRET: string = process.env.SECRET_KEY || 's3cr3t.01';

export const genJWT = ( userId: number | undefined ): string => {
    return jwt.sign({ uid: userId }, `${ JWT_SECRET }`, { expiresIn: '1h' });
}

export const verifyJWTToken = ( token: string ) => {
    const isOk = jwt.verify( token, JWT_SECRET );
    return isOk;
}