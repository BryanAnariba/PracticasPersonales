import { sign, verify } from 'jsonwebtoken';

export const generateToken = ( userId: string ): string => {
    return sign({ userId }, `${ process.env.SECRET_KEY }`, { expiresIn: '1h' } );
}
